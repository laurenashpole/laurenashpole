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
};

Modal.prototype.closeModal = function (e) {
    e.preventDefault();

    this.options.modal.classList.remove('is-open');
    document.querySelector('html').classList.remove('modal-open');

    if (this.options.callback && this.options.callback instanceof Function) {
        this.options.callback(e);
    }
}
