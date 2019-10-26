exports.authenticate = function (req, res) {
  let response = {};

  if (req.user) {
    response.user = req.user;
  } else if (req.info) {
    response.err = req.info.message || 'Authentication failed.';
  }

  res.json(response);
};

exports.logout = function (req, res) {
  req.logout();
  res.json({});
};