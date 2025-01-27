"use strict";

var _make_id = _interopRequireDefault(require("./make_id"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeId', function () {
  var ids;
  beforeEach(function () {
    ids = new Map();
  });
  test('returns a string of length 8', function () {
    expect((0, _make_id.default)()).toHaveLength(8);
  }); // Could be slow so adding a [SLOW] tag for use with --testNamePattern=<regex>

  test('returns a random string - [SLOW]', function () {
    for (var i = 0; i < 60000; i += 1) {
      var id = (0, _make_id.default)();
      expect(ids.has(id)).toBeFalsy();
      ids.set(id, true);
    }
  });
});