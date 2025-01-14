function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiPanel, SIZES } from '../../panel/panel';
var verticalPositionToClassNameMap = {
  center: 'euiPageContent--verticalCenter'
};
var horizontalPositionToClassNameMap = {
  center: 'euiPageContent--horizontalCenter'
};
export var VERTICAL_POSITIONS = Object.keys(verticalPositionToClassNameMap);
export var HORIZONTAL_POSITIONS = Object.keys(horizontalPositionToClassNameMap);
export var EuiPageContent = function EuiPageContent(_ref) {
  var verticalPosition = _ref.verticalPosition,
      horizontalPosition = _ref.horizontalPosition,
      panelPaddingSize = _ref.panelPaddingSize,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["verticalPosition", "horizontalPosition", "panelPaddingSize", "children", "className"]);

  var classes = classNames('euiPageContent', verticalPositionToClassNameMap[verticalPosition], horizontalPositionToClassNameMap[horizontalPosition], className);
  return React.createElement(EuiPanel, _extends({
    className: classes,
    paddingSize: panelPaddingSize
  }, rest), children);
};
EuiPageContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  panelPaddingSize: PropTypes.oneOf(SIZES),
  verticalPosition: PropTypes.oneOf(VERTICAL_POSITIONS),
  horizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITIONS)
};
EuiPageContent.defaultProps = {
  panelPaddingSize: 'l'
};
EuiPageContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPageContent",
  "props": {
    "panelPaddingSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "SIZES"
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
    },
    "verticalPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "horizontalPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    }
  }
};