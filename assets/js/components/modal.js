var App = App || {};
App.View = App.View || {};

App.View.Modal = (function () {
    var events = {
        'click .js-open-modal': 'open',
        'click .js-close-modal': 'close'
    };

    function Modal (options) {
        this.setup(options, events);
        this.cacheSelectors();
    }

    Modal.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        cacheSelectors: function () {
            this.$modal = this.$el.querySelector(this.options.modalClass);
        },

        open: function (e) {
            e.preventDefault();

            this.$modal.classList.add('is-open');
            this.$el.classList.add('modal-open');

            if (this.options.openCallback && this.options.openCallback instanceof Function) {
                this.options.openCallback(e);
            }
        },

        close: function (e) {
            e.preventDefault();

            if (e.target.classList.contains('js-close-modal')) {
                var cancelCallback = e.target.getAttribute('data-cancel-callback');

                this.$modal.classList.remove('is-open');
                this.$el.classList.remove('modal-open');

                if (!cancelCallback && this.options.closeCallback && this.options.closeCallback instanceof Function) {
                    this.options.closeCallback(e);
                }
            }
        }
    });

    return Modal;
})();