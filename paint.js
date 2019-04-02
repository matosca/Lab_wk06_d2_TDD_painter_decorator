const Paint = function(litres){
  this.litres = litres;
};

Paint.prototype.checkIfEmpty = function(){
  if (this.litres !== 0){
    return false;
  }
  else if (this.litres === 0){
    return true;
  };
};

Paint.prototype.emptyItself = function(){
  if (this.litres !== 0 ){
    this.litres = 0;
  }
};

module.exports = Paint;
