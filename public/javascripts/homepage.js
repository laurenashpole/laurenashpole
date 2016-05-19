function Homepage () {

    this.initialize();

};

Homepage.prototype.initialize = function () {

    this.recalculatePosition = false;

    this.cacheSelectors();
    this.initListeners();
    this.initScrollToFixed();

};

Homepage.prototype.cacheSelectors = function () {

    this.$el = $('.slides');
    this.$window = $(window);
    this.$slides = this.$el.find('.slide-container');

};

Homepage.prototype.initListeners = function () {

    this.$window.on('resize', this.debounce(this.onResize.bind(this), 250, true));
    this.$window.on('resize', this.debounce(this.onResizeStop.bind(this), 250));

};

Homepage.prototype.initScrollToFixed = function () {

    var _this = this;

    $.each(this.$slides, function (index, slide) {

        var $slide = $(slide);

        window.requestAnimationFrame($.proxy(_this.checkPosition($slide, false), _this));

    });

    window.requestAnimationFrame($.proxy(_this.checkPosition($('.slides'), true), _this));

};

Homepage.prototype.onResize = function () {

    this.recalculatePosition = true;

};

Homepage.prototype.onResizeStop = function () {

    this.recalculatePosition = false;

};

Homepage.prototype.debounce = function (func, wait, immediate) {

    var timeout;

    return function() {

        var context = this;
        var args = arguments;

        var later = function() {

            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }

        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }

    };

};

Homepage.prototype.checkPosition = function ($el, isContainer) {

    var _this = this;
    var lastScroll = 0;
    var elementIsFixed = false;
    var elementPosition = $el.offset().top;
    var elementBottom = elementPosition + $el.height();

    var tick = function () {

        if (_this.recalculatePosition) {
            elementPosition = $el.offset().top;
            elementBottom = elementPosition + $el.height();
        }

        var currentScroll = _this.$window.scrollTop();

        if (lastScroll === currentScroll) {

            window.requestAnimationFrame(tick);
            return;

        } else {

            lastScroll = currentScroll;

        }

        if (lastScroll >= elementPosition) {

            if (isContainer) {

                $el.addClass('has-fixed-slides');

            } else {

                if (lastScroll <= elementBottom) {

                    _this.translateToPosition($el, lastScroll - elementPosition);

                } else {

                    _this.translateToPosition($el, elementBottom);

                }

            }

            elementIsFixed = true;

        } else {

            if (elementIsFixed) {

                _this.translateToPosition($el, 0);

            }

            if (isContainer) {
                $el.removeClass('has-fixed-slides');
            }

            elementIsFixed = false;

        }

        window.requestAnimationFrame(tick);

    };

    return tick;

};

Homepage.prototype.translateToPosition = function ($el, position) {

    $el.find('.slide').css({
        bottom: position + 'px'
    });

};

var homepage = new Homepage();