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

var EuiIconMinimize = function EuiIconMinimize(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M1.146 14.146l4-4a.5.5 0 01.765.638l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07 4-4-4 4zM6.5 8A1.5 1.5 0 018 9.5v3a.5.5 0 11-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 010-1h3zm2-5a.5.5 0 01.5.5v3a.5.5 0 00.5.5h3a.5.5 0 110 1h-3A1.5 1.5 0 018 6.5v-3a.5.5 0 01.5-.5zm1.651 2.146l4-4a.5.5 0 01.765.638l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07 4-4-4 4z"
  }));
};

var icon = EuiIconMinimize;
exports.icon = icon;
EuiIconMinimize.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMinimize"
};