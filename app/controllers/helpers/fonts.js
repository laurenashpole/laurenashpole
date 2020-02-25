const Font = require('../../models/font');
const fs = require('fs');
const path = require('path');
const async = require('async');
const thumbnail = require('node-thumbnail').thumb;

exports.findAll = function () {
  return new Promise ((resolve, reject) => {
    Font.find().sort({ name: 'asc' }).exec((err, fonts) => {
      if (err) reject(err);

      const response = fonts.length ? { fonts: fonts } : {};
      resolve(response);
    });
  });
};

exports.findById = function (id) {
  return new Promise ((resolve, reject) => {
    Font.findById(id, (err, font) => {
      if (err) reject(err);

      const response = font ? { font: font } : {};
      resolve(response);
    });
  });
};

exports.findBySlug = function (slug) {
  return new Promise ((resolve, reject) => {
    Font.findOne({slug: slug}, (err, font) => {
      if (err) reject(err);

      const response = font ? { font: font } : {};
      resolve(response);
    });
  });
};

exports.deleteFont = function (req, res, font) {
  return new Promise ((resolve, reject) => {
    deleteFiles(res, font, (err) => {
      if (err) reject(err);

      font.remove((err) => {
        if (err) reject(err);

        resolve({ font: font });
      });
    });
  });
};

exports.updateFont = function (req, res, font, isNew) {
  return new Promise ((resolve, reject) => {
    if (!isNew) {
      setFontProperties(req, font);
    }

    uploadFiles(req, res, font, isNew, (err) => {
      if (err) reject(err);

      font.save((err) => {
        if (err) reject(err);

        resolve({ font: font });
      });
    });
  });
};

const deleteFiles = function (res, font, finalCallback) {
  const files = {
    images: [
      font.image,
      font.image_collection,
      font.image_collection_thumbnails
    ],
    css: [
      font.css_file
    ],
    fonts:[
      font.personal_font_file,
      font.commercial_font_file
    ]
  };

  async.forEachOf(files, (fileGroup, fileType, callback) => {
    const directory = `./public/uploads/${fileType}/`;

    fileGroup.forEach((file) => {
      if (Array.isArray(file)) {
        file.forEach((subfile) => {
          if (subfile) {
            deleteFile(res, subfile, directory);
          }
        });
      } else {
        if (file) {
          deleteFile(res, file, directory);
        }
      }
    });

    callback();
  }, finalCallback);
};

const uploadFiles = function (req, res, font, isNew, finalCallback) {
  let imageCollectionCleared = false;

  async.each(req.files, (file, callback) => {
    const directory = getDirectoryByMimetype(file.mimetype);
    file.originalname = getHashedName(file.originalname);

    if (!isNew) {
      if (font[file.fieldname]) {
        if (file.fieldname === 'image_collection') {
          if (!imageCollectionCleared) {
            resetImageCollections(res, font, directory, file.fieldname);
            imageCollectionCleared = true;
          }
        } else {
          deleteFile(res, font[file.fieldname], directory);
        }
      }
    }

    setFileValues(font, file);
    uploadFile(res, font, file, directory, callback);
  }, finalCallback);
};

const setFontProperties = function (req, font) {
  for (let prop in font) {
    if (prop === 'commercial_file' || prop === 'personal_file') {
      for (let fontFile in font[prop]) {
        if (req.body[prop] && req.body[prop][fontFile]) {
          font[prop][fontFile]['is_included'] = true;
        } else {
          font[prop][fontFile]['is_included'] = false;
        }
      }
    } else {
      if (req.body[prop]) {
        font[prop] = req.body[prop];
      }
    }
  }
};

const deleteFile = function (res, file, directory) {
  fs.exists(path.resolve(directory, file), (exists) => {
    if (exists) {
      fs.unlink(path.resolve(directory, file), (err) => {
        if (err) res.send(err);
      });
    }
  });
};

const uploadFile = function (res, font, file, directory, callback) {
  fs.rename(file.path, path.resolve(directory, file.originalname), (err) => {
    if (err) res.send(err);

    if (file.fieldname === 'image_collection') {
      createThumbnails(font, file, directory);
    }

    callback();
  });
};

const getDirectoryByMimetype = function (mimetype) {
  let directory;

  if (mimetype.indexOf('image') !== -1) {
    directory = './public/uploads/images/';
  } else if (mimetype.indexOf('css') !== -1) {
    directory = './public/uploads/css/';
  }  else if (mimetype.indexOf('zip') !== -1) {
    directory = './public/uploads/fonts/';
  }

  return directory;
};

const getHashedName = function (originalName) {
  const timestamp = Math.floor(Date.now() / 10000000);
  const nameArray = originalName.split('.');
  const hashedName = nameArray[0] + timestamp + '.' + nameArray[1];

  return hashedName;
};

const resetImageCollections = function (res, font, directory, fieldName) {
  font['image_collection'].forEach((imageFile) => {
    deleteFile(res, imageFile, directory);
  });

  if (font['image_collection_thumbnails'].length) {
    font['image_collection_thumbnails'].forEach((imageFile) => {
      deleteFile(res, imageFile, directory);
    });
  }

  font['image_collection'] = [];
  font['image_collection_thumbnails'] = [];
};

const setFileValues = function (font, file) {
  if (file.fieldname === 'image_collection') {
    font[file.fieldname].push(file.originalname);
  } else {
    font[file.fieldname] = file.originalname;
  }
};

const createThumbnails = function (font, file, directory) {
  const suffix = '-thumb';
  const nameArray = file.originalname.split('.');
  const thumbName = nameArray[0] + suffix + '.' + nameArray[1];

  thumbnail({
    source: directory + file.originalname,
    destination: directory,
    suffix: suffix,
    width: 360
  });

  font['image_collection_thumbnails'].push(thumbName);
};