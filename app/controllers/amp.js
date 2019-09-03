const path = require('path');
const fs = require('fs');
const request = require('superagent');
const mailchimpConfig = require('../config/config')()['mailchimp'];
const constantsHelper = require('../helpers/constants')();
const fontHelper = require('../helpers/fonts');
const paymentHelper = require('../helpers/payments');

exports.render = function (req, res, next) {
  fontHelper.findBySlug(req.params.font_slug)
    .then((data) => {
      if (data.success) {
        let font = data.font;

        if (font.alternate_style) {
          font.alternate_styles = font.alternate_style.split(', ');
        }

        if (font.css_file) {
          const filePath = path.resolve('./public/css/fonts/', font.css_file);
          const cssString = fs.readFileSync(filePath);

          if (cssString) {
            font.css_string = cssString.toString();
          }
        }

        res.render('amp/font.amp.html', {
          title: font.name + ' - Fonts',
          description: 'Download the ' + font.name + ' font free for personal use or buy a license for all your commercial use needs.',
          font: font,
          glyphs: {
            basic: constantsHelper.basicGlyphs,
            additional: constantsHelper.additionalGlyphs
          }
        });
      } else {
        let notFound = new Error('Oops!');
        notFound.status = 404;
        return next(notFound);
      }
    })
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  const response = {
    example: req.body.example ? req.body.example : '',
    size: req.body.size ? req.body.size : '60'
  };

  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
  res.json(response);
};

exports.payment = function (req, res) {
  fontHelper.findBySlug(req.params.font_slug)
    .then((data) => {
      if (data.success) {
        return paymentHelper.create(data.font)
      }
    })
    .then((data) => {
      if (data.success) {
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
        res.setHeader('AMP-Redirect-To', data.redirectUrl);
        res.setHeader('Access-Control-Expose-Headers', 'AMP-Redirect-To, AMP-Access-Control-Allow-Source-Origin');
        res.json(data);
      }
    })
    .catch((err) => res.send(err));
};

exports.mailing = function (req, res) {
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

  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', req.query.__amp_source_origin);
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');

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