/*global GETSHARING:false */

(function(NAMESPACE) {
    'use strict';

    var WHITELISTED_IPS = ['120.148.231.137'];

    var animateToTarget = function (target) {
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    };

    NAMESPACE.util = {
        scrollToDiv: function () {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    animateToTarget(target);
                }
            });
        },

        appHook: function () {
            $.getJSON('http://www.telize.com/jsonip?callback=?',
                function(res) {
                    console.log(res);

                    var el = $('#getsharing');

                    el.html('Get sharing');
                    el.removeAttr('disabled');

                    el.on('click', function(ev) {
                        ev.preventDefault();

                        if ($.inArray(res.ip, WHITELISTED_IPS) >= 0) {
                            window.location.replace('http://app.getsharing.io');
                        } else {
                            var target = $('#request-beta');
                            animateToTarget(target);
                        }
                    });
                }
            );
        }
    };

}(GETSHARING));