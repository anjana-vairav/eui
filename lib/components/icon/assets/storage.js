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

var EuiIconStorage = function EuiIconStorage(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fillRule: "evenodd",
    transform: "translate(0 2)"
  }, _react.default.createElement("path", {
    fillRule: "nonzero",
    d: "M2 6a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H2zm13 2v3a1 1 0 01-1 1H2a1 1 0 01-1-1V8a1 1 0 011-1h12a1 1 0 011 1zm1-3V2a2 2 0 00-2-2H2a2 2 0 00-2 2v3c0 .601.271 1.133.69 1.5C.271 6.867 0 7.399 0 8v3a2 2 0 002 2h12a2 2 0 002-2V8c0-.601-.271-1.133-.689-1.5.418-.367.689-.899.689-1.5z"
  }), _react.default.createElement("circle", {
    cx: 4.5,
    cy: 9.5,
    r: 1.5
  }), _react.default.createElement("circle", {
    cx: 4.5,
    cy: 3.5,
    r: 1.5
  }), _react.default.createElement("path", {
    d: "M12 8h1v3h-1zM10 8h1v3h-1zM12 2h1v3h-1zM10 2h1v3h-1z"
  })));
};

var icon = EuiIconStorage;
exports.icon = icon;
EuiIconStorage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconStorage"
};