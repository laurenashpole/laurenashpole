function View () {

    this.cacheSelectors();
    this.initEvents();

};

View.prototype.cacheSelectors = function () {

    this.nav = document.querySelector('.nav');
    this.textContainer = document.querySelectorAll('.font-example-text');

};

View.prototype.initEvents = function () {

    this.addEventListener('.js-nav-icon', 'click', this.toggleNav.bind(this));
    this.addEventListener('.js-ga-trigger', 'click', this.sendGA.bind(this));
    this.addEventListener('.js-font-example-input', 'keyup', this.updateFontExampleText.bind(this));
    this.addEventListener('.js-font-example-size', 'change', this.updateFontExampleSize.bind(this));
    this.addEventListener('.js-font-example-spacing', 'change', this.updateFontExampleSpacing.bind(this));
    this.addEventListener('.js-font-example-height', 'change', this.updateFontExampleHeight.bind(this));

};

View.prototype.addEventListener = function(selector, eventType, callback) {

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
        text = 'Enter your preview text.';
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

View.prototype.sendGA = function (e) {

    var category = e.target.dataset.gaCategory;
    var action = e.target.dataset.gaAction;
    var label = e.target.dataset.gaLabel;

    ga('send', 'event', category, action, label);

};

var view = new View();