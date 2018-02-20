let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let swig = require('swig');
let mongoose = require('mongoose');
let passport = require('passport');
let session = require('express-session');
let flash = require('express-flash');
let multer = require('multer');
let compression = require('compression');

// App
let app = express();
let config = require('./app/config/config')();
let locals = require('./app/config/locals')(app, config);

// View Engine
app.use(compression());
require('./app/helpers/assets')(swig);
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
app.use('/js', express.static(path.join(__dirname, 'public/js'), { maxAge: '30d' }));
app.use('/css', express.static(path.join(__dirname, 'public/css'), { maxAge: '30d' }));
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
require('./app/helpers/passport')(passport);
require('./app/routes/admin/routes')(app, passport, multer);
require('./app/routes/routes')(app, multer);
require('./app/routes/errors')(app);

module.exports = app;
