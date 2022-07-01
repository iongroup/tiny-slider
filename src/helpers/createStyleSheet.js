import { checkConstructStyleSheet } from "./checkConstructStyleSheet";
import { IONCSSStyleSheet } from "./ionCssStyleSheet";

// create and append style sheet
export function createStyleSheet (media, nonce, container) {
  if (checkConstructStyleSheet()) {
    let sheet = new CSSStyleSheet();
    if (container.tagName === "SLOT") {
      let shadowRoot = container.getRootNode();
      shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets ? [...shadowRoot.adoptedStyleSheets, sheet] : [sheet]; 
    } else {
      document.adoptedStyleSheets = document.adoptedStyleSheets ? [...document.adoptedStyleSheets, sheet] : [sheet];
    }
    return sheet;
  } else {
    let sheet = new IONCSSStyleSheet();
    return sheet;
  }
};