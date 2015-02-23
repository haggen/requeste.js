// Requeste v1.0.0 Mon Feb 23 15:05:59 BRT 2015
// more on github.com/haggen/requeste.js
;(function(root) {

  function Requeste() {
    this.fields = new FormData();
    this.engine = new XMLHttpRequest();

    this.engine.open(this.verb, this.uri, true);
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
