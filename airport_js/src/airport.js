function Airport(weather) {
  this._plane = [];
};

Airport.prototype.land = function(plane) {
  this._plane.push(plane);
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather) {
    throw 'Plane can not take off!';
  }
  else {
    this._plane.pop(plane);
  }
};
