"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormControlLayoutDelimited = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../text");

var _form_control_layout = require("./form_control_layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFormControlLayoutDelimited = function EuiFormControlLayoutDelimited(_ref) {
  var startControl = _ref.startControl,
      endControl = _ref.endControl,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? '→' : _ref$delimiter,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["startControl", "endControl", "delimiter", "className"]);

  var classes = (0, _classnames.default)('euiFormControlLayoutDelimited', className);
  return _react.default.createElement(_form_control_layout.EuiFormControlLayout, _extends({
    className: classes
  }, rest), addClassesToControl(startControl), _react.default.createElement(_text.EuiText, {
    className: "euiFormControlLayoutDelimited__delimeter",
    size: "s",
    color: "subdued"
  }, delimiter), addClassesToControl(endControl));
};

exports.EuiFormControlLayoutDelimited = EuiFormControlLayoutDelimited;
EuiFormControlLayoutDelimited.propTypes = {
  /**
     * Left side control
     */
  startControl: _propTypes.default.element.isRequired,

  /**
     * Right side control
     */
  endControl: _propTypes.default.element.isRequired,

  /**
     * The center content. Accepts a string to be wrapped in a subdued EuiText
     * or a single ReactElement
     */
  delimiter: _propTypes.default.node,
  className: _propTypes.default.string
};

function addClassesToControl(control) {
  return (0, _react.cloneElement)(control, {
    className: (0, _classnames.default)(control.props.className, 'euiFormControlLayoutDelimited__input')
  });
}

EuiFormControlLayoutDelimited.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFormControlLayoutDelimited",
  "props": {
    "delimiter": {
      "defaultValue": {
        "value": "'\u2192'",
        "computed": false
      },
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "The center content. Accepts a string to be wrapped in a subdued EuiText\nor a single ReactElement"
    },
    "startControl": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": "Left side control"
    },
    "endControl": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": "Right side control"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};