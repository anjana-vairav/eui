import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { keysOf } from '../common';
import { EuiBottomBar, paddingSizeToClassNameMap } from './bottom_bar'; // TODO: Temporary hack which we can remove once react-test-renderer supports portals.
// More info at https://github.com/facebook/react/issues/11565.
// @ts-ignore

ReactDOM.createPortal = function (node) {
  return node;
};

describe('EuiBottomBar', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiBottomBar, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('paddingSize', function () {
      keysOf(paddingSizeToClassNameMap).forEach(function (paddingSize) {
        test("".concat(paddingSize, " is rendered"), function () {
          var component = render(React.createElement(EuiBottomBar, {
            paddingSize: paddingSize
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});