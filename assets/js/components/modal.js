function Modal (options) {
    var defaults = {
        events: [
            {
                selector: '.js-open-modal',
                eventType: 'click',
                callback: this.openModal.bind(this)
            },
            {
                selector: '.js-close-modal',
                eventType: 'click',
                callback: this.closeModal.bind(this)
            },
            {
                selector: '.js-close-modal-background',
                eventType: 'click',
                callback: this.closeModalBackground.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
}

Modal.prototype = new View();

Modal.prototype.openModal = function (e) {
    e.preventDefault();

    this.options.modal.classList.add('is-open');
    document.querySelector('html').classList.add('modal-open');

    if (this.options.openCallback && this.options.openCallback instanceof Function) {
        this.options.openCallback(e);
    }
};

Modal.prototype.closeModal = function (e) {
    e.preventDefault();

    this.options.modal.classList.remove('is-open');
    document.querySelector('html').classList.remove('modal-open');

    if (this.options.closeCallback && this.options.closeCallback instanceof Function) {
        this.options.closeCallback(e);
    }
}

Modal.prototype.closeModalBackground = function (e) {

    if (e.target.classList.contains('js-close-modal-background')) {
        e.preventDefault();

        this.options.modal.classList.remove('is-open');
        document.querySelector('html').classList.remove('modal-open');
    }
}