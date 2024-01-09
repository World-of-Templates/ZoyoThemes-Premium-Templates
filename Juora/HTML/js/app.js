
/* Theme Name: Juora - Responsive Minimal Template
   Author: Zoyothemes
   Version: 1.0.0
   File Description: Main JS file of the template
*/


$(function() {

    "use strict";

    // Active Menu
    $(".navbar-nav a").each(function () {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).parent().addClass("active-item"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active-item"); // add active class to an anchor
        }
    });
});
