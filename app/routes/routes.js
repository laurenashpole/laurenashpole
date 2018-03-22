let index = require('../controllers/index');
let amp = require('../controllers/amp');
let mailing = require('../controllers/api/mailing');
let contacts = require('../controllers/api/contact');
let payments = require('../controllers/api/payments');

module.exports = function (app, multer) {
  let multipart = multer();

  // Contact
  app.post('/contact/send', contacts.send);

  // Payment
  app.post('/fonts/:font_slug/payment', payments.create);
  app.post('/fonts/:font_slug/confirm', payments.confirm);

  // Mailing List
  app.post('/mailing/signup', mailing.signup);

  // AMP Pages
  app.get('/amp/fonts/:font_slug', amp.render);
  app.post('/amp/fonts/:font_slug/payment', amp.payment);
  app.post('/amp/fonts/update', multipart.fields([]), amp.update);
  app.post('/amp/mailing/signup', multipart.fields([]), amp.mailing);

  // Legacy Redirects
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

  // Home
  app.get('/*', index.render);
};