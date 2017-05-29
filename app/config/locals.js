module.exports = function (app, config) {
    app.locals.site_name = 'Lauren Ashpole';
    app.locals.email_address = 'lauren@laurenashpole.com';
    app.locals.host_url = config.hostUrl;
};