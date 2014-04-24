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
            $('#request-beta form[name=request-beta]').submit(function(ev) {
                ev.preventDefault();

                var $email = $('input[name=email]', this),
                    $btn = $('button[type=submit]', this),
                    $alert = $('#request-beta .alert'),
                    email = $email.val();

                if (email.length > 0 && isEmail(email)) {
                    $btn.button('loading');
                    $email.attr('disabled','disabled');

                    var Subscriber = Parse.Object.extend('subscriber'),
                        subscriber = new Subscriber();

                    subscriber.set('email', email);
                    subscriber.set('beta_request', true);

                    subscriber.save().then(function(subscriber) {
                        //success
                        $alert.addClass('alert-success');
                        $alert.find('.message').html('<strong>Requested!</strong> Thanks for you interest. We\'ll be in touch.');
                        $alert.show();
                    }, function(error, subscriber) {
                        //boooo - error saving
                        $alert.addClass('alert-danger');
                        $alert.find('.message').html('<strong>Error!</strong> ' + error.description + '. Please try again.');
                        $alert.show();
                    }).then(function() {
                        //always do this...
                        $btn.button('reset');
                        $email.removeAttr('disabled');
                        $email.val('');
                    });
                } else {
                    //invalid email...
                    $alert.addClass('alert-warning');
                    $alert.find('.message').html('<strong>Warning!</strong> Invalid email.');
                    $alert.show();
                }
            });
        }
    };

}(GETSHARING));
