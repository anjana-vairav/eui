"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiIconLogoSketch = function EuiIconLogoSketch(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    fill: "#FFAE00",
    d: "M16 32L0 11.454l6.931-10.38L16 0l9.069 1.074L32 11.454z"
  }), _react.default.createElement("path", {
    fill: "#EC6C00",
    d: "M16 32L0 11.454h32z"
  }), _react.default.createElement("path", {
    fill: "#FFAE00",
    d: "M16 32L6.477 11.454h19.045z"
  }), _react.default.createElement("path", {
    fill: "#FFEFB4",
    d: "M16 0L6.477 11.454h19.045z"
  }), _react.default.createElement("path", {
    fill: "#FFAE00",
    d: "M6.932 1.074L3.369 6.3.001 11.454h6.542zM25.069 1.074L28.632 6.3 32 11.454h-6.542z"
  }), _react.default.createElement("path", {
    fill: "#FED305",
    d: "M6.931 1.074l-.453 10.38L16 0zM25.069 1.074l.453 10.38L16 0z"
  })));
};

var icon = EuiIconLogoSketch;
exports.icon = icon;
EuiIconLogoSketch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoSketch"
};