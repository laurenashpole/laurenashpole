var Font = require('../models/font');

exports.renderFonts = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);

        var page = {
            fonts: true,
            title: 'Fonts'
        }

        res.render('fonts', {
            page: page,
            fonts: fonts
        });

    });

};

exports.renderFont = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        var page = {
            fonts: true,
            has_buttons: true,
            title: font.name + ' - Fonts'
        }

        res.render('font', {
            page: page,
            font: font
        });

    });

};