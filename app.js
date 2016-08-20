var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var swig = require('swig');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var flash = require('express-flash');
var multer = require('multer');
var sitemap = require('express-sitemap');

var app = express();
var locals = require('./app/config/locals')(app);
var config = require('./app/config/config')();

// View engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'app/views'));

// Database connection
mongoose.connect(config.db, function (err) {
    if (err) throw err;
});;

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
require('./app/config/admin/passport')(passport);
require('./app/routes/admin/routes')(app, passport, multer);
require('./app/routes/routes')(app);

// Sitemap
sitemap({
    generate: app,
    route: {
        '/admin': {
            disallow: true,
        }
    },
}).toFile();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
