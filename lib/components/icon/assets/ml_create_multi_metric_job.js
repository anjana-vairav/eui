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

var EuiIconMlCreateMultiMetricJob = function EuiIconMlCreateMultiMetricJob(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M30.976 10.41a6.23 6.23 0 01-1.75.715 12.979 12.979 0 010 9.75 6.23 6.23 0 011.75.716 14.984 14.984 0 000-11.182zM12.125 3.764a12.979 12.979 0 019.75 0 6.23 6.23 0 01.716-1.75 14.984 14.984 0 00-11.182 0 6.23 6.23 0 01.716 1.75zM3.824 16c-.005-1.67.315-3.326.94-4.875a6.061 6.061 0 01-1.74-.716 14.861 14.861 0 000 11.182 6.061 6.061 0 011.74-.716A12.932 12.932 0 013.825 16zm18.051 12.235a12.979 12.979 0 01-9.75 0 6.061 6.061 0 01-.716 1.741 14.861 14.861 0 0011.182 0 6.061 6.061 0 01-.716-1.74z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M23.588 15.059h-5.647V9.412h-1.882v5.647h-5.647v1.882h5.647v5.647h1.882v-5.647h5.647zM6.176 31.059a4.235 4.235 0 114.236-4.235 4.245 4.245 0 01-4.236 4.235zm0-6.588a2.353 2.353 0 100 4.705 2.353 2.353 0 000-4.705zm21.648 6.588a4.235 4.235 0 114.235-4.235 4.245 4.245 0 01-4.235 4.235zm0-6.588a2.353 2.353 0 100 4.705 2.353 2.353 0 000-4.705zM6.176 9.41a4.235 4.235 0 114.236-4.235 4.245 4.245 0 01-4.236 4.236zm0-6.587a2.353 2.353 0 100 4.705 2.353 2.353 0 000-4.705zm21.648 6.588a4.235 4.235 0 114.235-4.236 4.245 4.245 0 01-4.235 4.236zm0-6.588a2.353 2.353 0 100 4.705 2.353 2.353 0 000-4.705z"
  }));
};

var icon = EuiIconMlCreateMultiMetricJob;
exports.icon = icon;
EuiIconMlCreateMultiMetricJob.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMlCreateMultiMetricJob"
};