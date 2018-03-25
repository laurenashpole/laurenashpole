let nodemailer = require('nodemailer');
let xoauth2 = require('xoauth2');
let smtpConfig = require('../config/config')()['mail'];

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
  }
});

exports.send = function (req) {
  return new Promise ((resolve, reject) => {
    let response = {
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

    let mailOptions = {
      from: '"CONTACT FORM" <lauren@laurenashpole.com>',
      to: 'lauren@laurenashpole.com',
      subject: req.body.subject || 'General Questions',
      text: req.body.message,
      html: `<p>Message from: ${req.body.senderEmail} (${req.body.senderName})</p><p>${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) reject(err);

      response.success = true
      resolve(response);
    });
  });
};