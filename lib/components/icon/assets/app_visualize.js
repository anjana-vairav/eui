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

var EuiIconAppVisualize = function EuiIconAppVisualize(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M32 32H4a4 4 0 01-4-4V0h2v28a2 2 0 002 2h28v2z"
  }), _react.default.createElement("path", {
    d: "M6 20h2v7H6zM16 12h2v15h-2zM26 17h2v10h-2z"
  }), _react.default.createElement("path", {
    d: "M27 6a3 3 0 00-2.08.84L20 4.36A2.2 2.2 0 0020 4a3 3 0 00-6 0c.001.341.062.68.18 1l-5.6 4.46A3 3 0 007 9a3 3 0 103 3 2.93 2.93 0 00-.18-1l5.6-4.48A3 3 0 0017 7a3 3 0 002.08-.84l5 2.48A2.2 2.2 0 0024 9a3 3 0 103-3zM7 13a1 1 0 110-2 1 1 0 010 2zm10-8a1 1 0 110-2 1 1 0 010 2zm10 5a1 1 0 110-2 1 1 0 010 2z"
  }));
};

var icon = EuiIconAppVisualize;
exports.icon = icon;
EuiIconAppVisualize.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppVisualize"
};