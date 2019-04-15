let Font = require('../models/font');
let fs = require('fs');
let path = require('path');
let async = require('async');
let thumbnail = require('node-thumbnail').thumb;

exports.findAll = function () {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    Font.find().sort({ name: 'asc' }).exec((err, fonts) => {
      if (err) reject(err);

      if (fonts) {
        response.success = true;
        response.fonts = fonts;
      }

      resolve(response);
    });
  });
};

exports.findById = function (id) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    Font.findById(id, (err, font) => {
      if (err) reject(err);

      if (font) {
        response.success = true;
        response.font = font;
      }

      resolve(response);
    });
  });
};

exports.findBySlug = function (slug) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    Font.findOne({slug: slug}, (err, font) => {
      if (err) reject(err);

      if (font) {
        response.success = true;
        response.font = font;
      }

      resolve(response);
    });
  });
};

exports.deleteFont = function (req, res, font) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    _deleteFiles(res, font, (err) => {
      if (err) reject(err);

      font.remove((err) => {
        if (err) reject(err);

        response.success = true;
        response.font = font;
        resolve(response);
      });
    });
  });
};

exports.updateFont = function (req, res, font, isNew) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    if (!isNew) {
      _setFontProperties(req, font);
    }

    _uploadFiles(req, res, font, isNew, (err) => {
      if (err) reject(err);

      font.save((err) => {
        if (err) reject(err);

        response.success = true;
        response.font = font;
        resolve(response);
      });
    });
  });
};

let _getDirectoryByMimetype = function (mimetype) {
  let directory;

  if (mimetype.indexOf('image') !== -1) {
    directory = './public/images/fonts/';
  } else if (mimetype.indexOf('css') !== -1) {
    directory = './public/css/fonts/';
  }  else if (mimetype.indexOf('zip') !== -1) {
    directory = './public/downloads/fonts/';
  }

  return directory;
};

let _getDirectoryByFile = function (file) {
  let directory;

  if (file === 'images') {
    directory = './public/images/fonts/';
  } else if (file === 'css') {
    directory = './public/css/fonts/';
  } else if (file === 'fonts') {
    directory = './public/downloads/fonts/';
  }

  return directory;
};

let _getHashedName = function (originalName) {
  let timestamp = Math.floor(Date.now() / 10000000);
  let nameArray = originalName.split('.');
  let hashedName = nameArray[0] + timestamp + '.' + nameArray[1];

  return hashedName;
};

let _setFileValues = function (font, file) {
  if (file.fieldname === 'image_collection') {
    font[file.fieldname].push(file.originalname);
  } else {
    font[file.fieldname] = file.originalname;
  }
};

let _setFontProperties = function (req, font) {
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

let _uploadFile = function (res, font, file, directory, callback) {
  fs.rename(file.path, path.resolve(directory, file.originalname), (err) => {
    if (err) res.send(err);

    if (file.fieldname === 'image_collection') {
      _createThumbnails(font, file, directory);
    }

    callback();
  });
};

let _uploadFiles = function (req, res, font, isNew, finalCallback) {
  let imageCollectionCleared = false;

  async.each(req.files, (file, callback) => {
    let mimetype = file.mimetype;
    let directory = _getDirectoryByMimetype(mimetype);

    file.originalname = _getHashedName(file.originalname);

    if (!isNew) {
      if (font[file.fieldname]) {
        if (file.fieldname === 'image_collection') {
          if (!imageCollectionCleared) {
            _resetImageCollections(res, font, directory, file.fieldname);
            imageCollectionCleared = true;
          }
        } else {
          _deleteFile(res, font[file.fieldname], directory);
        }
      }
    }

    _setFileValues(font, file);
    _uploadFile(res, font, file, directory, callback);
  }, finalCallback);
};

let _deleteFile = function (res, file, directory) {
  fs.exists(path.resolve(directory, file), (exists) => {
    if (exists) {
      fs.unlink(path.resolve(directory, file), (err) => {
        if (err) res.send(err);
      });
    }
  });
};

let _deleteFiles = function (res, font, finalCallback) {
  let files = {
    images: [
      font.image_collection,
      font.image_collection_thumbnails,
      font.image,
      font.image_main,
      font.image_main_retina
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
    let directory = _getDirectoryByFile(fileType);

    fileGroup.forEach((file) => {
      if (Array.isArray(file)) {
        file.forEach((subfile) => {
          if (subfile) {
            _deleteFile(res, subfile, directory);
          }
        });
      } else {
        if (file) {
          _deleteFile(res, file, directory);
        }
      }
    });

    callback();
  }, finalCallback);
};

let _createThumbnails = function (font, file, directory) {
  let suffix = '-thumb';
  let nameArray = file.originalname.split('.');
  let thumbName = nameArray[0] + suffix + '.' + nameArray[1];

  thumbnail({
    source: directory + file.originalname,
    destination: directory,
    suffix: suffix,
    width: 360
  });

  font['image_collection_thumbnails'].push(thumbName);
};

let _resetImageCollections = function (res, font, directory, fieldName) {
  font['image_collection'].forEach((imageFile) => {
    _deleteFile(res, imageFile, directory);
  });

  if (font['image_collection_thumbnails']) {
    font['image_collection_thumbnails'].forEach((imageFile) => {
      _deleteFile(res, imageFile, directory);
    });
  }

  font['image_collection'] = [];
  font['image_collection_thumbnails'] = [];
};