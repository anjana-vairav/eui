"use strict";

var _common_predicates = require("./common_predicates");

describe('common predicates', function () {
  test('always', function () {
    [undefined, null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect((0, _common_predicates.always)(value)).toBe(true);
    });
  });
  test('never', function () {
    [undefined, null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect((0, _common_predicates.never)(value)).toBe(false);
    });
  });
  test('isUndefined', function () {
    [undefined].forEach(function (value) {
      expect((0, _common_predicates.isUndefined)(value)).toBe(true);
    });
    [null, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect((0, _common_predicates.isUndefined)(value)).toBe(false);
    });
  });
  test('isNull', function () {
    [null].forEach(function (value) {
      expect((0, _common_predicates.isNull)(value)).toBe(true);
    });
    [undefined, 'a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect((0, _common_predicates.isNull)(value)).toBe(false);
    });
  });
  test('isNil', function () {
    [undefined, null].forEach(function (value) {
      expect((0, _common_predicates.isNil)(value)).toBe(true);
    });
    ['a', 1, true, false, Date.now(), {}, [], /.*/].forEach(function (value) {
      expect((0, _common_predicates.isNil)(value)).toBe(false);
    });
  });
});