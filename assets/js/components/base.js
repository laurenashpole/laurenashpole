var App = App || {};
App.View = App.View || {};

App.View.Base = (function () {
    function Base () {}

    Base.prototype = {
        setup: function (options, events) {
            this.options = options || {};
            this.el = this.options.el || 'html';
            this.$el = document.querySelector(this.el);

            if (events) {
                this.parseEvents(events);
            }
        },

        parseEvents: function (events) {
            for (var event in events) {
                var $els;
                var type = event.split(' ')[0];
                var selector = event.split(' ')[1];
                var callback = events[event];

                if (selector) {
                    $els = this.$el.querySelectorAll(selector);
                } else {
                    $els = this.$el ? [this.$el] : [];
                }

                if (type && $els.length > 0 && callback) {
                    this.initEventListeners(type, $els, callback);
                }
            }
        },

        initEventListeners: function (type, $els, callback) {
            var _this = this;

            for (var i = 0, len = $els.length; i < len; i++) {
                $els[i].addEventListener(type, function (e) {
                    if (_this[callback] instanceof Function) {
                        _this[callback](e);
                    }
                }, false);
            }
        }
    };

    return Base;
})();