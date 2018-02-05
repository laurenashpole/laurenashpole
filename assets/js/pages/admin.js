import { Admin } from '../components/admin';

let AdminPage = (function () {
    function init () {
        var admin = new Admin();
    }

    return {
        init: init
    }
})();

AdminPage.init();