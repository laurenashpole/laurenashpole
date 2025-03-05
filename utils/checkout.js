import https from 'https';
import paypal from '@paypal/checkout-server-sdk';
import sgMail from '@sendgrid/mail';
import { findByIds } from './fonts';
import { getOrderTemplate } from './mailers';

export async function getOrder (orderId, sendFiles) {
  try {
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
    const env = new paypal.core[process.env.NODE_ENV === 'production' ? 'LiveEnvironment' : 'SandboxEnvironment'](clientId, clientSecret);
    const client = new paypal.core.PayPalHttpClient(env);
    const request = new paypal.orders.OrdersGetRequest(orderId);
    const response = (await client.execute(request)).result;
    const purchase = response.purchase_units[0] || {};
    const fonts = await ((purchase.items || []).length ? findByIds(purchase.items.map((item) => item.sku)) : Promise.resolve());
    const order = { ...purchase, orderId: orderId, fonts: fonts, payer: response.payer };

    if (sendFiles && fonts.length) {
      await fulfillOrder(order);
    }

    return order;
  } catch (err) {
    return { error: err };
  }
}

async function fulfillOrder (order) {
  const attachments = await Promise.all(getAttachments(order.fonts));
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  sgMail.send({
    to: order.payer.email_address,
    from: process.env.EMAIL,
    subject: 'Thank you for your order!',
    html: getOrderTemplate(order),
    attachments: attachments
  })
    .then(() => {})
    .catch((err) => {
      throw new Error(err);
    });
}

function getAttachments (fonts) {
  return fonts.map(async (font) => {
    if (!(font.font_files || {}).commercial) {
      return null;
    }

    const filename = font.font_files.commercial.replace('fonts/', '');
    const file = await getFile(`${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${font.font_files.commercial}`);

    return {
      content: file.toString('base64'),
      filename,
      type: 'application/zip',
      disposition: 'attachment',
      content_id: filename,
    };
  });
}

function getFile (url) {
  return new Promise ((resolve, reject) => {
    https.get(url, (res) => {
      let buffer = Buffer.from('');

      res.on('data', (data) => {
        buffer = Buffer.concat([buffer, data]);
      });

      res.on('end', () => {
        resolve(buffer);
      });

      res.on('error', (err) => {
        reject(err);
      });
    });
  });
}
