"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiToggle = exports.TYPES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var typeToInputTypeMap = {
  single: 'radio',
  multi: 'checkbox'
};
var TYPES = Object.keys(typeToInputTypeMap);
exports.TYPES = TYPES;

var EuiToggle = function EuiToggle(_ref) {
  var id = _ref.id,
      className = _ref.className,
      checked = _ref.checked,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      title = _ref.title,
      type = _ref.type,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["id", "className", "checked", "children", "inputClassName", "isDisabled", "label", "name", "onChange", "title", "type", "value"]);

  var classes = (0, _classnames.default)('euiToggle', {
    'euiToggle--checked': checked
  }, className);
  var inputClasses = (0, _classnames.default)('euiToggle__input', inputClassName);
  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), _react.default.createElement("input", {
    id: id,
    className: inputClasses,
    "aria-label": label,
    checked: checked,
    disabled: isDisabled,
    name: name,
    onChange: onChange,
    title: title,
    type: type ? typeToInputTypeMap[type] : undefined,
    value: value
  }), children);
};

exports.EuiToggle = EuiToggle;
EuiToggle.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  id: _propTypes.default.string,

  /**
       * Initial state of the toggle
       */
  checked: _propTypes.default.bool,

  /**
       * For handling the onChange event of the input
       */
  onChange: _propTypes.default.any,
  isDisabled: _propTypes.default.bool,
  name: _propTypes.default.string,

  /**
       * Determines the input type based on multiple or single item(s)
       */
  type: _propTypes.default.oneOf(["single", "multi"]),

  /**
       * What would typically be the input's label. Required for accessibility.
       */
  label: _propTypes.default.string.isRequired,

  /**
       * Additional classNames for the input itself
       */
  inputClassName: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired])
};
EuiToggle.defaultProps = {
  type: 'multi'
};
EuiToggle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiToggle",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'multi'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"single\"",
          "computed": false
        }, {
          "value": "\"multi\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Determines the input type based on multiple or single item(s)"
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
    "id": {
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
      "description": "Initial state of the toggle"
    },
    "onChange": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "For handling the onChange event of the input"
    },
    "isDisabled": {
      "type": {
        "name": "bool"
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
    "label": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": "What would typically be the input's label. Required for accessibility."
    },
    "inputClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Additional classNames for the input itself"
    },
    "value": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false,
      "description": ""
    }
  }
};