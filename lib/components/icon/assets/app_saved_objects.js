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

var EuiIconAppSavedObjects = function EuiIconAppSavedObjects(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M20.38 7.001L17 9.619V0h-2v9.619l-3.37-2.618-1.25 1.513L16 12.878l5.63-4.364z"
  }), _react.default.createElement("path", {
    d: "M21.06.165l-1.11 1.61 9.25 5.983L16 16.29 2.8 7.758l9.25-5.983-1.1-1.61L0 7.234v13.653l16 10.337 16-10.337V7.234L21.06.164zM2 9.57l13 8.407v10.279L2 19.84V9.57zm15 18.676V17.978l13-8.407V19.85l-13 8.397z"
  }));
};

var icon = EuiIconAppSavedObjects;
exports.icon = icon;
EuiIconAppSavedObjects.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppSavedObjects"
};