function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
var directionToClassNameMap = {
  row: null,
  column: 'euiFlexGrid--directionColumn'
};
export var DIRECTIONS = keysOf(directionToClassNameMap);
var gutterSizeToClassNameMap = {
  none: 'euiFlexGrid--gutterNone',
  s: 'euiFlexGrid--gutterSmall',
  m: 'euiFlexGrid--gutterMedium',
  l: 'euiFlexGrid--gutterLarge',
  xl: 'euiFlexGrid--gutterXLarge'
};
export var GUTTER_SIZES = keysOf(gutterSizeToClassNameMap);
var columnsToClassNameMap = {
  0: 'euiFlexGrid--wrap',
  1: 'euiFlexGrid--single',
  2: 'euiFlexGrid--halves',
  3: 'euiFlexGrid--thirds',
  4: 'euiFlexGrid--fourths'
};
export var COLUMNS = Object.keys(columnsToClassNameMap).map(function (columns) {
  return parseInt(columns, 10);
});
export var EuiFlexGrid = function EuiFlexGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 'l' : _ref$gutterSize,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 0 : _ref$columns,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      rest = _objectWithoutProperties(_ref, ["children", "className", "gutterSize", "direction", "responsive", "columns", "component"]);

  var classes = classNames('euiFlexGrid', gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined, columns != null ? columnsToClassNameMap[columns] : undefined, direction ? directionToClassNameMap[direction] : undefined, {
    'euiFlexGrid--responsive': responsive
  }, className);
  return (// @ts-ignore
    React.createElement(Component, _extends({
      className: classes
    }, rest), children)
  );
};
EuiFlexGrid.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  children: PropTypes.node,

  /**
     * Number of columns `1-4`, pass `0` for normal display
     */
  columns: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
     * Flex layouts default to left-right then top-down (`row`).
     * Change this prop to `column` to create a top-down then left-right display.
     * Only works with column count of `1-4`.
     */
  direction: PropTypes.oneOf(["row", "column"]),

  /**
     * Space between flex items
     */
  gutterSize: PropTypes.oneOf(["none", "s", "m", "l", "xl"]),

  /**
     * Force each item to be display block on smaller screens
     */
  responsive: PropTypes.bool,

  /**
     * The tag to render
     */
  component: PropTypes.any
};
EuiFlexGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFlexGrid",
  "props": {
    "gutterSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Space between flex items"
    },
    "direction": {
      "defaultValue": {
        "value": "'row'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"column\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Flex layouts default to left-right then top-down (`row`).\nChange this prop to `column` to create a top-down then left-right display.\nOnly works with column count of `1-4`."
    },
    "responsive": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Force each item to be display block on smaller screens"
    },
    "columns": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "0",
          "computed": false
        }, {
          "value": "1",
          "computed": false
        }, {
          "value": "2",
          "computed": false
        }, {
          "value": "3",
          "computed": false
        }, {
          "value": "4",
          "computed": false
        }]
      },
      "required": false,
      "description": "Number of columns `1-4`, pass `0` for normal display"
    },
    "component": {
      "defaultValue": {
        "value": "'div'",
        "computed": false
      },
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "The tag to render"
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
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    }
  }
};