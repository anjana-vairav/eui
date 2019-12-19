"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _color_stop_thumb = require("./color_stop_thumb");

var _test = require("../../../test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('../../portal', function () {
  return {
    // @ts-ignore
    EuiPortal: function EuiPortal(_ref) {
      var children = _ref.children;
      return children;
    }
  };
});
var onChange = jest.fn(); // Note: Unit/interaction tests can be found in ./color_stops.test

test('renders EuiColorStopThumb', function () {
  var thumb = (0, _enzyme.render)(_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, _extends({
    onChange: onChange,
    stop: 0,
    color: "#FF0000",
    localMin: 0,
    localMax: 24,
    globalMin: 0,
    globalMax: 100,
    colorPickerMode: "default",
    isPopoverOpen: false,
    openPopover: function openPopover() {},
    closePopover: function closePopover() {}
  }, _test.requiredProps)));
  expect(thumb).toMatchSnapshot();
});
test('renders swatch-only EuiColorStopThumb', function () {
  var thumb = (0, _enzyme.render)(_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, _extends({
    onChange: onChange,
    stop: 0,
    color: "#FF0000",
    localMin: 0,
    localMax: 24,
    globalMin: 0,
    globalMax: 100,
    colorPickerMode: "swatch",
    isPopoverOpen: false,
    openPopover: function openPopover() {},
    closePopover: function closePopover() {}
  }, _test.requiredProps)));
  expect(thumb).toMatchSnapshot();
});
test('renders picker-only EuiColorStopThumb', function () {
  var thumb = (0, _enzyme.render)(_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, _extends({
    onChange: onChange,
    stop: 0,
    color: "#FF0000",
    localMin: 0,
    localMax: 24,
    globalMin: 0,
    globalMax: 100,
    colorPickerMode: "picker",
    isPopoverOpen: false,
    openPopover: function openPopover() {},
    closePopover: function closePopover() {}
  }, _test.requiredProps)));
  expect(thumb).toMatchSnapshot();
});
test('renders disabled EuiColorStopThumb', function () {
  var thumb = (0, _enzyme.render)(_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, _extends({
    onChange: onChange,
    stop: 0,
    color: "#FF0000",
    localMin: 0,
    localMax: 24,
    globalMin: 0,
    globalMax: 100,
    colorPickerMode: "default",
    disabled: true,
    isPopoverOpen: false,
    openPopover: function openPopover() {},
    closePopover: function closePopover() {}
  }, _test.requiredProps)));
  expect(thumb).toMatchSnapshot();
});
test('renders readOnly EuiColorStopThumb', function () {
  var thumb = (0, _enzyme.render)(_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, _extends({
    onChange: onChange,
    stop: 0,
    color: "#FF0000",
    localMin: 0,
    localMax: 24,
    globalMin: 0,
    globalMax: 100,
    colorPickerMode: "default",
    readOnly: true,
    isPopoverOpen: false,
    openPopover: function openPopover() {},
    closePopover: function closePopover() {}
  }, _test.requiredProps)));
  expect(thumb).toMatchSnapshot();
});