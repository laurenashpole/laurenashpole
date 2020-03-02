const Font = require('../../models/font');
const fontHelper = require('../helpers/fonts');

module.exports.find = function (req, res) {
  fontHelper.findAll()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports.create = function (req, res) {
  const font = new Font(req.body);

  fontHelper.updateFont(req, res, font, true)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports.edit = function (req, res) {
  fontHelper.findById(req.params.font_id)
    .then((data) => fontHelper.updateFont(req, res, data.font, false))
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports.delete = function (req, res) {
  fontHelper.findById(req.params.font_id)
    .then((data) => fontHelper.deleteFont(req, res, data.font))
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};