"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _collapsed_item_actions = require("./collapsed_item_actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CollapsedItemActions', function () {
  test('render', function () {
    var props = {
      actions: [{
        name: 'default1',
        description: 'default 1',
        onClick: function onClick() {}
      }, {
        name: 'custom1',
        description: 'custom 1',
        render: function render() {
          return _react.default.createElement("div", null);
        }
      }],
      itemId: 'id',
      item: {
        id: 'xyz'
      },
      actionEnabled: function actionEnabled(_) {
        return true;
      },
      onFocus: function onFocus(_) {},
      onBlur: function onBlur() {}
    };
    var component = (0, _enzyme.render)(_react.default.createElement(_collapsed_item_actions.CollapsedItemActions, props));
    expect(component).toMatchSnapshot();
  });
});