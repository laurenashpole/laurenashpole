import withPassport from '../../../../middleware/passport';
import { update } from '../../../../utils/tags';

const handler = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({});
  }

  try {
    await update(req);
    res.json({ redirect: '/admin/tags' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export default (req, res) => {
  withPassport(req, res, handler);
};
