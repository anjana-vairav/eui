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

var EuiIconAppWatches = function EuiIconAppWatches(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M9.74 7.73l-1.5-1.32a13 13 0 000 17.19l1.5-1.32a11 11 0 010-14.54v-.01z"
  }), _react.default.createElement("path", {
    d: "M6.51 3.66L5 2.34c-6.377 7.24-6.377 18.09 0 25.33l1.5-1.32C.792 19.867.792 10.153 6.5 3.67l.01-.01zm17.25 2.75l-1.5 1.32a11 11 0 010 14.54l1.5 1.32a13 13 0 000-17.19v.01z"
  }), _react.default.createElement("path", {
    d: "M27 2.34l-1.5 1.32c5.708 6.483 5.708 16.197 0 22.68l1.5 1.33c6.377-7.24 6.377-18.09 0-25.33z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M21 15a5 5 0 10-6 4.9V31h2V19.9a5 5 0 004-4.9zm-5 3a3 3 0 110-6 3 3 0 010 6z"
  }));
};

var icon = EuiIconAppWatches;
exports.icon = icon;
EuiIconAppWatches.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppWatches"
};