var Font = require('../models/font');

exports.renderFonts = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);
        res.render('admin', {
            fonts: fonts
        });

    });

};

exports.renderFont = function (req, res) {

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);
        res.render('admin-edit', {
            font: font
        });

    });

};


exports.createFont = function (req, res) {

    var font = new Font(req.body);

    font.save(function (err) {

        if (err) res.send(err);
        res.json({ message: 'Font created!' });

    });

};


exports.updateFont = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        for (prop in req.body) {
            font[prop] = req.body[prop];
        }

        font.save(function (err) {

            if (err) res.send(err);
            res.json({ message: 'Font updated!' });

        });

    });

};

exports.deleteFont = function (req, res) {

    Font.remove({

        slug: req.params.font_slug

    }, function (err,font) {

        if (err) res.send(err);
        res.json({ message: 'Font deleted!' });

    });

};