import { DownloadButton } from '../components/download-button';
import { FormBind } from '../components/form-bind';
import { Gallery } from '../components/gallery';

export const FontPage = (function () {
    var $el,
        $head,
        $body,
        $fontExample;

    function init () {
        $el = document.querySelector('.js-font-page');

        if (!$el) {
            return;
        };

        cacheSelectors();
        injectCSS();
        initComponents();
    }

    function cacheSelectors () {
        $head = document.querySelector('head');
        $body = document.querySelector('body');
        $fontExample = $el.querySelectorAll('.js-font-example');
    }

    function injectCSS () {
        var css = $el.getAttribute('data-css') || false;

        if (css) {
            $head.innerHTML += '<link rel="stylesheet" href="' + css + '">';
            $body.classList.remove('css-loading');
        }
    }

    function initComponents () {
        var downloadButton = new DownloadButton({
            el: '.js-font-modal-open'
        });

        var fontText = new FormBind({
            el: '.js-font-example-input',
            eventType: 'keyup',
            callback: function (value) {
                if (value.length === 0) {
                    value = 'Enter your preview text';
                }

                for (var i = 0, len = $fontExample.length; i < len; i++) {
                    $fontExample[i].textContent = value;
                }
            }
        });

        var fontSize = new FormBind({
            el: '.js-font-example-size',
            eventType: 'change',
            callback: function (value) {
                for (var i = 0, len = $fontExample.length; i < len; i++) {
                    $fontExample[i].style['font-size'] = value + 'px';
                }
            }
        });

        var gallery = new Gallery({
            el: '.js-font-page'
        });
    }

    return {
        init: init
    }
})();