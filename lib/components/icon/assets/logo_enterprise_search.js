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

var EuiIconLogoEnterpriseSearch = function EuiIconLogoEnterpriseSearch(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    fill: "#00BFB3",
    d: "M16 0c-2.918 0-5.645.794-8 2.158 4.777 2.768 8 7.923 8 13.842 0 5.919-3.223 11.074-8 13.842A15.907 15.907 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0"
  }), _react.default.createElement("path", {
    fill: "#FEC514",
    d: "M8 24h2.222A12.996 12.996 0 0013 16c0-2.935-1.012-5.744-2.778-8H8a8 8 0 000 16"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M16 8h-2.152A15.877 15.877 0 0116 16c0 2.918-.786 5.647-2.152 8H16a8 8 0 000-16"
  })));
};

var icon = EuiIconLogoEnterpriseSearch;
exports.icon = icon;
EuiIconLogoEnterpriseSearch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoEnterpriseSearch"
};