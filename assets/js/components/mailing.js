function Mailing (options) {
    var defaults = {
        el: document.querySelector('.js-mailing-form'),
        events: [
            {
                selector: '.js-mailing-signup',
                eventType: 'click',
                callback: this.signup.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);

    this.cacheSelectors();
}

Mailing.prototype = new View();

Mailing.prototype.cacheSelectors = function () {
    this.button = this.el.querySelector('.js-mailing-signup');
};

Mailing.prototype.signup = function (e) {
    e.preventDefault();

    var _this = this;
    var email = this.el.email.value;

    if (!this.validateForm(email)) {
        this.button.classList.add('is-error');
        return false;
    }

    this.button.classList.add('is-processing');

    var request = new XMLHttpRequest();

    request.open('POST', this.el.action);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function () {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            _this.afterSignup.call(_this, response, e);
        }
    };

    request.send(JSON.stringify({email: email}));

};

Mailing.prototype.afterSignup = function (response, e) {
    this.button.classList.remove('is-processing');

    if (response.success) {
        var signupEvent = new Event('onSignup');
        this.el.dispatchEvent(signupEvent);
        this.button.innerHTML = 'Success!';
    } else {
        this.button.innerHTML = 'Error! Try again.';
    }
};

Mailing.prototype.validateForm = function (email) {
    var valid = true;
    var regex = /\S+@\S+\.\S+/;


    if (!email || !regex.test(email)) {
        valid = false;
    }

    return valid;
};