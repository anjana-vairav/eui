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

var EuiIconDocumentEdit = function EuiIconDocumentEdit(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M8.505 8.995l6.453-6.44-1.5-1.5-6.453 6.44 1.5 1.5zM12.968.19c.258-.238.657-.26.91 0l1.928 1.929a.642.642 0 010 .909l-6.78 6.784A.641.641 0 018.57 10H6.643A.643.643 0 016 9.357V7.43c0-.17.067-.335.188-.455L12.968.19zM4.5 13a.5.5 0 110-1h7a.5.5 0 110 1h-7zm4-12a.5.5 0 010 1H2v13h12V7.5a.5.5 0 111 0V15a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h6.5z"
  }));
};

var icon = EuiIconDocumentEdit;
exports.icon = icon;
EuiIconDocumentEdit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconDocumentEdit"
};