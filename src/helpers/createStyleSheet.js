import { CustomCssStyleSheet } from "./customCssStyleSheet";

// create and append style sheet
export function createStyleSheet (media, nonce, container, HASCSSSTYLESHEET) {
  if (HASCSSSTYLESHEET) {
    let sheet = new CSSStyleSheet();
    if (container.tagName === "SLOT") {
      let shadowRoot = container.getRootNode();
      shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets ? [...shadowRoot.adoptedStyleSheets, sheet] : [sheet]; 
    }
    document.adoptedStyleSheets = document.adoptedStyleSheets ? [...document.adoptedStyleSheets, sheet] : [sheet];
    return sheet;
  } else {
    let sheet = new CustomCssStyleSheet();
    return sheet;
  }
};