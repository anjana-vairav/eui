function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../../common';
var colorToClassMap = {
  accent: null,
  subdued: 'euiNotificationBadge--subdued'
};
export var COLORS = keysOf(colorToClassMap);
var sizeToClassNameMap = {
  s: null,
  m: 'euiNotificationBadge--medium'
};
export var SIZES = keysOf(sizeToClassNameMap);
export var EuiNotificationBadge = function EuiNotificationBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 's' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'accent' : _ref$color,
      rest = _objectWithoutProperties(_ref, ["children", "className", "size", "color"]);

  var classes = classNames('euiNotificationBadge', sizeToClassNameMap[size], colorToClassMap[color], className);
  return React.createElement("span", _extends({
    className: classes
  }, rest), children);
};
EuiNotificationBadge.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["s", "m"]),
  color: PropTypes.oneOf(["accent", "subdued"]),
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiNotificationBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiNotificationBadge",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'s'",
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
    "color": {
      "defaultValue": {
        "value": "'accent'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
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
      "required": true,
      "description": ""
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
    }
  }
};