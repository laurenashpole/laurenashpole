const admin = require('../../controllers/admin');
const users = require('../../controllers/api/users');
const fonts = require('../../controllers/api/fonts');

module.exports = function (app, passport, multer) {
  const upload = multer({
    dest: './temp/'
  });

  const isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/admin');
  };

  const authenticate = function (req, res, next, strategy) {
    passport.authenticate(strategy, (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        req.info = info || null;
        return next();
      }

      req.logIn(user, (err) => {
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