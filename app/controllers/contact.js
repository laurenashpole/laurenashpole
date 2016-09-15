var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpConfig = require('../config/config')()['mail'];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
    }
});

exports.send = function (req, res) {

    var response = {
        success: false,
        message: 'There was a problem sending your message. Please try again.'
    }

    if (req.body && req.body.senderEmail && req.body.subject && req.body.message) {

        var mailOptions = {
            from: '"CONTACT FORM" <lauren@laurenashpole.com>',
            to: 'lauren@laurenashpole.com',
            subject: req.body.subject,
            text: req.body.message,
            html: '<p>Message from: ' + req.body.senderEmail + '</p><p>' + req.body.message + '</p>'
        };

        transporter.sendMail(mailOptions, function (err, info) {

            if (!err) {

                response = {
                    success: true,
                    message: 'Your message has been sent! Thanks for getting in touch. I\'ll try to get back to you shortly so keep an eye on your inbox.'
                }

            }

            res.json(response);

        });

    } else {
        res.json(response);
    }

};