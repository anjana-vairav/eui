"use strict";

var _format_text = require("./format_text");

describe('formatText', function () {
  test('no config - not nil value', function () {
    expect((0, _format_text.formatText)('abc')).toBe('abc');
    expect((0, _format_text.formatText)(1)).toBe('1');
    var now = Date.now();
    expect((0, _format_text.formatText)(new Date(now))).toBe(new Date(now).toString());
    expect((0, _format_text.formatText)({
      /* simple object */
    })).toBe('[object Object]');
  });
  test('no config - nil value', function () {
    expect((0, _format_text.formatText)()).toBe('');
    expect((0, _format_text.formatText)(null)).toBe('');
  });
  test('with config - nil value', function () {
    expect((0, _format_text.formatText)(undefined, {
      nil: '-'
    })).toBe('-');
    expect((0, _format_text.formatText)(null, {
      nil: '-'
    })).toBe('-');
  });
});