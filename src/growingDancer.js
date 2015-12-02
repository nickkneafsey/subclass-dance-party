var GrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 2 * timeBetweenSteps);

  // this.top = top;
  // this.left = left;

  this.$node = $('<span class="growing dancer"></span>');
  var $face = $('<img class="characterimage" src="maxkahn.jpg">');
  this.$node.append($face);
  this.step();

  this.setPosition(top, left);
  
};

GrowingDancer.prototype = Object.create(Dancer.prototype);

GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
  
  $(".growing").on("mouseenter", function(event) {
    //$(this).css("border", "5px");
    $(this).addClass("big");
  });
  $(".growing").on("mouseleave", function(event) {
    //$(this).css("border", "5px");
    $(this).removeClass("big");
  });

};