function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { EuiFieldNumber } from '../field_number';
export var EuiRangeInput = function EuiRangeInput(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      value = _ref.value,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      onChange = _ref.onChange,
      name = _ref.name,
      side = _ref.side,
      digitTolerance = _ref.digitTolerance,
      fullWidth = _ref.fullWidth,
      autoSize = _ref.autoSize,
      rest = _objectWithoutProperties(_ref, ["min", "max", "step", "value", "disabled", "compressed", "onChange", "name", "side", "digitTolerance", "fullWidth", "autoSize"]);

  // Chrome will properly size the input based on the max value, but FF & IE do not.
  // Calculate the width of the input based on highest number of characters.
  // Add 2 to accomodate for input stepper
  var widthStyle = autoSize ? {
    width: "".concat(digitTolerance / 1.25 + 2, "em")
  } : undefined;
  return React.createElement(EuiFieldNumber, _extends({
    name: name,
    className: "euiRangeInput euiRangeInput--".concat(side),
    min: Number(min),
    max: Number(max),
    step: step,
    value: value === '' ? '' : Number(value),
    disabled: disabled,
    compressed: compressed,
    onChange: onChange,
    style: widthStyle,
    fullWidth: fullWidth
  }, rest));
};
EuiRangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  compressed: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  digitTolerance: PropTypes.number.isRequired,
  side: PropTypes.oneOf(['min', 'max']),
  fullWidth: PropTypes.bool,
  autoSize: PropTypes.bool,
  inputRef: PropTypes.func
};
EuiRangeInput.defaultProps = {
  side: 'max',
  autoSize: true
};
EuiRangeInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeInput",
  "props": {
    "side": {
      "defaultValue": {
        "value": "'max'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'min'",
          "computed": false
        }, {
          "value": "'max'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "autoSize": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "min": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "step": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": true,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
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
    "digitTolerance": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};