import React from 'react';
import { render } from 'enzyme';
import { CollapsedItemActions } from './collapsed_item_actions';
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
          return React.createElement("div", null);
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
    var component = render(React.createElement(CollapsedItemActions, props));
    expect(component).toMatchSnapshot();
  });
});