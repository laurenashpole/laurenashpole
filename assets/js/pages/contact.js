import { Contact } from '../components/contact';

export const ContactPage = (function () {
    function init () {
        var $el = document.querySelector('.js-contact-form');

        if (!$el) {
            return;
        };

        var contact = new Contact({
            el: '.js-contact-form'
        });
    }

    return {
        init: init
    }
})();