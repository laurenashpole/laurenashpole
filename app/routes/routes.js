var index = require('../controllers/index');
var fonts = require('../controllers/fonts');
var admin = require('../controllers/admin/index');
var adminFonts = require('../controllers/admin/fonts');

function isLoggedIn (req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/admin');

}

module.exports = function (app, passport) {

    app.get('/', index.render);
    app.get('/fonts', fonts.renderFonts);
    app.get('/fonts/:font_slug', fonts.renderFont);

    app.get('/admin', admin.render);
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

    app.get('/admin/fonts', isLoggedIn, adminFonts.renderAll);
    app.get('/admin/fonts/create', isLoggedIn, adminFonts.renderCreate);
    app.get('/admin/fonts/:font_id', isLoggedIn, adminFonts.renderEdit);
    app.post('/admin/fonts', isLoggedIn, adminFonts.createFont);
    app.put('/admin/fonts/:font_id', isLoggedIn, adminFonts.updateFont);
    app.delete('/admin/fonts/:font_id', isLoggedIn, adminFonts.deleteFont);

};