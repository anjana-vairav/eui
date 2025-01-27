"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _badge_notification = require("./badge_notification");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiNotificationBadge', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_badge_notification.EuiNotificationBadge, _required_props.requiredProps, "5"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('color', function () {
      _badge_notification.COLORS.forEach(function (color) {
        test("".concat(color, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_badge_notification.EuiNotificationBadge, {
            color: color
          }, "5"));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('size', function () {
      _badge_notification.SIZES.forEach(function (size) {
        test("".concat(size, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_badge_notification.EuiNotificationBadge, {
            size: size
          }, "5"));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});