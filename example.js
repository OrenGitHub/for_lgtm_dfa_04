const utils = require('utils')
const url = 'http://www.github.com/?foo=шеллы'
function foo(x) {
  decodeURI(x);
}
function bar() {
  var encoded = utils.escapeHtml(url);
  foo(encoded);
}
