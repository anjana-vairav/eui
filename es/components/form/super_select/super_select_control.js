function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiScreenReaderOnly } from '../../accessibility';
import makeId from '../form_row/make_id';
import { EuiFormControlLayout } from '../form_control_layout';
import { EuiI18n } from '../../i18n';
export var EuiSuperSelectControl = function EuiSuperSelectControl(_ref) {
  var className = _ref.className,
      options = _ref.options,
      id = _ref.id,
      name = _ref.name,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      isInvalid = _ref.isInvalid,
      defaultValue = _ref.defaultValue,
      compressed = _ref.compressed,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["className", "options", "id", "name", "fullWidth", "isLoading", "isInvalid", "defaultValue", "compressed", "value"]);

  var classes = classNames('euiSuperSelectControl', {
    'euiSuperSelectControl--fullWidth': fullWidth,
    'euiSuperSelectControl--compressed': compressed,
    'euiSuperSelectControl-isLoading': isLoading,
    'euiSuperSelectControl-isInvalid': isInvalid
  }, className); // React HTML input can not have both value and defaultValue properties.
  // https://reactjs.org/docs/uncontrolled-components.html#default-values

  var selectDefaultValue;

  if (value == null) {
    selectDefaultValue = defaultValue || '';
  }

  var selectedValue = '';

  if (value) {
    var selectedOption = options.find(function (option) {
      return option.value === value;
    });
    selectedValue = selectedOption ? selectedOption.inputDisplay : selectedValue;
  }

  var icon = {
    type: 'arrowDown',
    side: 'right'
  };
  var screenReaderId = makeId();
  return React.createElement(Fragment, null, React.createElement("input", {
    type: "hidden",
    id: id,
    name: name,
    defaultValue: selectDefaultValue,
    value: value
  }), React.createElement(EuiFormControlLayout, {
    icon: icon,
    fullWidth: fullWidth,
    isLoading: isLoading,
    compressed: compressed
  }, React.createElement(EuiScreenReaderOnly, null, React.createElement("span", {
    id: screenReaderId
  }, React.createElement(EuiI18n, {
    token: "euiSuperSelectControl.selectAnOption",
    default: "Select an option: {selectedValue}, is selected",
    values: {
      selectedValue: selectedValue
    }
  }))), React.createElement("button", _extends({
    role: "option",
    type: "button",
    className: classes,
    "aria-haspopup": "true",
    "aria-labelledby": "".concat(id, " ").concat(screenReaderId),
    "aria-selected": true
  }, rest), selectedValue)));
};
EuiSuperSelectControl.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    inputDisplay: PropTypes.node.isRequired
  })).isRequired,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool
};
EuiSuperSelectControl.defaultProps = {
  options: [],
  fullWidth: false,
  isLoading: false,
  isInvalid: false,
  compressed: false
};
EuiSuperSelectControl.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSuperSelectControl",
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
            "value": {
              "name": "node",
              "required": true
            },
            "inputDisplay": {
              "name": "node",
              "required": true
            }
          }
        }
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
    "isInvalid": {
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
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};