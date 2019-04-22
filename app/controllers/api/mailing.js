const request = require('superagent');
const mailchimpConfig = require('../../config/config')()['mailchimp'];

exports.signup = function (req, res) {
  let response = {
    success: false
  };

  if (!req.body) {
    res.statusCode = 403;
    res.json(response);
  }

  if (req.body.b_5e9c643a20b49926773037101_a878f779fc) {
    response.err = 'Are you a robot?';
    res.statusCode = 403;
    res.json(response);
  }

  if (!req.body.email || !(/\S+@\S+\.\S+/.test(req.body.email))) {
    response.err = 'Valid email required!';
    res.statusCode = 403;
    res.json(response);
  }

  if (/\/\/blog/.test(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  }

  request
    .post('https://laurenashpole.us4.list-manage.com/subscribe/post')
    .send('u=' + mailchimpConfig.userId)
    .send('id=' + mailchimpConfig.listId)
    .send('MERGE0=' + req.body.email)
    .end((err, postResponse) => {
      if (postResponse.status < 300 || (postResponse.status === 400 && postResponse.body.title === 'Member Exists')) {
        res.statusCode = postResponse.status;
        response.success = true;
      }

      res.json(response);
    });
};