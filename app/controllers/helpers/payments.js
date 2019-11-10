const paypal = require('paypal-rest-sdk');
const paypalConfig = require('../../config/config')()['paypal'];
const path = require('path');
const fs = require('fs');
const fulfillmentEmail = require('./emails')();

exports.create = function (font) {
  return new Promise ((resolve, reject) => {
    const paymentDetails = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: `${paypalConfig.redirect_base}/fonts/${font.slug}/confirm`,
        cancel_url: `${paypalConfig.redirect_base}/fonts/${font.slug}`
      },
      transactions: [{
        amount: {
          total: font.price,
          currency: 'USD'
        },
        description: `Font: ${font.name}`
      }]
    };

    paypal.configure(paypalConfig.api);

    paypal.payment.create(paymentDetails, (err, payment) => {
      if (err) reject(err);

      if (payment.payer.payment_method === 'paypal') {
        let redirectUrl;

        for (let i = 0; i < payment.links.length; i++) {
          const link = payment.links[i];

          if (link.method === 'REDIRECT') {
            redirectUrl = link.href;
          }
        }

        resolve({ redirectUrl: redirectUrl });
      }
    });
  });
};

exports.confirm = function (data) {
  return new Promise ((resolve, reject) => {
    paypal.payment.execute(data.paymentId, {
      payer_id: data.payerId
    }, (err, payment) => {
      if (err) reject(err.response.error_description);

      resolve({
        font: data.font,
        payment: payment
      });
    });
  });
};

exports.fulfill = function (data) {
  return new Promise ((resolve, reject) => {
    const filePath = path.resolve('./public/uploads/fonts/', data.font.commercial_font_file);

    fs.readFile(filePath, (err, content) => {
      if (err) reject(err);

      fulfillmentEmail({
        to: data.payment.payer.payer_info.email,
        attachments: [{
          filename: data.font.commercial_font_file,
          content: content
        }]
      }, {
        font_name: data.font.name
      }, (err, info) => {
        if (err) reject(err);

        resolve(data);
      });
    });
  });
};