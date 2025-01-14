"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiExpression = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  subdued: 'euiExpression--subdued',
  primary: 'euiExpression--primary',
  secondary: 'euiExpression--secondary',
  accent: 'euiExpression--accent',
  warning: 'euiExpression--warning',
  danger: 'euiExpression--danger'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;

var EuiExpression = function EuiExpression(_ref) {
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

  var classes = (0, _classnames.default)('euiExpression', className, {
    'euiExpression-isActive': isActive,
    'euiExpression-isClickable': onClick,
    'euiExpression-isUppercase': uppercase
  }, colorToClassNameMap[color]);
  var Component = onClick ? 'button' : 'span';
  return _react.default.createElement(Component, _extends({
    className: classes,
    onClick: onClick
  }, rest), _react.default.createElement("span", _extends({
    className: "euiExpression__description"
  }, descriptionProps), description), ' ', _react.default.createElement("span", _extends({
    className: "euiExpression__value"
  }, valueProps), value));
};

exports.EuiExpression = EuiExpression;
EuiExpression.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * First part of the expression
     */

  /**
     * First part of the expression
     */
  description: _propTypes.default.node.isRequired,
  descriptionProps: _propTypes.default.any,

  /**
     * Second part of the expression
     */

  /**
     * Second part of the expression
     */
  value: _propTypes.default.node.isRequired,
  valueProps: _propTypes.default.any,

  /**
     * Color of the `description`
     */

  /**
     * Color of the `description`
     */
  color: _propTypes.default.oneOf(["subdued", "primary", "secondary", "accent", "warning", "danger"]),

  /**
     * Should the `description` auto-uppercase?
     */

  /**
     * Should the `description` auto-uppercase?
     */
  uppercase: _propTypes.default.bool,

  /**
     * Adds an solid border at the bottom
     */

  /**
     * Adds an solid border at the bottom
     */
  isActive: _propTypes.default.bool,

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */
  onClick: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.func.isRequired]), _propTypes.default.func])
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