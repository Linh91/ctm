describe('fizz', function() {
  var fizz;

  beforeEach(function() {
    fizz = new Fizz();
  });

  describe('recieves a number', function() {
    it('returns the number', function() {
      expect(fizz.number(3)).toEqual(3);
    });
  });

  describe('when multiples of 3', function() {
    it('returns "Fizz"', function() {
      expect(fizz.play(3)).toEqual('Fizz');
    })
  })
});
