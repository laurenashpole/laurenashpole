const fontHelper = require('../helpers/fonts');
const constantsHelper = require('../helpers/constants')();

exports.render = function (req, res) {
  fontHelper.findAll()
    .then((data) => {
      const tags = fontHelper.getTags(data.fonts);

      res.render('index', {
        description: 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.',
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