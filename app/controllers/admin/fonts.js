var Font = require('../../models/font');

var fs = require('fs');
var path = require('path');
var async = require('async');

exports.renderAll = function (req, res) {

    Font.find().sort({ name: 'asc' }).exec(function (err, fonts) {

        if (err) res.send(err);

        res.render('admin/fonts/index', {
            title: 'Admin',
            fonts: fonts
        });

    });

};

exports.renderEdit = function (req, res) {

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);

        if (!font) {
            var notFound = new Error('Oops!');
            notFound.status = 404;
            return next(notFound);
        }

        res.render('admin/fonts/edit', {
            title: 'Admin',
            font: font
        });

    });

};

exports.renderCreate = function (req, res) {

    res.render('admin/fonts/create', {
        title: 'Admin'
    });

};

exports.create = function (req, res) {

    var font = new Font(req.body);

    async.each(req.files, function (file, callback) {

        var directory;
        var filePath = file.path;
        var mimetype = file.mimetype;

        if (mimetype.indexOf('image') !== -1) {

            directory = './public/images/fonts/';

        } else if (mimetype.indexOf('css') !== -1) {

            directory = './public/stylesheets/fonts/';

        }  else if (mimetype.indexOf('zip') !== -1) {

            directory = './public/downloads/';

            var timestamp = Math.floor(Date.now() / 10000000);
            var nameArray = file.originalname.split('.');
            file.originalname = nameArray[0] + timestamp + '.' + nameArray[1];

        }

        font[file.fieldname] = file.originalname;

        fs.rename(filePath, path.resolve(directory, file.originalname), function (err) {

            if (err) res.send(err);
            callback();

        });

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

        for (prop in req.body) {
            font[prop] = req.body[prop];
        }

        async.each(req.files, function (file, callback) {

            var directory;
            var filePath = file.path;
            var mimetype = file.mimetype;

            if (mimetype.indexOf('image') !== -1) {

                directory = './public/images/fonts/';

            } else if (mimetype.indexOf('css') !== -1) {

                directory = './public/stylesheets/fonts/';

            }  else if (mimetype.indexOf('zip') !== -1) {

                directory = './public/downloads/';

                var timestamp = Math.floor(Date.now() / 10000000);
                var nameArray = file.originalname.split('.');
                file.originalname = nameArray[0] + timestamp + '.' + nameArray[1];

            }

            if (font[file.fieldname]) {

                fs.exists(path.resolve(directory, font[file.fieldname]), function (exists) {

                    if (exists) {

                        fs.unlink(path.resolve(directory, font[file.fieldname]), function (err) {
                            if (err) res.send(err);
                        });

                    }

                });

            }

            font[file.fieldname] = file.originalname;

            fs.rename(filePath, path.resolve(directory, file.originalname), function (err) {

                if (err) res.send(err);
                callback();

            });

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

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);

        var files = {
            images: [
                font.image,
                font.image_retina,
                font.image_mobile,
                font.image_mobile_retina,
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

            var directory;

            if (fileType === 'images') {

                directory = './public/images/fonts/';

            } else if (fileType === 'css') {

                directory = './public/stylesheets/fonts/';

            } else if (fileType === 'fonts') {

                directory = './public/downloads/';

            }

            fileGroup.forEach(function (file) {

                if (file) {

                    fs.exists(path.resolve(directory, file), function (exists) {

                        if (exists) {

                            fs.unlink(path.resolve(directory, file), function (err) {
                                if (err) res.send(err);
                            });
                        }

                    });

                }

            });

            callback();

        }, function (err) {

            if (err) res.send(err);

            font.remove(function (err) {

                if (err) res.send(err);
                res.redirect('/admin/fonts');

            });

        });

    });

};