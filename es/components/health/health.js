function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiIcon } from '../icon';
import { EuiFlexGroup, EuiFlexItem } from '../flex';
export var EuiHealth = function EuiHealth(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "className", "color"]);

  var classes = classNames('euiHealth', className);
  return React.createElement("div", _extends({
    className: classes
  }, rest), React.createElement(EuiFlexGroup, {
    gutterSize: "xs",
    alignItems: "center",
    responsive: false
  }, React.createElement(EuiFlexItem, {
    grow: false
  }, React.createElement(EuiIcon, {
    type: "dot",
    color: color
  })), React.createElement(EuiFlexItem, {
    grow: false
  }, children)));
};
EuiHealth.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired])
};
EuiHealth.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHealth",
  "props": {
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
    "color": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "enum",
          "value": [{
            "value": "\"default\"",
            "computed": false
          }, {
            "value": "\"primary\"",
            "computed": false
          }, {
            "value": "\"secondary\"",
            "computed": false
          }, {
            "value": "\"success\"",
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
          }, {
            "value": "\"text\"",
            "computed": false
          }, {
            "value": "\"subdued\"",
            "computed": false
          }, {
            "value": "\"ghost\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": ""
    }
  }
};