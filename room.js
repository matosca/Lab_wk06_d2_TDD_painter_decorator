const Room = function(area){
  this.area = area;
  this.painted = false;
};

Room.prototype.changeStatus = function(){
  if (this.painted === false) {
    this.painted = true;
  } else if (this.painted === true) {
    this.painted = false;
  }
};

module.exports = Room;
