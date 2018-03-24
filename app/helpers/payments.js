let paypal = require('paypal-rest-sdk');
let paypalConfig = require('../config/config')()['paypal'];
let path = require('path');
let fs = require('fs');
let fontEmail = require('../helpers/emails')();

exports.create = function (font) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    let paymentDetails = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: paypalConfig.redirect_base + '/fonts/' + font.slug + '/confirm',
        cancel_url: paypalConfig.redirect_base + '/fonts/' + font.slug
      },
      transactions: [{
        amount: {
          total: font.price,
          currency: 'USD'
        },
        description: 'Font: ' + font.name
      }]
    };

    paypal.configure(paypalConfig.api);

    paypal.payment.create(paymentDetails, (err, payment) => {
      if (err) reject(err);

      if (payment.payer.payment_method === 'paypal') {
        let redirectUrl;

        for (let i = 0; i < payment.links.length; i++) {
          let link = payment.links[i];

          if (link.method === 'REDIRECT') {
            redirectUrl = link.href;
          }
        }

        response.success = true;
        response.redirectUrl = redirectUrl;
        resolve(response);
      }
    });
  });
};

exports.confirm = function (data) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    paypal.payment.execute(data.paymentId, {
      payer_id: data.payerId
    }, (err, payment) => {
      if (err) reject(err.response.error_description);

      response.success = true;
      response.font = data.font;
      response.payment = payment;
      resolve(response);
    });
  });
};

exports.fulfill = function (data) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    let filePath = path.resolve('./public/downloads/fonts/', data.font.commercial_font_file);

    fs.readFile(filePath, (err, content) => {
      if (err) reject(err);

      fontEmail({
        to: data.payment.payer.payer_info.email,
        attachments: [{
          filename: data.font.commercial_font_file,
          content: content
        }]
      }, {
        font_name: data.font.name
      }, (err, info) => {
        if (err) reject(err);

        response = data;
        response.success = true;
        resolve(response);
      });
    });
  });
};