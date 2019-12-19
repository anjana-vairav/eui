import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableHeaderCell } from './table_header_cell';
import { RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services';
test('renders EuiTableHeaderCell', function () {
  var component = React.createElement(EuiTableHeaderCell, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});
describe('align', function () {
  test('defaults to left', function () {
    var component = React.createElement(EuiTableHeaderCell, null);
    expect(render(component)).toMatchSnapshot();
  });
  test('renders right when specified', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      align: RIGHT_ALIGNMENT
    });
    expect(render(component)).toMatchSnapshot();
  });
  test('renders center when specified', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      align: CENTER_ALIGNMENT
    });
    expect(render(component)).toMatchSnapshot();
  });
});
describe('width and style', function () {
  test('accepts style attribute', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      style: {
        width: '20%'
      }
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('accepts width attribute', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      width: "10%"
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('accepts width attribute as number', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      width: 100
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('resolves style and width attribute', function () {
    var component = React.createElement(EuiTableHeaderCell, {
      width: "10%",
      style: {
        width: '20%'
      }
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
});