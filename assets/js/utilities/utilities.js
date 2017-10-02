var App = App || {};

App.Utilities = (function () {
    function extend (target, object) {
        for (var key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                target[key] = object[key];
            }
        }

        return target;
    }

    function request (src, data, callback) {
        var request = new XMLHttpRequest();

        request.open('POST', src);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        request.onload = function () {
            if (request.status === 200) {
                var response = JSON.parse(request.responseText);

                if (callback instanceof Function) {
                    callback(response);
                }
            }
        };

        request.send(JSON.stringify(data));
    }

    return {
        extend: extend,
        request: request
    }
})();