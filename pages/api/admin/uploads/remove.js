import { del } from '@vercel/blob';
import withPassport from '../../../../middleware/passport';

const handler = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({});
  }

  try {
    await del(req.body.id);
    res.json({});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export default (req, res) => {
  withPassport(req, res, handler);
};
