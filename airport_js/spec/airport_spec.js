describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('Airport has empty array', function() {
    it('Airport is empty', function() {
      expect(airport._plane).toEqual([]);
    });
  });
});
