var App = App || {};
App.View = App.View || {};

App.View.Filter = (function () {
    var events = {
        'click .js-filter-reset': 'reset'
    };

    function Filter (options) {
        this.setup(options, events);

        this.firstClick = true;
        this.cacheSelectors();
        this.init();
    }

    Filter.prototype = App.Utilities.extend(Object.create(App.View.Base.prototype), {
        cacheSelectors: function () {
            this.$searchItems = this.$el.querySelectorAll('.js-filter-item');
            this.$noResults = this.$el.querySelector('.js-filter-no-results');
            this.$input = this.$el.querySelector('.js-filter-input');
            this.$reset = this.$el.querySelector('.js-filter-reset');
        },

        init: function () {
            var search = new App.View.FormBind({
                el: '.js-filter-input',
                eventType: 'keyup',
                callback: this.updateResults.bind(this)
            });
        },

        updateResults: function (value, e) {
            var total = 0;
            var filter = value.toUpperCase();

            if (e && e.which === 27) {
                this.reset();
                return;
            }

            if (this.firstClick) {
                this.$el.classList.remove('not-filtered');
                this.firstClick = false;

                if (this.options.gaCategory) {
                    ga('send', 'event', this.options.gaCategory, 'keyup', 'filter');
                }
            }

            for (var i = 0, len = this.$searchItems.length; i < len; i++) {
                var $item = this.$searchItems[i];
                var isHidden = false;

                if ($item.dataset.filterTerm && $item.dataset.filterTerm.toUpperCase().indexOf(filter) > -1) {
                    $item.classList.remove('u--hidden');
                    total++;
                } else {
                    $item.classList.add('u--hidden');
                    isHidden = true;
                }

                if (this.options.itemCallback && this.options.itemCallback instanceof Function) {
                    this.options.itemCallback($item, isHidden, total);
                }
            }

            if (value.length === 0) {
                this.$reset.classList.remove('is-active');
            } else {
                this.$reset.classList.add('is-active');
            }

            if (total === 0) {
                this.$noResults.classList.remove('u--hidden');
            } else {
                this.$noResults.classList.add('u--hidden');
            }
        },

        reset: function (e) {
            this.$input.value = '';
            this.updateResults('');
        }
    });

    return Filter;
})();