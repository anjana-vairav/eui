"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRadio = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiRadio = function EuiRadio(_ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      autoFocus = _ref.autoFocus,
      rest = _objectWithoutProperties(_ref, ["className", "id", "name", "checked", "label", "value", "onChange", "disabled", "compressed", "autoFocus"]);

  var classes = (0, _classnames.default)('euiRadio', {
    'euiRadio--noLabel': !label,
    'euiRadio--compressed': compressed
  }, className);
  var optionalLabel;

  if (label) {
    optionalLabel = _react.default.createElement("label", {
      className: "euiRadio__label",
      htmlFor: id
    }, label);
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), _react.default.createElement("input", {
    className: "euiRadio__input",
    type: "radio",
    id: id,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    autoFocus: autoFocus
  }), _react.default.createElement("div", {
    className: "euiRadio__circle"
  }), optionalLabel);
};

exports.EuiRadio = EuiRadio;
EuiRadio.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  autoFocus: _propTypes.default.bool,

  /**
     * When `true` creates a shorter height radio row
     */
  compressed: _propTypes.default.bool,
  label: _propTypes.default.node,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.any.isRequired
};
EuiRadio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRadio",
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
    "autoFocus": {
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
      "description": "When `true` creates a shorter height radio row"
    },
    "label": {
      "type": {
        "name": "node"
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
    "value": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "checked": {
      "type": {
        "name": "bool"
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
    "onChange": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    }
  }
};