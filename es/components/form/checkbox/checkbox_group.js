function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import { EuiCheckbox } from './checkbox';
export var EuiCheckboxGroup = function EuiCheckboxGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$idToSelectedMap = _ref.idToSelectedMap,
      idToSelectedMap = _ref$idToSelectedMap === void 0 ? {} : _ref$idToSelectedMap,
      onChange = _ref.onChange,
      className = _ref.className,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["options", "idToSelectedMap", "onChange", "className", "disabled", "compressed"]);

  return React.createElement("div", _extends({
    className: className
  }, rest), options.map(function (option, index) {
    return React.createElement(EuiCheckbox, {
      className: "euiCheckboxGroup__item",
      key: index,
      id: option.id,
      checked: idToSelectedMap[option.id],
      label: option.label,
      disabled: disabled || option.disabled,
      onChange: onChange.bind(null, option.id),
      compressed: compressed
    });
  }));
};
EuiCheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    disabled: PropTypes.bool
  }).isRequired).isRequired,
  idToSelectedMap: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,

  /**
     * Tightens up the spacing between checkbox rows and sends down the
     * compressed prop to the checkbox itself
     */
  compressed: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiCheckboxGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCheckboxGroup",
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
            },
            "label": {
              "name": "node",
              "required": false
            },
            "disabled": {
              "name": "bool",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": ""
    },
    "idToSelectedMap": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {}
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
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Tightens up the spacing between checkbox rows and sends down the\ncompressed prop to the checkbox itself"
    },
    "disabled": {
      "type": {
        "name": "bool"
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