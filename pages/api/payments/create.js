import { create } from '../../../utils/payments';

export default async (req, res) => {
  if (!req.body.font) {
    return res.status(422).json({});
  }

  try {
    const response = await create(req.body.font);
    res.json(response);
  } catch (err) {
    res.status(err.httpStatusCode).json({ err });
  }
};