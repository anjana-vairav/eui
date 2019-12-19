import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiHeader } from './header';
describe('EuiHeader', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeader, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = render(React.createElement(EuiHeader, null, React.createElement("span", null, "Hello!")));
    expect(component).toMatchSnapshot();
  });
});