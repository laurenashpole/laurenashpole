import fs from 'fs';
import path from 'path';
import thumbnail from 'node-thumbnail';
import { del, put } from '@vercel/blob';
import { FONT_FILE_FIELDS } from '../constants/fontFileFields';
import { addTaggedFont, removeTaggedFont } from './tags';
import Font from '../models/font';

export async function findAll () {
  return await (await Font()).find().limit(100).sort({ name: 'asc' }).exec();
}

export async function findActive (limit, customSort) {
  return await (await Font()).find({ active: true }).limit(limit || 100).sort(customSort || { name: 'asc' }).exec();
}

export async function findBySlug (slug) {
  return await (await Font()).findOne({ slug });
}

export async function findById (id) {
  return await (await Font()).findOne({ _id: id });
}

export async function findByIds (ids) {
  return await (await Font()).find({ active: true, _id: { $in: ids }}).sort({ name: 'asc' });
}

export async function create (req) {
  const slug = getSlug(req.body);
  const fileParams = await getFileParams(req.files);
  const font = await new (await Font())({ ...req.body, ...fileParams, slug });
  await updateTags(Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags], font);
  return await font.save();
}

export async function update (req) {
  const font = await (await Font()).findById(req.body._id);
  const fontJSON = JSON.parse(JSON.stringify(font));
  const params = getParams(req.body, fontJSON);
  const fileParams = await getFileParams(req.files, fontJSON);
  await updateTags(Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags], font);
  return await font.updateOne({ ...params, ...fileParams });
}

export async function remove (req) {
  const font = await (await Font()).findById(req.body.id);
  await deleteFiles(font);
  return await font.remove();
}

function getParams (params, font) {
  const slug = getSlug(params);
  const commercial_file = getFontFileOptions(params, font, 'commercial_file');
  const personal_file = getFontFileOptions(params, font, 'personal_file');
  return { ...params, slug, commercial_file, personal_file };
}

function getSlug (params) {
  return params.name.replace(/&|'/g, '').replace(/\s+/g, '-').toLowerCase();
}

function getFontFileOptions (params, font, type) {
  return Object.keys(font[type]).reduce((obj, option) => {
    obj[option] = {...font[type][option], is_included: params[type] ? !!params[type][option] : false };
    return obj;
  }, {});
}

async function getFileParams (files, font) {
  const imageFiles = files.filter((file) => (
    ['main', 'list', 'list_mobile', 'pinterest'].includes(file.fieldname)
  ));

  const galleryFiles = files.filter((file) => (
    file.fieldname === 'gallery'
  ));

  const fontFiles = files.filter((file) => (
    ['personal', 'commercial'].includes(file.fieldname)
  ));

  const previewFiles = files.filter((file) => (
    file.fieldname === 'font_files'
  ));

  const imageFileParams = await getSingleFileParams(imageFiles, font, 'images/', 'images');
  const galleryFileParams = await getMultipleFileParams(galleryFiles, font, 'images/', 'images', 'gallery');
  const fontFileParams = await getSingleFileParams(fontFiles, font, 'fonts/', 'font_files');
  const previewFileParams = await getMultipleFileParams(previewFiles, font, 'previews/', 'previews', 'font_files');

  return {
    images: {
      ...((font || {}).images || {}),
      ...imageFileParams,
      ...galleryFileParams
    },
    font_files: {
      ...((font || {}).font_files || {}),
      ...fontFileParams
    },
    previews: {
      ...((font || {}).previews || {}),
      ...previewFileParams
    }
  };
}

async function getSingleFileParams (files, font, directory, key) {
  return await files.reduce(async (obj, file) => {
    if (font && font[key] && font[key][file.fieldname]) {
      await del(font[key][file.fieldname]);
    }

    const uploadedFile = await uploadFileVercel(file, directory, false);
    (await obj)[file.fieldname] = uploadedFile;
    return obj;
  }, {});
}

async function getMultipleFileParams (files, font, directory, key, fieldname) {
  if (!files.length) {
    return {
      [fieldname]: (((font || {})[key] || {})[fieldname] || [])
    };
  }

  if (font && font[key] && font[key][fieldname]) {
    font[key][fieldname].forEach(async (file) => {
      await del(file);
    });
  }

  return await files.reduce(async (obj, file) => {
    const uploadedFile = await uploadFileVercel(file, directory, false);
    obj[fieldname] = obj[fieldname] || [];
    (await obj)[fieldname].push(uploadedFile);
    return obj;
  }, {});
}

async function uploadFileVercel (file, directory, hashName) {
  const name = hashName ? getHashedName(file.originalname) : file.originalname;

  const response = await put(`${directory}${name}`, file.buffer, {
    access: 'public',
    multipart: true,
    addRandomSuffix: false
  });

  return response.pathname;
}

async function deleteFiles (font) {
  Object.keys(FONT_FILE_FIELDS).forEach((key) => {
    FONT_FILE_FIELDS[key].map(async (field) => {
      if (font[key] && Array.isArray(font[key][field])) {
        font[key][field].forEach(async (file) => {
          await del(file);
        });
      } else {
        if (font[key] && font[key][field]) {
          await del(font[key][field]);
        }
      }
    });
  });
}

function getDirectory (mimetype, baseDir) {
  let directory;

  if (mimetype.indexOf('image') !== -1) {
    directory = 'images';
  }  else if (mimetype.indexOf('zip') !== -1) {
    directory = 'fonts';
  } else if (mimetype.indexOf('ttf') !== -1 || mimetype.indexOf('woff') !== -1) {
    directory = 'previews';
  }

  return `${baseDir}${directory}/`;
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
