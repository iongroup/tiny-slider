import { checkConstructStyleSheet } from "./checkConstructStyleSheet";
import { IONCSSStyleSheet } from "./ionCssStyleSheet";

// create and append style sheet
export function createStyleSheet (media, nonce) {
  // Create the <style> tag
  // var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  // if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  // if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  // document.querySelector('head').appendChild(style);

  // return style.sheet ? style.sheet : style.styleSheet;
  if (checkConstructStyleSheet()) {
    let sheet = new CSSStyleSheet();
    document.adoptedStyleSheets = document.adoptedStyleSheets ? [...document.adoptedStyleSheets, sheet] : [sheet];
    return sheet;
  } else {
    let sheet = new IONCSSStyleSheet();
    return sheet;
  }
};