function Admin (options) {
    var defaults = {
        events: [
            {
                selector: '.js-admin-delete',
                eventType: 'submit',
                callback: this.deleteFont.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
}

Admin.prototype = new View();

Admin.prototype.deleteFont = function (e) {
    e.preventDefault();

    if (confirm('Are you sure you want to delete this font?')) {
        var endpoint = (e.target).action;
        this.xmlRequest(endpoint);
    }
};

Admin.prototype.xmlRequest = function (endpoint) {
    var _this = this;
    var request = new XMLHttpRequest();

    request.open('POST', endpoint, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function () {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            _this.redirect.call(_this, response);
        }
    };

    request.send();
};

Admin.prototype.redirect = function (response) {
    if (response.success) {
        window.location = '/admin/fonts';
    }
};

var admin = new Admin();