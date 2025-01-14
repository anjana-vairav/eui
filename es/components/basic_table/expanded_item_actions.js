import React from 'react';
import classNames from 'classnames';
import { DefaultItemAction } from './default_item_action';
import { CustomItemAction } from './custom_item_action';
export var ExpandedItemActions = function ExpandedItemActions(_ref) {
  var actions = _ref.actions,
      itemId = _ref.itemId,
      item = _ref.item,
      actionEnabled = _ref.actionEnabled,
      className = _ref.className;
  var moreThanThree = actions.length > 2;
  return React.createElement(React.Fragment, null, actions.reduce(function (tools, action, index) {
    var available = action.available ? action.available(item) : true;

    if (!available) {
      return tools;
    }

    var enabled = actionEnabled(action);
    var key = "item_action_".concat(itemId, "_").concat(index);
    var classes = classNames(className, {
      expandedItemActions__completelyHide: moreThanThree && index < 2
    });

    if (action.render) {
      // custom action has a render function
      tools.push(React.createElement(CustomItemAction, {
        key: key,
        className: classes,
        index: index,
        action: action,
        enabled: enabled,
        item: item
      }));
    } else {
      tools.push(React.createElement(DefaultItemAction, {
        key: key,
        className: classes,
        action: action,
        enabled: enabled,
        item: item
      }));
    }

    return tools;
  }, []));
};