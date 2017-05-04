var Font = require('../models/font');

var path = require('path');
var paypal = require('paypal-rest-sdk');
var fs = require('fs');
var paypalConfig = require('../config/config')()['paypal'];
var fontEmail = require('../config/emails')();

exports.renderFonts = function (req, res) {

    Font.find().sort({ name: 'asc' }).exec(function (err, fonts) {

        if (err) res.send(err);

        res.render('fonts/fonts', {
            title: 'Fonts',
            fonts: fonts
        });

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

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        if (!font) {
            var notFound = new Error('Oops!');
            notFound.status = 404;
            return next(notFound);
        }

        if (font.alternate_style) {
            font.alternate_styles = font.alternate_style.split(', ');
        }

        res.render('fonts/font', {
            title: font.name + ' - Fonts',
            description: 'Download the ' + font.name + ' font free for personal use or buy a license for all your commercial use needs.',
            font: font
        });

    });

};

exports.createPayment = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        paypal.configure(paypalConfig.api);

        var payment = {
            'intent': 'sale',
            'payer': {
                'payment_method': 'paypal'
            },
            'redirect_urls': {
                'return_url': paypalConfig.redirect_base + '/fonts/' + font.slug + '/confirm',
                'cancel_url': paypalConfig.redirect_base + '/fonts/' + font.slug
            },
            'transactions': [{
                'amount': {
                    'total': font.price,
                    'currency': 'USD'
                },
                'description': 'Font: ' + font.name
            }]
        };

        paypal.payment.create(payment, function (err, payment) {

            if (err) res.send(err);

            if (payment.payer.payment_method === 'paypal') {

                var redirectUrl;

                for (var i=0; i < payment.links.length; i++) {

                    var link = payment.links[i];

                    if (link.method === 'REDIRECT') {
                        redirectUrl = link.href;
                    }
                }

                res.redirect(redirectUrl);

            }

        });

    });

};

exports.confirm = function (req, res, next) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        if (!font) {
            var notFound = new Error('Oops!');
            notFound.status = 404;
            return next(notFound);
        }

        if (req.query['paymentId'] && req.query['PayerID'] && paypal.payment) {

            var paymentId = req.query['paymentId'];
            var payerId = req.query['PayerID'];
            var details = { 'payer_id': payerId };

            paypal.payment.execute(paymentId, details, function (err, payment) {

                if (err) {

                    if (err.response && err.response.httpStatusCode) {
                        err.status = err.response.httpStatusCode;
                    }

                    if (err.response && err.response.error_description) {
                        err.message = err.response.error_description;
                    }

                    return next(err);
                }

                var filePath = path.resolve('./public/downloads/', font.commercial_font_file);

                fs.readFile(filePath, function (err, data) {

                    if (err) res.send(err);

                    fontEmail({
                        to: payment.payer.payer_info.email,
                        attachments: [{
                            filename: font.commercial_font_file,
                            content: data
                        }]
                    }, {
                        font_name: font.name
                    }, function (err, info) {
                        if (err) res.send(err);
                    });

                });

                res.render('fonts/confirm', {
                    title: 'Thank you for purchasing ' + font.name + ' - Fonts',
                    font: font,
                    payment: payment
                });

            });

        } else {

            res.render('fonts/confirm', {
                title: 'Page No Longer Available - Fonts',
                font: font
            });

        }

    });

};