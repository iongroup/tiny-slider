import { classListSupport, hasClass } from './hasClass.js';
import { removeInlineStyles } from './inlineStylesHandler.js';
var removeClass = classListSupport ?
    function (el, str, sheet) {
      if (hasClass(el,  str)) { 
        el.classList.remove(str);
        if (!('replaceSync' in sheet)) {
          removeInlineStyles(el, sheet);
        } 
      }
    } :
    function (el, str) {
      if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
    };

export { removeClass };