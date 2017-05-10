function Airport() {
  this._plane = [];
};

Airport.prototype.land = function(plane) {
  this._plane.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this._plane.pop(plane);
};
