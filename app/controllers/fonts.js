var Font = require('../models/font');

var path = require('path');
var paypal = require('paypal-rest-sdk');
var fs = require('fs');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var paypalConfig = require('../config/config')()['paypal'];
var smtpConfig = require('../config/config')()['mail'];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
    }
});

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

        res.render('fonts/font', {
            title: font.name + ' - Fonts',
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

exports.confirm = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        if (!font) {
            var notFound = new Error('Oops!');
            notFound.status = 404;
            return next(notFound);
        }

        if (req.query['paymentId'] && req.query['PayerID']) {

            var paymentId = req.query['paymentId'];
            var payerId = req.query['PayerID'];
            var details = { 'payer_id': payerId };

            paypal.payment.execute(paymentId, details, function (err, payment) {

                if (err) res.send(err);

                var filePath = path.resolve('./public/downloads/', font.commercial_font_file);

                fs.readFile(filePath, function (err, data) {

                    if (err) res.send(err);

                    var mailOptions = {
                        from: '"Lauren Ashpole" <lauren@laurenashpole.com>',
                        to: payment.payer.payer_info.email,
                        subject: 'Thank you for purchasing ' + font.name + '!',
                        text:
                            'Thanks for your purchase.\n\n' +
                            'Your commercial font file is attached to this email. If you have any questions, don\'t hesitate to ask.\n\n' +
                            'Thanks again!\n\nLauren\n\nwww.laurenashpole.com',
                        html:
                            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
                            '<html xmlns="http://www.w3.org/1999/xhtml">' +
                            '<head>' +
                                '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
                                '<title></title>' +
                                '<style></style>' +
                            '</head>' +
                            '<body>' +
                                '<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="padding: 0 20px">' +
                                    '<tr>' +
                                        '<td align="center" valign="top">' +
                                            '<table border="0" cellpadding="20" cellspacing="0" width="100%" style="max-width: 600px; background: #f3f2f2;">' +
                                                '<tr>' +
                                                    '<td valign="top">' +
                                                         '<h1 style="text-align: center;">Thanks for your purchase.</h1>' +
                                                         '<p>Your commercial font file is attached to this email. If you have any questions, don\'t hesitate to ask.</p>' +
                                                         '<p>Thanks again!</p>' +
                                                         '<p>Lauren<br />www.laurenashpole.com</p>' +
                                                    '</td>' +
                                                '</tr>' +
                                            '</table>' +
                                        '</td>' +
                                    '</tr>' +
                                '</table>' +
                            '</body>' +
                        '</html>',
                        attachments: [{
                            filename: font.commercial_font_file,
                            content: data
                        }]
                    };

                    transporter.sendMail(mailOptions, function (err, info) {
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