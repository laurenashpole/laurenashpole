function View (options) {
    options = options || {};
    this.el = options.el || document;

    if (options.events) {
        this.initEvents(options.events);
    }
}

View.prototype.initEvents = function (events) {

    for (var i = 0; i < events.length; i++) {
        if (events[i].selector && events[i].eventType && events[i].callback) {
            this.addEventListener(events[i].selector, events[i].eventType, events[i].callback);
        }
    }
};

View.prototype.addEventListener = function (selector, eventType, callback) {
    var els = this.el ? this.el.querySelectorAll(selector) : document.querySelectorAll(selector);

    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener(eventType, function (e) {
            if (callback instanceof Function) {
                callback(e);
            }
        });
    }
};

View.prototype.extend = function (defaults, options) {
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            defaults[key] = options[key];
        }
    }

    return defaults;
};