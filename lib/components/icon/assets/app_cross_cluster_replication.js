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

var EuiIconAppCrossClusterReplication = function EuiIconAppCrossClusterReplication(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M0 0v16h8.7l5.3-6V0H0zm2 2h10v7H7v5H2V2zm8.45 9L9 12.64V11h1.45zM18 16v16h8.7l5.3-6V16H18zm2 2h10v7h-5v5h-5V18zm8.45 9L27 28.64V27h1.45z"
  }), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M5 18H3c0 6.075 4.925 11 11 11h2v-2h-2a9 9 0 01-9-9zM18 3h-2v2h2a9 9 0 019 9h2c0-6.075-4.925-11-11-11z"
  }));
};

var icon = EuiIconAppCrossClusterReplication;
exports.icon = icon;
EuiIconAppCrossClusterReplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppCrossClusterReplication"
};