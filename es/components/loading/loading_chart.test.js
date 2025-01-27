import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiLoadingChart, SIZES } from './loading_chart';
describe('EuiLoadingChart', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiLoadingChart, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('mono is rendered', function () {
    var component = render(React.createElement(EuiLoadingChart, {
      mono: true
    }));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = render(React.createElement(EuiLoadingChart, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});