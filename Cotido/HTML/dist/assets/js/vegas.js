/*
  Template Name: Opsoon - Tailwind CSS Landing Page Template
  Author: Zoyothemes
  Email: zoyothemes@gmail.com
  Website: https://zoyothemes.com
  Version: 1.0.0
  Created: December 2023
  File Description: Main JS file of the template
*/

/*********************/
/*   Vegas Slider    */
/*********************/
if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
  var target_slider = $("#vegas-slide"),
    vegas_options = target_slider.data('vegas-options');
  if (typeof vegas_options === "object") {
    target_slider.vegas(vegas_options);
  }
}