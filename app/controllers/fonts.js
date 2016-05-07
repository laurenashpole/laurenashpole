var Font = require('../models/font');

exports.renderFonts = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);

        res.render('fonts', {
            fonts: fonts
        });

    });

};

exports.renderFont = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);
        res.render('font', {
            font_page: true,
            font: font
        });

    });

};