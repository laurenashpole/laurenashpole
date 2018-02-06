exports.authenticate = function (req, res) {
  let response = {
    success: false
  };

  if (req.user) {
    response.success = true;
    response.data = req.user;
  } else if (req.info) {
    response.err = req.info;
  }

  res.json(response);
};

exports.logout = function (req, res) {
  req.logout();
  res.json({ success: true });
};