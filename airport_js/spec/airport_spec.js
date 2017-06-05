describe('Airport', function() {
  var airport;
  var badWeather = true;
  var goodWeather = false;

  beforeEach(function() {
    airport = new Airport(goodWeather);
  });

  describe('Airport has empty array', function() {
    it('Airport is empty', function() {
      expect(airport._plane).toEqual([]);
    });
  });

  describe('Plane lands at airport', function() {
    it('Airport has a plane',  function() {
      airport.land('plane')
      expect(airport._plane).toEqual(['plane'])
    });
  });

  describe('Plane take off', function() {
    it('Plane has taken off', function() {
      airport.land('plane')
      airport.takeOff('plane')
      expect(airport._plane).toEqual([]);
    });
  });

  describe('Prevent take off when story', function() {
    it('Raises error when stormy', function() {
      var luton = new Airport(badWeather);
      expect(function() {luton.takeOff('plane', badWeather)}).toThrow('Plane can not take off!');
    });
  });
});
