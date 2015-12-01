var makeFadingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="fading dancer"></span>');

  this.step();

  this.setPosition(top, left);
};
makeFadingDancer.prototype = Object.create(makeDancer.prototype);

makeFadingDancer.prototype.constructor = makeFadingDancer;

makeFadingDancer.prototype.step = function() {
  
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.fadeToggle("slow");
};