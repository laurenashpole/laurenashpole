import { Filter } from '../components/filter';

export const FontsPage = (function () {
    function init () {
        initFilter();
    }

    function initFilter () {
        var filter = new Filter({
            el: '.js-font-filter',
            gaCategory: 'Fonts',
            itemCallback: function ($item, isHidden, totalResults) {
                $item.classList.remove('is-2n-2', 'is-3n-3', 'is-3n-2');

                if (!isHidden) {
                    if (totalResults % 2 === 0) {
                        $item.classList.add('is-2n-2');
                    }

                    if (totalResults % 3 === 0) {
                        $item.classList.add('is-3n-3');
                    } else if (Math.abs(totalResults % 3) === 2) {
                        $item.classList.add('is-3n-2');
                    }
                }
            }
        });
    }

    return {
        init: init
    }
})();