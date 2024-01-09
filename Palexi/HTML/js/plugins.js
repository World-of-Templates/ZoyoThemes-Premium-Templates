/* Theme Name: Palexi - Responsive Business Listing Template
 Author: Zoyothemes
 Author e-mail: zoyothemes@gmail.com
 Version: 1.0
 Created: November 2018
 File Description:Main JS file of the template
 */


 ! function($) {
    "use strict";

    var Palexi = function() {};


    Palexi.prototype.initMagnificVideo = function() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    Palexi.prototype.initTextRotate = function() {
        $(".text-rotate").textrotator({
            animation: "fade",
            speed: 3500
        });
    },

    Palexi.prototype.initBackStretch = function() {
        $.backstretch(["assets/images/img-7.jpg","assets/images/img-8.jpg","assets/images/testi-1.jpg"], {
            duration: 3000,
            fade: 750
        });
    },

    Palexi.prototype.initFlexSlider = function() {
        $('.main-slider').flexslider({
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            autoplay:true,
            animation: "fade"
        });
    },


    Palexi.prototype.init = function() {
        this.initMagnificVideo();
        this.initTextRotate();
        this.initBackStretch();
        this.initFlexSlider();
    },

    //init
    $.Palexi = new Palexi, $.Palexi.Constructor = Palexi
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Palexi.init();
}(window.jQuery);