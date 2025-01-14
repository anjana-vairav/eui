function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { cloneElement } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiText } from '../../text';
import { EuiFormControlLayout } from './form_control_layout';
export var EuiFormControlLayoutDelimited = function EuiFormControlLayoutDelimited(_ref) {
  var startControl = _ref.startControl,
      endControl = _ref.endControl,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? '→' : _ref$delimiter,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["startControl", "endControl", "delimiter", "className"]);

  var classes = classNames('euiFormControlLayoutDelimited', className);
  return React.createElement(EuiFormControlLayout, _extends({
    className: classes
  }, rest), addClassesToControl(startControl), React.createElement(EuiText, {
    className: "euiFormControlLayoutDelimited__delimeter",
    size: "s",
    color: "subdued"
  }, delimiter), addClassesToControl(endControl));
};
EuiFormControlLayoutDelimited.propTypes = {
  /**
     * Left side control
     */
  startControl: PropTypes.element.isRequired,

  /**
     * Right side control
     */
  endControl: PropTypes.element.isRequired,

  /**
     * The center content. Accepts a string to be wrapped in a subdued EuiText
     * or a single ReactElement
     */
  delimiter: PropTypes.node,
  className: PropTypes.string
};

function addClassesToControl(control) {
  return cloneElement(control, {
    className: classNames(control.props.className, 'euiFormControlLayoutDelimited__input')
  });
}

EuiFormControlLayoutDelimited.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFormControlLayoutDelimited",
  "props": {
    "delimiter": {
      "defaultValue": {
        "value": "'\u2192'",
        "computed": false
      },
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "The center content. Accepts a string to be wrapped in a subdued EuiText\nor a single ReactElement"
    },
    "startControl": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": "Left side control"
    },
    "endControl": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": "Right side control"
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