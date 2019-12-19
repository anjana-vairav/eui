"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _flyout = require("./flyout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SIZES = ['s', 'm', 'l'];
describe('EuiFlyout', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, _extends({}, _test.requiredProps, {
      onClose: function onClose() {}
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('close button is not rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
        onClose: function onClose() {},
        hideCloseButton: true
      }));
      expect(component).toMatchSnapshot();
    });
    describe('closeButtonLabel', function () {
      test('has a default label for the close button', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
          onClose: function onClose() {}
        }));
        var label = component.find('[data-test-subj="euiFlyoutCloseButton"]').prop('aria-label');
        expect(label).toBe('Closes this dialog');
      });
      test('sets a custom label for the close button', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
          onClose: function onClose() {},
          closeButtonAriaLabel: "Closes specific flyout"
        }));
        var label = component.find('[data-test-subj="euiFlyoutCloseButton"]').prop('aria-label');
        expect(label).toBe('Closes specific flyout');
      });
    });
  });
  describe('size', function () {
    SIZES.forEach(function (size) {
      it("".concat(size, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
          onClose: function onClose() {},
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('max width', function () {
    test('can be set to a default', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('can be set to a custom number', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: 1024
      }));
      expect(component).toMatchSnapshot();
    });
    test('can be set to a custom value and measurement', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_flyout.EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: "24rem"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});