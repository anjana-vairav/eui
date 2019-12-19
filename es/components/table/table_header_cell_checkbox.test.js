import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiTableHeaderCellCheckbox } from './table_header_cell_checkbox';
describe('EuiTableHeaderCellCheckbox', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableHeaderCellCheckbox, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('width and style', function () {
    test('accepts style attribute', function () {
      var component = React.createElement(EuiTableHeaderCellCheckbox, {
        style: {
          width: '20%'
        }
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('accepts width attribute', function () {
      var component = React.createElement(EuiTableHeaderCellCheckbox, {
        width: "10%"
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('accepts width attribute as number', function () {
      var component = React.createElement(EuiTableHeaderCellCheckbox, {
        width: 100
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('resolves style and width attribute', function () {
      var component = React.createElement(EuiTableHeaderCellCheckbox, {
        width: "10%",
        style: {
          width: '20%'
        }
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
  });
});