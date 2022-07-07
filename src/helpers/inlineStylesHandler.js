import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";

function addInlineStyles(el, sheet) {
    let selectors = Object.keys(sheet && sheet.rulesMap);
    if (!selectors || selectors.length === 0) {
      return;
    }
    var doc;
    if (el.tagName === 'SLOT') {
      doc = el.getRootNode();
    } else {
      doc = document;
    }
    forEach(selectors, (selector, i) => {
      let keyValuePairs = getCamelCase(sheet.rulesMap[selector]);
      forEach(doc.querySelectorAll(selector), (item, i) => {
        if (item.isSameNode(el)) {
          forEach(keyValuePairs, ([key, value]) => {
            if (key && value) {
              item.style[key] = value;
            }
          });
        }
      });
    });
}

function removeInlineStyles(el, sheet) {
    let selectors = Object.keys(sheet && sheet.rulesMap);
    if (!selectors) {
      return;
    }
    var doc;
    if (el.tagName === 'SLOT') {
      doc = el.getRootNode();
    } else {
      doc = document;
    }
    forEach(selectors, (selector, i) => {
      let keyValuePairs = getCamelCase(sheet.rulesMap[selector]);
      forEach(doc.querySelectorAll(selector), (item, i) => {
        if (item.isSameNode(el)) {
          forEach(keyValuePairs, ([key, value]) => {
            if (key && value) {
              item.style[key] = "";
            }
          });
        }
      });
    });
}

export { addInlineStyles, removeInlineStyles };