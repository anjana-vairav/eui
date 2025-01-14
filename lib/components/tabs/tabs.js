"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTabs = exports.SIZES = exports.DISPLAYS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var displayToClassNameMap = {
  condensed: 'euiTabs--condensed',
  default: null
};
var DISPLAYS = Object.keys(displayToClassNameMap);
exports.DISPLAYS = DISPLAYS;
var sizeToClassNameMap = {
  s: 'euiTabs--small',
  m: null
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiTabs = function EuiTabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      display = _ref.display,
      expand = _ref.expand,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "className", "display", "expand", "size"]);

  var classes = (0, _classnames.default)('euiTabs', displayToClassNameMap[display], sizeToClassNameMap[size], {
    'euiTabs--expand': expand
  }, className);
  return _react.default.createElement("div", _extends({
    role: "tablist",
    className: classes
  }, rest), children);
};

exports.EuiTabs = EuiTabs;
EuiTabs.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Choose `default` or alternative `condensed` display styles
   */
  display: _propTypes.default.oneOf(DISPLAYS),

  /**
   * Evenly stretches each tab to fill the
   * horizontal space
   */
  expand: _propTypes.default.bool,
  size: _propTypes.default.oneOf(SIZES)
};
EuiTabs.defaultProps = {
  display: 'default',
  expand: false,
  size: 'm'
};
EuiTabs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTabs",
  "props": {
    "display": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"condensed\"",
          "computed": false
        }, {
          "value": "\"default\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Choose `default` or alternative `condensed` display styles"
    },
    "expand": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Evenly stretches each tab to fill the\nhorizontal space"
    },
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
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
    }
  }
};