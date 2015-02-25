// Requeste v1.0.1 Wed Feb 25 11:31:38 BRT 2015
// more on github.com/haggen/requeste.js
;(function(root) {

  'use strict';

  var Requeste;

  Requeste = function(method, uri) {
    this.fields = new FormData();
    this.engine = new XMLHttpRequest();

    this.engine.open(method, uri, true);
  }

  Requeste.prototype.on = function(e, fn) {
    if(e.indexOf('upload:') === 0) {
      this.engine.upload.addEventListener(e, fn);
    } else {
      this.engine.addEventListener(e, fn);
    }
  };

  Requeste.prototype.set = function(name, value) {
    this.engine.setRequestHeader(name, value);
  };

  Requeste.prototype.append = function(name, value) {
    this.fields.append(name, value);
  };

  Requeste.prototype.dispatch = function() {
    this.engine.send(this.fields);
  };

  root.Requeste = Requeste;

})(this);
