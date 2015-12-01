var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.vert = true;
  this.horizontal = true;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
  
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
};