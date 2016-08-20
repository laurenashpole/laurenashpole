var index = require('../controllers/index');
var fonts = require('../controllers/fonts');

module.exports = function (app) {

    app.get('/', index.render);
    app.get('/fonts', fonts.renderFonts);
    app.get('/fonts/licensing', fonts.licensing);
    app.get('/fonts/eula', fonts.eula);
    app.get('/fonts/:font_slug', fonts.renderFont);
    app.post('/fonts/:font_slug/payment', fonts.createPayment);
    app.get('/fonts/:font_slug/confirm', fonts.confirm);

    // Legacy Redirects
    app.get('/downloads', function (req, res) {
        res.redirect('/fonts');
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

    app.get('/eula', function (req, res) {
        res.redirect('/fonts/eula');
    });

};