(function Router () {
    var allPages = new All();

    if (window.location.href.indexOf('fonts/') !== -1) {
        var fontPage = new Font();
    }

    if (window.location.href.indexOf('contact') !== -1) {
        var contactPage = new Contact();
    }
})();