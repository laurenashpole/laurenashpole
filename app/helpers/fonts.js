var Font = require('../models/font');
var fs = require('fs');
var path = require('path');
var async = require('async');
var thumbnail = require('node-thumbnail').thumb;

exports.findAll = function () {
    return new Promise (function (resolve, reject) {
        var response = {
            success: false
        };

        Font.find().sort({ name: 'asc' }).exec(function (err, fonts) {
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
    return new Promise (function (resolve, reject) {
        var response = {
            success: false
        };

        Font.findById(id, function (err, font) {
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
    return new Promise (function (resolve, reject) {
        var response = {
            success: false
        };

        Font.findOne({slug: slug}, function (err, font) {
            if (err) reject(err);

            console.log(font);

            if (font) {
                response.success = true;
                response.font = font;
            }

            resolve(response);
        });
    });
};

exports.deleteFont = function (req, font) {
    return new Promise (function (resolve, reject) {
        var response = {
            success: false
        };

        _deleteFiles(font, function (err) {
            if (err) reject(err);

            font.remove(function (err) {
                if (err) reject(err);

                response.success = true;

                resolve(response);
            });
        });
    });
};

exports.updateFont = function (req, font, isNew) {
    return new Promise (function (resolve, reject) {
        var response = {
            success: false
        };

        // var imageCollectionCleared = false;

        if (!isNew) {
            _setFontProperties(req, font);
        }

        _uploadFiles(req, font, isNew, function (err) {
            if (err) reject(err);

            font.save(function (err) {
                if (err) reject(err);

                response.success = true;
                response.font = font;

                resolve(response);
            });
        });

        // async.each(req.files, function (file, callback) {
        //     var mimetype = file.mimetype;
        //     var directory = _getDirectoryByMimetype(mimetype);

        //     if (mimetype.indexOf('zip') !== -1) {
        //         file.originalname = _getZipName(file.originalname);
        //     }

        //     if (!isNew) {
        //         if (font[file.fieldname]) {
        //             if (file.fieldname === 'image_collection') {
        //                 if (!imageCollectionCleared) {
        //                     _deleteImageCollections(font, directory, file.fieldname);
        //                     imageCollectionCleared = true;
        //                 }
        //             } else {
        //                 _deleteFile(font[file.fieldname], directory);
        //             }
        //         }
        //     }

        //     _setFileValues(font, file);
        //     _uploadFile(font, file, directory, callback);

        // }, function (err) {
        //     if (err) reject(err);

        //     font.save(function (err) {
        //         if (err) reject(err);

        //         response.success = true;
        //         response.font = font;

        //         resolve(response);
        //     });
        // });
    });
};

var _getDirectoryByMimetype = function (mimetype) {
    var directory;

    if (mimetype.indexOf('image') !== -1) {
        directory = './public/images/fonts/';
    } else if (mimetype.indexOf('css') !== -1) {
        directory = './public/stylesheets/fonts/';
    }  else if (mimetype.indexOf('zip') !== -1) {
        directory = './public/downloads/';
    }

    return directory;
};

var _getDirectoryByFile = function (file) {
    var directory;

    if (file === 'images') {
        directory = './public/images/fonts/';
    } else if (file === 'css') {
        directory = './public/stylesheets/fonts/';
    } else if (file === 'fonts') {
        directory = './public/downloads/';
    }

    return directory;
};

var _getZipName = function (originalName) {
    var timestamp = Math.floor(Date.now() / 10000000);
    var nameArray = originalName.split('.');
    var zipName = nameArray[0] + timestamp + '.' + nameArray[1];

    return zipName;
};

var _setFileValues = function (font, file) {
    if (file.fieldname === 'image_collection') {
        font[file.fieldname].push(file.originalname);
    } else {
        font[file.fieldname] = file.originalname;
    }
};

var _setFontProperties = function (req, font) {
    for (var prop in req.body) {
        if (prop === 'commercial_file' || prop === 'personal_file') {
            for (var fontFile in font[prop]) {
                if (font[prop][fontFile]) {
                    if (req.body[prop][fontFile]) {
                        font[prop][fontFile]['is_included'] = true;
                    } else {
                        font[prop][fontFile]['is_included'] = false;
                    }
                }
            }
        } else {
            font[prop] = req.body[prop];
        }
    }
};

var _uploadFile = function (font, file, directory, callback) {
    fs.rename(file.path, path.resolve(directory, file.originalname), function (err) {
        if (err) res.send(err);

        if (file.fieldname === 'image_collection') {
            _createThumbnails(font, file, directory);
        }

        callback();
    });
};

var _uploadFiles = function (req, font, isNew, finalCallback) {
    var imageCollectionCleared = false;

    async.each(req.files, function (file, callback) {
        var mimetype = file.mimetype;
        var directory = _getDirectoryByMimetype(mimetype);

        if (mimetype.indexOf('zip') !== -1) {
            file.originalname = _getZipName(file.originalname);
        }

        if (!isNew) {
            if (font[file.fieldname]) {
                if (file.fieldname === 'image_collection') {
                    if (!imageCollectionCleared) {
                        _resetImageCollections(font, directory, file.fieldname);
                        imageCollectionCleared = true;
                    }
                } else {
                    _deleteFile(font[file.fieldname], directory);
                }
            }
        }

        _setFileValues(font, file);
        _uploadFile(font, file, directory, callback);

    }, finalCallback);
};

var _deleteFile = function (file, directory) {
    fs.exists(path.resolve(directory, file), function (exists) {
        if (exists) {
            fs.unlink(path.resolve(directory, file), function (err) {
                if (err) res.send(err);
            });
        }
    });
};

var _deleteFiles = function (font, finalCallback) {
    var files = {
        images: [
            font.image_collection,
            font.image_collection_thumbnails,
            font.image,
            font.image_retina,
            font.image_main,
            font.image_main_retina,
            font.image_thumbnail,
            font.image_thumbnail_retina
        ],
        css: [
            font.css_file
        ],
        fonts:[
            font.personal_font_file,
            font.commercial_font_file
        ]
    };

    async.forEachOf(files, function (fileGroup, fileType, callback) {
        var directory = _getDirectoryByFile(fileType);

        fileGroup.forEach(function (file) {

            if (Array.isArray(file)) {
                file.forEach(function (subfile) {
                    if (subfile) {
                        _deleteFile(subfile, directory);
                    }
                });
            } else {
                if (file) {
                    _deleteFile(file, directory);
                }
            }
        });

        callback();
    }, finalCallback);
};

var _createThumbnails = function (font, file, directory) {
    var suffix = '-thumb';
    var nameArray = file.originalname.split('.');
    var thumbName = nameArray[0] + suffix + '.' + nameArray[1];

    thumbnail({
        source: directory + file.originalname,
        destination: directory,
        suffix: suffix,
        width: 360
    });

    font['image_collection_thumbnails'].push(thumbName);
};

var _resetImageCollections = function (font, directory, fieldName) {
    font['image_collection'].forEach(function (imageFile) {
        _deleteFile(imageFile, directory);
    });

    if (font['image_collection_thumbnails']) {
        font['image_collection_thumbnails'].forEach(function (imageFile) {
            _deleteFile(imageFile, directory);
        });
    }

    font['image_collection'] = [];
    font['image_collection_thumbnails'] = [];
};