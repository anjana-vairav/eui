"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _flex_grid = require("./flex_grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('EuiFlexGrid', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flex_grid.EuiFlexGrid, _extends({
      columns: 3
    }, _required_props.requiredProps), _react.default.createElement("h2", null, "My Child")));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('gutterSize', function () {
      _flex_grid.GUTTER_SIZES.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_grid.EuiFlexGrid, {
            gutterSize: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('columns', function () {
      _flex_grid.COLUMNS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_grid.EuiFlexGrid, {
            columns: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('direction', function () {
      _flex_grid.DIRECTIONS.forEach(function (value) {
        test("".concat(value, " is rendered"), function () {
          var component = (0, _enzyme.render)(_react.default.createElement(_flex_grid.EuiFlexGrid, {
            direction: value
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('responsive', function () {
      test('is rendered', function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_flex_grid.EuiFlexGrid, {
          responsive: false
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});