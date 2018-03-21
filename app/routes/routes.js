var index = require('../controllers/index');
var fonts = require('../controllers/fonts');
var mailingApi = require('../controllers/api/mailing');
var contactsApi = require('../controllers/api/contact');
var paymentsApi = require('../controllers/api/payments');

module.exports = function (app, multer) {
    var multipart = multer();

    // /* Home */
    // app.get('/*', index.render);

    /* Contact */
    app.post('/contact/send', contactsApi.send);

    /* Mailing List */
    app.post('/mailing/signup', mailingApi.signup);
    app.post('/amp/mailing/signup', multipart.fields([]), mailingApi.signup);

    /* Fonts Pages */
    // app.get('/fonts', fonts.renderFonts);
    // app.get('/fonts/licensing', fonts.licensing);
    // app.get('/fonts/eula', fonts.eula);
    // app.get('/fonts/:font_slug', fonts.renderFont);
    app.get('/amp/fonts/:font_slug', fonts.renderFont);

    /* Fonts Actions */
    app.post('/fonts/:font_slug/payment', paymentsApi.create);
    app.post('/fonts/:font_slug/confirm', paymentsApi.confirm);

    app.post('/amp/fonts/:font_slug/payment', fonts.createPayment);
    app.post('/amp/fonts/update-example', multipart.fields([]), fonts.updateExample);

    /* Legacy Redirects */
    app.get('/downloads', function (req, res) {
        res.redirect('/fonts');
    });

    app.get('/fonts.html', function (req, res) {
        res.redirect('/fonts');
    });

    app.get('/font39smooth.html', function (req, res) {
        res.redirect('/fonts/39-smooth');
    });

    app.get('/fontbikes.html', function (req, res) {
        res.redirect('/fonts/bikes');
    });

    app.get('/fontcandy.html', function (req, res) {
        res.redirect('/fonts/candy-randy');
    });

    app.get('/fonthecubus.html', function (req, res) {
        res.redirect('/fonts/hecubus');
    });

    app.get('/fontsewing.html', function (req, res) {
        res.redirect('/fonts/sewing-patterns');
    });

    app.get('/fontsewing2.html', function (req, res) {
        res.redirect('/fonts/sewing-patterns-2');
    });

    app.get('/downloads/thirty-nine-smooth', function (req, res) {
        res.redirect('/fonts/39-smooth');
    });

    app.get('/downloads/sewing-patterns-two', function (req, res) {
        res.redirect('/fonts/sewing-patterns-2');
    });

    app.get('/downloads/:font_slug', function (req, res) {
        res.redirect('/fonts/' + req.params.font_slug);
    });

    app.get('/licensing', function (req, res) {
        res.redirect('/fonts/licensing');
    });

    app.get('/licensing.html', function (req, res) {
        res.redirect('/fonts/licensing');
    });

    app.get('/eula', function (req, res) {
        res.redirect('/fonts/eula');
    });

    /* Home */
    app.get('/*', index.render);
};