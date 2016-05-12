var index = require('../controllers/index');
var fonts = require('../controllers/fonts');

module.exports = function (app) {

    app.get('/', index.render);
    app.get('/fonts', fonts.renderFonts);
    app.get('/fonts/:font_slug', fonts.renderFont);
    app.post('/fonts/:font_slug/payment', fonts.createPayment);
    app.get('/fonts/:font_slug/confirm', fonts.confirm);

};