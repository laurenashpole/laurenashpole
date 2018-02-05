import { Base } from './base';
import { extend, request } from '../utilities/utilities';

export const Contact = (function () {
    var events = {
        'click .js-contact-send': 'sendMessage',
        'focus .js-contact-form-input': 'removeError'
    };

    function Contact (options) {
        this.setup(options, events);
        this.cacheSelectors();
    }

    Contact.prototype = extend(Object.create(Base.prototype), {
        cacheSelectors: function () {
            this.$button = this.$el.querySelector('.js-contact-send');
            this.$inputs = this.$el.querySelectorAll('.js-contact-form-input');
        },

        removeError: function (e) {
            e.preventDefault();
            e.target.classList.remove('is-required');
        },

        sendMessage: function (e) {
            e.preventDefault();

            var formValues = this.parseForm();

            if (!formValues.valid) {
                return false;
            }

            this.$button.classList.add('is-processing');

            request('/contact/send', formValues.data, this.afterSend.bind(this));
        },

        afterSend: function (response) {
            if (response.success) {
                window.location = 'contact/confirm';
            }
        },

        parseForm: function () {
            var regex = /\S+@\S+\.\S+/;
            var response = {
                valid: true,
                data: {}
            };

            for (var i = 0, len = this.$inputs.length; i < len; i++) {
                var $input = this.$inputs[i];

                if ($input.value < 1) {
                    $input.classList.add('is-required');
                    response.valid = false;
                } else {
                    if ($input.type === 'email') {
                        if (!regex.test($input.value)) {
                            $input.classList.add('is-required');
                            response.valid = false;
                        }
                    }

                    response.data[$input.name] = $input.value;
                }
            }

            return response;
        }
    });

    return Contact;
})();