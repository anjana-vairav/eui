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

var EuiIconAppDiscover = function EuiIconAppDiscover(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M8.33 23.67l4.79-10.55 10.55-4.79-4.79 10.55-10.55 4.79zm6.3-9l-2.28 5 5-2.28 2.28-5-5 2.28z"
  }), _react.default.createElement("path", {
    d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0016 0zm1 29.95V28h-2v1.95A14 14 0 012.05 17H4v-2H2.05A14 14 0 0115 2.05V4h2V2.05A14 14 0 0129.95 15H28v2h1.95A14 14 0 0117 29.95z"
  }));
};

var icon = EuiIconAppDiscover;
exports.icon = icon;
EuiIconAppDiscover.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppDiscover"
};