var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpConfig = require('../config/config')()['mail'];

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
  }
});

exports.send = function (req) {
  return new Promise (function (resolve, reject) {
    var response = {
      success: false
    };

    if (!req.body) {
      return resolve(response);
    }

    if (!req.body.senderEmail) {
      response.err = 'Sender email required!';
      return resolve(response);
    }

    if (!req.body.senderName) {
      response.err = 'Sender name required!';
      return resolve(response);
    }

    if (!req.body.message) {
      response.err = 'Message required!';
      return resolve(response);
    }

    var mailOptions = {
      from: '"CONTACT FORM" <lauren@laurenashpole.com>',
      to: 'lauren@laurenashpole.com',
      subject: req.body.subject || 'General Questions',
      text: req.body.message,
      html: `<p>Message from: ${req.body.senderEmail} (${req.body.senderName})</p><p>${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) reject(err);

      response.success = true
      resolve(response);
    });
  });
};