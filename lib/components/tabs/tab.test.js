"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _tab = require("./tab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiTab', function () {
  test('renders button', function () {
    var component = _react.default.createElement(_tab.EuiTab, _extends({
      onClick: function onClick() {}
    }, _required_props.requiredProps), "children");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders anchor', function () {
    var component = _react.default.createElement(_tab.EuiTab, _extends({
      href: "/baz/bing"
    }, _required_props.requiredProps), "children");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders isSelected', function () {
    var component = _react.default.createElement(_tab.EuiTab, _extends({
      onClick: function onClick() {},
      isSelected: true
    }, _required_props.requiredProps), "children");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  describe('Props', function () {
    describe('onClick', function () {
      test('is called when the button is clicked', function () {
        var onClickHandler = jest.fn();
        var $button = (0, _enzyme.shallow)(_react.default.createElement(_tab.EuiTab, {
          onClick: onClickHandler
        }));
        $button.simulate('click');
        expect(onClickHandler).toBeCalled();
      });
    });
  });
});