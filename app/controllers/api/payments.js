const paymentHelper = require('../helpers/payments');

module.exports.create = function (req, res) {
  paymentHelper.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports.confirm = function (req, res) {
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