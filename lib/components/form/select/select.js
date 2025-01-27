"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiSelect = function EuiSelect(_ref) {
  var className = _ref.className,
      options = _ref.options,
      id = _ref.id,
      name = _ref.name,
      inputRef = _ref.inputRef,
      isInvalid = _ref.isInvalid,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      hasNoInitialSelection = _ref.hasNoInitialSelection,
      defaultValue = _ref.defaultValue,
      compressed = _ref.compressed,
      value = _ref.value,
      prepend = _ref.prepend,
      append = _ref.append,
      onMouseUp = _ref.onMouseUp,
      readOnly = _ref.readOnly,
      rest = _objectWithoutProperties(_ref, ["className", "options", "id", "name", "inputRef", "isInvalid", "fullWidth", "isLoading", "hasNoInitialSelection", "defaultValue", "compressed", "value", "prepend", "append", "onMouseUp", "readOnly"]);

  var handleMouseUp = function handleMouseUp(e) {
    // Normalizes cross-browser mouse eventing by preventing propagation,
    // notably for use in conjunction with EuiOutsideClickDetector.
    // See https://github.com/elastic/eui/pull/1926 for full discussion on
    // rationale and alternatives should this intervention become problematic.
    e.nativeEvent.stopImmediatePropagation();
    if (onMouseUp) onMouseUp(e);
  };

  var classes = (0, _classnames.default)('euiSelect', {
    'euiSelect--fullWidth': fullWidth,
    'euiSelect--compressed': compressed,
    'euiSelect--inGroup': prepend || append,
    'euiSelect-isLoading': isLoading
  }, className);
  var emptyOptionNode;

  if (hasNoInitialSelection) {
    emptyOptionNode = _react.default.createElement("option", {
      value: "",
      disabled: true,
      hidden: true,
      style: {
        display: 'none'
      }
    }, "\xA0");
  } // React HTML input can not have both value and defaultValue properties.
  // https://reactjs.org/docs/uncontrolled-components.html#default-values


  var selectDefaultValue;

  if (value == null) {
    selectDefaultValue = defaultValue || '';
  }

  var icon = {
    type: 'arrowDown',
    side: 'right'
  };
  return _react.default.createElement(_form_control_layout.EuiFormControlLayout, {
    icon: icon,
    fullWidth: fullWidth,
    isLoading: isLoading,
    compressed: compressed,
    readOnly: readOnly,
    prepend: prepend,
    append: append,
    inputId: id
  }, _react.default.createElement(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, _react.default.createElement("select", _extends({
    id: id,
    name: name,
    className: classes,
    ref: inputRef,
    defaultValue: selectDefaultValue,
    value: value,
    readOnly: readOnly,
    onMouseUp: handleMouseUp
  }, rest), emptyOptionNode, options.map(function (option, index) {
    var text = option.text,
        rest = _objectWithoutProperties(option, ["text"]);

    return _react.default.createElement("option", _extends({}, rest, {
      key: index
    }), text);
  }))));
};

exports.EuiSelect = EuiSelect;
EuiSelect.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.node.isRequired
  })).isRequired,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,

  /**
   * Simulates no selection by creating an empty, selected, hidden first option
   */
  hasNoInitialSelection: _propTypes.default.bool,
  inputRef: _propTypes.default.func,

  /**
   * when `true` creates a shorter height input
   */
  compressed: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,

  /**
   * Creates an input group with element(s) coming before select
   */
  prepend: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),

  /**
   * Creates an input group with element(s) coming after select
   */
  append: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)])
};
EuiSelect.defaultProps = {
  options: [],
  fullWidth: false,
  isLoading: false,
  hasNoInitialSelection: false,
  compressed: false
};
EuiSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSelect",
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
            "text": {
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
    "hasNoInitialSelection": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Simulates no selection by creating an empty, selected, hidden first option"
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
      "description": "Creates an input group with element(s) coming before select"
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
      "description": "Creates an input group with element(s) coming after select"
    }
  }
};