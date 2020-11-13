import superagent from 'superagent';
import withMulter from '../../../middleware/multer';

const handler = (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');

  if (!req.body || !req.body.email || req.body.b_5e9c643a20b49926773037101_a878f779fc) {
    return res.status(422).json({});
  }

  superagent
    .post(`https://us4.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`)
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', `Basic ${new Buffer('laurenashpole:' + process.env.MAILCHIMP_API_KEY).toString('base64')}`)
    .send({ email_address: req.body.email, status: 'subscribed' })
    .end((err, response) => {
      if (response.status < 300 || (response.status === 400 && response.body.title === 'Member Exists')) {
        return res.status(response.status).json({});
      }

      res.json({});
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