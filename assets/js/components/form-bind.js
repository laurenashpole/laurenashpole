var App = App || {};
App.View = App.View || {};

App.View.FormBind = (function () {
    function FormBind (options) {
        if (!options.eventType) {
            return;
        }

        var events = {};
        events[options.eventType] = 'onChange';

        this.setup(options, events);
    }

    FormBind.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        onChange: function (e) {
            e.preventDefault();

            var value = e.target.value;

            if (this.options.callback && this.options.callback instanceof Function) {
                this.options.callback(value, e);
            }
        }
    });

    return FormBind;
})();