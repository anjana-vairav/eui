function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiFlexGrid, GUTTER_SIZES, COLUMNS, DIRECTIONS } from './flex_grid';
describe('EuiFlexGrid', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlexGrid, _extends({
      columns: 3
    }, requiredProps), React.createElement("h2", null, "My Child")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('gutterSize', function () {
      GUTTER_SIZES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGrid, {
            gutterSize: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('columns', function () {
      COLUMNS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGrid, {
            columns: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('direction', function () {
      DIRECTIONS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = render(React.createElement(EuiFlexGrid, {
            direction: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('responsive', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiFlexGrid, {
          responsive: false
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});