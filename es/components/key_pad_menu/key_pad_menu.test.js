import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiKeyPadMenu } from './key_pad_menu';
describe('EuiKeyPadMenu', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiKeyPadMenu, requiredProps));
    expect(component).toMatchSnapshot();
  });
});