/*! For license information please see scrollspy.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o){this.el=t,this.options=e,this.events=o,this.el=t,this.options=e,this.events={}}return t.prototype.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},t.prototype.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},t.prototype.createCollection=function(t,e){var o;t.push({id:(null===(o=null==e?void 0:e.el)||void 0===o?void 0:o.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.dispatch=function(t,e,o){void 0===o&&(o=null);var n=new CustomEvent(t,{detail:{payload:o},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(n)},t.prototype.on=function(t,e){this.events[t]=e},t.prototype.afterTransition=function(t,e){var o=function(){e(),t.removeEventListener("transitionend",o,!0)};"all 0s ease 0s"!==window.getComputedStyle(t,null).getPropertyValue("transition")?t.addEventListener("transitionend",o,!0):e()},t.prototype.onTransitionEnd=function(t,e){t.addEventListener("transitionend",(function o(n){n.target===t&&(t.removeEventListener("transitionend",o),e())}))},t.prototype.getClassProperty=function(t,e,o){return void 0===o&&(o=""),(window.getComputedStyle(t).getPropertyValue(e)||o).replace(" ","")},t.prototype.getClassPropertyAlt=function(t,e,o){void 0===o&&(o="");var n="";return t.classList.forEach((function(t){t.includes(e)&&(n=t)})),n.match(/:(.*)]/)?n.match(/:(.*)]/)[1]:o},t.prototype.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild},t.prototype.classToClassList=function(t,e,o){void 0===o&&(o=" "),t.split(o).forEach((function(t){return e.classList.add(t)}))},t.prototype.debounce=function(t,e){var o,n=this;return void 0===e&&(e=200),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout((function(){t.apply(n,r)}),e)}},t.prototype.checkIfFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement},t.isEnoughSpace=function(t,e,o,n,r){void 0===o&&(o="auto"),void 0===n&&(n=10),void 0===r&&(r=null);var i=e.getBoundingClientRect(),s=r?r.getBoundingClientRect():null,l=window.innerHeight,c=s?i.top-s.top:i.top,a=(r?s.bottom:l)-i.bottom,u=t.clientHeight+n;return"bottom"===o?a>=u:"top"===o?c>=u:c>=u||a>=u},t.isParentOrElementHidden=function(t){return!!t&&("none"===window.getComputedStyle(t).display||this.isParentOrElementHidden(t.parentElement))},t}();e.default=o,window.HSStaticMethods={afterTransition:function(t,e){var o=function(){e(),t.removeEventListener("transitionend",o,!0)};"all 0s ease 0s"!==window.getComputedStyle(t,null).getPropertyValue("transition")?t.addEventListener("transitionend",o,!0):e()},getClassPropertyAlt:function(t,e,o){void 0===o&&(o="");var n="";return t.classList.forEach((function(t){t.includes(e)&&(n=t)})),n.match(/:(.*)]/)?n.match(/:(.*)]/)[1]:o},getClassProperty:function(t,e,o){return void 0===o&&(o=""),(window.getComputedStyle(t).getPropertyValue(e)||o).replace(" ","")}}},591:function(t,e,o){var n,r=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,o){void 0===o&&(o={});var n=t.call(this,e,o)||this;return n.activeSection=null,n.contentId=n.el.getAttribute("data-hs-scrollspy"),n.content=document.querySelector(n.contentId),n.links=n.el.querySelectorAll("[href]"),n.sections=[],n.scrollableId=n.el.getAttribute("data-hs-scrollspy-scrollable-parent"),n.scrollable=n.scrollableId?document.querySelector(n.scrollableId):document,n.init(),n}return r(e,t),e.prototype.init=function(){var t=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach((function(e){t.sections.push(t.scrollable.querySelector(e.getAttribute("href")))})),Array.from(this.sections).forEach((function(e){if(!e.getAttribute("id"))return!1;t.scrollable.addEventListener("scroll",(function(o){return t.update(o,e)}))})),this.links.forEach((function(e){e.addEventListener("click",(function(o){if(o.preventDefault(),"javascript:;"===e.getAttribute("href"))return!1;t.scrollTo(e)}))}))},e.prototype.update=function(t,e){var o=parseInt(this.getClassProperty(this.el,"--scrollspy-offset","0")),n=parseInt(this.getClassProperty(e,"--scrollspy-offset"))||o,r=t.target===document?0:parseInt(String(t.target.getBoundingClientRect().top)),i=parseInt(String(e.getBoundingClientRect().top))-n-r,s=e.offsetHeight;if(i<=0&&i+s>0){if(this.activeSection===e)return!1;this.links.forEach((function(t){t.classList.remove("active")}));var l=this.el.querySelector('[href="#'.concat(e.getAttribute("id"),'"]'));if(l){l.classList.add("active");var c=l.closest("[data-hs-scrollspy-group]");if(c){var a=c.querySelector("[href]");a&&a.classList.add("active")}}this.activeSection=e}},e.prototype.scrollTo=function(t){var e=t.getAttribute("href"),o=document.querySelector(e),n=parseInt(this.getClassProperty(this.el,"--scrollspy-offset","0")),r=parseInt(this.getClassProperty(o,"--scrollspy-offset"))||n,i=this.scrollable===document?0:this.scrollable.offsetTop,s=o.offsetTop-r-i,l=this.scrollable===document?window:this.scrollable,c=function(){window.history.replaceState(null,null,t.getAttribute("href")),"scrollTo"in l&&l.scrollTo({top:s,left:0,behavior:"smooth"})},a=this.fireEvent("beforeScroll",this.el);this.dispatch("beforeScroll.hs.scrollspy",this.el,this.el),a instanceof Promise?a.then((function(){return c()})):c()},e.getInstance=function(t,e){void 0===e&&(e=!1);var o=window.$hsScrollspyCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return o?e?o:o.element.el:null},e}(o(737).default);window.addEventListener("load",(function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach((function(t){return new i(t)}))})),t.exports.HSScrollspy=i,e.default=i}},e={};return function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,o),i.exports}(591)})()));