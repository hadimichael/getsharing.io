/*global GETSHARING:false */

(function(NAMESPACE) {
    'use strict';

    //CONSTANTS
    var WHITELISTED_IPS = ['x120.148.231.137'];

    //HELPER FUNCTIONS
    var animateToTarget = function (target) {
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    },

    //INITIALISERS
    scrollToDiv = function () {
        //scroll to #divs, instead jumping to them
        $('a[href*=#]:not([href=#])').on('click.scroll', function(ev) {
            ev.preventDefault();
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                animateToTarget(target);
            }
        });
    },

    verifyIP = function () {
        //check if the user is on a whitelisted IP, before sending them to the app...

        var verificationServiceUrl = 'http://www.telize.com/jsonip?callback=?',
            btn = $('.hero .load-app');

        btn.button('loading');

        $.getJSON(verificationServiceUrl, function(res) {
            console.log(res);

            if ($.inArray(res.ip, WHITELISTED_IPS) >= 0) {
                btn.off('click.scroll');
                btn.on('click.launch', function(ev) {
                    ev.preventDefault();
                    // window.location.replace('http://app.getsharing.io');
                });
            } else {
                btn.on('click.launch', function(ev) {
                    ev.preventDefault();
                    $('#request-beta input[name=email]').focus();
                });
            }

            btn.button('reset');
        });
    };

    NAMESPACE.utils = {
        init: function () {
            scrollToDiv();
            verifyIP();
        }
    };

}(GETSHARING));