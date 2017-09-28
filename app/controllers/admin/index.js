exports.render = function (req, res) {
    res.render('admin/index', {
        title: 'Admin',
        message: req.flash('error'),
        signed_out: !req.isAuthenticated()
    });
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/admin');
};