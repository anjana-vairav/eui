function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiSwitch } from './switch';
var props = {
  checked: false,
  label: 'Label',
  onChange: function onChange() {}
};
jest.mock('../form_row/make_id', function () {
  return function () {
    return 'generated-id';
  };
});
describe('EuiSwitch', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSwitch, _extends({
      id: "test"
    }, props, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('assigns automatically generated ID to label', function () {
    var component = render(React.createElement(EuiSwitch, props));
    expect(component).toMatchSnapshot();
  });
});