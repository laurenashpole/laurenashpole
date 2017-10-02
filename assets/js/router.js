var App = App || {};

App.Router = (function () {
    var path = window.location.pathname;

    App.Page.Base.init();

    if (path.indexOf('fonts') !== -1) {
        if (path.match(/fonts\/(.*)/)[1]) {
            App.Page.Font.init();
        } else {
            App.Page.Fonts.init();
        }
    }

    if (path.indexOf('contact') !== -1) {
        App.Page.Contact.init();
    }
})();