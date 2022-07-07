import { forEach } from "./forEach";
import { getCamelCase } from "./getCamelCase";

function editInlineStyles(el, sheet, action) {
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
                if (action === "add") {
                    item.style[key] = value;
                } else if (action === "remove") {
                    item.style[key] = "";
                }
            }
          });
        }
      });
    });
}

function addInlineStyles(el, sheet) {
    editInlineStyles(el, sheet, "add");
}

function removeInlineStyles(el, sheet) {
    editInlineStyles(el, sheet, "remove");
}

export { addInlineStyles, removeInlineStyles };