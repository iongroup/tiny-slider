export function checkConstructStyleSheet() {
    try{
        let sheet = new CSSStyleSheet();
        if ('replaceSync' in sheet) {
            return true;
        } else {
            return false;
        }
    } catch(err) {
        return false;
    }
}