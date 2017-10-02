var App = App || {};
App.Page = App.Page || {};

App.Page.Admin = (function () {
    function init () {
        var admin = new App.View.Admin();
    }

    return {
        init: init
    }
})();

App.Page.Admin.init();