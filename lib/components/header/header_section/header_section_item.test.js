"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _header_section_item = require("./header_section_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeaderSectionItem', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item.EuiHeaderSectionItem, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item.EuiHeaderSectionItem, null, _react.default.createElement("span", null, "Call me Ishmael.")));
    expect(component).toMatchSnapshot();
  });
  describe('border', function () {
    test('defaults to left', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item.EuiHeaderSectionItem, null));
      expect(component).toMatchSnapshot();
    });
    test('renders right', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item.EuiHeaderSectionItem, {
        border: "right"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});