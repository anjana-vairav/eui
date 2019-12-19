function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import { EuiRadio } from './radio';
export var EuiRadioGroup = function EuiRadioGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      idSelected = _ref.idSelected,
      onChange = _ref.onChange,
      name = _ref.name,
      className = _ref.className,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["options", "idSelected", "onChange", "name", "className", "disabled", "compressed"]);

  return React.createElement("div", _extends({
    className: className
  }, rest), options.map(function (option, index) {
    var isOptionDisabled = option.disabled,
        optionRest = _objectWithoutProperties(option, ["disabled"]);

    return React.createElement(EuiRadio, _extends({
      className: "euiRadioGroup__item",
      key: index,
      name: name,
      checked: option.id === idSelected,
      disabled: disabled || isOptionDisabled,
      onChange: onChange.bind(null, option.id, option.value),
      compressed: compressed
    }, optionRest));
  }));
};
EuiRadioGroup.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  disabled: PropTypes.bool,

  /**
       * Tightens up the spacing between radio rows and sends down the
       * compressed prop to the radio itself
       */
  compressed: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired,
  idSelected: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
EuiRadioGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRadioGroup",
  "props": {
    "options": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            }
          }
        }
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
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Tightens up the spacing between radio rows and sends down the\ncompressed prop to the radio itself"
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "idSelected": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};