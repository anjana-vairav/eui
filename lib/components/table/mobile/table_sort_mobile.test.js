"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _table_sort_mobile = require("./table_sort_mobile");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableSortMobile', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_sort_mobile.EuiTableSortMobile, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});