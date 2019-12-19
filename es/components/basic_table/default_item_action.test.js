import React from 'react';
import { shallow } from 'enzyme';
import { DefaultItemAction } from './default_item_action';
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
    var component = shallow(React.createElement(DefaultItemAction, props));
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
    var component = shallow(React.createElement(DefaultItemAction, props));
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
    var component = shallow(React.createElement(DefaultItemAction, props));
    expect(component).toMatchSnapshot();
  });
});