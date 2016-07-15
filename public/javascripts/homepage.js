var scrollPosition = function ($element) {

    var lastScroll = null;
    var secondCaptionTop = $element.find('.caption:nth-child(2)').offset().top - 250;
    var thirdCaptionTop = $element.find('.caption:nth-child(3)').offset().top - 250;

    var tick = function () {

        var currentScroll = $(window).scrollTop();

        if (lastScroll === currentScroll) {

            window.requestAnimationFrame(tick);
            return;

        } else {

            lastScroll = currentScroll;

        }

        $element.removeClass('has-active-first has-active-second has-active-third');

        if (lastScroll >= thirdCaptionTop) {

            $element.addClass('has-active-third');

        } else if (lastScroll >= secondCaptionTop) {

            $element.addClass('has-active-second');

        } else {

            $element.addClass('has-active-first');

        }

        window.requestAnimationFrame(tick);

    };

    return tick;

};

window.requestAnimationFrame(scrollPosition($('.captions')));