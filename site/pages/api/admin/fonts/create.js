import withMulter from '../../../../middleware/multer';
import withPassport from '../../../../middleware/passport';
import { create } from '../../../../utils/fonts';

const handler = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({});
  }

  try {
    await create(req);
    res.json({ redirect: '/admin/fonts' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req, res) => {
  withPassport(req, res, (req, res) => {
    withMulter(req, res, true, handler);
  });
};