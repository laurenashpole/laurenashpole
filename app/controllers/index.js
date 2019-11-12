const fontHelper = require('./helpers/fonts');
const constantsHelper = require('./helpers/constants')();
const metaHelper = require('./helpers/meta');

exports.render = function (req, res) {
  fontHelper.findAll()
    .then((data) => {
      res.render('index', {
        meta: metaHelper.index(data, req.path),
        fonts: data.fonts,
        glyphs: {
          basic: constantsHelper.basicGlyphs,
          additional: constantsHelper.additionalGlyphs
        }
      });
    })
    .catch((err) => res.send(err));
};