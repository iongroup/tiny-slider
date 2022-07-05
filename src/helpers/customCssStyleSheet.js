import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";
export function CustomCssStyleSheet() {

}

CustomCssStyleSheet.prototype.rules = {};
CustomCssStyleSheet.prototype.rulesList = [];
CustomCssStyleSheet.prototype.ruleLength = 0;

CustomCssStyleSheet.prototype.addRule = (selector, rules, index) => {
  CustomCssStyleSheet.prototype.rules[selector] = rules;
  CustomCssStyleSheet.prototype.rulesList[index] = { selector, rules };
  CustomCssStyleSheet.prototype.ruleLength++;
  if (rules.length > 0) {
    let keyValuePairs = getCamelCase(rules);
    document.querySelectorAll(selector).forEach(el => {
      forEach(keyValuePairs, ([key, value]) => {
        if (key && value) {
          el.style[key] = value;
        }
      })
    });
  }
}

CustomCssStyleSheet.prototype.removeRule = (index) => {
  delete CustomCssStyleSheet.prototype.rules[CustomCssStyleSheet.prototype.rulesList[index].selector];
  CustomCssStyleSheet.prototype.rulesList.splice(index, 1);
  CustomCssStyleSheet.prototype.ruleLength--;
}