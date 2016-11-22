function View () {
    this.cacheSelectors();
    this.initEvents();
};

View.prototype.cacheSelectors = function () {
    this.nav = document.querySelector('.nav');
    this.textContainer = document.querySelectorAll('.font-example-text');
    this.imageContainer = document.querySelectorAll('.font-hero-main-image');
};

View.prototype.initEvents = function () {
    this.addEventListener('.js-nav-icon', 'click', this.toggleNav.bind(this));
    this.addEventListener('.js-ga-trigger', 'click', this.sendGA.bind(this));
    this.addEventListener('.js-font-example-input', 'keyup', this.updateFontExampleText.bind(this));
    this.addEventListener('.js-font-example-size', 'change', this.updateFontExampleSize.bind(this));
    this.addEventListener('.js-font-example-spacing', 'change', this.updateFontExampleSpacing.bind(this));
    this.addEventListener('.js-font-example-height', 'change', this.updateFontExampleHeight.bind(this));
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

View.prototype.updateFontExampleSpacing = function (e) {
    e.preventDefault();

    var letterSpacing = e.target.value / 1000;

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].style['letter-spacing'] = letterSpacing + 'em';
    }

};

View.prototype.updateFontExampleHeight = function (e) {
    e.preventDefault();

    var lineHeight = e.target.value / 100;

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].style['line-height'] = lineHeight;
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

function ContactModal () {
    View.call(this);
};

ContactModal.prototype = View.prototype;
ContactModal.prototype.constructor = ContactModal;

ContactModal.prototype.cacheSelectors = function () {
    this.body = document.body;
    this.contactModal = document.querySelector('.js-contact-modal-container');
    this.contactForm = document.querySelector('.js-contact-form');
};

ContactModal.prototype.initEvents = function () {
    this.addEventListener('.js-nav-contact', 'click', this.openContactModal.bind(this));
    this.addEventListener('.js-contact-modal-close', 'click', this.closeContactModal.bind(this));
    this.addEventListener('.js-contact-send', 'click', this.sendMessage.bind(this));
    this.addEventListener('.js-contact-form-input', 'focus', this.removeError.bind(this));
};

ContactModal.prototype.openContactModal = function (e) {
    e.preventDefault();

    this.contactModal.classList.add('is-open');
    this.body.classList.add('no-scroll');
};

ContactModal.prototype.closeContactModal = function (e) {
    e.preventDefault();

    this.contactModal.classList.remove('is-open');
    e.target.classList.remove('is-complete');
    e.target.classList.remove('is-error');
    this.body.classList.remove('no-scroll');
};

ContactModal.prototype.removeError = function (e) {
    e.preventDefault();

    e.target.classList.remove('is-required');
};

ContactModal.prototype.sendMessage = function (e) {
    e.preventDefault();

    if (!this.validateForm()) {
        return false;
    }

    e.target.classList.add('is-processing');

    var _this = this;
    var request = new XMLHttpRequest();

    var data = {
        senderEmail: this.contactForm.senderEmail.value,
        subject: this.contactForm.subject.value,
        message: this.contactForm.message.value
    };

    request.open('POST', '/contact/send');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function () {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            _this.afterSend.call(_this, response, e);
        }
    };

    request.send(JSON.stringify(data));

};

ContactModal.prototype.afterSend = function (response, e) {
    var _this = this;

    e.target.classList.remove('is-processing');

    if (response.success) {
        e.target.classList.add('is-complete');
    } else {
        e.target.classList.add('is-error');
    }

    setTimeout(function () {
        _this.closeContactModal(e);
    }, 2000);

};

ContactModal.prototype.validateForm = function () {
    var valid = true;

    var fields = {
        senderEmail: this.contactForm.senderEmail,
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

var contactModal = new ContactModal();