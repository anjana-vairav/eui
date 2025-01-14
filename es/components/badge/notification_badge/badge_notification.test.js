import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiNotificationBadge, COLORS, SIZES } from './badge_notification';
describe('EuiNotificationBadge', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiNotificationBadge, requiredProps, "5"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('color', function () {
      COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = render(React.createElement(EuiNotificationBadge, {
            color: color
          }, "5"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = render(React.createElement(EuiNotificationBadge, {
            size: size
          }, "5"));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});