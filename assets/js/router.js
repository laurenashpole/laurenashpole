(function Router () {
    var analytics = new Analytics();
    var nav = new Nav();

    if (window.location.href.indexOf('fonts/') !== -1) {
        var fontPage = new FontPage();
    }

    if (window.location.href.indexOf('contact') !== -1) {
        var contactForm = new ContactForm();
    }

})();