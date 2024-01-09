/* Template Name: Queue - Tailwind CSS Landing Page Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Website: https://zoyothemes.com
   Version: 1.0.0
   Created: Noverber 2023
   File Description: Main JS file of the template
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Sticky Navbar        *
 *     02.  Navbar active        *
 *     03.  Back to top          *
 *     04.  Feather Icons        *
 ================================*/

// Sticky Navbar
function windowScroll() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

// Navbar Active Class
try {
  var spy = new Gumshoe("#navbar-navlist a", {
    // Active classes
    // navClass: 'active', // applied to the nav list item
    // contentClass: 'active', // applied to the content
    offset: 80,
  });
} catch (error) {}

// Smooth scroll
try {
  var scroll = new SmoothScroll("#navbar-navlist a", {
    speed: 800,
    offset: 80,
  });
} catch (error) {}

// Menu Collapse
const toggleCollapse = (elementId, show = true) => {
  const collapseEl = document.getElementById(elementId);
  if (show) {
    collapseEl.classList.remove("hidden");
  } else {
    collapseEl.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Toggle target elements using [data-collapse]
  document
    .querySelectorAll("[data-collapse]")
    .forEach(function (collapseToggleEl) {
      var collapseId = collapseToggleEl.getAttribute("data-collapse");

      collapseToggleEl.addEventListener("click", function () {
        toggleCollapse(
          collapseId,
          document.getElementById(collapseId).classList.contains("hidden")
        );
      });
    });
});

window.toggleCollapse = toggleCollapse;

/*********************/
/*      WoW Js       */
/*********************/
try {
  new WOW().init();
} catch (error) {
  
}

/*********************/
/*   Back To Top     */
/*********************/

var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if(mybutton!=null){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "inline-flex";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*********************/
/*   Feather Icons   */
/*********************/
feather.replace();
