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

var EuiIconFlag = function EuiIconFlag(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M7.686 8.464c1.547-.619 3.08-.619 4.628 0A.5.5 0 0013 8V2a.5.5 0 00-.276-.447C11.259.82 9.458.82 7.342 1.526c-1.884.628-3.417.628-4.618.027A.5.5 0 002 2v12.5a.5.5 0 101 0V8.553c1.411.627 2.983.592 4.686-.089zM3 2.741c1.322.42 2.878.327 4.658-.267C9.4 1.894 10.843 1.85 12 2.322v4.975c-1.56-.464-3.128-.384-4.686.239-1.54.616-2.892.616-4.09.017A.498.498 0 003 7.5V2.74z"
  }));
};

var icon = EuiIconFlag;
exports.icon = icon;
EuiIconFlag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconFlag"
};