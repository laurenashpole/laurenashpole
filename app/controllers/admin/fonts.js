var fs = require('fs');
var path = require('path');
var Font = require('../../models/font');

exports.renderAll = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);

        var page = {
            all: true,
            title: 'Admin'
        }

        res.render('admin/fonts/index', {
            page: page,
            fonts: fonts
        });

    });

};

exports.renderEdit = function (req, res) {

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);
        res.render('admin/fonts/edit', {
            font: font
        });

    });

};

exports.renderCreate = function (req, res) {

    var page = {
        create: true,
        title: 'Admin'
    }

    res.render('admin/fonts/create', {
        page: page
    });

};

exports.create = function (req, res) {

    var font = new Font(req.body);

    // font.slug = font.generateSlug(font.name);

    req.files.forEach(function (file) {

        var targetPath;
        var filePath = file.path;
        var mimetype = file.mimetype;

        if (mimetype.indexOf('image') !== -1) {

            var targetPath = path.resolve('./public/images/fonts/', file.originalname);

        } else if (mimetype.indexOf('css') !== -1) {

            var targetPath = path.resolve('./public/stylesheets/fonts/', file.originalname);

        }  else if (mimetype.indexOf('zip') !== -1) {

            var targetPath = path.resolve('./public/downloads/', file.originalname);

        }

        fs.rename(filePath, targetPath, function (err) {
            if (err) res.send(err);
        });

        font[file.fieldname] = file.originalname;

    });

    font.save(function (err) {

        if (err) res.send(err);
        res.redirect('/admin/fonts');

    });

};


exports.update = function (req, res) {

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);

        for (prop in req.body) {
            font[prop] = req.body[prop];
        }

        // font.slug = font.generateSlug(font.name);

        req.files.forEach(function (file) {

            var targetPath;
            var filePath = file.path;
            var mimetype = file.mimetype;

            fs.unlink(path.resolve('./public/images/', font[file.fieldname]), function (err) {
                if (err) res.send(err);
            });

            if (mimetype.indexOf('image') !== -1) {

                var targetPath = path.resolve('./public/images/fonts/', file.originalname);

            } else if (mimetype.indexOf('css') !== -1) {

                var targetPath = path.resolve('./public/stylesheets/fonts/', file.originalname);

            }  else if (mimetype.indexOf('zip') !== -1) {

                var targetPath = path.resolve('./public/downloads/', file.originalname);

            }

            fs.rename(filePath, targetPath, function (err) {
                if (err) res.send(err);
            });

            font[file.fieldname] = file.originalname;

        });

        font.save(function (err) {

            if (err) res.send(err);
            res.redirect('/admin/fonts');

        });

    });

};

exports.delete = function (req, res) {

    Font.remove({

        _id: req.params.font_id

    }, function (err, font) {

        var files = [
            font.image,
            font.image_retina,
            font.image_thumbnail,
            font.image_thumbnail_retina,
            font.css_file,
            font.personal_font_file,
            font.commercial_font_file
        ];

        // This won't currently work since not all files are in images folder
        files.forEach(function (file) {

            if (file) {

                fs.unlink(path.resolve('./public/images/', file), function (err) {
                    if (err) res.send(err);
                });

            }

        });

        if (err) res.send(err);
        res.redirect('/admin/fonts');

    });

};