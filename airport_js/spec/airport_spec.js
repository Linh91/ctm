describe('Airport', function() {
  var airport;
  var fakeWeather = new Weather()
    isStormy: function() {
      return false;
    };
  };

  beforeEach(function() {
    airport = new Airport(fakeWeather);
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
    it('Raises error when story', function() {
      expect(airport.takeOff('plane')).toThrow('Plane can not take off!');
    });
  });
});
