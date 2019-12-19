function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiFormControlLayout } from '../form_control_layout';
import { EuiValidatableControl } from '../validatable_control';
export var EuiFieldNumber = function EuiFieldNumber(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      id = _ref.id,
      placeholder = _ref.placeholder,
      name = _ref.name,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      isInvalid = _ref.isInvalid,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      compressed = _ref.compressed,
      prepend = _ref.prepend,
      append = _ref.append,
      inputRef = _ref.inputRef,
      readOnly = _ref.readOnly,
      controlOnly = _ref.controlOnly,
      rest = _objectWithoutProperties(_ref, ["className", "icon", "id", "placeholder", "name", "min", "max", "value", "isInvalid", "fullWidth", "isLoading", "compressed", "prepend", "append", "inputRef", "readOnly", "controlOnly"]);

  var classes = classNames('euiFieldNumber', className, {
    'euiFieldNumber--withIcon': icon,
    'euiFieldNumber--fullWidth': fullWidth,
    'euiFieldNumber--compressed': compressed,
    'euiFieldNumber--inGroup': prepend || append,
    'euiFieldNumber-isLoading': isLoading
  });
  var control = React.createElement(EuiValidatableControl, {
    isInvalid: isInvalid
  }, React.createElement("input", _extends({
    type: "number",
    id: id,
    min: min,
    max: max,
    name: name,
    value: value,
    placeholder: placeholder,
    readOnly: readOnly,
    className: classes,
    ref: inputRef
  }, rest)));

  if (controlOnly) {
    return control;
  }

  return React.createElement(EuiFormControlLayout, {
    icon: icon,
    fullWidth: fullWidth,
    isLoading: isLoading,
    compressed: compressed,
    readOnly: readOnly,
    prepend: prepend,
    append: append,
    inputId: id
  }, control);
};

function numberOrEmptyString(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    var value = props[propName];

    if (typeof value === 'string' && value !== '') {
      return new Error("Invalid prop '".concat(propName, "' of type 'string' supplied to '").concat(componentName, "',") + " expected empty string or type 'number', you supplied a string with the contents '".concat(value, "'."));
    } else if (typeof value !== 'number') {
      return new Error("Invalid prop '".concat(propName, "' of type '").concat(_typeof(value), "' supplied to '").concat(componentName, "',") + " expected empty string or type 'number'.");
    }
  } // assume all ok


  return null;
}

EuiFieldNumber.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: numberOrEmptyString,
  icon: PropTypes.string,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  readOnly: PropTypes.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool,

  /**
   * Creates an input group with element(s) coming before input
   */
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

  /**
   * Creates an input group with element(s) coming after input
   */
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

  /**
   * Completely removes form control layout wrapper and ignores
   * icon, prepend, and append. Best used inside EuiFormControlLayoutDelimited.
   */
  controlOnly: PropTypes.bool
};
EuiFieldNumber.defaultProps = {
  value: undefined,
  fullWidth: false,
  isLoading: false,
  compressed: false
};
EuiFieldNumber.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFieldNumber",
  "props": {
    "value": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "type": {
        "name": "custom",
        "raw": "numberOrEmptyString"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isLoading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "when `true` creates a shorter height input"
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "min": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "step": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "readOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "prepend": {
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "node"
          }
        }]
      },
      "required": false,
      "description": "Creates an input group with element(s) coming before input"
    },
    "append": {
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "node"
          }
        }]
      },
      "required": false,
      "description": "Creates an input group with element(s) coming after input"
    },
    "controlOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Completely removes form control layout wrapper and ignores\nicon, prepend, and append. Best used inside EuiFormControlLayoutDelimited."
    }
  }
};