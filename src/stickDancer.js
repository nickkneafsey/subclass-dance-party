var StickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="stick dancer"></span>');
  
  var $head = $('<svg class="stickviewport" height="400" width="200"><image class="characterimage" xlink:href="nickkneafsey.png" x="60" y="20"></svg>');
  var $leftarm = $('<span class="arm"><svg class="arm stickviewport" height="400" width="200"><line class="arm" x1="100" y1="100" x2="50" y2="150" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  var $rightarm = $('<span class="arm"><svg class="arm stickviewport" height="400" width="200"><line  class="arm" x1="100" y1="100" x2="150" y2="150" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  var $midsection = $('<svg class="stickviewport" height="400" width="200"><line x1="100" y1="100" x2="100" y2="200" style="stroke:rgb(0,0,0);stroke-width:6"></svg>');
  var $leftleg = $('<span class="leg"><svg class="leg stickviewport" height="400" width="200"><line class="leg" x1="100" y1="200" x2="50" y2="250" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  var $rightleg = $('<span class="leg"><svg class="leg stickviewport" height="400" width="200"><line class="leg" x1="100" y1="200" x2="150" y2="250" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  
  this.$node.append( $head, $leftarm, $rightarm, $midsection, $leftleg, $rightleg);

  this.step();

  this.setPosition(top, left);
  
};

StickDancer.prototype = Object.create(Dancer.prototype);

StickDancer.prototype.constructor = StickDancer;

StickDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
  
  $(".stick").on("mouseenter", function(event) {
    $(this).find(".arm").addClass("wigglyarms");
    $(this).find(".leg").addClass("spinout");
  });
  $(".stick").on("mouseleave", function(event) {
    $(this).find(".arm").removeClass("wigglyarms");
    $(this).find(".leg").removeClass("spinout");
  });

};