/* Theme Name: Palexi - Responsive Business Template
 Author: Zoyothemes
 Author e-mail: zoyothemes@gmail.com
 Version: 1.0
 Created: 2018
 File Description:Main JS file of the template
 */



! function($) {
    "use strict";

    var Palexi = function() {};

    //scroll

    Palexi.prototype.initContactForm = function() {
        $('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .before('<img src="assets/images/ajax-loader.gif" class="contact-loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });
            return false;
        });
    },

    Palexi.prototype.init = function() {
        this.initContactForm();
    },
    //init
    $.Palexi = new Palexi, $.Palexi.Constructor = Palexi
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Palexi.init();
}(window.jQuery);