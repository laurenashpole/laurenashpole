exports.render = function (req, res) {

    var page = {
        title: 'Admin'
    }

    res.render('admin/index', {
        page: page,
        message: req.flash('error'),
        signed_out: !req.isAuthenticated()
    });

};

exports.logout = function(req, res) {

    req.logout();
    res.redirect('/admin');

};