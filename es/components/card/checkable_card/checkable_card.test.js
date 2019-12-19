function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiCheckableCard } from './checkable_card';
var checkablePanelRequiredProps = {
  label: 'Label',
  id: 'id',
  onChange: function onChange() {}
};
describe('EuiCheckableCard', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCheckableCard, _extends({}, requiredProps, checkablePanelRequiredProps)));
    expect(component).toMatchSnapshot();
  });
  test('renders a checkbox when specified', function () {
    var component = render(React.createElement(EuiCheckableCard, _extends({}, requiredProps, checkablePanelRequiredProps, {
      checkableType: "checkbox"
    })));
    expect(component).toMatchSnapshot();
  });
});