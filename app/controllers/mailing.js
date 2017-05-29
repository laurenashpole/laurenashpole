var request = require('superagent');
var mailchimpConfig = require('../config/config')()['mailchimp'];

exports.signup = function (req, res) {
    var response = {
        success: false
    };

    var isValid = _validateForm(req);

    if (/\/amp\//.test(req.path)) {
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org');
        res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'https://' + req.headers.host);
        res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    }

    if (isValid) {
        var endpoint = 'https://laurenashpole.us4.list-manage.com/subscribe/post';

        request
            .post(endpoint)
            .send('u=' + mailchimpConfig.userId)
            .send('id=' + mailchimpConfig.listId)
            .send('MERGE0=' + req.body.email)
            .end(function (err, postResponse) {
                if (postResponse.status < 300 || (postResponse.status === 400 && postResponse.body.title === 'Member Exists')) {
                    res.statusCode = postResponse.status;
                    response.success = true;
                }

                res.json(response);
            });
    } else {
        res.statusCode = 403;
        res.json(response);
    }
};

var _validateForm = function (req) {
    var emailRegex = /\S+@\S+\.\S+/;

    if (!req.body) {
        return false;
    }

    if (req.body.b_5e9c643a20b49926773037101_a878f779fc) {
        return false;
    }

    if (!req.body.email) {
        return false;
    }

    if (!emailRegex.test(req.body.email)) {
        return false;
    }

    return true;
};