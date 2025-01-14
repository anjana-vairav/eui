"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedItemActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _default_item_action = require("./default_item_action");

var _custom_item_action = require("./custom_item_action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedItemActions = function ExpandedItemActions(_ref) {
  var actions = _ref.actions,
      itemId = _ref.itemId,
      item = _ref.item,
      actionEnabled = _ref.actionEnabled,
      className = _ref.className;
  var moreThanThree = actions.length > 2;
  return _react.default.createElement(_react.default.Fragment, null, actions.reduce(function (tools, action, index) {
    var available = action.available ? action.available(item) : true;

    if (!available) {
      return tools;
    }

    var enabled = actionEnabled(action);
    var key = "item_action_".concat(itemId, "_").concat(index);
    var classes = (0, _classnames.default)(className, {
      expandedItemActions__completelyHide: moreThanThree && index < 2
    });

    if (action.render) {
      // custom action has a render function
      tools.push(_react.default.createElement(_custom_item_action.CustomItemAction, {
        key: key,
        className: classes,
        index: index,
        action: action,
        enabled: enabled,
        item: item
      }));
    } else {
      tools.push(_react.default.createElement(_default_item_action.DefaultItemAction, {
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

exports.ExpandedItemActions = ExpandedItemActions;