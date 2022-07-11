import { forEach } from "./forEach";

export function getCamelCase(rules) {
    if (!rules || !(rules.length > 0)) {
      return [];
    }
    let camelCaseWords = [];
    forEach(rules.split(';'), (rule) => {
      if (rule.length > 0) {
        let [ruleNameDashed, value] = rule.split(':');
        let ruleWords = ruleNameDashed.split('-').join(" ").toLowerCase();
        let camelCaseWord = ruleWords.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/\s+/g, '');
        camelCaseWords.push([camelCaseWord, value]);
      }
    });
    return camelCaseWords;
}