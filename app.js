const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const swig = require('swig');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const multer = require('multer');
const compression = require('compression');

// App
const app = express();
const config = require('./app/config/config')();
const locals = require('./app/config/locals')(app, config);
const assetPaths = ['/js', '/css', '/uploads/css', '/images', '/uploads/images'];

// View Engine
app.use(compression());
require('./app/views/helpers/assets')(swig);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'app/views'));

// Database
mongoose.connect(config.db, (err) => {
  if (err) throw err;
});

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
assetPaths.forEach((assetPath) => {
  app.use(assetPath, express.static(path.join(__dirname, `public${assetPath}`), { maxAge: '30d' }));
});
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
require('./app/routes/helpers/passport')(passport);
require('./app/routes/admin/routes')(app, passport, multer);
require('./app/routes/routes')(app, multer);
require('./app/routes/errors')(app);

module.exports = app;
