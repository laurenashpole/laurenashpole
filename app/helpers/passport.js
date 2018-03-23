let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/admin/user');
let allowedEmail = require('../config/config')()['allowedEmail'];

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(function (username, password, done) {
    process.nextTick(function () {
      if (username !== allowedEmail) {
        return done(null, false, { message: 'You are not authorized to create an account' });
      }

      User.findOne({ 'local.username': username }, function (err, user) {
        if (err) return done(err);

        if (user) {
          return done(null, false, { message : 'That email is already taken.' });
        } else {
          var user = new User();

          user.local.username = username;
          user.local.password = user.generateHash(password);

          user.save(function (err) {
            if (err) throw err;
            return done(null, user);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy(function (username, password, done) {
    User.findOne({ 'local.username': username }, function (err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: 'No user found.' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Oops! Wrong password.' });
      }

      return done(null, user);
    });
  }));
};