"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_row_cell = require("./table_row_cell");

var _alignment = require("../../services/alignment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiTableRowCell', function () {
  var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, _required_props.requiredProps, "children");

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});
describe('align', function () {
  test('defaults to left', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, null);

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders right when specified', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      align: _alignment.RIGHT_ALIGNMENT
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders center when specified', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      align: _alignment.CENTER_ALIGNMENT
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});
describe('textOnly', function () {
  test('defaults to true', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, null);

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('is rendered when specified', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      textOnly: false
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});
describe('truncateText', function () {
  test('defaults to false', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, null);

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('is rendered when specified', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      truncateText: true
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});
describe("children's className", function () {
  test('merges new classnames into existing ones', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      textOnly: false,
      showOnHover: true
    }, _react.default.createElement("div", {
      className: "testClass"
    }));

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});
describe('width and style', function () {
  test('accepts style attribute', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      style: {
        width: '20%'
      }
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('accepts width attribute', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      width: "10%"
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('accepts width attribute as number', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      width: 100
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('resolves style and width attribute', function () {
    var component = _react.default.createElement(_table_row_cell.EuiTableRowCell, {
      width: "10%",
      style: {
        width: '20%'
      }
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});