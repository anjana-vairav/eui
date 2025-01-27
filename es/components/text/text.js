function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
import { EuiTextColor } from './text_color';
import { EuiTextAlign } from './text_align';
var textSizeToClassNameMap = {
  xs: 'euiText--extraSmall',
  s: 'euiText--small',
  m: 'euiText--medium'
};
export var TEXT_SIZES = keysOf(textSizeToClassNameMap);
export var EuiText = function EuiText(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      color = _ref.color,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      textAlign = _ref.textAlign,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["size", "color", "grow", "textAlign", "children", "className"]);

  var classes = classNames('euiText', textSizeToClassNameMap[size], className, {
    'euiText--constrainedWidth': !grow
  });
  var optionallyAlteredText;

  if (color) {
    optionallyAlteredText = React.createElement(EuiTextColor, {
      color: color,
      component: "div"
    }, children);
  }

  if (textAlign) {
    optionallyAlteredText = React.createElement(EuiTextAlign, {
      textAlign: textAlign
    }, optionallyAlteredText || children);
  }

  return React.createElement("div", _extends({
    className: classes
  }, rest), optionallyAlteredText || children);
};
EuiText.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  size: PropTypes.oneOf(["xs", "s", "m"]),
  color: PropTypes.oneOf(["default", "subdued", "secondary", "accent", "danger", "warning", "ghost"]),
  grow: PropTypes.bool
};
EuiText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiText",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"xs\"",
          "computed": false
        }, {
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
    "grow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
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
    "textAlign": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "color": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"ghost\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    }
  }
};