import { request } from '../utilities/request';
import { sendEvent } from '../utilities/analytics';
import '../../sass/blog.scss';

let Blog = Blog || {};

Blog.View = (function () {
  function init () {
    new Blog.Header();
    new Blog.Mailing();
    new Blog.Analytics();
  }

  return {
    init: init
  };
})();

Blog.Header = (function () {
  function header () {
    this.init();
  }

  header.prototype = {
    init: function () {
      this.cacheSelectors();
      this.initListeners();
    },

    cacheSelectors: function () {
      this.$button = document.getElementById('jsHeaderButton');
    },

    initListeners: function () {
      this.$button.addEventListener('click', this.toggleExpanded.bind(this), false);
    },

    toggleExpanded: function (e) {
      e.preventDefault();

      if (this.$button.getAttribute('aria-expanded') === 'true') {
        this.$button.setAttribute('aria-expanded', 'false');
      } else {
        this.$button.setAttribute('aria-expanded', 'true');
      }
    }
  }

  return header;
})();

Blog.Mailing = (function () {
  function mailing () {
    this.init();
  }

  mailing.prototype = {
    init: function () {
      this.cacheSelectors();
      this.initListeners();
    },

    cacheSelectors: function () {
      this.$button = document.getElementById('jsMailingButton');
      this.$emailInput = document.getElementById('jsMailingEmail');
      this.$hiddenInput = document.getElementById('jsMailingHidden');
    },

    initListeners: function () {
      this.$button.addEventListener('click', this.submit.bind(this), false);
    },

    submit: function (e) {
      e.preventDefault();

      const email = this.$emailInput.value;
      const hidden = this.$hiddenInput.value;

      if (email.length === 0 || !(/\S+@\S+\.\S+/.test(email))) {
        this.$button.innerHTML = 'Invalid email';
        return;
      }

      this.$button.innerHTML = 'Processing';

      request('//laurenashpole.com/mailing/signup', {
        email,
        hidden
      }, (response) => {
        if (response.success) {
          this.$button.innerHTML = 'Success!';
        } else {
          if (response.err) {
            this.$button.innerHTML = response.err;
          }
        }
      });
    }
  }

  return mailing;
})();

Blog.Analytics = (function () {
  function analytics () {
    this.init();
  }

  analytics.prototype = {
    init: function () {
      this.cacheSelectors();
      this.initListeners();
    },

    cacheSelectors: function () {
      this.$trackingEls = document.querySelectorAll('.js-ga-trigger');
    },

    initListeners: function () {
      for (let i; i < this.$trackingEls.length; i++) {
        this.$trackingEls[i].addEventListener('click', sendEvent, false);
      }
    }
  }

  return analytics;
})();

if (document.readyState !== 'loading') {
  Blog.View.init();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    Blog.View.init();
  });
}