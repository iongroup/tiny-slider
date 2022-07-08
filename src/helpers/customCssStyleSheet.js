import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";
export class CustomCssStyleSheet {

  _rules = [];

  _rulesMap = {};

  set rules(value) {
    this._rules = value;
  }

  get rules() {
    return this._rules;
  }

  set rulesMap(value) {
    this._rulesMap = value;
  }

  get rulesMap() {
    return this._rulesMap;
  }

  addRule(selector, rules, index) {
    if (this.rules[index]) {
      this.rules.splice(index, 0, { selector, rules });
    } else {
      this.rules[index] = { selector, rules };
    }  
    this.rulesMap[selector] = rules;
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

  removeRule(index) {
    delete this.rulesMap[this.rules[index].selector];
    this.rules.splice(index, 1);
  }
}
