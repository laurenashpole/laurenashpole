import fs from 'fs';
import path from 'path';
import thumbnail from 'node-thumbnail';
import { FONT_FILE_FIELDS } from '../constants/fontFileFields';
import { addTaggedFont, removeTaggedFont } from './tags';
import Font from '../models/font';

const UPLOADS_DIRECTORY = './public/uploads/';

export async function findAll () {
  return await (await Font()).find().sort({ name: 'asc' }).exec();
}

export async function findBySlug (slug) {
  return await (await Font()).findOne({ slug });
}

export async function findById (id) {
  return await (await Font()).findOne({ _id: id });
}

export async function findByIds (ids) {
  return await (await Font()).find({ _id: { $in: ids }}).sort({ name: 'asc' });
}

export async function create (req) {
  const slug = getSlug(req.body);
  const files = await getFiles(req.files);
  const font = await new (await Font())({ ...req.body, ...files, slug });
  await updateTags(Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags], font);
  return await font.save();
}

export async function update (req) {
  const font = await (await Font()).findById(req.body._id);
  const fontJSON = JSON.parse(JSON.stringify(font));
  const params = getParams(req.body, fontJSON);
  const files = await getFiles(req.files, fontJSON);
  await updateTags(Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags], font);
  return await font.updateOne({ ...params, ...files });
}

export async function remove (req) {
  const font = await (await Font()).findById(req.body.id);
  await clearFiles(font);
  return await font.remove();
}

function getParams (params, font) {
  const slug = getSlug(params);
  const commercial_file = getFileOptions(params, font, 'commercial_file');
  const personal_file = getFileOptions(params, font, 'personal_file');
  return { ...params, slug, commercial_file, personal_file };
}

function getSlug (params) {
  return params.name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
}

function getFileOptions (params, font, type) {
  return Object.keys(font[type]).reduce((obj, option) => {
    obj[option] = {...font[type][option], is_included: params[type] ? !!params[type][option] : false };
    return obj;
  }, {});
}

async function getFiles (files, font) {
  const fileParams = await files.reduce(async (obj, file) => {
    if (file.fieldname === 'image_collection' || file.fieldname === 'preview_files') {
      return obj;
    }

    const directory = getDirectory(file.mimetype);

    if (font && font[file.fieldname]) {
      await deleteFile(font[file.fieldname], directory);
    }

    const uploadedFile = await uploadFile(file, directory);

    (await obj)[file.fieldname] = uploadedFile;
    return obj;
  }, {});

  const imageCollectionFiles = await getImageCollectionFiles(files, font);
  const previewFiles = await getPreviewFiles(files, font);
  return { ...fileParams, ...imageCollectionFiles, ...previewFiles };
}

async function getImageCollectionFiles (files, font) {
  const imageCollectionFiles = files.filter((file) => file.fieldname === 'image_collection');

  if (!imageCollectionFiles.length) {
    return font && font.image_collection ? font.image_collection : [];
  }

  if (font) {
    font.image_collection.concat(font.image_collection_thumbnails).forEach(async (file) => {
      await deleteFile(file, `${UPLOADS_DIRECTORY}images/`);
    });
  }

  return await imageCollectionFiles.reduce(async (obj, file) => {
    const uploadedFile = await uploadFile(file, `${UPLOADS_DIRECTORY}images/`);
    const thumbnail = await createThumbnail(uploadedFile, `${UPLOADS_DIRECTORY}images/`);

    obj.image_collection = obj.image_collection || [];
    obj.image_collection_thumbnails = obj.image_collection_thumbnails || [];
    (await obj).image_collection.push(uploadedFile);
    (await obj).image_collection_thumbnails.push(thumbnail);

    return obj;
  }, {});
}

async function getPreviewFiles (files, font) {
  const previewFiles = files.filter((file) => file.fieldname === 'preview_files');

  if (!previewFiles.length) {
    return font && font.preview_files ? font.preview_files : [];
  }

  if (font) {
    font.preview_files.forEach(async (file) => {
      await deleteFile(file, `${UPLOADS_DIRECTORY}previews/`);
    });
  }

  return await previewFiles.reduce(async (obj, file) => {
    const uploadedFile = await uploadFile(file, `${UPLOADS_DIRECTORY}previews/`, true);
    obj.preview_files = obj.preview_files || [];
    (await obj).image_collection.push(uploadedFile);
    return obj;
  }, {});
}

async function uploadFile (file, directory, useOriginalName) {
  const name = useOriginalName ? file.originalname : getHashedName(file.originalname);
  await fs.renameSync(file.path, path.resolve(directory, name));
  return name;
}

async function deleteFile (file, directory) {
  const exists = await fs.existsSync(path.resolve(directory, file));

  if (exists) {
    await fs.unlinkSync(path.resolve(directory, file));
  }
}

async function clearFiles (font) {
  Object.keys(FONT_FILE_FIELDS).forEach((key) => {
    FONT_FILE_FIELDS[key].map(async (field) => {
      if (Array.isArray(font[field])) {
        font[field].forEach(async (file) => {
          await deleteFile(file, `${UPLOADS_DIRECTORY}${key}/`);
        });
      } else {
        if (font[field]) {
          await deleteFile(font[field], `${UPLOADS_DIRECTORY}${key}/`);
        }
      }
    });
  });
}

async function createThumbnail (originalname, directory) {
  const suffix = '-thumb';
  const nameArray = originalname.split('.');
  const name = `${nameArray[0]}${suffix}.${nameArray[1]}`;

  await thumbnail.thumb({
    source: directory + originalname,
    destination: directory,
    suffix: suffix,
    width: 360
  });

  return name;
}

function getDirectory (mimetype) {
  let directory;

  if (mimetype.indexOf('image') !== -1) {
    directory = 'images';
  } else if (mimetype.indexOf('css') !== -1) {
    directory = 'css';
  }  else if (mimetype.indexOf('zip') !== -1) {
    directory = 'fonts';
  } else if (mimetype.indexOf('ttf') !== -1 || mimetype.indexOf('woff') !== -1) {
    directory = 'previews';
  }

  return `${UPLOADS_DIRECTORY}${directory}/`;
}

function getHashedName (name) {
  const timestamp = Math.floor(Date.now() / 10000000);
  const nameArray = name.split('.');
  return `${nameArray[0]}${timestamp}.${nameArray[1]}`;
}

async function updateTags (tags, font) {
  const addedTags = tags.filter((id) => font.tags.indexOf(id) === -1);
  const removedTags = font.tags.filter((id) => tags.indexOf(id) !== -1);

  addedTags.forEach(async (id) => await addTaggedFont(id, font._id));
  removedTags.forEach(async (id) => await removeTaggedFont(id, font._id));
}