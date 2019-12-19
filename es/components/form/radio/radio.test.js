function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiRadio } from './radio';
describe('EuiRadio', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiRadio, _extends({
      id: "id",
      onChange: function onChange() {}
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('checked is rendered', function () {
      var component = render(React.createElement(EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        checked: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('label is rendered', function () {
      var component = render(React.createElement(EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        label: React.createElement("span", null, "Label")
      }));
      expect(component).toMatchSnapshot();
    });
    test('value is rendered', function () {
      var component = render(React.createElement(EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        value: 'bobbins'
      }));
      expect(component).toMatchSnapshot();
    });
    test('disabled is rendered', function () {
      var component = render(React.createElement(EuiRadio, {
        id: "id",
        onChange: function onChange() {},
        disabled: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});