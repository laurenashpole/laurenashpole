import withMulter from '../../../../middleware/multer';

const handler = (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');

  res.json({
    text: req.body.text ? req.body.text : '',
    size: req.body.size ? req.body.size : '48'
  });
};

export const config = {
  api: {
    bodyParser: false
  }
};

export default (req, res) => {
  withMulter(req, res, false, handler);
};