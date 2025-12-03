import withPassport from '../../../middleware/passport';

const handler = (req, res, passport) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      res.statusMessage = err.message;
      return res.status(401).json({});
    }

    req.login(user, (err) => {
      if (err) {
        res.statusMessage = err.message;
        return res.status(401).json({});
      }

      res.json({});
    });
  })(req, res);
};

export default (req, res) => {
  withPassport(req, res, handler);
};
