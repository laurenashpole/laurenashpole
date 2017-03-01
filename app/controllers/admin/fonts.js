var Font = require('../../models/font');

exports.all = function (req, res) {

    Font.find().sort({ name: 'asc' }).exec(function (err, fonts) {

        if (err) res.send(err);

        res.render('admin/fonts/index', {
            title: 'Admin',
            fonts: fonts
        });

    });

};

exports.edit = function (req, res, next) {

    Font.findById(req.params.font_id, function (err, font) {

        if (err) res.send(err);

        if (!font) {
            var notFound = new Error('Oops!');
            notFound.status = 404;
            return next(notFound);
        }

        res.render('admin/fonts/edit', {
            title: 'Admin',
            font: font
        });

    });

};

exports.create = function (req, res) {

    res.render('admin/fonts/create', {
        title: 'Admin'
    });

};