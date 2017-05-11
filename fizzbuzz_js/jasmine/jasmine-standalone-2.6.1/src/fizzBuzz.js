function Fizz() {

};

Fizz.prototype.number = function (num) {
  return num;
};

Fizz.prototype.play = function (number) {
  if (number % 3 === 0) {
    return "Fizz";
  };
};
