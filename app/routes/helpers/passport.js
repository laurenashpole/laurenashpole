const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/admin/user');
const allowedEmail = require('../../config/config')()['allowedEmail'];

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy((username, password, done) => {
    process.nextTick(() => {
      if (username !== allowedEmail) {
        return done(null, false, { message: 'You are not authorized to create an account' });
      }

      User.findOne({ 'local.username': username }, (err, user) => {
        if (err) return done(err);

        if (user) {
          return done(null, false, { message : 'That email is already taken.' });
        } else {
          let user = new User();
          user.local.username = username;
          user.local.password = user.generateHash(password);

          user.save((err) => {
            if (err) throw err;
            return done(null, user);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy((username, password, done) => {
    User.findOne({ 'local.username': username }, (err, user) => {
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