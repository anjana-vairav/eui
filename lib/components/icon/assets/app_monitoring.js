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

var EuiIconAppMonitoring = function EuiIconAppMonitoring(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M1.81 15.19A8.94 8.94 0 0115.62 3.86l.38.42.38-.42a8.94 8.94 0 0114.26 10.68l-1.7-1.07a6.94 6.94 0 00-11.07-8.28L16 7.29l-1.87-2.1A6.94 6.94 0 003.41 14l-1.6 1.19zM16 31.18l-7.74-8.51 1.48-1.34L16 28.21l6.26-6.88 1.48 1.34z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M16.16 23.29l-4.1-7.17L10.62 19H0v-2h9.38l2.56-5.12 3.9 6.83 4.13-10.32L23.66 17H32v2h-9.66l-2.31-5.39z"
  }));
};

var icon = EuiIconAppMonitoring;
exports.icon = icon;
EuiIconAppMonitoring.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppMonitoring"
};