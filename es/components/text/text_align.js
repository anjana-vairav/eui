function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
export var alignmentToClassNameMap = {
  left: 'euiTextAlign--left',
  right: 'euiTextAlign--right',
  center: 'euiTextAlign--center'
};
export var ALIGNMENTS = keysOf(alignmentToClassNameMap);
export var EuiTextAlign = function EuiTextAlign(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      rest = _objectWithoutProperties(_ref, ["children", "className", "textAlign"]);

  var classes = classNames('euiTextAlign', alignmentToClassNameMap[textAlign], className);
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};
EuiTextAlign.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "right", "center"])
};
EuiTextAlign.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTextAlign",
  "props": {
    "textAlign": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
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