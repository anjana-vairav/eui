"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _table_header_button = require("./table_header_button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTableHeaderButton', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_table_header_button.EuiTableHeaderButton, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});