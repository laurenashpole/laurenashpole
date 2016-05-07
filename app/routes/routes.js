var index = require('../controllers/index');
var fonts = require('../controllers/fonts');
var admin = require('../controllers/admin/index');

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/admin');

}

module.exports = function (app, passport) {

    app.get('/', index.render);
    app.get('/fonts', fonts.renderFonts);
    app.get('/fonts/:font_slug', fonts.renderFont);
    app.get('/admin', admin.render);
    app.get('/admin/fonts', isLoggedIn, admin.renderFonts);
    app.get('/admin/fonts/:font_id', isLoggedIn, admin.renderFont);
    app.post('/admin/fonts', isLoggedIn, admin.createFont);
    app.put('/admin/fonts/:font_id', isLoggedIn, admin.updateFont);
    app.delete('/admin/fonts/:font_id', isLoggedIn, admin.deleteFont);
    app.get('/admin/logout', isLoggedIn, admin.logout);

    app.post('/admin/signup', passport.authenticate('local-signup', {
        successRedirect : '/admin/fonts',
        failureRedirect : '/admin',
        failureFlash : true
    }));

};