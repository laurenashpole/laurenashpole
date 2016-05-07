var Font = require('../../models/font');

exports.renderAll = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);
        res.render('admin/fonts/index', {
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

    res.render('admin/fonts/create');

};

exports.create = function (req, res) {

    var font = new Font(req.body);

    font.slug = font.generateSlug(font.name);

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

        font.slug = font.generateSlug(font.name);

        font.save(function (err) {

            if (err) res.send(err);
            res.redirect('/admin/fonts');

        });

    });

};

exports.delete = function (req, res) {

    Font.remove({

        _id: req.params.font_id

    }, function (err,font) {

        if (err) res.send(err);
        res.redirect('/admin/fonts');

    });

};