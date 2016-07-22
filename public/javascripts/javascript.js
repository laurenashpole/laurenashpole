function View () {

    this.cacheSelectors();
    this.initEvents();

};

View.prototype.cacheSelectors = function () {

    this.nav = document.querySelector('.nav');
    this.textContainer = document.querySelector('.font-example-text');

};

View.prototype.initEvents = function () {

    this.addEventListener('.js-nav-icon', 'click', this.toggleNav.bind(this));
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

    this.textContainer.textContent = text;

};

View.prototype.updateFontExampleSize = function (e) {

    e.preventDefault();
    this.textContainer.style['font-size'] = e.target.value + 'px';

};

View.prototype.updateFontExampleSpacing = function (e) {

    e.preventDefault();

    var letterSpacing = e.target.value / 1000;
    this.textContainer.style['letter-spacing'] = letterSpacing + 'em';

};

View.prototype.updateFontExampleHeight = function (e) {

    e.preventDefault();

    var lineHeight = e.target.value / 100;
    this.textContainer.style['line-height'] = lineHeight;

};

var view = new View();