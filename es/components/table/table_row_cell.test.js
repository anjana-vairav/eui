import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTableRowCell } from './table_row_cell';
import { RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services/alignment';
test('renders EuiTableRowCell', function () {
  var component = React.createElement(EuiTableRowCell, requiredProps, "children");
  expect(render(component)).toMatchSnapshot();
});
describe('align', function () {
  test('defaults to left', function () {
    var component = React.createElement(EuiTableRowCell, null);
    expect(render(component)).toMatchSnapshot();
  });
  test('renders right when specified', function () {
    var component = React.createElement(EuiTableRowCell, {
      align: RIGHT_ALIGNMENT
    });
    expect(render(component)).toMatchSnapshot();
  });
  test('renders center when specified', function () {
    var component = React.createElement(EuiTableRowCell, {
      align: CENTER_ALIGNMENT
    });
    expect(render(component)).toMatchSnapshot();
  });
});
describe('textOnly', function () {
  test('defaults to true', function () {
    var component = React.createElement(EuiTableRowCell, null);
    expect(render(component)).toMatchSnapshot();
  });
  test('is rendered when specified', function () {
    var component = React.createElement(EuiTableRowCell, {
      textOnly: false
    });
    expect(render(component)).toMatchSnapshot();
  });
});
describe('truncateText', function () {
  test('defaults to false', function () {
    var component = React.createElement(EuiTableRowCell, null);
    expect(render(component)).toMatchSnapshot();
  });
  test('is rendered when specified', function () {
    var component = React.createElement(EuiTableRowCell, {
      truncateText: true
    });
    expect(render(component)).toMatchSnapshot();
  });
});
describe("children's className", function () {
  test('merges new classnames into existing ones', function () {
    var component = React.createElement(EuiTableRowCell, {
      textOnly: false,
      showOnHover: true
    }, React.createElement("div", {
      className: "testClass"
    }));
    expect(render(component)).toMatchSnapshot();
  });
});
describe('width and style', function () {
  test('accepts style attribute', function () {
    var component = React.createElement(EuiTableRowCell, {
      style: {
        width: '20%'
      }
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('accepts width attribute', function () {
    var component = React.createElement(EuiTableRowCell, {
      width: "10%"
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('accepts width attribute as number', function () {
    var component = React.createElement(EuiTableRowCell, {
      width: 100
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
  test('resolves style and width attribute', function () {
    var component = React.createElement(EuiTableRowCell, {
      width: "10%",
      style: {
        width: '20%'
      }
    }, "Test");
    expect(render(component)).toMatchSnapshot();
  });
});