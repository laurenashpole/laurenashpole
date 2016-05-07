exports.render = function (req, res) {

    res.render('admin/index', {
        message: req.flash('error'),
        signed_out: !req.isAuthenticated()
    });

};

exports.logout = function(req, res) {

    req.logout();
    res.redirect('/admin');

};