exports.render = function (req, res) {

    res.render('admin/index', {
        message: req.flash('error'),
        authenticated: req.isAuthenticated()
    });

};

exports.logout = function(req, res) {

    req.logout();
    res.redirect('/admin');

};