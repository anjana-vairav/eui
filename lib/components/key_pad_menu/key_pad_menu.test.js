"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _key_pad_menu = require("./key_pad_menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiKeyPadMenu', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_key_pad_menu.EuiKeyPadMenu, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
});