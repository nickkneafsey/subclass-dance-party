// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var bindedFun = this.step.bind(this);
  setTimeout(bindedFun, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
