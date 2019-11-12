const fontHelper = require('../helpers/fonts');
const paymentHelper = require('../helpers/payments');

exports.create = function (req, res) {
  paymentHelper.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

exports.confirm = function (req, res) {
  const data = {
    font: req.body || {},
    paymentId: req.query['paymentId'] || '',
    payerId: req.query['PayerID'] || ''
  };

  paymentHelper.confirm(data)
    .then((data) => paymentHelper.fulfill(data))
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};