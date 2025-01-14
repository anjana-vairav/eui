import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiLoadingSpinner, SIZES } from './loading_spinner';
describe('EuiLoadingSpinner', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiLoadingSpinner, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = render(React.createElement(EuiLoadingSpinner, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});