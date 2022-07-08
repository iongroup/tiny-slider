export function getCssRulesLength(sheet) {
  return ('replaceSync' in sheet) ? (sheet.cssRules && sheet.cssRules.length) : (sheet.rules && sheet.rules.length);
}