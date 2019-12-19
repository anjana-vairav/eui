import React from 'react';
import { shallow } from 'enzyme';
import { CustomItemAction } from './custom_item_action';
describe('CustomItemAction', function () {
  test('render', function () {
    var props = {
      action: {
        render: function render() {
          return React.createElement("span", null, "test");
        }
      },
      enabled: true,
      item: {
        id: 'xyz'
      },
      className: 'test'
    };
    var component = shallow(React.createElement(CustomItemAction, props));
    expect(component).toMatchSnapshot();
  });
});