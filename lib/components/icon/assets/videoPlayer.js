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

var EuiIconVideoPlayer = function EuiIconVideoPlayer(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zm1 0v12.012c0 .548.446.994.994.994h12.012a.995.995 0 00.994-.994V1.994A.995.995 0 0014.006 1H1.994A.995.995 0 001 1.994zM1 4h14v1H1V4zm1.5-1a.5.5 0 010-1h1a.5.5 0 010 1h-1zm3 0a.5.5 0 010-1h1a.5.5 0 010 1h-1zm4.947 6.106a1 1 0 010 1.788l-3 2A1 1 0 016 12V8a1 1 0 011.447-.894l3 2zM10 10L7 8v4l3-2z"
  }));
};

var icon = EuiIconVideoPlayer;
exports.icon = icon;
EuiIconVideoPlayer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVideoPlayer"
};