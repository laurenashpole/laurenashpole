var index = require('../controllers/index');
var fonts = require('../controllers/fonts');
var admin = require('../controllers/admin');

module.exports = function (app) {

    app.get('/', index.render);
    app.get('/fonts', fonts.renderFonts);
    app.get('/fonts/:font_slug', fonts.renderFont);
    app.get('/admin/fonts', admin.renderFonts);
    app.get('/admin/fonts/:font_id', admin.renderFont);
    app.post('/admin/fonts', admin.createFont);
    app.put('/admin/fonts/:font_id', admin.updateFont);
    app.delete('/admin/fonts/:font_id', admin.deleteFont);

};