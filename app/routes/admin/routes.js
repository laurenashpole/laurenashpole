var admin = require('../../controllers/admin/index');
var fonts = require('../../controllers/admin/fonts');

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/admin');
}

module.exports = function (app, passport, multer) {
    var upload = multer({
        dest: './temp/'
    });

    /* Admin */
    app.get('/admin', admin.render);

    /* Login */
    app.get('/admin/logout', isLoggedIn, admin.logout);

    app.post('/admin/signup', passport.authenticate('local-signup', {
        successRedirect : '/admin',
        failureRedirect : '/admin',
        failureFlash : true
    }));

    app.post('/admin/login', passport.authenticate('local-login', {
        successRedirect : '/admin',
        failureRedirect : '/admin',
        failureFlash : true
    }));

    /* Font Pages */
    app.get('/admin/fonts', isLoggedIn, fonts.all);
    app.get('/admin/fonts/create', isLoggedIn, fonts.renderCreate);
    app.get('/admin/fonts/:font_id', isLoggedIn, fonts.renderEdit);

    /* Font Actions */
    app.post('/admin/fonts',[isLoggedIn, upload.any(), fonts.create]);
    app.put('/admin/fonts/:font_id', [isLoggedIn, upload.any(), fonts.edit]);
    app.delete('/admin/fonts/:font_id', isLoggedIn, fonts.delete);
}