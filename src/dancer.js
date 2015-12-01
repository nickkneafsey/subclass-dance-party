// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var bindedFun = this.step.bind(this);
  setTimeout(bindedFun, this.timeBetweenSteps);

  
  var pos = this.$node.position();
  //console.log(pos);
  var maxHeight = $("body").height();
  var maxWidth = $("body").width();
  var minHeight = 0;
  var minWidth = 0;
  this.setPosition((pos.top + 10) % maxHeight, (pos.left + 10) % maxWidth);
};

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

Dancer.prototype.lineUp = function() {

};