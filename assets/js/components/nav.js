function Nav (options) {
    var defaults = {
        el: document.querySelector('.js-nav'),
        events: [
            {
                selector: '.js-nav-icon',
                eventType: 'click',
                callback: this.toggleNav.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
}

Nav.prototype = new View();

Nav.prototype.toggleNav = function (e) {
    e.preventDefault();

    if (this.el.classList.contains('is-open')) {
        this.el.classList.remove('is-open');
    } else {
        this.el.classList.add('is-open');
    }

};