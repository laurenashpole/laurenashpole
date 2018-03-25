let fontHelper = require('../helpers/fonts');

exports.render = function (req, res) {
  let hideEmailModal = req.query['referrer'] === 'email';

  fontHelper.findAll()
    .then ((data) => {
      res.render('index', {
        description: 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.',
        fonts: data.fonts,
        settings: {
          hideEmailModal: hideEmailModal
        }
      });
    })
    .catch((err) => res.send(err));
};