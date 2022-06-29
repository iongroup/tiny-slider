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
    // let [ruleNameDashed, value] = rules.split(':');
    // value = value.split(';')[0];
    // let ruleWords = ruleNameDashed.split('-');
    // let camelCaseWord = "";
    // let x = 0;
    // ruleWords.forEach(word => {
    //   if (x === 0) {
    //     camelCaseWord = camelCaseWord + word;
    //   } else {
    //     camelCaseWord = camelCaseWord + word.charAt(0).toUpperCase() + word.substring(1);
    //   }
    //   x++;
    // });
    let [key, value] = getCamelCase(rules);
    document.querySelectorAll(selector).forEach(el => {
      if (key && value) {
        el.style[key] = value;
      }
    });
  }
}

IONCSSStyleSheet.prototype.removeRule = (index) => {
  delete IONCSSStyleSheet.prototype.rules[IONCSSStyleSheet.prototype.rulesList[index].selector];
  IONCSSStyleSheet.prototype.rulesList.splice(index, 1);
  IONCSSStyleSheet.prototype.ruleLength--;
}