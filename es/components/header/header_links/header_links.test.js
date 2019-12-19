import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiHeaderLinks } from './header_links';
describe('EuiHeaderLinks', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderLinks, requiredProps));
    expect(component).toMatchSnapshot();
  });
});