import { Base } from './base';
import { extend, request } from '../utilities/utilities';

export const Mailing = (function () {
    var events = {
        'click .js-mailing-signup': 'signup'
    };

    function Mailing (options) {
        this.setup(options, events);
        this.cacheSelectors();
    }

    Mailing.prototype = extend(Object.create(Base.prototype), {
        cacheSelectors: function () {
            this.$button = this.$el.querySelector('.js-mailing-signup');
        },

        signup: function (e) {
            e.preventDefault();

            var data = {
                email: this.$el.email.value
            };

            if (!this.validateEmail(data.email)) {
                this.$button.classList.add('is-error');
                return false;
            }

            this.$button.classList.add('is-processing');

            request(this.$el.action, data, this.afterSignup.bind(this));
        },

        afterSignup: function (response) {
            this.$button.classList.remove('is-processing');

            if (response.success) {
                var signupEvent = new Event('onSignup');

                this.$el.dispatchEvent(signupEvent);
                this.$button.innerHTML = 'Success!';
            } else {
                this.$button.innerHTML = 'Error! Try again.';
            }
        },

        validateEmail: function (email) {
            var valid = true;
            var regex = /\S+@\S+\.\S+/;


            if (!email || !regex.test(email)) {
                valid = false;
            }

            return valid;
        }
    });

    return Mailing;
})();