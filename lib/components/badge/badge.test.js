"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _badge = require("./badge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiBadge', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is disabled', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, _extends({
      isDisabled: true
    }, _required_props.requiredProps), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with onClick provided', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, _extends({}, _required_props.requiredProps, {
      onClick: jest.fn(),
      onClickAriaLabel: "Example of onclick event for the button"
    }), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with iconOnClick provided', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, _extends({}, _required_props.requiredProps, {
      iconOnClick: jest.fn(),
      iconOnClickAriaLabel: "Example of onclick event for icon within the button"
    }), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with iconOnClick and onClick provided', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, _extends({}, _required_props.requiredProps, {
      iconOnClick: jest.fn(),
      iconOnClickAriaLabel: "Example of onclick event for icon within the button",
      onClick: jest.fn(),
      onClickAriaLabel: "Example of onclick event for the button"
    }), "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('iconType', function () {
      it('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, {
          iconType: "user"
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      _badge.COLORS.forEach(function (color) {
        it("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, {
            color: color
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      _badge.ICON_SIDES.forEach(function (iconSide) {
        it("".concat(iconSide, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_badge.EuiBadge, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});