function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiToolTipPopover } from './tool_tip_popover';
describe('EuiToolTipPopover', function () {
  test('is rendered', function () {
    var component = render( // tslint:disable-next-line:no-empty
    React.createElement(EuiToolTipPopover, _extends({
      positionToolTip: function positionToolTip() {}
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
});