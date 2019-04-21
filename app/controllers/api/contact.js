const contactHelper = require('../../helpers/contact');

exports.send = function (req, res) {
  contactHelper.send(req)
    .then((data) => res.json(data))
    .catch((err) => res.json({
      sucess: false,
      error: err
    }));
};