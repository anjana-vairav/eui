import React from 'react';
import { shallow } from 'enzyme';
import { ExpandedItemActions } from './expanded_item_actions';
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
          return React.createElement(React.Fragment, null);
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
    var component = shallow(React.createElement(ExpandedItemActions, props));
    expect(component).toMatchSnapshot();
  });
});