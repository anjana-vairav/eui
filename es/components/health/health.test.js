import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiHealth } from './health';
describe('EuiHealth', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHealth, requiredProps));
    expect(component).toMatchSnapshot();
  });
});