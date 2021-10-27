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
    const response = (await client.execute(request)).result.purchase_units[0];
    const fonts = await ((response.items || []).length ? findByIds(response.items.map((item) => item.sku)) : Promise.resolve());
    const order = { ...response, orderId: orderId, fonts: fonts };

    if (sendFiles && fonts.length) {
      await fulfillOrder(order);
    }

    return order;
  } catch (err) {
    return { error: err };
  }
}

async function fulfillOrder (order) {
  const transporter = getTransporter();
  const attachments = await Promise.all(getAttachments(order.fonts));

  const template = transporter.templateSender({
    subject: 'Thank you for your order!',
    html: getOrderTemplate(order)
  }, {
    from: `"Lauren Ashpole" <${process.env.EMAIL}>`
  });

  try {
    await template({
      // to: order.payee.email_address,
      to: 'lauren@laurenashpole.com',
      attachments: attachments
    }, { order });
  } catch (err) {
    throw new Error(err);
  }
}

function getAttachments (fonts) {
  return fonts.map((font) => {
    const filePath = path.resolve('./public/uploads/fonts/', font.commercial_font_file);
    const content = fs.readFileSync(filePath);

    return {
      filename: font.commercial_font_file,
      content: content
    };
  });
}
