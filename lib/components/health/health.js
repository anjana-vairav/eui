"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHealth = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _flex = require("../flex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiHealth = function EuiHealth(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "className", "color"]);

  var classes = (0, _classnames.default)('euiHealth', className);
  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), _react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "xs",
    alignItems: "center",
    responsive: false
  }, _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, _react.default.createElement(_icon.EuiIcon, {
    type: "dot",
    color: color
  })), _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, children)));
};

exports.EuiHealth = EuiHealth;
EuiHealth.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired])
};
EuiHealth.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHealth",
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
    "color": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf([\"default\", \"primary\", \"secondary\", \"success\", \"accent\", \"warning\", \"danger\", \"text\", \"subdued\", \"ghost\"]).isRequired])"
      },
      "required": false,
      "description": ""
    }
  }
};