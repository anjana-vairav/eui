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

var EuiIconTableDensityNormal = function EuiIconTableDensityNormal(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M16 3v11a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v1zm-1 0V2a1 1 0 00-1-1H2a1 1 0 00-1 1v1h14zm0 1H1v10a1 1 0 001 1h12a1 1 0 001-1V4zM4.5 6a.5.5 0 010 1H2.496a.5.5 0 110-1H4.5zm5.214 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 7 6 6.776 6 6.5s.128-.5.286-.5h3.428zM4.5 9a.5.5 0 010 1H2.496a.5.5 0 110-1H4.5zm5.214 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 10 6 9.776 6 9.5s.128-.5.286-.5h3.428zM4.5 12a.5.5 0 110 1H2.496a.5.5 0 110-1H4.5zm9-6a.5.5 0 110 1h-2.004a.5.5 0 010-1H13.5zm0 3a.5.5 0 110 1h-2.004a.5.5 0 010-1H13.5zm0 3a.5.5 0 110 1h-2.004a.5.5 0 010-1H13.5zm-3.786 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 13 6 12.776 6 12.5s.128-.5.286-.5h3.428z"
  }));
};

var icon = EuiIconTableDensityNormal;
exports.icon = icon;
EuiIconTableDensityNormal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTableDensityNormal"
};