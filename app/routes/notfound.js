const notfound = require('../config/404routes')();

module.exports = function (app) {
  app.use((req, res, next) => {
    const matches = notfound.filter((route) => req.path.startsWith(route));

    if (matches.length) {
      res.status(404);
      return res.render('error', {
        message: 'Page not found.'
      });
    }

    next();
  });
};