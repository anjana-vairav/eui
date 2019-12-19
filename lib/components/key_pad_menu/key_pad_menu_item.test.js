"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _key_pad_menu_item = require("./key_pad_menu_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiKeyPadMenuItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_key_pad_menu_item.EuiKeyPadMenuItem, _extends({
      label: "Label"
    }, _test.requiredProps), "Icon"));
    expect(component).toMatchSnapshot();
  });
  test('renders href', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_key_pad_menu_item.EuiKeyPadMenuItem, {
      label: "Label",
      href: "#"
    }, "Icon"));
    expect(component).toMatchSnapshot();
  });
});
describe('EuiKeyPadMenuItemButton', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_key_pad_menu_item.EuiKeyPadMenuItemButton, _extends({
      label: "Label"
    }, _test.requiredProps), "Icon"));
    expect(component).toMatchSnapshot();
  });
  describe('onClick', function () {
    test("isn't called upon instantiation", function () {
      var onClickHandler = jest.fn();
      (0, _enzyme.shallow)(_react.default.createElement(_key_pad_menu_item.EuiKeyPadMenuItemButton, {
        label: "Label",
        onClick: onClickHandler
      }, "Icon"));
      expect(onClickHandler).not.toBeCalled();
    });
    test('is called when the button is clicked', function () {
      var onClickHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_key_pad_menu_item.EuiKeyPadMenuItemButton, {
        label: "Label",
        onClick: onClickHandler
      }, "Icon"));
      $button.simulate('click');
      expect(onClickHandler).toBeCalledTimes(1);
    });
  });
});