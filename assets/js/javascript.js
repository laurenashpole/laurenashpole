function View () {
    this.cacheSelectors();
    this.initEvents();
};

View.prototype.cacheSelectors = function () {
    this.nav = document.querySelector('.nav');
    this.textContainer = document.querySelectorAll('.font-example-text');
    this.imageContainer = document.querySelectorAll('.js-font-image-main');
};

View.prototype.initEvents = function () {
    this.addEventListener('.js-nav-icon', 'click', this.toggleNav.bind(this));
    this.addEventListener('.js-ga-trigger', 'click', this.sendGA.bind(this));
    this.addEventListener('.js-font-example-input', 'keyup', this.updateFontExampleText.bind(this));
    this.addEventListener('.js-font-example-size', 'change', this.updateFontExampleSize.bind(this));
    this.addEventListener('.js-font-image-thumbnail', 'click', this.updateFontImageThumbnail.bind(this));
};

View.prototype.addEventListener = function (selector, eventType, callback) {
    var els = document.querySelectorAll(selector);

    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener(eventType, function (e) {
            if (callback instanceof Function) {
                callback(e);
            }
        });
    }

};

View.prototype.toggleNav = function (e) {
    e.preventDefault();

    if (this.nav.classList.contains('is-open')) {
        this.nav.classList.remove('is-open');
    } else {
        this.nav.classList.add('is-open');
    }

};

View.prototype.updateFontExampleText = function (e) {
    e.preventDefault();

    var text = e.target.value;

    if (text.length === 0) {
        text = 'Enter your preview text';
    }

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].textContent = text;
    }

};

View.prototype.updateFontExampleSize = function (e) {
    e.preventDefault();

    var size = e.target.value;

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].style['font-size'] = size + 'px';
    }

};

View.prototype.updateFontImageThumbnail = function (e) {
    e.preventDefault();

    for (var i = 0; i < this.imageContainer.length; i++) {
        this.imageContainer[i].src = e.target.src;
    }

};

View.prototype.sendGA = function (e) {
    var category = e.target.dataset.gaCategory;
    var action = e.target.dataset.gaAction;
    var label = e.target.dataset.gaLabel;

    ga('send', 'event', category, action, label);

};

var view = new View();

function ContactForm () {
    View.call(this);
};

ContactForm.prototype = View.prototype;
ContactForm.prototype.constructor = ContactForm;

ContactForm.prototype.cacheSelectors = function () {
    this.contactForm = document.querySelector('.js-contact-form');
};

ContactForm.prototype.initEvents = function () {
    this.addEventListener('.js-contact-send', 'click', this.sendMessage.bind(this));
    this.addEventListener('.js-contact-form-input', 'focus', this.removeError.bind(this));
};

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
        senderEmail: this.contactForm.senderEmail.value,
        senderName: this.contactForm.senderName.value,
        subject: this.contactForm.subject.value,
        message: this.contactForm.message.value
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

    var fields = {
        senderEmail: this.contactForm.senderEmail,
        senderName: this.contactForm.senderName,
        subject: this.contactForm.subject,
        message: this.contactForm.message
    };

    for (var field in fields) {
        if (fields.hasOwnProperty(field)) {
            if (fields[field].value.length < 1) {
                fields[field].classList.add('is-required');
                valid = false;
            }
        }
    }

    var re = /\S+@\S+\.\S+/;

    if (!re.test(fields.senderEmail.value)) {
        fields.senderEmail.classList.add('is-required');
        valid = false;
    }

    return valid;

};

var contactForm = new ContactForm();