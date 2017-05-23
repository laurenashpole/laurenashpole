var fontHelper = require('../../helpers/fonts');

exports.all = function (req, res) {
    fontHelper.findAll()
        .then (function (data) {
            res.render('admin/fonts/index', {
                title: 'Admin',
                fonts: data.fonts
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.renderCreate = function (req, res) {
    res.render('admin/fonts/create', {
        title: 'Admin'
    });
};

exports.create = function (req, res) {
    var font = new Font(req.body);

    fontHelper.updateFont(req, font, true)
        .then(function (data) {
            res.redirect('/admin/fonts');
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.renderEdit = function (req, res, next) {
    fontHelper.findById(req.params.font_id)
        .then(function (data) {
            if (data.success) {
                res.render('admin/fonts/edit', {
                    title: 'Admin',
                    font: data.font
                });
            } else {
                var notFound = new Error('Oops!');
                notFound.status = 404;
                return next(notFound);
            }
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.edit = function (req, res) {
    fontHelper.findById(req.params.font_id)
        .then(function (data) {
            return fontHelper.updateFont(req, data.font, false);
        })
        .then (function (data) {
            res.redirect('/admin/fonts');
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.delete = function (req, res) {
    fontHelper.findById(req.params.font_id)
        .then(function (data) {
            return fontHelper.deleteFont(req, data.font);
        })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
};