var FadingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="fading dancer"></span>');
  var $face = $('<img class="characterimage" src="ghost.png">');
  this.$node.append($face);
  this.step();

  this.setPosition(top, left);
};
FadingDancer.prototype = Object.create(Dancer.prototype);

FadingDancer.prototype.constructor = FadingDancer;

FadingDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.fadeToggle("slow");
};