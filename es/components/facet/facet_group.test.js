import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiFacetGroup } from './facet_group';
describe('EuiFacetGroup', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFacetGroup, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('layout', function () {
      it('is rendered', function () {
        var component = render(React.createElement(EuiFacetGroup, {
          layout: "horizontal"
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});