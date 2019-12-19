import React from 'react';
import { render } from 'enzyme';
import { requiredProps, startThrowingReactWarnings, stopThrowingReactWarnings } from '../../test';
import { EuiFlexItem, GROW_SIZES } from './flex_item';
beforeAll(startThrowingReactWarnings);
afterAll(stopThrowingReactWarnings);
describe('EuiFlexItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlexItem, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('grow', function () {
    GROW_SIZES.concat([true, false]).forEach(function (value) {
      test("".concat(value, " is rendered"), function () {
        var component = render(React.createElement(EuiFlexItem, {
          grow: value
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});