function ContactForm (options) {
    var defaults = {
        el: document.querySelector('.js-contact-form'),
        events: [
            {
                selector: '.js-contact-send',
                eventType: 'click',
                callback: this.sendMessage.bind(this)
            },
            {
                selector: '.js-contact-form-input',
                eventType: 'focus',
                callback: this.removeError.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
}

ContactForm.prototype = new View();

ContactForm.prototype.removeError = function (e) {
    e.preventDefault();
    e.target.classList.remove('is-required');
};

ContactForm.prototype.sendMessage = function (e) {
    e.preventDefault();

    if (!this.validateForm()) {
        return false;
    }

    e.target.classList.add('is-processing');

    var _this = this;
    var request = new XMLHttpRequest();

    var data = {
        senderEmail: this.el.senderEmail.value,
        senderName: this.el.senderName.value,
        subject: this.el.subject.value,
        message: this.el.message.value
    };

    request.open('POST', '/services/contact/send');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function () {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            _this.afterSend.call(_this, response, e);
        }
    };

    request.send(JSON.stringify(data));

};

ContactForm.prototype.afterSend = function (response, e) {
    if (response.success) {
        window.location = 'contact/confirm';
    }
};

ContactForm.prototype.validateForm = function () {
    var valid = true;
    var regex = /\S+@\S+\.\S+/;

    var fields = {
        senderEmail: this.el.senderEmail,
        senderName: this.el.senderName,
        subject: this.el.subject,
        message: this.el.message
    };

    for (var field in fields) {
        if (fields.hasOwnProperty(field)) {
            if (fields[field].value.length < 1) {
                fields[field].classList.add('is-required');
                valid = false;
            }
        }
    }


    if (!regex.test(fields.senderEmail.value)) {
        fields.senderEmail.classList.add('is-required');
        valid = false;
    }

    return valid;
};