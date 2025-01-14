function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiAspectRatio = function EuiAspectRatio(_ref) {
  var children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      rest = _objectWithoutProperties(_ref, ["children", "className", "height", "width", "maxWidth"]);

  var classes = classNames('euiAspectRatio', className);
  var paddingBottom = "".concat(height / width * 100, "%");
  var content = React.createElement("div", _extends({
    className: classes
  }, rest, {
    style: {
      paddingBottom: paddingBottom,
      maxWidth: maxWidth ? maxWidth : 'auto'
    }
  }), children);
  var contentwithoptionalwrap = content;

  if (maxWidth) {
    contentwithoptionalwrap = React.createElement("div", {
      style: {
        maxWidth: maxWidth
      }
    }, content);
  }

  return contentwithoptionalwrap;
};
EuiAspectRatio.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Aspect ratio height. For example 9 would be widescreen video.
       */
  height: PropTypes.number.isRequired,

  /**
       * Aspect ratio width. For example 16 would be widescreen video.
       */
  width: PropTypes.number.isRequired,

  /**
       * The maximum width you want the child to stretch to.
       */
  maxWidth: PropTypes.number
};
EuiAspectRatio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiAspectRatio",
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
    "height": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": "Aspect ratio height. For example 9 would be widescreen video."
    },
    "width": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": "Aspect ratio width. For example 16 would be widescreen video."
    },
    "maxWidth": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The maximum width you want the child to stretch to."
    }
  }
};