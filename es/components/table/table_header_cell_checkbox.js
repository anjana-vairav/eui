function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { resolveWidthAsStyle } from './utils';
export var EuiTableHeaderCellCheckbox = function EuiTableHeaderCellCheckbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? 'col' : _ref$scope,
      style = _ref.style,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["children", "className", "scope", "style", "width"]);

  var classes = classNames('euiTableHeaderCellCheckbox', className);
  var styleObj = resolveWidthAsStyle(style, width);
  return React.createElement("th", _extends({
    className: classes,
    scope: scope,
    style: styleObj
  }, rest), React.createElement("div", {
    className: "euiTableCellContent"
  }, children));
};
EuiTableHeaderCellCheckbox.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  scope: PropTypes.oneOf(["col", "row", "colgroup", "rowgroup"])
};
EuiTableHeaderCellCheckbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableHeaderCellCheckbox",
  "props": {
    "scope": {
      "defaultValue": {
        "value": "'col'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"col\"",
          "computed": false
        }, {
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"colgroup\"",
          "computed": false
        }, {
          "value": "\"rowgroup\"",
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
    },
    "width": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false,
      "description": ""
    }
  }
};