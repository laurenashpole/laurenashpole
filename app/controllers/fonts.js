var Font = require('../models/font');
var paypal = require('paypal-rest-sdk');
var fs = require('fs');

var configPayPalJSON = fs.readFileSync('./app/config/paypal.json');
var configPayPal = JSON.parse(configPayPalJSON.toString());

exports.renderFonts = function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);

        var page = {
            fonts: true,
            title: 'Fonts'
        }

        res.render('fonts/fonts', {
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

        res.render('fonts/font', {
            page: page,
            font: font
        });

    });

};

exports.createPayment = function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        paypal.configure(configPayPal.api);

        var payment = {
            'intent': 'sale',
            'payer': {
                'payment_method': 'paypal'
            },
            'redirect_urls': {
                'return_url': 'http://localhost:3000/fonts/' + font.slug + '/confirm',
                'cancel_url': 'http://localhost:3000/fonts/' + font.slug
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

            console.log(payment);

            var page = {
                fonts: true,
                title: 'Thank you for purchasing ' + font.name + ' - Fonts'
            }

            res.render('fonts/confirm', {
                page: page,
                font: font,
                payment: payment
            });

        });

    });

};