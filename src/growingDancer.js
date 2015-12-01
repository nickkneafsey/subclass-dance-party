var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="growing dancer"></span>');
  var $face = $('<img src="maxkahn.jpg">');
  this.$node.append($face);

  this.step();

  this.setPosition(top, left);
}
makeGrowingDancer.prototype = Object.create(makeDancer.prototype);

makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function() {
  
  makeDancer.prototype.step.call(this);
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

  
  //make this spin on mouseover

  // $(".growing").on("mouseOver", function(event) {

  // }
};