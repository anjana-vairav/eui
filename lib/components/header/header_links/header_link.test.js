"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _header_link = require("./header_link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeaderLink', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_link.EuiHeaderLink, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});