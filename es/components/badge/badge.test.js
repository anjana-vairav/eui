function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiBadge, COLORS, ICON_SIDES } from './badge';
describe('EuiBadge', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiBadge, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is disabled', function () {
    var component = render(React.createElement(EuiBadge, _extends({
      isDisabled: true
    }, requiredProps), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with onClick provided', function () {
    var component = render(React.createElement(EuiBadge, _extends({}, requiredProps, {
      onClick: jest.fn(),
      onClickAriaLabel: "Example of onclick event for the button"
    }), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with iconOnClick provided', function () {
    var component = render(React.createElement(EuiBadge, _extends({}, requiredProps, {
      iconOnClick: jest.fn(),
      iconOnClickAriaLabel: "Example of onclick event for icon within the button"
    }), "Content"));
    expect(component).toMatchSnapshot();
  });
  test('is rendered with iconOnClick and onClick provided', function () {
    var component = render(React.createElement(EuiBadge, _extends({}, requiredProps, {
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
        var component = render(React.createElement(EuiBadge, {
          iconType: "user"
        }, "Content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('color', function () {
      COLORS.forEach(function (color) {
        it("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiBadge, {
            color: color
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('iconSide', function () {
      ICON_SIDES.forEach(function (iconSide) {
        it("".concat(iconSide, " is rendered"), function () {
          var component = render(React.createElement(EuiBadge, {
            iconType: "user",
            iconSide: iconSide
          }, "Content"));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});