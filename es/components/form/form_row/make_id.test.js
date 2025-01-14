import makeId from './make_id';
describe('makeId', function () {
  var ids;
  beforeEach(function () {
    ids = new Map();
  });
  test('returns a string of length 8', function () {
    expect(makeId()).toHaveLength(8);
  }); // Could be slow so adding a [SLOW] tag for use with --testNamePattern=<regex>

  test('returns a random string - [SLOW]', function () {
    for (var i = 0; i < 60000; i += 1) {
      var id = makeId();
      expect(ids.has(id)).toBeFalsy();
      ids.set(id, true);
    }
  });
});