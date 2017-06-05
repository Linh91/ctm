describe('fizz', function() {
  var fizz;

  beforeEach(function() {
    fizz = new Fizz();
  });

  describe('recieves any other number', function() {
    it('returns the number', function() {
      expect(fizz.play(1)).toEqual(1);
    });
  });

  describe('when multiples of 3', function() {
    it('returns "Fizz"', function() {
      expect(fizz.play(3)).toEqual('Fizz');
    })

    it('not multiples of 3 returns number', function() {
      expect(fizz.play(4)).toEqual(4);
    });
  });

  describe('when multiples of 5', function() {
    it('returns "Buzz"', function() {
      expect(fizz.play(5)).toEqual('Buzz');
    });

    it('not multiples of 5 return number', function() {
      expect(fizz.play(7)).toEqual(7);
    });
  });

  describe('when multiples of 15', function() {
    it('returns "FizzBuzz"', function() {
      expect(fizz.play(30)).toEqual('FizzBuzz');
    });
  });
});
