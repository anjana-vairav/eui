"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _expanded_item_actions = require("./expanded_item_actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ExpandedItemActions', function () {
  test('render', function () {
    var props = {
      actions: [{
        name: 'default1',
        description: 'default 1',
        onClick: function onClick() {}
      }, {
        name: 'custom1',
        description: 'custom 1',
        render: function render(_item) {
          return _react.default.createElement(_react.default.Fragment, null);
        }
      }],
      itemId: 'xyz',
      item: {
        id: 'xyz'
      },
      actionEnabled: function actionEnabled() {
        return true;
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_expanded_item_actions.ExpandedItemActions, props));
    expect(component).toMatchSnapshot();
  });
});