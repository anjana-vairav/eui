"use strict";

var _utils = require("./utils");

describe('resolveWidthAsStyle', function () {
  describe('without style or width', function () {
    it('returns empty', function () {
      expect((0, _utils.resolveWidthAsStyle)(undefined, undefined)).toEqual({});
      expect((0, _utils.resolveWidthAsStyle)({}, undefined)).toEqual({});
    });
  });
  describe('with style; without width', function () {
    it('returns style clone', function () {
      var style = {
        width: '20%',
        color: 'red'
      };
      expect((0, _utils.resolveWidthAsStyle)(style, undefined)).toEqual(style);
      expect((0, _utils.resolveWidthAsStyle)({}, undefined)).toEqual({});
    });
  });
  describe('without style; with width', function () {
    it('returns style with width', function () {
      var width = '10%';
      var expected = {
        width: width
      };
      expect((0, _utils.resolveWidthAsStyle)(undefined, width)).toEqual(expected);
      expect((0, _utils.resolveWidthAsStyle)({}, width)).toEqual(expected);
      expect((0, _utils.resolveWidthAsStyle)(undefined, 100)).toEqual({
        width: '100px'
      });
      expect((0, _utils.resolveWidthAsStyle)(undefined, '100')).toEqual({
        width: '100px'
      });
    });
  });
  describe('with style and width', function () {
    var oldConsoleError = console.warn;
    var consoleStub;
    beforeEach(function () {
      console.warn = consoleStub = jest.fn();
    });
    afterEach(function () {
      console.warn = oldConsoleError;
    });
    var result = {
      width: '10%',
      color: 'red'
    };
    it('returns width overriding style', function () {
      var style = {
        width: '20%',
        color: 'red'
      };
      expect((0, _utils.resolveWidthAsStyle)(style, '10%')).toEqual(result);
      expect(consoleStub).toBeCalled();
    });
    it('returns style merged with width', function () {
      var style = {
        color: 'red'
      };
      expect((0, _utils.resolveWidthAsStyle)(style, '10%')).toEqual(result);
    });
  });
});