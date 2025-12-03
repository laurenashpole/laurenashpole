import withPassport from '../../../middleware/passport';

const handler = async (req, res) => {
  await req.logout();
  res.redirect('/admin');
};

export default (req, res) => {
  withPassport(req, res, handler);
};
