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

var EuiIconLogoMetrics = function EuiIconLogoMetrics(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    fill: "#F04E98",
    d: "M2 32h28V20l-6.465-6.465a5 5 0 00-7.07 0L2 28v4z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M16.465 13.535l-3.536 3.536a9.965 9.965 0 007.07 2.93 9.965 9.965 0 007.072-2.93l-3.536-3.536a5 5 0 00-7.07 0"
  }), _react.default.createElement("path", {
    fill: "#FEC514",
    d: "M14.343 11.414A7.951 7.951 0 0120 9.071c2.137 0 4.146.832 5.657 2.343l3.207 3.207A9.955 9.955 0 0030 10.001c0-5.524-4.477-10-10-10-5.522 0-10 4.476-10 10 0 1.667.414 3.237 1.137 4.62l3.206-3.207z"
  })));
};

var icon = EuiIconLogoMetrics;
exports.icon = icon;
EuiIconLogoMetrics.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoMetrics"
};