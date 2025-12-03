import cookieSession from 'cookie-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../models/user';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await (await User()).findById(id);
    done(null, user);
  } catch {
    done(new Error(`Could not find user ${id}.`));
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    if (username !== process.env.PASSPORT_EMAIL) {
      return done(new Error('You are not authorized to create an account.'));
    }

    let user = await (await User()).findOne({ 'local.username': username });

    if (user) {
      if (!user.validatePassword(password)) {
        return done(new Error('Oops! Wrong password.'));
      }

      return done(null, user);
    }

    try {
      user = await new (await User())();
      user.local.username = username;
      user.local.password = user.generateHash(password);

      await user.save();
      done(null, user);
    } catch (err) {
      done(new Error(err));
    }
  }),
);

export default (req, res, done) => {
  return new Promise((resolve) => {
    cookieSession({
      secret: process.env.PASSPORT_SECRET,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
      },
    })(req, res, () => {
      passport.initialize()(req, res, () => {
        passport.session()(req, res, () => {
          resolve(done(req, res, passport));
        });
      });
    });
  });
};
