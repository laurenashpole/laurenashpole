var express = require('express');
var router = express.Router();

router.use(require('./fonts'));

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

// exports.render = function (req, res) {
//     res.render('index');
// }