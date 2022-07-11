// cross browsers addRule method
import { forEach } from './forEach.js';
import { raf } from './raf.js';
export function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'replaceSync' in sheet ?
    sheet.replaceSync(sheet.cssRules.length > 0 ? concatExistingRules(sheet, selector + '{' + rules + '}') : selector + '{' + rules + '}') :
    sheet.addRule(selector, rules, index);
// });
}

function concatExistingRules(sheet, cssText) {
  let finalCssText = "";
  forEach(sheet.cssRules, (rule) => {
    finalCssText = finalCssText + rule.cssText;
  });
  finalCssText = finalCssText + cssText;
  return finalCssText;
}
