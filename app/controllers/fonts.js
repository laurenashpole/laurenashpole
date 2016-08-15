var Font = require('../models/font');

var path = require('path');
var paypal = require('paypal-rest-sdk');
var fs = require('fs');
var nodemailer = require('nodemailer');

var paypalConfig = require('../config/config')()['paypal'];
var transporter = nodemailer.createTransport();

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

exports.renderFont = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

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

                req.session.paymentId = payment.id;
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

        var paymentId = req.session.paymentId;
        var payerId = req.query['PayerID'];
        var details = { 'payer_id': payerId };

        paypal.payment.execute(paymentId, details, function (err, payment) {

            if (err) res.send(err);

            var filePath = path.resolve('./public/downloads/', font.commercial_font_file);

            fs.readFile(filePath, function (err, data) {

                var mailOptions = {
                    from: '"Lauren Ashpole" <lauren@laurenashpole.com>',
                    to: payment.payer.payer_info.email,
                    subject: 'Thank you for purchasing' + font.name,
                    text: 'Here is your download!',
                    html: 'Here is your download!',
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

    });

};