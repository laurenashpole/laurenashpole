var contactHelper = require('../helpers/contact');

exports.render = function (req, res) {
    res.render('contact', {
        title: 'Contact'
    });
};

exports.confirm = function (req, res) {
    res.render('contact-confirm', {
        title: 'Thanks for your message! - Contact'
    });
};

exports.send = function (req, res) {
    contactHelper.send(req)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
};