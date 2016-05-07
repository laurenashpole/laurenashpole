var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var fonts = require('../controllers/fonts');

module.exports = function () {

    router.get('/', index.render);
    router.get('/fonts', fonts.render);

};