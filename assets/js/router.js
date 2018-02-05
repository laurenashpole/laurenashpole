import { BasePage } from './pages/base';
import { FontPage } from './pages/font';
import { FontsPage } from './pages/fonts';
import { ContactPage } from './pages/contact';

let Router = (function () {
    var path = window.location.pathname;

    BasePage.init();

    if (path.indexOf('fonts') !== -1) {
        if (path.match(/fonts\/(.*)/)[1]) {
            FontPage.init();
        } else {
            FontsPage.init();
        }
    }

    if (path.indexOf('contact') !== -1) {
        ContactPage.init();
    }
})();