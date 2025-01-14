"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTextArea = exports.RESIZE = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _validatable_control = require("../validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var resizeToClassNameMap = {
  vertical: 'euiTextArea--resizeVertical',
  horizontal: 'euiTextArea--resizeHorizontal',
  both: 'euiTextArea--resizeBoth',
  none: 'euiTextArea--resizeNone'
};
var RESIZE = Object.keys(resizeToClassNameMap);
exports.RESIZE = RESIZE;

var EuiTextArea = function EuiTextArea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      compressed = _ref.compressed,
      fullWidth = _ref.fullWidth,
      id = _ref.id,
      inputRef = _ref.inputRef,
      isInvalid = _ref.isInvalid,
      name = _ref.name,
      placeholder = _ref.placeholder,
      resize = _ref.resize,
      rows = _ref.rows,
      rest = _objectWithoutProperties(_ref, ["children", "className", "compressed", "fullWidth", "id", "inputRef", "isInvalid", "name", "placeholder", "resize", "rows"]);

  var classes = (0, _classnames.default)('euiTextArea', resizeToClassNameMap[resize], {
    'euiTextArea--fullWidth': fullWidth,
    'euiTextArea--compressed': compressed
  }, className);
  var definedRows;

  if (rows) {
    definedRows = rows;
  } else if (compressed) {
    definedRows = 3;
  } else {
    definedRows = 6;
  }

  return _react.default.createElement(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, _react.default.createElement("textarea", _extends({
    className: classes
  }, rest, {
    rows: definedRows,
    name: name,
    id: id,
    ref: inputRef,
    placeholder: placeholder
  }), children));
};

exports.EuiTextArea = EuiTextArea;
EuiTextArea.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  rows: _propTypes.default.number,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  compressed: _propTypes.default.bool,

  /**
   * Which direction, if at all, should the textarea resize
   */
  resize: _propTypes.default.oneOf(RESIZE)
};
EuiTextArea.defaultProps = {
  fullWidth: false,
  resize: 'vertical'
};
EuiTextArea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTextArea",
  "props": {
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
    "resize": {
      "defaultValue": {
        "value": "'vertical'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"vertical\"",
          "computed": false
        }, {
          "value": "\"horizontal\"",
          "computed": false
        }, {
          "value": "\"both\"",
          "computed": false
        }, {
          "value": "\"none\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Which direction, if at all, should the textarea resize"
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
    "rows": {
      "type": {
        "name": "number"
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
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};