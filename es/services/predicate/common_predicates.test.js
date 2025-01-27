import { always, never, isNil, isUndefined, isNull } from './common_predicates';
describe('common predicates', function () {
  test('always', function () {
    [undefined, null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect(always(value)).toBe(true);
    });
  });
  test('never', function () {
    [undefined, null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect(never(value)).toBe(false);
    });
  });
  test('isUndefined', function () {
    [undefined].forEach(function (value) {
      expect(isUndefined(value)).toBe(true);
    });
    [null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect(isUndefined(value)).toBe(false);
    });
  });
  test('isNull', function () {
    [null].forEach(function (value) {
      expect(isNull(value)).toBe(true);
    });
    [undefined, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect(isNull(value)).toBe(false);
    });
  });
  test('isNil', function () {
    [undefined, null].forEach(function (value) {
      expect(isNil(value)).toBe(true);
    });
    ['a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect(isNil(value)).toBe(false);
    });
  });
});