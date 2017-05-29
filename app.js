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
var compression = require('compression');

var app = express();
app.use(compression());
var config = require('./app/config/config')();
var locals = require('./app/config/locals')(app, config);

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
app.use(bodyParser.urlencoded({ extended: true }));
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
require('./app/routes/routes')(app, multer);
require('./app/routes/errors')(app);

module.exports = app;
