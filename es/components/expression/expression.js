function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
var colorToClassNameMap = {
  subdued: 'euiExpression--subdued',
  primary: 'euiExpression--primary',
  secondary: 'euiExpression--secondary',
  accent: 'euiExpression--accent',
  warning: 'euiExpression--warning',
  danger: 'euiExpression--danger'
};
export var COLORS = keysOf(colorToClassNameMap);
export var EuiExpression = function EuiExpression(_ref) {
  var className = _ref.className,
      description = _ref.description,
      descriptionProps = _ref.descriptionProps,
      value = _ref.value,
      valueProps = _ref.valueProps,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$uppercase = _ref.uppercase,
      uppercase = _ref$uppercase === void 0 ? true : _ref$uppercase,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "description", "descriptionProps", "value", "valueProps", "color", "uppercase", "isActive", "onClick"]);

  var classes = classNames('euiExpression', className, {
    'euiExpression-isActive': isActive,
    'euiExpression-isClickable': onClick,
    'euiExpression-isUppercase': uppercase
  }, colorToClassNameMap[color]);
  var Component = onClick ? 'button' : 'span';
  return React.createElement(Component, _extends({
    className: classes,
    onClick: onClick
  }, rest), React.createElement("span", _extends({
    className: "euiExpression__description"
  }, descriptionProps), description), ' ', React.createElement("span", _extends({
    className: "euiExpression__value"
  }, valueProps), value));
};
EuiExpression.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * First part of the expression
     */

  /**
     * First part of the expression
     */
  description: PropTypes.node.isRequired,
  descriptionProps: PropTypes.any,

  /**
     * Second part of the expression
     */

  /**
     * Second part of the expression
     */
  value: PropTypes.node.isRequired,
  valueProps: PropTypes.any,

  /**
     * Color of the `description`
     */

  /**
     * Color of the `description`
     */
  color: PropTypes.oneOf(["subdued", "primary", "secondary", "accent", "warning", "danger"]),

  /**
     * Should the `description` auto-uppercase?
     */

  /**
     * Should the `description` auto-uppercase?
     */
  uppercase: PropTypes.bool,

  /**
     * Adds an solid border at the bottom
     */

  /**
     * Adds an solid border at the bottom
     */
  isActive: PropTypes.bool,

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */
  onClick: PropTypes.oneOfType([PropTypes.oneOfType([PropTypes.func, PropTypes.func.isRequired]), PropTypes.func])
};
EuiExpression.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiExpression",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'secondary'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Color of the `description`"
    },
    "uppercase": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Should the `description` auto-uppercase?"
    },
    "isActive": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Adds an solid border at the bottom"
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
    "description": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "First part of the expression"
    },
    "descriptionProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "Second part of the expression"
    },
    "valueProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "func"
          }, {
            "name": "func"
          }]
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": "Turns the component into a button and adds an editable style border at the bottom"
    }
  }
};