"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFieldPassword = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFieldPassword = function EuiFieldPassword(_ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      isInvalid = _ref.isInvalid,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      compressed = _ref.compressed,
      inputRef = _ref.inputRef,
      rest = _objectWithoutProperties(_ref, ["className", "id", "name", "placeholder", "value", "isInvalid", "fullWidth", "isLoading", "compressed", "inputRef"]);

  var classes = (0, _classnames.default)('euiFieldPassword', {
    'euiFieldPassword--fullWidth': fullWidth,
    'euiFieldPassword--compressed': compressed,
    'euiFieldPassword-isLoading': isLoading
  }, className);
  return _react.default.createElement(_form_control_layout.EuiFormControlLayout, {
    icon: "lock",
    fullWidth: fullWidth,
    isLoading: isLoading,
    compressed: compressed
  }, _react.default.createElement(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, _react.default.createElement("input", _extends({
    type: "password",
    id: id,
    name: name,
    placeholder: placeholder,
    className: classes,
    value: value,
    ref: inputRef
  }, rest))));
};

exports.EuiFieldPassword = EuiFieldPassword;
EuiFieldPassword.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  inputRef: _propTypes.default.func,
  isLoading: _propTypes.default.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: _propTypes.default.bool
};
EuiFieldPassword.defaultProps = {
  value: undefined,
  fullWidth: false,
  isLoading: false,
  compressed: false
};
EuiFieldPassword.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFieldPassword",
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
    }
  }
};