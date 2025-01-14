function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var displayToClassNameMap = {
  condensed: 'euiTabs--condensed',
  default: null
};
export var DISPLAYS = Object.keys(displayToClassNameMap);
var sizeToClassNameMap = {
  s: 'euiTabs--small',
  m: null
};
export var SIZES = Object.keys(sizeToClassNameMap);
export var EuiTabs = function EuiTabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      display = _ref.display,
      expand = _ref.expand,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "className", "display", "expand", "size"]);

  var classes = classNames('euiTabs', displayToClassNameMap[display], sizeToClassNameMap[size], {
    'euiTabs--expand': expand
  }, className);
  return React.createElement("div", _extends({
    role: "tablist",
    className: classes
  }, rest), children);
};
EuiTabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Choose `default` or alternative `condensed` display styles
   */
  display: PropTypes.oneOf(DISPLAYS),

  /**
   * Evenly stretches each tab to fill the
   * horizontal space
   */
  expand: PropTypes.bool,
  size: PropTypes.oneOf(SIZES)
};
EuiTabs.defaultProps = {
  display: 'default',
  expand: false,
  size: 'm'
};
EuiTabs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTabs",
  "props": {
    "display": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"condensed\"",
          "computed": false
        }, {
          "value": "\"default\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Choose `default` or alternative `condensed` display styles"
    },
    "expand": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Evenly stretches each tab to fill the\nhorizontal space"
    },
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};