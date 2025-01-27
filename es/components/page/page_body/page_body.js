function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var EuiPageBody = function EuiPageBody(_ref) {
  var children = _ref.children,
      restrictWidth = _ref.restrictWidth,
      style = _ref.style,
      className = _ref.className,
      component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["children", "restrictWidth", "style", "className", "component"]);

  var widthClassname;
  var newStyle;

  if (restrictWidth === true) {
    widthClassname = 'euiPageBody--restrictWidth-default';
  } else if (restrictWidth !== false) {
    widthClassname = 'euiPageBody--restrictWidth-custom';
    var value = typeof maxWidth === 'number' ? "".concat(restrictWidth, "px") : restrictWidth;
    newStyle = _objectSpread({}, style, {
      maxWidth: value
    });
  }

  var classes = classNames('euiPageBody', widthClassname, className);
  var OuterElement = component;
  return React.createElement(OuterElement, _extends({
    className: classes,
    style: newStyle || style
  }, rest), children);
};
EuiPageBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Sets the HTML element for `EuiPageBody`.
   */
  component: PropTypes.string,

  /**
   * Sets the max-width of the page,
   * set to `true` to use the default size,
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  restrictWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
};
EuiPageBody.defaultProps = {
  restrictWidth: false,
  component: 'main'
};
EuiPageBody.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPageBody",
  "props": {
    "restrictWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Sets the max-width of the page,\nset to `true` to use the default size,\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement."
    },
    "component": {
      "defaultValue": {
        "value": "'main'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Sets the HTML element for `EuiPageBody`."
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
    }
  }
};