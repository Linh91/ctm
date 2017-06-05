function Fizz() {
};

Fizz.prototype.play = function (number) {
  if (number % 15 === 0) {
    return "FizzBuzz";
  }
  else if (number % 5 === 0) {
    return "Buzz";
  }
  else if (number % 3 === 0) {
  return "Fizz";
  }
  else {
    return number;
  }
};

Fizz.prototype._isDivisibleBy = function (divisor, number) {
  return number % divisor === 0;
};

var fizz = new Fizz();

for (var i = 1; i <= 100; i++) {
  console.log(fizz.play(i));
}
