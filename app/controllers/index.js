exports.render = function (req, res) {

    var page = {
        home: true
    }

    res.render('index', {
        page: page
    });
}