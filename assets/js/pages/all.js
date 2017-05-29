function All () {
    this.initialize();
}

All.prototype.initialize = function () {
    var analytics = new Analytics();
    var mailing = new Mailing();

    this.checkTouch();
    this.checkReferrer();
};

All.prototype.checkTouch = function () {

    window.addEventListener('touchstart', function onFirstTouch() {
        document.querySelector('html').classList.remove('is-not-touch');
        window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
};

All.prototype.checkReferrer = function () {
    var referrer = this.getUrlParameter('referrer');

    if (referrer === 'email') {
        window.localStorage.setItem('hideEmailModal', true);
    }
};

All.prototype.getUrlParameter = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};