let fontHelper = require('../../helpers/fonts');

exports.createPayment = function (req, res) {
  fontHelper.findBySlug(req.params.font_slug)
    .then((data) => {
      if (data.success) {
        paymentHelper.create(data.font)
      }
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

exports.confirm = function (req, res, next) {
    fontHelper.findBySlug(req.params.font_slug)
        .then(function (data) {
            if (data.success) {
                return paymentHelper.confirm(req, next, data.font)
            } else {
                var notFound = new Error('Oops!');
                notFound.status = 404;
                return next(notFound);
            }
        })
        .then(function (data) {
            if (data.success) {
                res.render('fonts/confirm', {
                    title: 'Thank you for purchasing ' + data.font.name + ' - Fonts',
                    font: data.font,
                    payment: data.payment
                });
            } else {
                res.render('fonts/confirm', {
                    title: 'Page No Longer Available - Fonts',
                    font: data.font
                });
            }
        })
        .catch(function (err) {
            res.send(err);
        });
};