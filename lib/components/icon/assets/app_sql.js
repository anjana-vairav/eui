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

var EuiIconAppSql = function EuiIconAppSql(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M18 6h9v2h-9zM5 6h9v2H5zM5 12h9v2H5zM18 12h9v2h-9zM5 18h9v2H5zM18 18h9v2h-9zM18 24h9v2h-9zM5 24h9v2H5z"
  }), _react.default.createElement("path", {
    d: "M29 32H3a3 3 0 01-3-3V3a3 3 0 013-3h26a3 3 0 013 3v26a3 3 0 01-3 3zM3 2a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3z"
  }));
};

var icon = EuiIconAppSql;
exports.icon = icon;
EuiIconAppSql.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppSql"
};