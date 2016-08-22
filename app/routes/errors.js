module.exports = function (app) {

    app.use(function(req, res, next) {
        var err = new Error('Oops!');
        err.status = 404;
        next(err);
    });

    // Development
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // Production
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

};