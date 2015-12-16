// https://github.com/jesstelford/react-testing-mocha-jsdom
var jsdom = require('jsdom')

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.parentWindow
