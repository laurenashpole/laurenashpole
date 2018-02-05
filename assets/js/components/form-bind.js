import { Base } from './base';
import { extend } from '../utilities/utilities';

export const FormBind = (function () {
    function FormBind (options) {
        if (!options.eventType) {
            return;
        }

        var events = {};
        events[options.eventType] = 'onChange';

        this.setup(options, events);
    }

    FormBind.prototype = extend(Object.create(Base.prototype), {
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