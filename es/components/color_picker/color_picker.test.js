function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, mount } from 'enzyme';
import { EuiColorPicker } from './color_picker';
import { VISUALIZATION_COLORS, keyCodes } from '../../services';
import { requiredProps, findTestSubject, sleep } from '../../test';
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
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders compressed EuiColorPicker', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    compressed: true
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders readOnly EuiColorPicker', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    readOnly: true
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders fullWidth EuiColorPicker', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    fullWidth: true
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders disabled EuiColorPicker', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    disabled: true
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders inline EuiColorPicker', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    display: "inline"
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with an empty swatch when color is null', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: null
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with an empty swatch when color is ""', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: ''
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('renders EuiColorPicker with a color swatch when color is defined', function () {
  var colorPicker = render(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: '#ffffff'
  }, requiredProps)));
  expect(colorPicker).toMatchSnapshot();
});
test('popover color selector is not shown by default', function () {
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, requiredProps)));
  var colorSelector = findTestSubject(colorPicker, 'colorPickerPopover');
  expect(colorSelector.length).toBe(0);
});
test('popover color selector is shown when the input is clicked', function () {
  var onFocusHandler = jest.fn();
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    onFocus: onFocusHandler,
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  expect(onFocusHandler).toBeCalled();
  var colorSelector = findTestSubject(colorPicker, 'colorPickerPopover');
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
          colorPicker = mount(React.createElement(EuiColorPicker, _extends({
            onChange: onChange,
            color: "#ffeedd",
            onBlur: onBlurHandler
          }, requiredProps)));
          findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
          _context.next = 5;
          return sleep();

        case 5:
          findTestSubject(colorPicker, 'colorPickerPopover').simulate('keydown', {
            keyCode: keyCodes.ESCAPE
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
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd",
    onBlur: onBlurHandler
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  findTestSubject(colorPicker, 'euiSaturation').simulate('keydown', {
    keyCode: keyCodes.ENTER
  });
  expect(findTestSubject(colorPicker, 'colorPickerAnchor').getDOMNode()).toEqual(document.activeElement); // Portal removal not working with Jest. The blur handler is called just before the portal would be removed.

  expect(onBlurHandler).toBeCalled();
});
test('Setting a new color calls onChange', function () {
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
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
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(VISUALIZATION_COLORS.length);
  swatches.first().simulate('click');
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith(VISUALIZATION_COLORS[0]);
});
test('default mode does redners child components', function () {
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = findTestSubject(colorPicker, 'euiSaturation');
  expect(saturation.length).toBe(1);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(1);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(VISUALIZATION_COLORS.length);
});
test('swatch mode does not render EuiSaturation or EuiHue', function () {
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    mode: "swatch",
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = colorPicker.find('EuiSaturation');
  expect(saturation.length).toBe(0);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(0);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(VISUALIZATION_COLORS.length);
});
test('picker mode does not render swatches', function () {
  var colorPicker = mount(React.createElement(EuiColorPicker, _extends({
    onChange: onChange,
    mode: "picker",
    color: "#ffeedd"
  }, requiredProps)));
  findTestSubject(colorPicker, 'colorPickerAnchor').simulate('click');
  var saturation = findTestSubject(colorPicker, 'euiSaturation');
  expect(saturation.length).toBe(1);
  var hue = colorPicker.find('EuiHue');
  expect(hue.length).toBe(1);
  var swatches = colorPicker.find('button.euiColorPicker__swatchSelect');
  expect(swatches.length).toBe(0);
});