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

var EuiIconExit = function EuiIconExit(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.535 12.493a.47.47 0 01.468.468v2.564a.473.473 0 01-.466.475H3V0H12.595a.45.45 0 01.398.463v2.565a.469.469 0 01-.468.467h-.065a.468.468 0 01-.467-.467V1H4v14h8.01l-.007-2.04c0-.257.21-.467.467-.467h.065zm-1.096-7.59l2.121 2.122a1.5 1.5 0 010 2.121l-2.12 2.122a.5.5 0 11-.708-.708l2.121-2.12a.5.5 0 000-.708l-2.121-2.121a.5.5 0 01.707-.707z"
  }));
};

var icon = EuiIconExit;
exports.icon = icon;
EuiIconExit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconExit"
};