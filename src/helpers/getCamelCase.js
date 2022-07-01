import { forEach } from "./forEach";

export function getCamelCase(rules) {
    if (!rules || !(rules.length > 0)) {
      return [];
    }
    let camelCaseWords = [];
    forEach(rules.split(';'), (rule) => {
      let [ruleNameDashed, value] = rule.split(':');
      let ruleWords = ruleNameDashed.split('-');
      let camelCaseWord = "";
      let x = 0;
      forEach(ruleWords, (word) => {
        if (x === 0) {
          camelCaseWord = camelCaseWord + word;
        } else {
          camelCaseWord = camelCaseWord + word.charAt(0).toUpperCase() + word.substring(1);
        }
        x++;
      });
      camelCaseWords.push([camelCaseWord, value]);
    });
    return camelCaseWords;
}