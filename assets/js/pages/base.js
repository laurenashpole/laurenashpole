var App = App || {};
App.Page = App.Page || {};

App.Page.Base = (function () {
    function init () {
        checkTouch();
        checkReferrer();

        var analytics = new App.View.Analytics();

        var mailing = new App.View.Mailing({
            el: '.js-mailing-form'
        });
    }

    function checkTouch () {
        window.addEventListener('touchstart', function onFirstTouch() {
            document.querySelector('html').classList.remove('is-not-touch', 'no-touch');
            window.removeEventListener('touchstart', onFirstTouch, false);
        }, false);
    }

    function checkReferrer () {
        var referrer = getUrlParameter('referrer');

        if (referrer === 'email') {
            window.localStorage.setItem('hideEmailModal', true);
        }
    }

    function getUrlParameter (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);

        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    return {
        init: init
    }
})();