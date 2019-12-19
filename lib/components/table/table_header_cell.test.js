"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_header_cell = require("./table_header_cell");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders EuiTableHeaderCell', function () {
  var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, _required_props.requiredProps, "children");

  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});
describe('align', function () {
  test('defaults to left', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, null);

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders right when specified', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      align: _services.RIGHT_ALIGNMENT
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('renders center when specified', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      align: _services.CENTER_ALIGNMENT
    });

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});
describe('width and style', function () {
  test('accepts style attribute', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      style: {
        width: '20%'
      }
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('accepts width attribute', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      width: "10%"
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('accepts width attribute as number', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      width: 100
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
  test('resolves style and width attribute', function () {
    var component = _react.default.createElement(_table_header_cell.EuiTableHeaderCell, {
      width: "10%",
      style: {
        width: '20%'
      }
    }, "Test");

    expect((0, _enzyme.render)(component)).toMatchSnapshot();
  });
});