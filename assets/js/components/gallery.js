var App = App || {};
App.View = App.View || {};

App.View.Gallery = (function () {
    var events = {
        'click .js-font-image-thumbnail': 'updateImage'
    };

    function Gallery (options) {
        this.setup(options, events);
        this.cacheSelectors();
    }

    Gallery.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        cacheSelectors: function () {
            this.$imageContainer = this.$el.querySelector('.js-font-image-main');
        },

        updateImage: function (e) {
            e.preventDefault();

            var imageSrc = '/images/fonts/' + e.target.getAttribute('data-image');
            this.$imageContainer.src = imageSrc;
        }
    });

    return Gallery;
})();