"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _custom_item_action = require("./custom_item_action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CustomItemAction', function () {
  test('render', function () {
    var props = {
      action: {
        render: function render() {
          return _react.default.createElement("span", null, "test");
        }
      },
      enabled: true,
      item: {
        id: 'xyz'
      },
      className: 'test'
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_custom_item_action.CustomItemAction, props));
    expect(component).toMatchSnapshot();
  });
});