import withPassport from '../../../../middleware/passport';
import { remove } from '../../../../utils/tags';

const handler = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({});
  }

  try {
    await remove(req);
    res.json({});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export default (req, res) => {
  withPassport(req, res, handler);
};
