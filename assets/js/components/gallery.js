import { Base } from './base';
import { extend } from '../utilities/utilities';

export const Gallery = (function () {
    var events = {
        'click .js-font-image-thumbnail': 'updateImage'
    };

    function Gallery (options) {
        this.setup(options, events);
        this.cacheSelectors();
    }

    Gallery.prototype = extend(Object.create(Base.prototype), {
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