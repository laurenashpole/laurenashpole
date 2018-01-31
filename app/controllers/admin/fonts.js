let Font = require('../../models/font');
let fontHelper = require('../../helpers/fonts');

exports.all = function (req, res) {
  fontHelper.findAll()
    .then ((data) => {
      res.render('admin/fonts/index', {
        title: 'Admin',
        fonts: data.fonts
      });
    })
    .catch((err) => res.send(err));
};

exports.renderCreate = function (req, res) {
  res.render('admin/fonts/create', {
    title: 'Admin'
  });
};

exports.create = function (req, res) {
  let font = new Font(req.body);

  fontHelper.updateFont(req, res, font, true)
    .then((data) => res.redirect('/admin/fonts'))
    .catch((err) => res.send(err));
};

exports.renderEdit = function (req, res, next) {
  fontHelper.findById(req.params.font_id)
    .then((data) => {
      if (data.success) {
        res.render('admin/fonts/edit', {
          title: 'Admin',
          font: data.font
        });
      } else {
        let notFound = new Error('Oops!');
        notFound.status = 404;
        return next(notFound);
      }
    })
    .catch((err) => res.send(err));
};

exports.edit = function (req, res) {
  fontHelper.findById(req.params.font_id)
    .then((data) => fontHelper.updateFont(req, res, data.font, false))
    .then((data) => res.redirect('/admin/fonts'))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  fontHelper.findById(req.params.font_id)
    .then((data) => fontHelper.deleteFont(req, res, data.font))
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
};