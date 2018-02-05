import { Base } from './base';
import { extend } from '../utilities/utilities';

export const Analytics = (function () {
    var events = {
        'click .js-ga-trigger': 'sentEvent'
    };

    function Analytics (options) {
        this.setup(options, events);
    }

    Analytics.prototype = extend(Object.create(Base.prototype), {
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