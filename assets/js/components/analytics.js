var App = App || {};
App.View = App.View || {};

App.View.Analytics = (function () {
    var events = {
        'click .js-ga-trigger': 'sentEvent'
    };

    function Analytics (options) {
        this.setup(options, events);
    }

    Analytics.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        sendEvent: function (e) {
            var category = e.target.dataset.gaCategory;
            var action = e.target.dataset.gaAction;
            var label = e.target.dataset.gaLabel;

            console.log(category);

            ga('send', 'event', category, action, label);
        }
    });

    return Analytics;
})();