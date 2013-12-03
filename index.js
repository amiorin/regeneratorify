'use strict';

var regenerator = require('regenerator');
var through     = require('through');

module.exports = function(file) {
  var data = "";
  var header = "var wrapGenerator = require('regeneratorify/runtime').wrapGenerator;\n";
  var stream = through(write, end);

  return stream;

  function write(buf) {
    data += buf;
  }

  function end() {
    var rdata = regenerator(data);
    if (rdata !== data) {
      rdata = header + rdata;
    }
    stream.queue(rdata);
    stream.queue(null);
  }
}
