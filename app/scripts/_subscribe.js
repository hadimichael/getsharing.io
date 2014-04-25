/*global GETSHARING:false */
/*global Parse:false */

(function(NAMESPACE) {
    'use strict';

    var isEmail = function(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    NAMESPACE.subscribe = {
        init: function () {
            $('.form-request-beta').submit(function(ev) {
                ev.preventDefault();

                var $email = $('input[name=email]', this),
                    $btn = $('button[type=submit]', this),
                    $alert = $('#request-beta .alert'),
                    email = $email.val();

                if (email.length > 0 && isEmail(email)) {
                    $btn.button('loading');
                    $email.attr('disabled','disabled');

                    try {
                        var Subscriber = Parse.Object.extend('subscriber'),
                            subscriber = new Subscriber();

                        subscriber.set('email', email);
                        subscriber.set('beta_request', true);

                        subscriber.save().then(function(subscriber) {
                            //success
                            $alert.addClass('alert-success');
                            $alert.find('.message').html('<strong>Requested!</strong> Thanks for you interest. I\'ll be in touch soon.');
                        }, function(error, subscriber) {
                            //boooo - error with saving
                            $alert.addClass('alert-danger');
                            $alert.find('.message').html('<strong>Error!</strong> ' + error.description + '.');
                        }).then(function() {
                            //always do this...
                            $alert.fadeIn();

                            $btn.button('reset');
                            $email.removeAttr('disabled');
                            $email.val('');
                        });
                    } catch (e) {
                        $alert.addClass('alert-warning');
                        $alert.find('.message').html('<strong>Uh oh!</strong> ' + e + '. Try refreshing the page.');
                        $alert.fadeIn();
                    }
                } else {
                    //invalid email...
                    $alert.addClass('alert-warning');
                    $alert.find('.message').html('<strong>Uh oh!</strong> Please enter a valid email address.');
                    $alert.fadeIn();
                }
            });
        }
    };

}(GETSHARING));
