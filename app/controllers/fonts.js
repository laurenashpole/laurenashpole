var express = require('express');
var router = express.Router();
var Font = require('../models/font');

// exports.render = function (req, res) {

//     // Font.find(function (err, fonts) {

//     //     if (err) res.send(err);
//         // res.json(fonts);
//         res.render('fonts');

//     // });

// }

router.get('/fonts', function (req, res) {

    Font.find(function (err, fonts) {

        if (err) res.send(err);
        // res.json(fonts);
        res.render('fonts');

    });

});

router.post('/fonts', function (req, res) {

    var font = new Font();

    // Get data to create font

    font.save(function (err) {

        if (err) res.send(err);
        res.json({ message: 'Font created!' });

    });

});

router.get('/fonts/:font_slug', function (req,res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);
        // res.json(font);
        res.render('font', { font_page: true });

    });

});

router.put('/fonts/:font_slug', function (req, res) {

    Font.findOne({

        slug: req.params.font_slug

    }, function (err, font) {

        if (err) res.send(err);

        // Get data to update font

        font.save(function (err) {

            if (err) res.send(err);
            res.json({ message: 'Font updated!' });

        });

    });

});

router.delete('/fonts/:font_slug', function (req, res) {

    Font.remove({

        slug: req.params.font_slug

    }, function (err,font) {

        if (err) res.send(err);
        res.json({ message: 'Font deleted!' });

    });

});

module.exports = router;