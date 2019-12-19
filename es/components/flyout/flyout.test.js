function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiFlyout } from './flyout';
var SIZES = ['s', 'm', 'l'];
describe('EuiFlyout', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlyout, _extends({}, requiredProps, {
      onClose: function onClose() {}
    })));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('close button is not rendered', function () {
      var component = render(React.createElement(EuiFlyout, {
        onClose: function onClose() {},
        hideCloseButton: true
      }));
      expect(component).toMatchSnapshot();
    });
    describe('closeButtonLabel', function () {
      test('has a default label for the close button', function () {
        var component = render(React.createElement(EuiFlyout, {
          onClose: function onClose() {}
        }));
        var label = component.find('[data-test-subj="euiFlyoutCloseButton"]').prop('aria-label');
        expect(label).toBe('Closes this dialog');
      });
      test('sets a custom label for the close button', function () {
        var component = render(React.createElement(EuiFlyout, {
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
        var component = render(React.createElement(EuiFlyout, {
          onClose: function onClose() {},
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
  describe('max width', function () {
    test('can be set to a default', function () {
      var component = render(React.createElement(EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('can be set to a custom number', function () {
      var component = render(React.createElement(EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: 1024
      }));
      expect(component).toMatchSnapshot();
    });
    test('can be set to a custom value and measurement', function () {
      var component = render(React.createElement(EuiFlyout, {
        onClose: function onClose() {},
        maxWidth: "24rem"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});