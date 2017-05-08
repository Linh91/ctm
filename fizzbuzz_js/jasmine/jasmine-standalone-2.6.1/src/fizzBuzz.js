function Fizz() {
  Fizz.prototype.num = function(number) {
    return number;
  }
};

var fizz = new Fizz();
fizz.num(30)
