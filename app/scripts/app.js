/* ==========================================================================
 * GETSHARING.IO - LANDING PAGE
 * ========================================================================== */

/*global GETSHARING:false */

window.GETSHARING = window.GETSHARING || {};
GETSHARING.IS_DEBUG = true;

/* Stop console.log errors */
if (typeof console === 'undefined') {
    window.console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}

if (!GETSHARING.IS_DEBUG) {
    console.log = function () {};
}

(function(NAMESPACE) {

    'use strict';

    NAMESPACE.INIT = {
        init: function() {
            NAMESPACE.util.scrollToDiv();
            // NAMESPACE.util.appHook();
        }
    };

}(GETSHARING));

/* Let's Rock'n'Roll! */
$(document).ready(function() {
    'use strict';

    GETSHARING.INIT.init();
});