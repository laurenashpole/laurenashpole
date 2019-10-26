const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const smtpConfig = require('../../config/config')()['mail'];

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
  }
});

exports.send = function (req, res) {
  if (!req.body) {
    return res.json({ err: 'Error sending message. Please try again.' });
  }

  if (!req.body.senderEmail) {
    return res.json({ err: 'Sender email required!' });
  }

  if (!req.body.senderName) {
    return res.json({ err: 'Sender name required!' });
  }

  if (!req.body.message) {
    return res.json({ err: 'Message required!' });
  }

  const mailOptions = {
    from: '"CONTACT FORM" <lauren@laurenashpole.com>',
    to: 'lauren@laurenashpole.com',
    subject: req.body.subject || 'General Questions',
    text: req.body.message,
    html: `<p>Message from: ${req.body.senderEmail} (${req.body.senderName})</p><p>${req.body.message}</p>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) reject(err);

    res.json({ success: true });
  });
};