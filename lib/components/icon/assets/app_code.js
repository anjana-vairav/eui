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

var EuiIconAppCode = function EuiIconAppCode(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M11.276 29l.594 2H0l7.621-14.29.811 2.73L3.333 29h7.943zM28.92 31l-4.987-16.598A16 16 0 008.688 3l1.8 6H8.4L6 1h2.607a18 18 0 0117.241 12.828L31 31h-2.08z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M12.037 14.02L16.492 29h6.827l-2.333-7.849a10 10 0 00-8.949-7.13zM9.35 12h2.05a12 12 0 0111.503 8.581L26 31H15L9.35 12z"
  }));
};

var icon = EuiIconAppCode;
exports.icon = icon;
EuiIconAppCode.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppCode"
};