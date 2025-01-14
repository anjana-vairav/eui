function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var GROW_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export var EuiFlexItem = function EuiFlexItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      rest = _objectWithoutProperties(_ref, ["children", "className", "grow", "component"]);

  validateGrowValue(grow);
  var classes = classNames('euiFlexItem', _defineProperty({
    'euiFlexItem--flexGrowZero': !grow
  }, "euiFlexItem--flexGrow".concat(grow), typeof grow === 'number' ? GROW_SIZES.indexOf(grow) >= 0 : undefined), className);
  return (// @ts-ignore
    React.createElement(Component, _extends({
      className: classes
    }, rest), children)
  );
};
EuiFlexItem.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  grow: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null]),
  component: PropTypes.any
};

function validateGrowValue(value) {
  var validValues = [null, undefined, true, false].concat(GROW_SIZES);

  if (validValues.indexOf(value) === -1) {
    throw new Error("Prop `grow` passed to `EuiFlexItem` must be a boolean or an integer between 1 and 10, received `".concat(value, "`"));
  }
}

EuiFlexItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFlexItem",
  "props": {
    "grow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
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
        }, {
          "value": "5",
          "computed": false
        }, {
          "value": "6",
          "computed": false
        }, {
          "value": "7",
          "computed": false
        }, {
          "value": "8",
          "computed": false
        }, {
          "value": "9",
          "computed": false
        }, {
          "value": "10",
          "computed": false
        }, {
          "value": "true",
          "computed": false
        }, {
          "value": "false",
          "computed": false
        }, {
          "value": "null",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
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