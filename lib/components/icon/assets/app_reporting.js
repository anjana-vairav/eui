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

var EuiIconAppReporting = function EuiIconAppReporting(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M25 5h-.17v2H25a1 1 0 011 1v20a1 1 0 01-1 1H7a1 1 0 01-1-1V8a1 1 0 011-1h.17V5H7a3 3 0 00-3 3v20a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3z"
  }), _react.default.createElement("path", {
    d: "M23 3h-3V0h-8v3H9v6h14V3zm-2 4H11V5h3V2h4v3h3v2z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M10 13h12v2H10zM10 18h12v2H10zM10 23h12v2H10z"
  }));
};

var icon = EuiIconAppReporting;
exports.icon = icon;
EuiIconAppReporting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppReporting"
};