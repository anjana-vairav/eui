"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _show_for = require("./show_for");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BREAKPOINTS = ['xs', 's', 'm', 'l', 'xl'];
var DISPLAYS = ['block', 'inlineBlock', 'flex'];
describe('EuiShowFor', function () {
  test('renders wraps children in a span', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_show_for.EuiShowFor, _extends({
      sizes: ['xs']
    }, _test.requiredProps), "Child"));
    expect(component).toMatchSnapshot();
  });
  test('renders and copies classes', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_show_for.EuiShowFor, {
      sizes: ['xs']
    }, _react.default.createElement("div", null, "Child")));
    expect(component).toMatchSnapshot();
  });
  BREAKPOINTS.forEach(function (size) {
    test("".concat(size, " is rendered"), function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_show_for.EuiShowFor, {
        sizes: [size]
      }));
      expect(component).toMatchSnapshot();
    });
  });
  test('renders for multiple breakpoints', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_show_for.EuiShowFor, {
      sizes: ['xs', 'l']
    }, "Child"));
    expect(component).toMatchSnapshot();
  });
  DISPLAYS.forEach(function (display) {
    test("".concat(display, " is rendered"), function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_show_for.EuiShowFor, {
        sizes: ['xs'],
        display: display
      }));
      expect(component).toMatchSnapshot();
    });
  });
});