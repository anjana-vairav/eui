function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiNotificationBadge } from '../badge';
import { EuiLoadingSpinner } from '../loading';
export var EuiFacetButton = function EuiFacetButton(_ref) {
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
  var classes = classNames('euiFacetButton', {
    'euiFacetButton--isSelected': isSelected,
    'euiFacetButton--unSelected': !isSelected
  }, className); // Add quanity number if provided or loading indicator

  var buttonQuantity;

  if (isLoading) {
    buttonQuantity = React.createElement(EuiLoadingSpinner, {
      className: "euiFacetButton__spinner",
      size: "m"
    });
  } else if (typeof quantity === 'number') {
    buttonQuantity = React.createElement(EuiNotificationBadge, {
      className: "euiFacetButton__quantity",
      size: "m",
      color: !isSelected || isDisabled ? 'subdued' : 'accent'
    }, quantity);
  } // Add an icon to the button if one exists.


  var buttonIcon;

  if (React.isValidElement(icon)) {
    buttonIcon = React.cloneElement(icon, {
      className: classNames(icon.props.className, 'euiFacetButton__icon')
    });
  }

  var dataText;

  if (typeof children === 'string') {
    dataText = children;
  }

  return React.createElement("button", _extends({
    className: classes,
    disabled: isDisabled,
    type: "button",
    ref: buttonRef
  }, rest), React.createElement("span", {
    className: "euiFacetButton__content"
  }, buttonIcon, React.createElement("span", {
    "data-text": dataText,
    className: "euiFacetButton__text"
  }, children), buttonQuantity));
};
EuiFacetButton.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  buttonRef: PropTypes.func,
  children: PropTypes.node.isRequired,

  /**
     * Any node, but preferrably a `EuiIcon` or `EuiAvatar`
     */
  icon: PropTypes.node,
  isDisabled: PropTypes.bool,

  /**
     * Adds/swaps for loading spinner & disables
     */
  isLoading: PropTypes.bool,

  /**
     * Changes visual of button to indicate it's currently selected
     */
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,

  /**
     * Adds a notification indicator for displaying the quantity provided
     */
  quantity: PropTypes.number
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