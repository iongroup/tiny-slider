import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";
export function IONCSSStyleSheet() {

}

IONCSSStyleSheet.prototype.rules = {};
IONCSSStyleSheet.prototype.rulesList = [];
IONCSSStyleSheet.prototype.ruleLength = 0;

IONCSSStyleSheet.prototype.addRule = (selector, rules, index) => {
  IONCSSStyleSheet.prototype.rules[selector] = rules;
  IONCSSStyleSheet.prototype.rulesList[index] = { selector, rules };
  IONCSSStyleSheet.prototype.ruleLength++;
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

IONCSSStyleSheet.prototype.removeRule = (index) => {
  delete IONCSSStyleSheet.prototype.rules[IONCSSStyleSheet.prototype.rulesList[index].selector];
  IONCSSStyleSheet.prototype.rulesList.splice(index, 1);
  IONCSSStyleSheet.prototype.ruleLength--;
}