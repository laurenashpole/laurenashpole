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
                                         '<h1 style="text-align: center;">Thank you for your purchase.</h1>' +
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
        '</html>'
    }, {
        from: '"Lauren Ashpole" <lauren@laurenashpole.com>',
    });

};