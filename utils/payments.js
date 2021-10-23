import paypal from 'paypal-rest-sdk';
import path from 'path';
import fs from 'fs';
import { getTransporter, getFulfillmentTemplate } from './mailers';

export function confirm (paymentId, payerId) {
  return new Promise ((resolve, reject) => {
    paypal.payment.execute(paymentId, {
      payer_id: payerId
    }, (err, payment) => {
      if (err) {
        return reject(err);
      }

      resolve(payment);
    });
  });
}

export function fulfill (payment, font) {
  const filePath = path.resolve('./public/uploads/fonts/', font.commercial_font_file);
  const transporter = getTransporter();

  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        return reject(err);
      }

      const template = transporter.templateSender({
        subject: 'Thank you for your purchase!',
        html: getFulfillmentTemplate(font)
      }, {
        from: `"Lauren Ashpole" <${process.env.EMAIL}>`
      });

      template({
        to: payment.payer.payer_info.email,
        attachments: [{
          filename: font.commercial_font_file,
          content: content
        }]
      }, {
        font: font
      }, (err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  });
}