"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _default_item_action = require("./default_item_action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DefaultItemAction', function () {
  test('render - default button', function () {
    var action = {
      name: 'action1',
      description: 'action 1',
      onClick: function onClick() {}
    };
    var props = {
      action: action,
      enabled: true,
      item: {
        id: 'xyz'
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_default_item_action.DefaultItemAction, props));
    expect(component).toMatchSnapshot();
  });
  test('render - button', function () {
    var action = {
      name: 'action1',
      description: 'action 1',
      type: 'button',
      onClick: function onClick() {}
    };
    var props = {
      action: action,
      enabled: true,
      item: {
        id: 'xyz'
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_default_item_action.DefaultItemAction, props));
    expect(component).toMatchSnapshot();
  });
  test('render - icon', function () {
    var action = {
      name: 'action1',
      description: 'action 1',
      type: 'icon',
      icon: 'trash',
      onClick: function onClick() {}
    };
    var props = {
      action: action,
      enabled: true,
      item: {
        id: 'xyz'
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_default_item_action.DefaultItemAction, props));
    expect(component).toMatchSnapshot();
  });
});