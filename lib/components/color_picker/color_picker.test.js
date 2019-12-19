"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _color_picker = require("./color_picker");

var _services = require("../../services");

var _test = require("../../test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('../portal', function () {
  return {
    // @ts-ignore
    EuiPortal: function EuiPortal(_ref) {
      var children = _ref.children;
      return children;
    }
  };
});
var onChange = jest.fn();
test('renders EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders compressed EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    compressed: true
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders readOnly EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    readOnly: true
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders fullWidth EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    fullWidth: true
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders disabled EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    disabled: true
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders inline EuiColorPicker', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    display: "inline"
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with an empty swatch when color is null', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: null
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with an empty swatch when color is ""', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: ''
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with a color swatch when color is defined', function () {
  var colorPicker = (0, _enzyme.render)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: '#ffffff'
  }, _test.requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('popover color selector is not shown by default', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, _test.requiredProps)));
  var colorSelector = (0, _test.findTestSubject)(colorPicker, 'colorPickerPopover');
  expect(colorSelector.length).toBe(0);
});
test('popover color selector is shown when the input is clicked', function () {
  var onFocusHandler = jest.fn();
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    onFocus: onFocusHandler,
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  expect(onFocusHandler).toBeCalled();
  var colorSelector = (0, _test.findTestSubject)(colorPicker, 'colorPickerPopover');
  expect(colorSelector.length).toBe(1);
});
test('popover color selector is hidden when the ESC key pressed',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var onBlurHandler, colorPicker;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          onBlurHandler = jest.fn();
          colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
            onChange: onChange,
            color: "#ffeedd",
            onBlur: onBlurHandler
          }, _test.requiredProps)));
          (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
          _context.next = 5;
          return (0, _test.sleep)();

        case 5:
          (0, _test.findTestSubject)(colorPicker, 'colorPickerPopover').simulate('keydown', {
            keyCode: _services.keyCodes.ESCAPE
          }); // Portal removal not working with Jest. The blur handler is called just before the portal would be removed.

          expect(onBlurHandler).toBeCalled();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
test('popover color selector is hidden and input regains focus when the ENTER key pressed', function () {
  var onBlurHandler = jest.fn();
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    onBlur: onBlurHandler
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  (0, _test.findTestSubject)(colorPicker, 'euiSaturation').simulate('keydown', {
    keyCode: _services.keyCodes.ENTER
  });
  expect((0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').getDOMNode()).toEqual(document.activeElement); // Portal removal not working with Jest. The blur handler is called just before the portal would be removed.

  expect(onBlurHandler).toBeCalled();
});
test('Setting a new color calls onChange', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  var event = {
    target: {
      value: '#000000'
    }
  };
  var inputs = colorPicker.find('input[type="text"]');
  expect(inputs.length).toBe(1);
  inputs.simulate('change', event);
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith('#000000');
});
test('Clicking a swatch calls onChange', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(_services.VISUALIZATION_COLORS.length);
  swatches.first().simulate('click');
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith(_services.VISUALIZATION_COLORS[0]);
});
test('default mode does redners child components', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = (0, _test.findTestSubject)(colorPicker, 'euiSaturation');
  expect(saturation.length).toBe(1);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(1);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(_services.VISUALIZATION_COLORS.length);
});
test('swatch mode does not render EuiSaturation or EuiHue', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    mode: "swatch",
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = colorPicker.find('EuiSaturation');
  expect(saturation.length).toBe(0);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(0);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(_services.VISUALIZATION_COLORS.length);
});
test('picker mode does not render swatches', function () {
  var colorPicker = (0, _enzyme.mount)(_react.default.createElement(_color_picker.EuiColorPicker, _extends({
    onChange: onChange,
    mode: "picker",
    color: "#ffeedd"
  }, _test.requiredProps)));
  (0, _test.findTestSubject)(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = (0, _test.findTestSubject)(colorPicker, 'euiSaturation');
  expect(saturation.length).toBe(1);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(1);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(0);
});