"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _table_header_cell_checkbox = require("./table_header_cell_checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableHeaderCellCheckbox', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_header_cell_checkbox.EuiTableHeaderCellCheckbox, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('width and style', function () {
    test('accepts style attribute', function () {
      var component = _react.default.createElement(_table_header_cell_checkbox.EuiTableHeaderCellCheckbox, {
        style: {
          width: '20%'
        }
      }, "Test");

      expect((0, _enzyme.render)(component)).toMatchSnapshot();
    });
    test('accepts width attribute', function () {
      var component = _react.default.createElement(_table_header_cell_checkbox.EuiTableHeaderCellCheckbox, {
        width: "10%"
      }, "Test");

      expect((0, _enzyme.render)(component)).toMatchSnapshot();
    });
    test('accepts width attribute as number', function () {
      var component = _react.default.createElement(_table_header_cell_checkbox.EuiTableHeaderCellCheckbox, {
        width: 100
      }, "Test");

      expect((0, _enzyme.render)(component)).toMatchSnapshot();
    });
    test('resolves style and width attribute', function () {
      var component = _react.default.createElement(_table_header_cell_checkbox.EuiTableHeaderCellCheckbox, {
        width: "10%",
        style: {
          width: '20%'
        }
      }, "Test");

      expect((0, _enzyme.render)(component)).toMatchSnapshot();
    });
  });
});