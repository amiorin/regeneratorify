'use strict';

var regenerator = require('regenerator');
var through     = require('through');

module.exports = function(file) {
  var data = "var wrapGenerator = require('regeneratorify/runtime').wrapGenerator;\n\n";
  var stream = through(write, end);

  return stream;

  function write(buf) {
    data += buf;
  }

  function end() {
    stream.queue(regenerator(data));
    stream.queue(null);
  }
}
