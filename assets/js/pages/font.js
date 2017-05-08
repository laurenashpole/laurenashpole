function Font (options) {
    var defaults = {
        el: document.querySelector('.js-font-page'),
        events: [
            {
                selector: '.js-font-example-input',
                eventType: 'keyup',
                callback: this.updateFontExampleText.bind(this)
            },
            {
                selector: '.js-font-example-size',
                eventType: 'change',
                callback: this.updateFontExampleSize.bind(this)
            },
            {
                selector: '.js-font-image-thumbnail',
                eventType: 'click',
                callback: this.updateFontImageThumbnail.bind(this)
            },
            {
                selector: '.js-font-modal-open',
                eventType: 'click',
                callback: this.openDownloadModal.bind(this)
            },
            {
                selector: '.js-font-modal-signup',
                eventType: 'click',
                callback: this.updateDownloadModal.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
    this.cacheSelectors();
    this.injectCSS();
}

Font.prototype = new View();

Font.prototype.cacheSelectors = function () {
    this.head = document.querySelector('head');
    this.body = document.querySelector('body');
    this.textContainer = this.el.querySelectorAll('.font-example-text');
    this.imageContainer = this.el.querySelector('.js-font-image-main');
    this.modalForm = this.el.querySelector('.js-font-modal-form');
    this.modalClose = this.el.querySelector('.js-font-modal-close');
    this.modalContainer = this.el.querySelector('.js-modal-container');
};

Font.prototype.injectCSS = function () {
    var css = this.el.getAttribute('data-css');

    this.head.innerHTML += '<link rel="stylesheet" href="' + css + '">';
    this.body.classList.remove('css-loading');
};

Font.prototype.updateFontExampleText = function (e) {
    e.preventDefault();

    var text = e.target.value;

    if (text.length === 0) {
        text = 'Enter your preview text';
    }

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].textContent = text;
    }

};

Font.prototype.updateFontExampleSize = function (e) {
    e.preventDefault();

    var size = e.target.value;

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].style['font-size'] = size + 'px';
    }

};

Font.prototype.updateFontImageThumbnail = function (e) {
    e.preventDefault();

    var imageSrc = '/images/fonts/' + e.target.getAttribute('data-image');
    this.imageContainer.src = imageSrc;
};

Font.prototype.openDownloadModal = function (e) {
    e.preventDefault();

    var downloadUrl = e.target.href;
    var hideModal = window.localStorage.getItem('hideEmailModal');
    var category = e.target.dataset.gaCategory;
    var action = e.target.dataset.gaAction;

    if (hideModal) {
        ga('send', 'event', category, action, 'Download');
        window.location = downloadUrl;
    } else {

         var modal = new Modal({
            modal: this.modalContainer,
            callback: function () {
                window.location = downloadUrl;
                window.localStorage.setItem('hideEmailModal', true);
            }
        });

        ga('send', 'event', category, action, 'Download Modal');
        modal.openModal(e);
    }
};

Font.prototype.updateDownloadModal = function (e) {
    this.modalForm.classList.add('hidden');
    this.modalClose.innerHTML = 'I got \'em. Now download that font!'
}