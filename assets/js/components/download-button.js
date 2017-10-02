var App = App || {};
App.View = App.View || {};

App.View.DownloadButton = (function () {
    var events = {
        'click': 'onClick'
    };

    function DownloadButton (options) {
        this.setup(options, events);
        this.firstClick = true;
    }

    DownloadButton.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        onClick: function (e) {
            e.preventDefault();

            var hideModal = window.localStorage.getItem('hideEmailModal');

            if (this.firstClick) {
                this.cacheValues();
                this.firstClick = false;
            }

            if (hideModal) {
                this.sendEvent('Download');
                window.location = this.downloadUrl;
            } else {
                this.initModal(e);
            }
        },

        cacheValues: function () {
            this.gaCategory = this.$el.dataset.gaCategory;
            this.gaAction = this.$el.dataset.gaAction;
            this.downloadUrl = this.$el.href;
        },

        initModal: function (e) {
            if (!this.modal) {
                this.modal = new App.View.Modal({
                    modalClass: '.js-modal-container',
                    openCallback: this.initMailing.bind(this),
                    closeCallback: this.download.bind(this)
                });
            }

            this.sendEvent('Download Modal');
            this.modal.open(e);
        },

        initMailing: function () {
            var _this = this;

            if (!this.mailing) {
                this.mailing = new App.View.Mailing({
                    el: '.js-modal-container .js-modal-mailing-form'
                });
            }

            this.mailing.$el.addEventListener('onSignup', function (e) {
                setTimeout(function () {
                    _this.modal.close(e);
                }, 1500);
            });
        },

        download: function () {
            window.location = this.downloadUrl;
            window.localStorage.setItem('hideEmailModal', true);
        },

        sendEvent: function (label) {
            ga('send', 'event', this.gaCategory, this.gaAction, label);
        }
    });

    return DownloadButton;
})();