"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _header_section_item_button = require("./header_section_item_button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiHeaderSectionItemButton', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item_button.EuiHeaderSectionItemButton, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders children', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_header_section_item_button.EuiHeaderSectionItemButton, null, _react.default.createElement("span", null, "Ahoy!")));
    expect(component).toMatchSnapshot();
  });
  describe('onClick', function () {
    test("isn't called upon instantiation", function () {
      var onClickHandler = jest.fn();
      (0, _enzyme.shallow)(_react.default.createElement(_header_section_item_button.EuiHeaderSectionItemButton, {
        onClick: onClickHandler
      }));
      expect(onClickHandler).not.toHaveBeenCalled();
    });
    test('is called when the button is clicked', function () {
      var onClickHandler = jest.fn();
      var $button = (0, _enzyme.shallow)(_react.default.createElement(_header_section_item_button.EuiHeaderSectionItemButton, {
        onClick: onClickHandler
      }));
      $button.simulate('click');
      expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});