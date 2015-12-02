// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');

  this.topStep = (Math.random() * 20) - 10;

  this.leftStep = (Math.random() * 20) - 10;

  this.step();

  this.setPosition(top, left);

  //this.distances = [];

};

Dancer.prototype.step = function() {
  var bindedFun = this.step.bind(this);
  setTimeout(bindedFun, this.timeBetweenSteps);

  
  var pos = this.$node.position();
  var maxHeight = $("body").height();
  var maxWidth = $("body").width();
  var minHeight = 0;
  var minWidth = 0;
  if (!window.aligned) {
      this.setPosition((pos.top + this.topStep) % maxHeight, (pos.left + this.leftStep) % maxWidth);
  }

  var isClose = false;

  for (var i = 0; i < window.dancers.length; i++) {
    var otherPosition = window.dancers[i].$node.position();
    
    var topdiff = Math.pow(otherPosition.top - pos.top, 2);
    var leftdiff = Math.pow(otherPosition.left - pos.left, 2);

    if (this!==window.dancers[i] && Math.sqrt(topdiff + leftdiff) < 75){
      this.$node.addClass("spinout");
      isClose = true;
    }
    

  }
  if (isClose === false){
    this.$node.removeClass("spinout");
  }
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