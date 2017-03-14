function FontPage (options) {
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
                selector: '.js-font-download',
                eventType: 'click',
                callback: this.openDownloadModal.bind(this)
            }
        ]
    };

    this.options = this.extend(defaults, options);
    View.call(this, this.options);
    this.cacheSelectors();
}

FontPage.prototype = new View();

FontPage.prototype.cacheSelectors = function () {
    this.textContainer = this.el.querySelectorAll('.font-example-text');
    this.imageContainer = this.el.querySelectorAll('.js-font-image-main');
};

FontPage.prototype.updateFontExampleText = function (e) {
    e.preventDefault();

    var text = e.target.value;

    if (text.length === 0) {
        text = 'Enter your preview text';
    }

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].textContent = text;
    }

};

FontPage.prototype.updateFontExampleSize = function (e) {
    e.preventDefault();

    var size = e.target.value;

    for (var i = 0; i < this.textContainer.length; i++) {
        this.textContainer[i].style['font-size'] = size + 'px';
    }

};

FontPage.prototype.updateFontImageThumbnail = function (e) {
    e.preventDefault();

    for (var i = 0; i < this.imageContainer.length; i++) {
        this.imageContainer[i].src = e.target.src;
    }

};

FontPage.prototype.openDownloadModal = function (e) {
    e.preventDefault();

    var downloadUrl = e.target.href;
    var hideModal = window.localStorage.getItem('hideDownloadModal');

    if (hideModal) {
        window.location = downloadUrl;
    } else {

        var modal = new Modal({
            modal: document.querySelector('.js-modal-container'),
            callback: function () {
                window.location = downloadUrl;
                window.localStorage.setItem('hideDownloadModal', true);
            }
        });

        modal.openModal(e);
    }
};