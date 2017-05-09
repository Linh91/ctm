describe('fizz', function() {
  var fizz;

  beforeEach(function() {
    fizz = new Fizz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      // instance of fizz to test against
    expect(fizz._isDivisibleBy(3)).toBe(true);
    })
  })
  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizz._isDivisibleBy(1)).toBe(false);
    })
  })
  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(fizz.says(3)).toEqual("Java");
    })
  })
});
