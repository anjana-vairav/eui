function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
var gutterSizeToClassNameMap = {
  none: null,
  xs: 'euiFlexGroup--gutterExtraSmall',
  s: 'euiFlexGroup--gutterSmall',
  m: 'euiFlexGroup--gutterMedium',
  l: 'euiFlexGroup--gutterLarge',
  xl: 'euiFlexGroup--gutterExtraLarge'
};
export var GUTTER_SIZES = keysOf(gutterSizeToClassNameMap);
var alignItemsToClassNameMap = {
  stretch: null,
  flexStart: 'euiFlexGroup--alignItemsFlexStart',
  flexEnd: 'euiFlexGroup--alignItemsFlexEnd',
  center: 'euiFlexGroup--alignItemsCenter',
  baseline: 'euiFlexGroup--alignItemsBaseline'
};
export var ALIGN_ITEMS = keysOf(alignItemsToClassNameMap);
var justifyContentToClassNameMap = {
  flexStart: null,
  flexEnd: 'euiFlexGroup--justifyContentFlexEnd',
  center: 'euiFlexGroup--justifyContentCenter',
  spaceBetween: 'euiFlexGroup--justifyContentSpaceBetween',
  spaceAround: 'euiFlexGroup--justifyContentSpaceAround',
  spaceEvenly: 'euiFlexGroup--justifyContentSpaceEvenly'
};
export var JUSTIFY_CONTENTS = keysOf(justifyContentToClassNameMap);
var directionToClassNameMap = {
  row: 'euiFlexGroup--directionRow',
  rowReverse: 'euiFlexGroup--directionRowReverse',
  column: 'euiFlexGroup--directionColumn',
  columnReverse: 'euiFlexGroup--directionColumnReverse'
};
export var DIRECTIONS = keysOf(directionToClassNameMap);

var isValidElement = function isValidElement(component) {
  return ['div', 'span'].includes(component);
};

var EuiFlexGroup = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 'l' : _ref$gutterSize,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'stretch' : _ref$alignItems,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$justifyContent = _ref.justifyContent,
      justifyContent = _ref$justifyContent === void 0 ? 'flexStart' : _ref$justifyContent,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? false : _ref$wrap,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      rest = _objectWithoutProperties(_ref, ["children", "className", "gutterSize", "alignItems", "responsive", "justifyContent", "direction", "wrap", "component"]);

  var classes = classNames('euiFlexGroup', gutterSizeToClassNameMap[gutterSize], alignItemsToClassNameMap[alignItems], justifyContentToClassNameMap[justifyContent], directionToClassNameMap[direction], {
    'euiFlexGroup--responsive': responsive,
    'euiFlexGroup--wrap': wrap
  }, className);

  if (!isValidElement(component)) {
    throw new Error("".concat(component, " is not a valid element type. Use `div` or `span`."));
  }

  return component === 'span' ? React.createElement("span", _extends({
    className: classes,
    ref: ref
  }, rest), children) : React.createElement("div", _extends({
    className: classes,
    ref: ref
  }, rest), children);
});
EuiFlexGroup.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  alignItems: PropTypes.oneOf(["stretch", "flexStart", "flexEnd", "center", "baseline"]),
  component: PropTypes.oneOf(["div", "span"]),
  direction: PropTypes.oneOf(["row", "rowReverse", "column", "columnReverse"]),
  gutterSize: PropTypes.oneOf(["none", "xs", "s", "m", "l", "xl"]),
  justifyContent: PropTypes.oneOf(["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly"]),
  responsive: PropTypes.bool,
  wrap: PropTypes.bool
};
EuiFlexGroup.displayName = 'EuiFlexGroup';
export { EuiFlexGroup };
EuiFlexGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFlexGroup",
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
    "alignItems": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"stretch\"",
          "computed": false
        }, {
          "value": "\"flexStart\"",
          "computed": false
        }, {
          "value": "\"flexEnd\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"baseline\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "component": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"div\"",
          "computed": false
        }, {
          "value": "\"span\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "direction": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"rowReverse\"",
          "computed": false
        }, {
          "value": "\"column\"",
          "computed": false
        }, {
          "value": "\"columnReverse\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "gutterSize": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"xs\"",
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
      "description": ""
    },
    "justifyContent": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"flexStart\"",
          "computed": false
        }, {
          "value": "\"flexEnd\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"spaceBetween\"",
          "computed": false
        }, {
          "value": "\"spaceAround\"",
          "computed": false
        }, {
          "value": "\"spaceEvenly\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "responsive": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "wrap": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};