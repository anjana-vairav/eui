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

var EuiIconFaceNeutral = function EuiIconFaceNeutral(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fill: "#13252D",
    fillRule: "evenodd"
  }, _react.default.createElement("circle", {
    cx: 5,
    cy: 5,
    r: 1
  }), _react.default.createElement("circle", {
    cx: 10,
    cy: 5,
    r: 1
  }), _react.default.createElement("path", {
    fillRule: "nonzero",
    d: "M7.5 14a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"
  }), _react.default.createElement("path", {
    fillRule: "nonzero",
    d: "M3 10h9a.5.5 0 100-1H3a.5.5 0 000 1z"
  })));
};

var icon = EuiIconFaceNeutral;
exports.icon = icon;
EuiIconFaceNeutral.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconFaceNeutral"
};