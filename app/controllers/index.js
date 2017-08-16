var fontHelper = require('../helpers/fonts');

exports.render = function (req, res) {
    fontHelper.findBySlug('sewing-patterns-3')
        .then (function (data) {
            res.render('index', {
                description: 'Custom, handcrafted fonts and dingbats for your personal and commercial projects. Plus, code snippets and themes.',
                font: data.font
            });
        })
        .catch(function (err) {
            res.send(err);
        });
}