var Font = require('../models/font');
var fs = require('fs');
var path = require('path');
var async = require('async');
var thumbnail = require('node-thumbnail').thumb;

exports.findAll = function (req, res) {
    var response = {
        success: false
    };

    Font.find().sort({ name: 'asc' }).exec(function (err, fonts) {

        if (!err) {
            response.success = true;
            response.fonts = fonts;
        }

        res.json(response);
    });

};

exports.create = function (req, res) {
    var font = new Font(req.body);

    async.each(req.files, function (file, callback) {
        var mimetype = file.mimetype;
        var directory = getDirectoryByMimetype(mimetype);

        if (mimetype.indexOf('zip') !== -1) {
            file.originalname = getZipName(file.originalname);
        }

        setFileValues(font, file);
        uploadFile(font, file, directory, callback);

    }, function (err) {
        if (err) res.send(err);

        font.save(function (err) {
            if (err) res.send(err);

            res.redirect('/admin/fonts');
        });

    });

};

exports.update = function (req, res) {

    Font.findById(req.params.font_id, function (err, font) {
        if (err) res.send(err);

        var imageCollectionCleared = false;

        setFontProperties(req, font);

        async.each(req.files, function (file, callback) {
            var mimetype = file.mimetype;
            var directory = getDirectoryByMimetype(mimetype);

            if (mimetype.indexOf('zip') !== -1) {
                file.originalname = getZipName(file.originalname);
            }

            if (font[file.fieldname]) {
                if (file.fieldname === 'image_collection') {
                    if (!imageCollectionCleared) {
                        font[file.fieldname].forEach(function (imageFile) {
                            deleteFile(imageFile, directory);
                        });

                        if (font['image_collection_thumbnails']) {
                            font['image_collection_thumbnails'].forEach(function (imageFile) {
                                deleteFile(imageFile, directory);
                            });
                        }

                        font[file.fieldname] = [];
                        font['image_collection_thumbnails'] = [];
                        imageCollectionCleared = true;
                    }
                } else {
                    deleteFile(font[file.fieldname], directory);
                }
            }

            setFileValues(font, file);
            uploadFile(font, file, directory, callback);

        }, function (err) {
            if (err) res.send(err);

            font.save(function (err) {
                if (err) res.send(err);

                res.redirect('/admin/fonts');
            });

        });

    });

};

exports.delete = function (req, res) {
    var response = {
        success: false
    };

    Font.findById(req.params.font_id, function (err, font) {
        if (err) res.send(err);

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
            var directory = getDirectoryByFile(fileType);

            fileGroup.forEach(function (file) {

                if (Array.isArray(file)) {
                    file.forEach(function (subfile) {
                        if (subfile) {
                            deleteFile(subfile, directory);
                        }
                    });
                } else {
                    if (file) {
                        deleteFile(file, directory);
                    }
                }
            });

            callback();

        }, function (err) {
            if (err) res.send(err);

            font.remove(function (err) {
                if (err) res.send(err);

                response.success = true;
                res.json(response);
            });

        });

    });

};

var getDirectoryByMimetype = function (mimetype) {
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

var getDirectoryByFile = function (file) {
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

var getZipName = function (originalName) {
    var timestamp = Math.floor(Date.now() / 10000000);
    var nameArray = originalName.split('.');
    var zipName = nameArray[0] + timestamp + '.' + nameArray[1];

    return zipName;
};

var setFileValues = function (font, file) {
    if (file.fieldname === 'image_collection') {
        font[file.fieldname].push(file.originalname);
    } else {
        font[file.fieldname] = file.originalname;
    }
};

var setFontProperties = function (req, font) {
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

var uploadFile = function (font, file, directory, callback) {
    fs.rename(file.path, path.resolve(directory, file.originalname), function (err) {
        if (err) res.send(err);

        if (file.fieldname === 'image_collection') {
            createThumbnails(font, file, directory);
        }

        callback();
    });
};

var createThumbnails = function (font, file, directory) {
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

var deleteFile = function (file, directory) {
    fs.exists(path.resolve(directory, file), function (exists) {
        if (exists) {
            fs.unlink(path.resolve(directory, file), function (err) {
                if (err) res.send(err);
            });
        }
    });
};