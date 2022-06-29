// cross browsers addRule method
import { raf } from './raf.js';
export function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'replaceSync' in sheet ?
    sheet.replaceSync(sheet.cssRules.length > 0 ? getCompleteRules(sheet, selector + '{' + rules + '}') : selector + '{' + rules + '}') :
    sheet.addRule(selector, rules, index);
// });
}

function getCompleteRules(sheet, cssText) {
  let completeCSSText = "";
  let i;
  for (i = 0; i < sheet.cssRules.length; i++) {
    let rule = sheet.cssRules[i];
    completeCSSText = completeCSSText + rule.cssText;
  };
  completeCSSText = completeCSSText + cssText;
  return completeCSSText;
}
