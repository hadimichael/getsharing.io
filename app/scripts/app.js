/* ==========================================================================
 * GETSHARING.IO - LANDING PAGE
 * ========================================================================== */

/*global GETSHARING:false */
/*global Parse:false */

window.GETSHARING = window.GETSHARING || {};
GETSHARING.IS_DEBUG = false;

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

    NAMESPACE.init =  function() {
        /* initialise Parse */
        try {
            Parse.initialize('MKJGcu3DFdCIFr8vz7CTEyTiynIJDqnfr9vI70AH', 'GyBawjtKWHkDa1UuyqA2elU8sgU3rezdWz4TJtkf');
        } catch(e) {
            console.error('Parse didn\'t initialise');
        }

        /* initialise JS modules */
        NAMESPACE.utils.init();
        NAMESPACE.subscribe.init();
    };

}(GETSHARING));

/* Let's Rock'n'Roll! */
$(document).ready(function() {
    'use strict';

    $('html').removeClass('no-js');
    $('.alert').removeClass('alert-warning');

    GETSHARING.init();
});