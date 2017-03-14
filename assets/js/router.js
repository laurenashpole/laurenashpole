(function Router () {
    var all = new All();

    if (window.location.href.indexOf('fonts/') !== -1) {
        var fontPage = new FontPage();
    }

    if (window.location.href.indexOf('contact') !== -1) {
        var contactForm = new ContactForm();
    }

})();