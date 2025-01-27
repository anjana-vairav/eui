"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFacetButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge = require("../badge");

var _loading = require("../loading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFacetButton = function EuiFacetButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      quantity = _ref.quantity,
      buttonRef = _ref.buttonRef,
      rest = _objectWithoutProperties(_ref, ["children", "className", "icon", "isDisabled", "isLoading", "isSelected", "quantity", "buttonRef"]);

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;
  var classes = (0, _classnames.default)('euiFacetButton', {
    'euiFacetButton--isSelected': isSelected,
    'euiFacetButton--unSelected': !isSelected
  }, className); // Add quanity number if provided or loading indicator

  var buttonQuantity;

  if (isLoading) {
    buttonQuantity = _react.default.createElement(_loading.EuiLoadingSpinner, {
      className: "euiFacetButton__spinner",
      size: "m"
    });
  } else if (typeof quantity === 'number') {
    buttonQuantity = _react.default.createElement(_badge.EuiNotificationBadge, {
      className: "euiFacetButton__quantity",
      size: "m",
      color: !isSelected || isDisabled ? 'subdued' : 'accent'
    }, quantity);
  } // Add an icon to the button if one exists.


  var buttonIcon;

  if (_react.default.isValidElement(icon)) {
    buttonIcon = _react.default.cloneElement(icon, {
      className: (0, _classnames.default)(icon.props.className, 'euiFacetButton__icon')
    });
  }

  var dataText;

  if (typeof children === 'string') {
    dataText = children;
  }

  return _react.default.createElement("button", _extends({
    className: classes,
    disabled: isDisabled,
    type: "button",
    ref: buttonRef
  }, rest), _react.default.createElement("span", {
    className: "euiFacetButton__content"
  }, buttonIcon, _react.default.createElement("span", {
    "data-text": dataText,
    className: "euiFacetButton__text"
  }, children), buttonQuantity));
};

exports.EuiFacetButton = EuiFacetButton;
EuiFacetButton.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  buttonRef: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,

  /**
     * Any node, but preferrably a `EuiIcon` or `EuiAvatar`
     */
  icon: _propTypes.default.node,
  isDisabled: _propTypes.default.bool,

  /**
     * Adds/swaps for loading spinner & disables
     */
  isLoading: _propTypes.default.bool,

  /**
     * Changes visual of button to indicate it's currently selected
     */
  isSelected: _propTypes.default.bool,
  onClick: _propTypes.default.func,

  /**
     * Adds a notification indicator for displaying the quantity provided
     */
  quantity: _propTypes.default.number
};
EuiFacetButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFacetButton",
  "props": {
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isLoading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Adds/swaps for loading spinner & disables"
    },
    "isSelected": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Changes visual of button to indicate it's currently selected"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "buttonRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Any node, but preferrably a `EuiIcon` or `EuiAvatar`"
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "quantity": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Adds a notification indicator for displaying the quantity provided"
    }
  }
};