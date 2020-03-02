module.exports = function (app) {
  app.use((req, res, next) => {
    let err = new Error('Oops!');
    err.status = 404;
    next(err);
  });

  // Development
  if (app.get('env') === 'development') {
    app.use((err, req, res) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // Production
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
};