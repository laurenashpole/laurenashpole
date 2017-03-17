function Analytics (options) {
    var defaults = {
        events: [
            {
                selector: '.js-ga-trigger',
                eventType: 'click',
                callback: this.sendEvent.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
}

Analytics.prototype = new View();

Analytics.prototype.sendEvent = function (e) {
    var category = e.target.dataset.gaCategory;
    var action = e.target.dataset.gaAction;
    var label = e.target.dataset.gaLabel;

    ga('send', 'event', category, action, label);
};