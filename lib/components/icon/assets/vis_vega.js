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

var EuiIconVisVega = function EuiIconVisVega(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M2.414 8.036L4.89 10.51a.5.5 0 01-.707.708L1.354 8.389a.5.5 0 010-.707l2.828-2.828a.5.5 0 11.707.707L2.414 8.036zm8.768 2.474l2.475-2.474-2.475-2.475a.5.5 0 01.707-.707l2.829 2.828a.5.5 0 010 .707l-2.829 2.829a.5.5 0 11-.707-.708zM8.559 2.506a.5.5 0 01.981.19L7.441 13.494a.5.5 0 01-.981-.19L8.559 2.506z"
  }));
};

var icon = EuiIconVisVega;
exports.icon = icon;
EuiIconVisVega.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisVega"
};