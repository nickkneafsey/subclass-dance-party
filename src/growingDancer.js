var GrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;

  this.$node = $('<span class="growing dancer"></span>');
  var $face = $('<img class="characterimage" src="maxkahn.jpg">');
  this.$node.append($face);

  this.step();

  this.setPosition(top, left);
}
GrowingDancer.prototype = Object.create(Dancer.prototype);

GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);

  var bindedPos = 

  window.setInterval(function() {
    this.setPosition(this.top + 10, this.left + 10);
  }, 500);
  

  //Dancer.prototype.setPosition.call(this, this.top+10, this.left+10);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this.$node.toggle();
  $(".growing").on("mouseenter", function(event) {
    //$(this).css("border", "5px");
    $(this).addClass("big");
  });
  $(".growing").on("mouseleave", function(event) {
    //$(this).css("border", "5px");
    $(this).removeClass("big");
  });

  
  // this spin on mouseover

  // $(".growing").on("mouseOver", function(event) {

  // }
};