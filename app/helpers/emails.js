var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpConfig = require('../config/config')()['mail'];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator(smtpConfig)
    }
});

module.exports = function () {

    return transporter.templateSender({
        subject: 'Thank you for purchasing {{font_name}}!',
        text:
            'Thank you for your purchase.\r\n\r\n' +
            'Your commercial font file is attached to this email. If you have any questions, don\'t hesitate to ask.\r\n\r\n' +
            'Thanks again!\r\n\r\nLauren\r\nwww.laurenashpole.com',
        html:
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
            '<html xmlns="http://www.w3.org/1999/xhtml">' +
            '<head>' +
                '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
                '<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400, 700">' +
            '</head>' +
            '<body>' +
                '<table border="0" cellpadding="10" cellspacing="0" height="100%" width="100%">' +
                    '<tr>' +
                        '<td align="center" valign="top">' +
                            '<table border="0" cellpadding="30" cellspacing="0" width="100%" style="max-width: 600px; background: #f3f2f2; color: #343131; font-family: \'Source Sans Pro\'">' +
                                '<tr>' +
                                    '<td valign="top">' +
                                         '<h1 style="text-align: center; margin-top: 0;">Thank you for your purchase.</h1>' +
                                         '<p>Your commercial font file is attached to this email. If you have any questions, don\'t hesitate to ask.</p>' +
                                         '<p>Thanks again!</p>' +
                                         '<p style="margin-bottom: 0;">Lauren<br /><a href="http://www.laurenashpole.com" style="color: #d04e3e; text-decoration: none;">www.laurenashpole.com</a></p>' +
                                    '</td>' +
                                '</tr>' +
                            '</table>' +
                        '</td>' +
                    '</tr>' +
                '</table>' +
            '</body>' +
        '</html>'
    }, {
        from: '"Lauren Ashpole" <lauren@laurenashpole.com>',
    });

};