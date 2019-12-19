import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableFooterCell } from './table_footer_cell';
import { RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services';
describe('EuiTableFooterCell', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTableFooterCell, requiredProps, "children"));
    expect(component).toMatchSnapshot();
  });
  describe('align', function () {
    test('defaults to left', function () {
      var component = React.createElement(EuiTableFooterCell, null);
      expect(render(component)).toMatchSnapshot();
    });
    test('renders right when specified', function () {
      var component = React.createElement(EuiTableFooterCell, {
        align: RIGHT_ALIGNMENT
      });
      expect(render(component)).toMatchSnapshot();
    });
    test('renders center when specified', function () {
      var component = React.createElement(EuiTableFooterCell, {
        align: CENTER_ALIGNMENT
      });
      expect(render(component)).toMatchSnapshot();
    });
  });
  describe('width and style', function () {
    test('accepts style attribute', function () {
      var component = React.createElement(EuiTableFooterCell, {
        style: {
          width: '20%'
        }
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('accepts width attribute', function () {
      var component = React.createElement(EuiTableFooterCell, {
        width: "10%"
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('accepts width attribute as number', function () {
      var component = React.createElement(EuiTableFooterCell, {
        width: 100
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
    test('resolves style and width attribute', function () {
      var component = React.createElement(EuiTableFooterCell, {
        width: "10%",
        style: {
          width: '20%'
        }
      }, "Test");
      expect(render(component)).toMatchSnapshot();
    });
  });
});