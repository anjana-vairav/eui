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

var EuiIconLogoSlack = function EuiIconLogoSlack(_ref) {
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
    fill: "#E01E5A",
    d: "M6.813 20.18a3.337 3.337 0 01-3.33 3.33 3.337 3.337 0 01-3.328-3.33 3.337 3.337 0 013.329-3.329h3.329v3.33zm1.677 0a3.337 3.337 0 013.33-3.329 3.337 3.337 0 013.328 3.33v8.335a3.337 3.337 0 01-3.329 3.329 3.337 3.337 0 01-3.329-3.33V20.18z"
  }), _react.default.createElement("path", {
    fill: "#36C5F0",
    d: "M11.82 6.813a3.337 3.337 0 01-3.33-3.33A3.337 3.337 0 0111.82.156a3.337 3.337 0 013.328 3.329v3.329H11.82zm0 1.677a3.337 3.337 0 013.328 3.33 3.337 3.337 0 01-3.329 3.328H3.484a3.337 3.337 0 01-3.33-3.329 3.337 3.337 0 013.33-3.329h8.335z"
  }), _react.default.createElement("path", {
    fill: "#2EB67D",
    d: "M25.187 11.82a3.337 3.337 0 013.329-3.33 3.337 3.337 0 013.329 3.33 3.337 3.337 0 01-3.33 3.328h-3.328V11.82zm-1.678 0a3.337 3.337 0 01-3.329 3.328 3.337 3.337 0 01-3.329-3.329V3.484a3.337 3.337 0 013.33-3.33 3.337 3.337 0 013.328 3.33v8.335z"
  }), _react.default.createElement("path", {
    fill: "#ECB22E",
    d: "M20.18 25.187a3.337 3.337 0 013.33 3.329 3.337 3.337 0 01-3.33 3.329 3.337 3.337 0 01-3.329-3.33v-3.328h3.33zm0-1.678a3.337 3.337 0 01-3.329-3.329 3.337 3.337 0 013.33-3.329h8.335a3.337 3.337 0 013.329 3.33 3.337 3.337 0 01-3.33 3.328H20.18z"
  })));
};

var icon = EuiIconLogoSlack;
exports.icon = icon;
EuiIconLogoSlack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoSlack"
};