var App = App || {};
App.View = App.View || {};

App.View.Admin = (function () {
    var events = {
        'submit .js-admin-delete': 'deleteFont'
    };

    function Admin (options) {
        this.setup(options, events);
    }

    Admin.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        deleteFont: function (e) {
            e.preventDefault();

            if (confirm('Are you sure you want to delete this font?')) {
                App.Utilities.request(e.target.action, {}, this.redirect);
            }
        },

        redirect: function (response) {
            if (response.success) {
                window.location = '/admin/fonts';
            }
        }
    });

    return Admin;
})();