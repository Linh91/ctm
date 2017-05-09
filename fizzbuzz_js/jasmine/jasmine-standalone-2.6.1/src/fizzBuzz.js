var Fizz = function() {};
// ClassName.prototype.methodName = function () {
Fizz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizz.prototype.says = function(number) {
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
};
