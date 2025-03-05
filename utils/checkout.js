import paypal from '@paypal/checkout-server-sdk';
import path from 'path';
import fs from 'fs';
import { findByIds } from './fonts';
import { getTransporter, getOrderTemplate } from './mailers';

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
  const transporter = await getTransporter();
  const attachments = await Promise.all(getAttachments(order.fonts));

  try {
    await transporter.sendMail({
      subject: 'Thank you for your order!',
      html: getOrderTemplate(order),
      to: order.payer.email_address,
      attachments: attachments
    });

    transporter.close();
  } catch (err) {
    throw new Error(err);
  }
}

function getAttachments (fonts) {
  return fonts.map((font) => {
    const filename = font.font_files.commercial.replace('fonts/', '');
    const path = `${process.env.NEXT_PUBLIC_ASSET_BASE_URL}${(font.font_files || {}).commercial}`;

    return {
      filename,
      path
    };
  });
}
