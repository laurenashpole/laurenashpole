import { confirm, fulfill } from '../../../utils/payments';
import { findById } from '../../../utils/fonts';

export default async (req, res) => {
  if (!req.body.payerId || !req.body.paymentId) {
    return res.status(422).json({});
  }

  try {
    const payment = await confirm(req.body.paymentId, req.body.payerId);
    const font = await (payment ? findById(payment.transactions[0].item_list.items[0].sku) : Promise.resolve());
    await (payment && font && !req.body.fulfilled ? fulfill(payment, font) : Promise.resolve());
    res.json({ payment, font });
  } catch (err) {
    res.status(err.httpStatusCode || 500).json({ err });
  }
};