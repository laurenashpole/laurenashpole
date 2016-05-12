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
    this.addEventListener('.js-font-example-select', 'change', this.updateFontExampleSize.bind(this));

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
    this.textContainer.textContent = e.target.value;

};

View.prototype.updateFontExampleSize = function (e) {

    e.preventDefault();
    this.textContainer.style['font-size'] = e.target.value;

};

var view = new View();