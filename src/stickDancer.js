var StickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.top = top;
  // this.left = left;

  this.$node = $('<span class="stick dancer"></span>');
  // var $face = $('<img class="characterimage" src="maxkahn.jpg">');
  // this.$node.append($face);

  // var $leftarm = $('<span class="stick leftarm"></span>');
  // var $rightarm = $('<span class="stick rightarm"></span>');
  // var $midsection = $('<span class="stick midsection"></span>');
  // var $leftleg = $('<span class="stick leftleg"></span>');
  // var $rightleg = $('<span class="stick rightleg"></span>');
  // $midsection.append($leftleg, $rightleg);
  // this.$node.append($leftarm, $rightarm, $midsection);
  var $head = $('<svg class="stickviewport" height="400" width="200"><image class="characterimage" xlink:href="maxkahn.jpg" x="50" y="20"></svg>');
  // var $face = $('<img class="characterimage" src="maxkahn.jpg">');
  // $head.append($face);
  var $leftarm = $('<span class="arm"><svg class="arm stickviewport" height="400" width="200"><line class="arm" x1="100" y1="100" x2="50" y2="150" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  var $rightarm = $('<span class="arm"><svg class="arm stickviewport" height="400" width="200"><line  class="arm" x1="100" y1="100" x2="150" y2="150" style="stroke:rgb(0,0,0);stroke-width:6"></svg></span>');
  var $midsection = $('<svg class="stickviewport" height="400" width="200"><line x1="100" y1="100" x2="100" y2="200" style="stroke:rgb(0,0,0);stroke-width:6"></svg>');
  var $leftleg = $('<svg class="stickviewport" height="400" width="200"><line x1="100" y1="200" x2="50" y2="250" style="stroke:rgb(0,0,0);stroke-width:6"></svg>');
  var $rightleg = $('<svg class="stickviewport" height="400" width="200"><line x1="100" y1="200" x2="150" y2="250" style="stroke:rgb(0,0,0);stroke-width:6"></svg>');
  
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
  });
  $(".stick").on("mouseleave", function(event) {
    $(this).find(".arm").removeClass("wigglyarms");
  });

};