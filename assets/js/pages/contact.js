var App = App || {};
App.Page = App.Page || {};

App.Page.Contact = (function () {
    function init () {
        $el = document.querySelector('.js-contact-form');

        if (!$el) {
            return;
        };

        var contact = new App.View.Contact({
            el: '.js-contact-form'
        });
    }

    return {
        init: init
    }
})();