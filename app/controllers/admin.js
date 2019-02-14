let fontHelper = require('../helpers/fonts');

exports.all = function (req, res) {
  let isAuthenticated = req.isAuthenticated();

  if (isAuthenticated) {
    fontHelper.findAll()
      .then((data) => {
        res.render('admin/index', {
          title: 'Admin',
          isAuthenticated: isAuthenticated,
          fonts: data.fonts
        });
      })
      .catch((err) => res.send(err));
  } else {
    res.render('admin/index', {
      title: 'Admin',
      isAuthenticated: isAuthenticated
    })
  }
};