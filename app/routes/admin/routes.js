let admin = require('../../controllers/admin');
let users = require('../../controllers/api/users');
let fonts = require('../../controllers/api/fonts');

module.exports = function (app, passport, multer) {
  let upload = multer({
    dest: './temp/'
  });

  let isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/admin');
  };

  let authenticate = function (req, res, next, strategy) {
    passport.authenticate(strategy, function (err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        req.info = info || null;
        return next();
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        req.user = user || null;
        return next();
      });
    })(req, res, next);
  };

  // Render
  app.get('/admin*', admin.all);

  // Login
  app.post('/admin/login', (req, res, next) => {
    authenticate(req, res, next, 'local-login');
  }, users.authenticate);

  app.post('/admin/signup', (req, res, next) => {
    authenticate(req, res, next, 'local-signup');
  }, users.authenticate);

  app.post('/admin/logout', isAuthenticated, users.logout);

  // Actions
  app.post('/admin/fonts', [isAuthenticated, upload.any(), fonts.create]);
  app.put('/admin/fonts/:font_id', [isAuthenticated, upload.any(), fonts.edit]);
  app.delete('/admin/fonts/:font_id', isAuthenticated, fonts.delete);
}