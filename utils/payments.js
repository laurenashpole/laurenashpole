import paypal from 'paypal-rest-sdk';
import path from 'path';
import fs from 'fs';
import { getTransporter, getFulfillmentTemplate } from './mailers';

export function create (font) {
  return new Promise ((resolve, reject) => {
    paypal.configure({
      mode: process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET
    });

    paypal.payment.create({
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: `${process.env.BASE_URL}fonts/payments/confirm/`,
        cancel_url: `${process.env.BASE_URL}fonts/${font.slug}`
      },
      transactions: [{
        amount: {
          total: font.price,
          currency: 'USD'
        },
        description: `Font: ${font.name} Commercial License`,
        item_list: {
          items: [
            {
              name: `${font.name}`,
              quantity: '1',
              price: font.price,
              sku: font._id,
              currency: 'USD'
            }
          ]
        }
      }]
    }, (err, payment) => {
      if (err) {
        return reject(err.response);
      }

      if (payment.payer.payment_method === 'paypal') {
        const redirects = payment.links.filter((link) => link.method === 'REDIRECT');
        resolve({ redirect: redirects[0].href });
      }
    });
  });
}

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