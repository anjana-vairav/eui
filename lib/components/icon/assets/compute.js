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

var EuiIconCompute = function EuiIconCompute(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M4 3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H4zm10 8v1a2 2 0 01-2 2h-1v2h-1v-2H8.5v2h-1v-2H6v2H5v-2H4a2 2 0 01-2-2v-1H0v-1h2V8.5H0v-1h2V6H0V5h2V4a2 2 0 012-2h1V0h1v2h1.5V0h1v2H10V0h1v2h1a2 2 0 012 2v1h2v1h-2v1.5h2v1h-2V10h2v1h-2z"
  }), _react.default.createElement("rect", {
    width: 6,
    height: 6,
    x: 5,
    y: 5,
    rx: 1
  }));
};

var icon = EuiIconCompute;
exports.icon = icon;
EuiIconCompute.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconCompute"
};