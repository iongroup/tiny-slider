import { classListSupport, hasClass } from './hasClass.js';
import { addInlineStyles } from './inlineStylesHandler.js';
var addClass = classListSupport ?
    function (el, str, sheet) {
      if (!hasClass(el,  str)) { 
        el.classList.add(str);

        if (!('replaceSync' in sheet)) {
          addInlineStyles(el, sheet);
        }
      }
    } :
    function (el, str, sheet) {
      if (!hasClass(el,  str)) { el.className += ' ' + str; }
    };

export { addClass };