var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var $boombox = $('<img class="boombox" src="boombox.png">');

  this.$node.append($boombox);
  this.left = left;
  this.top = top;
  this.vert = true;
  this.horizontal = true;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  
  //Dancer.prototype.step.call(this);

    var bindedFun = this.step.bind(this);
  setTimeout(bindedFun, this.timeBetweenSteps);
  
  this.$node.toggle();
  // var vert;
  // var horizontal;

  var maxHeight = $("body").height();
  var maxWidth = $("body").width();
  var minHeight = 0;
  var minWidth = 0;

  if (this.top > maxHeight){
      this.vert = false;
  }
  if (this.top < minHeight){
      this.vert = true;
  }

  if (this.left < minWidth){
    this.horizontal = true;
  }

  if (this.left > maxWidth){
    this.horizontal = false;
  }

  if (this.vert){
    this.top += 10;
  } else {
    this.top -= 10;
  }

  if (this.horizontal){
    this.left += 10;
  } else {
    this.left -= 10;
    
  }
  

  this.setPosition(this.top, this.left);

  var isClose = false;
    console.log([this, this.left, this.top]);
    for (var i = 0; i < window.dancers.length; i++) {
    var otherPosition = window.dancers[i].$node.position();
    
    var topdiff = Math.pow(otherPosition.top - this.top, 2);
    var leftdiff = Math.pow(otherPosition.left - this.left, 2);
    if (this!==window.dancers[i] && Math.sqrt(topdiff + leftdiff) < 45){
      this.$node.addClass("big");
      isClose = true;
    }
    

  }
  if (isClose === false){
    this.$node.removeClass("big");
  }
};