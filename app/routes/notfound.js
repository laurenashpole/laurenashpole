const notfound = require('../config/404routes')();

module.exports = function (app) {
  app.use((req, res, next) => {
    const matches = notfound.filter((route) => req.path.startsWith(route));

    if (matches.length) {
      res.status(404);
      // res.send('404: File Not Found');
      res.status(404);
      return res.render('error', {
        message: 'Page not found.'
      });
    }

    next();
  });

  // app.use((req, res, next) => {
  //   let err = new Error('Oops!');
  //   err.status = 404;
  //   next(err);
  // });

  // // Development
  // if (app.get('env') === 'development') {
  //   app.use((err, req, res) => {
  //     res.status(err.status || 500);
  //     res.render('error', {
  //       message: err.message,
  //       error: err
  //     });
  //   });
  // }

  // // Production
  // app.use((err, req, res) => {
  //   res.status(err.status || 500);
  //   res.render('error', {
  //     message: err.message,
  //     error: {}
  //   });
  // });
};