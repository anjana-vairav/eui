"use strict";

var _html_id_generator = require("./html_id_generator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('htmlIdGenerator', function () {
  it('should return a function', function () {
    var fn = (0, _html_id_generator.htmlIdGenerator)();
    expect(_typeof(fn)).toBe('function');
  });
  it('should return an id ending with the specified suffix', function () {
    expect((0, _html_id_generator.htmlIdGenerator)()('suf')).toMatch(/suf$/);
  });
  it('should return an id beginning with the specified prefix', function () {
    expect((0, _html_id_generator.htmlIdGenerator)('pref')('foo')).toMatch(/^pref/);
  });
  it('should create the same id for the same suffix', function () {
    var idGenerator = (0, _html_id_generator.htmlIdGenerator)();
    expect(idGenerator('foo')).toBe(idGenerator('foo'));
  });
  it('should create different ids for different suffixes', function () {
    var idGenerator = (0, _html_id_generator.htmlIdGenerator)();
    expect(idGenerator('foo')).not.toBe(idGenerator('bar'));
  });
  it('should generate different ids on different instances', function () {
    var idGenerator1 = (0, _html_id_generator.htmlIdGenerator)();
    var idGenerator2 = (0, _html_id_generator.htmlIdGenerator)();
    expect(idGenerator1('foo')).not.toBe(idGenerator2('foo'));
  });
  it('should generate ids beginning with "i" when not passing a prefix', function () {
    expect((0, _html_id_generator.htmlIdGenerator)()()).toMatch(/^i/);
  });
  it('should generate different ids if no suffix is passed', function () {
    var generator = (0, _html_id_generator.htmlIdGenerator)();
    expect(generator()).not.toBe(generator());
  });
});