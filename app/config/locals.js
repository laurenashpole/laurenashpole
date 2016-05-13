var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');

module.exports = function (app) {

    app.locals.site_name = 'Lauren Ashpole';
    app.locals.root_path = rootPath;

};