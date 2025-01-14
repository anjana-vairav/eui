function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiSelectableSearch } from './selectable_search';
describe('EuiSelectableSearch', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSelectableSearch, _extends({
      options: []
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('defaultValue', function () {
      var component = render(React.createElement(EuiSelectableSearch, {
        options: [],
        defaultValue: "Mi"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});