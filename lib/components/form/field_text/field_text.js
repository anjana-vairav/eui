"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFieldText = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFieldText = function EuiFieldText(_ref) {
  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      className = _ref.className,
      icon = _ref.icon,
      isInvalid = _ref.isInvalid,
      inputRef = _ref.inputRef,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      compressed = _ref.compressed,
      prepend = _ref.prepend,
      append = _ref.append,
      readOnly = _ref.readOnly,
      controlOnly = _ref.controlOnly,
      rest = _objectWithoutProperties(_ref, ["id", "name", "placeholder", "value", "className", "icon", "isInvalid", "inputRef", "fullWidth", "isLoading", "compressed", "prepend", "append", "readOnly", "controlOnly"]);

  var classes = (0, _classnames.default)('euiFieldText', className, {
    'euiFieldText--withIcon': icon,
    'euiFieldText--fullWidth': fullWidth,
    'euiFieldText--compressed': compressed,
    'euiFieldText--inGroup': prepend || append,
    'euiFieldText-isLoading': isLoading
  });

  var control = _react.default.createElement(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, _react.default.createElement("input", _extends({
    type: "text",
    id: id,
    name: name,
    placeholder: placeholder,
    className: classes,
    value: value,
    ref: inputRef,
    readOnly: readOnly
  }, rest)));

  if (controlOnly) return control;
  return _react.default.createElement(_form_control_layout.EuiFormControlLayout, {
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

exports.EuiFieldText = EuiFieldText;
EuiFieldText.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  inputRef: _propTypes.default.func,
  fullWidth: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: _propTypes.default.bool,

  /**
   * Creates an input group with element(s) coming before input
   */
  prepend: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),

  /**
   * Creates an input group with element(s) coming after input
   */
  append: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),

  /**
   * Completely removes form control layout wrapper and ignores
   * icon, prepend, and append. Best used inside EuiFormControlLayoutDelimited.
   */
  controlOnly: _propTypes.default.bool
};
EuiFieldText.defaultProps = {
  value: undefined,
  fullWidth: false,
  isLoading: false,
  compressed: false
};
EuiFieldText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFieldText",
  "props": {
    "value": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "type": {
        "name": "string"
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
    },
    "placeholder": {
      "type": {
        "name": "string"
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
    "inputRef": {
      "type": {
        "name": "func"
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