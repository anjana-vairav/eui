"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _header = require("./header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeader', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header.EuiHeader, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header.EuiHeader, null, _react.default.createElement("span", null, "Hello!")));
    expect(component).toMatchSnapshot();
  });
});