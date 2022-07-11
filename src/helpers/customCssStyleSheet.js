import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";
import { addInlineStyles } from "./inlineStylesHandler";
export class CustomCssStyleSheet {

  _rules = [];

  _rulesMap = {};

  constructor(container) {
    this.container = container
  }

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
      var doc;
      var root = this.container && this.container.getRootNode();
      if (root instanceof ShadowRoot) {
        doc = root;
      } else {
        doc = document;
      }
      doc.querySelectorAll(selector).forEach(el => {
        addInlineStyles(el, this);
      });
    }
  }

  removeRule(index) {
    delete this.rulesMap[this.rules[index].selector];
    this.rules.splice(index, 1);
  }
}
