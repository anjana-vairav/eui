function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiSelectable } from './selectable';
var options = [{
  label: 'Titan',
  'data-test-subj': 'titanOption'
}, {
  label: 'Enceladus'
}, {
  label: "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology"
}];
describe('EuiSelectable', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSelectable, _extends({
      options: options
    }, requiredProps)));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('searchable', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        searchable: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('singleSelection', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        singleSelection: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('allowExclusions', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        allowExclusions: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isLoading', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        isLoading: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('height can be forced', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        height: 200
      }));
      expect(component).toMatchSnapshot();
    });
    test('height can be full', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        height: "full"
      }));
      expect(component).toMatchSnapshot();
    });
    test('renderOption', function () {
      var component = render(React.createElement(EuiSelectable, {
        options: options,
        renderOption: function renderOption(option, searchValue) {
          return React.createElement("span", null, searchValue, " => ", option.label);
        }
      }));
      expect(component).toMatchSnapshot();
    });
  });
});