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

var EuiIconNode = function EuiIconNode(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M8.5 1.443a1 1 0 00-1 0L2.572 4.29a1 1 0 00-.5.866v5.69a1 1 0 00.5.866L7.5 14.557a1 1 0 001 0l4.928-2.846a1 1 0 00.5-.866v-5.69a1 1 0 00-.5-.866L8.5 1.443zM9 .577l4.928 2.846a2 2 0 011 1.732v5.69a2 2 0 01-1 1.732L9 15.423a2 2 0 01-2 0l-4.928-2.846a2 2 0 01-1-1.732v-5.69a2 2 0 011-1.732L7 .577a2 2 0 012 0z"
  }));
};

var icon = EuiIconNode;
exports.icon = icon;
EuiIconNode.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconNode"
};