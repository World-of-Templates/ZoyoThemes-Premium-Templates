/* Theme Name: Kevix - Responsive Landing Page Template
   Author: Zoyothemes
   Version: 1.0.0
   File Description: Main JS file of the template
*/
(function ($) {

    'use strict';

    // STICKY
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $(".defaultscroll").addClass("scroll");
        } else {
            $(".defaultscroll").removeClass("scroll");
        }
    });

    // Menu

    $('.has-submenu a').on('click', function(e) {
        if ($(window).width() < 992) {
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
        return true;
    });

    var scroll = $(window).scrollTop();

    $('.navbar-toggle').on('click', function(event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function(e) {
        if ($(window).width() < 992) {
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
        return true;
    });

    $(".navigation-menu a").each(function() {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
        }
    });


    // Magnific Popup - IMAGE
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    //  VIDEO 
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Contact
    $('#contact-form').submit(function() {

        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#submit')
                .before('')
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
    
})(jQuery)