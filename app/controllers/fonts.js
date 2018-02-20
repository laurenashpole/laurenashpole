var path = require('path');
var fs = require('fs');
var fontHelper = require('../helpers/fonts');
var paymentHelper = require('../helpers/payments');

exports.renderFonts = function (req, res) {
    fontHelper.findAll()
        .then (function (data) {
            _setBackgroundColors(data.fonts);

            res.render('fonts/fonts', {
                title: 'Fonts',
                fonts: data.fonts
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.licensing = function (req, res) {
    res.render('fonts/licensing', {
        title: 'Licensing - Fonts'
    });
};

exports.eula = function (req, res) {
    res.render('fonts/eula', {
        title: 'End-User Licensing Agreement - Fonts'
    });
};

exports.renderFont = function (req, res, next) {
    fontHelper.findBySlug(req.params.font_slug)
        .then(function (data) {
            if (data.success) {
                var font = data.font;

                if (font.alternate_style) {
                    font.alternate_styles = font.alternate_style.split(', ');
                }

                var template = 'fonts/font';

                if (/\/amp\//.test(req.path)) {
                    if (font.css_file) {
                        var filePath = path.resolve('./public/css/fonts/', font.css_file);
                        var cssString = fs.readFileSync(filePath);

                        if (cssString) {
                            font.css_string = cssString.toString();
                        }
                    }

                    template = 'amp/font.amp.html';
                }

                res.render(template, {
                    title: font.name + ' - Fonts',
                    description: 'Download the ' + font.name + ' font free for personal use or buy a license for all your commercial use needs.',
                    font: font
                });
            } else {
                var notFound = new Error('Oops!');
                notFound.status = 404;
                return next(notFound);
            }
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.createPayment = function (req, res) {
    fontHelper.findBySlug(req.params.font_slug)
        .then(function (data) {
            if (data.success) {
                return paymentHelper.create(data.font)
            }
        })
        .then(function (data) {
            if (data.success) {
                if (/\/amp\//.test(req.path)) {
                    res.setHeader('Content-type', 'application/json');
                    res.setHeader('Access-Control-Allow-Credentials', true);
                    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
                    res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
                    res.setHeader('AMP-Redirect-To', data.redirectUrl);
                    res.setHeader('Access-Control-Expose-Headers', 'AMP-Redirect-To, AMP-Access-Control-Allow-Source-Origin');
                    res.json(data);
                } else {
                    res.redirect(data.redirectUrl);
                }
            }
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.confirm = function (req, res, next) {
    fontHelper.findBySlug(req.params.font_slug)
        .then(function (data) {
            if (data.success) {
                return paymentHelper.confirm(req, next, data.font)
            } else {
                var notFound = new Error('Oops!');
                notFound.status = 404;
                return next(notFound);
            }
        })
        .then(function (data) {
            if (data.success) {
                res.render('fonts/confirm', {
                    title: 'Thank you for purchasing ' + data.font.name + ' - Fonts',
                    font: data.font,
                    payment: data.payment
                });
            } else {
                res.render('fonts/confirm', {
                    title: 'Page No Longer Available - Fonts',
                    font: data.font
                });
            }
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.updateExample = function (req, res) {
    if (/\/amp\//.test(req.path)) {

        var response = {
            example: req.body.example ? req.body.example : '',
            size: req.body.size ? req.body.size : '60'
        };

        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org');
        res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'https://' + req.headers.host);
        res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
        res.json(response);
    }
};

var _setBackgroundColors = function (fonts) {
    var darkShades = [
        'purple',
        'orange',
        'blue',
        'red'
    ];

    var lightShades = [
        'light-green',
        'yellow',
        'light-blue',
        'pink'
    ];

    for (var i = 0; i < fonts.length; i++) {
        var bgColors = [];

        bgColors.push(darkShades[i % darkShades.length]);
        bgColors.push(lightShades[i % lightShades.length]);
        bgColors.push(lightShades[(i + 1) % lightShades.length]);
        bgColors.push(lightShades[(i + 2) % lightShades.length]);

        fonts[i]['bgColors'] = bgColors;
    }
};