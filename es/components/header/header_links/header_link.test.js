import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiHeaderLink } from './header_link';
describe('EuiHeaderLink', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderLink, requiredProps));
    expect(component).toMatchSnapshot();
  });
});