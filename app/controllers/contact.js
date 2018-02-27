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