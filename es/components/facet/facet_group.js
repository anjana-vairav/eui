function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiFlexGroup } from '../flex';
var layoutToClassNameMap = {
  vertical: 'euiFacetGroup--vertical',
  horizontal: 'euiFacetGroup--horizontal'
};
export var EuiFacetGroup = function EuiFacetGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
      rest = _objectWithoutProperties(_ref, ["children", "className", "layout"]);

  var classes = classNames('euiFacetGroup', layoutToClassNameMap[layout], className);
  var direction = layout === 'vertical' ? 'column' : 'row';
  var wrap = layout === 'vertical' ? false : true;
  return React.createElement(EuiFlexGroup, _extends({
    className: classes,
    direction: direction,
    wrap: wrap,
    gutterSize: "none"
  }, rest), children);
};
EuiFacetGroup.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  layout: PropTypes.oneOf(["vertical", "horizontal"])
};
EuiFacetGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFacetGroup",
  "props": {
    "layout": {
      "defaultValue": {
        "value": "'vertical'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"vertical\"",
          "computed": false
        }, {
          "value": "\"horizontal\"",
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