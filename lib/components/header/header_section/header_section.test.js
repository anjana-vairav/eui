"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _header_section = require("./header_section");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeaderSection', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders optional params', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, {
      style: {
        color: 'blue'
      }
    }, _react.default.createElement("span", null, "Some years ago never mind how long precisely...")));
    expect(component).toMatchSnapshot();
  });
  describe('grow', function () {
    test('defaults to false', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, null));
      expect(component).toMatchSnapshot();
    });
    test('renders true', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, {
        grow: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
  describe('side', function () {
    test('defaults to left', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, null));
      expect(component).toMatchSnapshot();
    });
    test('renders right', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section.EuiHeaderSection, {
        side: "right"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});