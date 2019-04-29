const index = require('../controllers/index');
const amp = require('../controllers/amp');
const mailing = require('../controllers/api/mailing');
const contacts = require('../controllers/api/contact');
const payments = require('../controllers/api/payments');
const mcache = require('memory-cache');

module.exports = function (app, multer) {
  const multipart = multer();

  const cache = function (key, duration) {
    return (req, res, next) => {
      const cachedBody = mcache.get(key);

      if (!req.query.preview && cachedBody) {
        res.send(cachedBody);
        return;
      } else {
        res.sendResponse = res.send;

        res.send = (body) => {
          mcache.put(key, body, duration * 1000);
          res.sendResponse(body)
        }

        return next();
      }
    }
  }

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
  app.get('/downloads', (req, res) => {
    res.redirect('/fonts');
  });

  app.get('/fonts.html', (req, res) => {
    res.redirect('/fonts');
  });

  app.get('/font39smooth.html', (req, res) => {
    res.redirect('/fonts/39-smooth');
  });

  app.get('/fontbikes.html', (req, res) => {
    res.redirect('/fonts/bikes');
  });

  app.get('/fontcandy.html', (req, res) => {
    res.redirect('/fonts/candy-randy');
  });

  app.get('/fonthecubus.html', (req, res) => {
    res.redirect('/fonts/hecubus');
  });

  app.get('/fontsewing.html', (req, res) => {
    res.redirect('/fonts/sewing-patterns');
  });

  app.get('/fontsewing2.html', (req, res) => {
    res.redirect('/fonts/sewing-patterns-2');
  });

  app.get('/downloads/thirty-nine-smooth', (req, res) => {
    res.redirect('/fonts/39-smooth');
  });

  app.get('/downloads/sewing-patterns-two', (req, res) => {
    res.redirect('/fonts/sewing-patterns-2');
  });

  app.get('/downloads/:font_slug', (req, res) => {
    res.redirect('/fonts/' + req.params.font_slug);
  });

  app.get('/licensing', (req, res) => {
    res.redirect('/fonts/licensing');
  });

  app.get('/licensing.html', (req, res) => {
    res.redirect('/fonts/licensing');
  });

  app.get('/eula', (req, res) => {
    res.redirect('/fonts/eula');
  });

  // Home
  app.get('*', cache('main', 604800), index.render);
};