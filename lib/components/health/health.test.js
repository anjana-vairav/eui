"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _health = require("./health");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHealth', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_health.EuiHealth, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});