var sheet = document.styleSheets[0];
if (sheet) {
    sheet.insertRule("body { text-decoration-skip-ink: none; }", sheet.cssRules.length);
}