function All () {
    this.initialize();
}

All.prototype.initialize = function () {
    // TO DO: Dev only, delete this line
    window.localStorage.clear();

    var analytics = new Analytics();
    var nav = new Nav();

    this.checkHover();
    this.checkReferrer();
};

All.prototype.checkHover = function () {

    window.addEventListener('mouseover', function onFirstHover () {
        document.querySelector('html').classList.add('has-hover');
        window.removeEventListener('mouseover', onFirstHover, false);
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