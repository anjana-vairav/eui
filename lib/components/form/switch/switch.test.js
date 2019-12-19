"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _switch = require("./switch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  checked: false,
  label: 'Label',
  onChange: function onChange() {}
};
jest.mock('../form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiSwitch', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.EuiSwitch, _extends({
      id: "test"
    }, props, _required_props.requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('assigns automatically generated ID to label', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_switch.EuiSwitch, props));
    expect(component).toMatchSnapshot();
  });
});