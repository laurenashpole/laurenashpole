import { Base } from './base';
import { extend, request } from '../utilities/utilities';

export const Admin = (function () {
    var events = {
        'submit .js-admin-delete': 'deleteFont'
    };

    function Admin (options) {
        this.setup(options, events);
    }

    Admin.prototype = extend(Object.create(Base.prototype), {
        deleteFont: function (e) {
            e.preventDefault();

            if (confirm('Are you sure you want to delete this font?')) {
                request(e.target.action, {}, this.redirect);
            }
        },

        redirect: function (response) {
            if (response.success) {
                window.location = '/admin/fonts';
            }
        }
    });

    return Admin;
})();