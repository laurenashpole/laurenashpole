import { create } from '../../../../utils/payments';
import withMulter from '../../../../middleware/multer';

const handler = async (req, res) => {
  if (!req.body.font) {
    return res.status(422).json({});
  }

  try {
    const response = await create(JSON.parse(req.body.font));

    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    res.setHeader('AMP-Redirect-To', response.redirect);

    res.json(response);
  } catch (err) {
    res.status(err.httpStatusCode).json({ err });
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req, res) => {
  withMulter(req, res, false, handler);
};