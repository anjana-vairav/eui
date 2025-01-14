import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiLoadingKibana, SIZES } from './loading_kibana';
describe('EuiLoadingKibana', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiLoadingKibana, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('size', function () {
    SIZES.forEach(function (size) {
      test("".concat(size, " is rendered"), function () {
        var component = render(React.createElement(EuiLoadingKibana, {
          size: size
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});