var paypal = require('paypal-rest-sdk');
var paypalConfig = require('../config/config')()['paypal'];
var path = require('path');
var fs = require('fs');
var fontEmail = require('../helpers/emails')();

exports.create = function (font) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    let payment = {
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

    paypal.payment.create(payment, (err, payment) => {
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

exports.confirm = function (req, next, font) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    if (req.query['paymentId'] && req.query['PayerID'] && paypal.payment) {
      let paymentId = req.query['paymentId'];
      let payerId = req.query['PayerID'];

      let details = {
        payer_id: payerId
      };

      paypal.payment.execute(paymentId, details, (err, payment) => {
        if (err) {
          if (err.response && err.response.httpStatusCode) {
            err.status = err.response.httpStatusCode;
          }

          if (err.response && err.response.error_description) {
            err.message = err.response.error_description;
          }

          return next(err);
        }

        _emailFont(payment, font)
          .then ((data) => {
            if (data.success) {
              response.success = true;
              response.font = font;
              response.payment = payment;

              resolve(response);
            }
          })
          .catch((err) => reject(err));
      });
    } else {
      resolve(respnse);
    }
  });
};

let _emailFont = function (payment, font) {
  return new Promise ((resolve, reject) => {
    let response = {
      success: false
    };

    let filePath = path.resolve('./public/downloads/fonts/', font.commercial_font_file);

    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);

      fontEmail({
        to: payment.payer.payer_info.email,
        attachments: [{
          filename: font.commercial_font_file,
          content: data
        }]
      }, {
        font_name: font.name
      }, function (err, info) {
        if (err) reject(err);

        response.success = true;
        resolve(response);
      });
    });
  });
}