export function getCssRulesLength(sheet) {
  return ('replaceSync' in sheet) ? sheet.cssRules : (sheet.rules && sheet.rules.length);
}