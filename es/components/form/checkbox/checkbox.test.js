function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps, startThrowingReactWarnings, stopThrowingReactWarnings } from '../../../test';
import { EuiCheckbox, TYPES } from './checkbox';
beforeAll(startThrowingReactWarnings);
afterAll(stopThrowingReactWarnings);
var checkboxRequiredProps = {
  id: 'id',
  onChange: function onChange() {}
};
describe('EuiCheckbox', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCheckbox, _extends({
      id: "id",
      onChange: function onChange() {}
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('check is rendered', function () {
      var component = render(React.createElement(EuiCheckbox, _extends({}, checkboxRequiredProps, {
        checked: true
      })));
      expect(component).toMatchSnapshot();
    });
    test('label is rendered', function () {
      var component = render(React.createElement(EuiCheckbox, _extends({}, checkboxRequiredProps, {
        label: React.createElement("span", null, "Label")
      })));
      expect(component).toMatchSnapshot();
    });
    describe('type', function () {
      TYPES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiCheckbox, _extends({}, checkboxRequiredProps, {
            type: value
          })));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('disabled', function () {
      test('disabled is rendered', function () {
        var component = render(React.createElement(EuiCheckbox, _extends({}, checkboxRequiredProps, {
          disabled: true
        })));
        expect(component).toMatchSnapshot();
      });
    });
  });
});