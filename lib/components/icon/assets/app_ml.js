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

var EuiIconAppMl = function EuiIconAppMl(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M10 18v.56a1 1 0 01-.68.95L3 21.61V10a1 1 0 01.4-.8l3.2-2.4-1.2-1.6-3.2 2.4A3 3 0 001 10v12a3 3 0 001.2 2.4l3.2 2.4 1.2-1.6-2.47-1.85 5.82-1.95A3 3 0 0012 18.56V18h-2zM29.8 7.6l-3.2-2.4-1.2 1.6 3.2 2.4a1 1 0 01.4.8v11.61l-6.32-2.11a1 1 0 01-.68-.95V18h-2v.56a3 3 0 002.05 2.85l5.82 1.94-2.47 1.85 1.2 1.6 3.2-2.4A3 3 0 0031 22V10a3 3 0 00-1.2-2.4z"
  }), _react.default.createElement("path", {
    d: "M11 6A3 3 0 018.88.88a3.07 3.07 0 014.24 0A3 3 0 0111 6zm0-4a1 1 0 10-.012 2A1 1 0 0011 2zm0 30a3 3 0 01-2.12-5.12 3.07 3.07 0 014.24 0A3 3 0 0111 32zm0-4a1 1 0 10-.012 2A1 1 0 0011 28zm0-12a3 3 0 01-2.12-5.12 3.07 3.07 0 014.24 0A3 3 0 0111 16zm0-4a1 1 0 10-.012 2A1 1 0 0011 12zm10-6A3 3 0 0118.88.88a3.07 3.07 0 014.24 0A3 3 0 0121 6zm0-4a1 1 0 10-.012 2A1 1 0 0021 2zm0 30a3 3 0 01-2.12-5.12 3.07 3.07 0 014.24 0A3 3 0 0121 32zm0-4a1 1 0 10-.012 2A1 1 0 0021 28zm0-12a3 3 0 01-2.12-5.12 3.07 3.07 0 014.24 0A3 3 0 0121 16zm0-4a1 1 0 10-.012 2A1 1 0 0021 12z"
  }));
};

var icon = EuiIconAppMl;
exports.icon = icon;
EuiIconAppMl.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppMl"
};