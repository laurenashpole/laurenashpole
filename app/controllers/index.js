const fontHelper = require('./helpers/fonts');
const tagHelper = require('./helpers/tags');
const constantsHelper = require('./helpers/constants')();
const metaHelper = require('./helpers/meta');

exports.render = function (req, res) {
  fontHelper.findAll()
    .then((data) => {
      const tags = tagHelper.getTags(data.fonts);

      res.render('index', {
        meta: metaHelper.index(data, tags, req.path),
        fonts: data.fonts,
        tags: tags,
        glyphs: {
          basic: constantsHelper.basicGlyphs,
          additional: constantsHelper.additionalGlyphs
        }
      });
    })
    .catch((err) => res.send(err));
};