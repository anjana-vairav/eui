function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiCardSelect } from './card_select';
describe('EuiCardSelect', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiCardSelect, _extends({
      onClick: function onClick() {}
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('isSelected', function () {
      var component = render(React.createElement(EuiCardSelect, {
        onClick: function onClick() {},
        isSelected: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isDisabled', function () {
      var component = render(React.createElement(EuiCardSelect, {
        onClick: function onClick() {},
        isDisabled: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('can override color', function () {
      var component = render(React.createElement(EuiCardSelect, {
        onClick: function onClick() {},
        color: "danger"
      }));
      expect(component).toMatchSnapshot();
    });
    test('can override text', function () {
      var component = render(React.createElement(EuiCardSelect, {
        onClick: function onClick() {},
        children: "Custom text"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});