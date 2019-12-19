function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, shallow } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiKeyPadMenuItem, EuiKeyPadMenuItemButton } from './key_pad_menu_item';
describe('EuiKeyPadMenuItem', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiKeyPadMenuItem, _extends({
      label: "Label"
    }, requiredProps), "Icon"));
    expect(component).toMatchSnapshot();
  });
  test('renders href', function () {
    var component = render(React.createElement(EuiKeyPadMenuItem, {
      label: "Label",
      href: "#"
    }, "Icon"));
    expect(component).toMatchSnapshot();
  });
});
describe('EuiKeyPadMenuItemButton', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiKeyPadMenuItemButton, _extends({
      label: "Label"
    }, requiredProps), "Icon"));
    expect(component).toMatchSnapshot();
  });
  describe('onClick', function () {
    test("isn't called upon instantiation", function () {
      var onClickHandler = jest.fn();
      shallow(React.createElement(EuiKeyPadMenuItemButton, {
        label: "Label",
        onClick: onClickHandler
      }, "Icon"));
      expect(onClickHandler).not.toBeCalled();
    });
    test('is called when the button is clicked', function () {
      var onClickHandler = jest.fn();
      var $button = shallow(React.createElement(EuiKeyPadMenuItemButton, {
        label: "Label",
        onClick: onClickHandler
      }, "Icon"));
      $button.simulate('click');
      expect(onClickHandler).toBeCalledTimes(1);
    });
  });
});