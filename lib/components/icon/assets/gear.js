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

var EuiIconGear = function EuiIconGear(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M.164 10.329L1.87 8 .163 5.67c.18-.601.43-1.19.758-1.757a8.197 8.197 0 011.142-1.535l2.872.313L6.099.05a8.166 8.166 0 013.8-.003l1.166 2.644 2.872-.313a8.166 8.166 0 011.899 3.293L14.13 8l1.706 2.33c-.18.601-.43 1.19-.758 1.757a8.197 8.197 0 01-1.142 1.535l-2.872-.313-1.164 2.641a8.166 8.166 0 01-3.8.003l-1.166-2.644-2.872.313a8.166 8.166 0 01-1.899-3.293zm4.663 1.986a1 1 0 011.023.591l.957 2.17c.79.134 1.597.132 2.387-.001l.956-2.169a1 1 0 011.023-.59l2.358.256a7.23 7.23 0 001.194-2.068l-1.401-1.913a1 1 0 010-1.182l1.4-1.912a7.165 7.165 0 00-1.192-2.069l-2.359.257a1 1 0 01-1.023-.591L9.193.924a7.165 7.165 0 00-2.387.001L5.85 3.094a1 1 0 01-1.023.59l-2.358-.256a7.23 7.23 0 00-1.194 2.068l1.401 1.913a1 1 0 010 1.182l-1.4 1.912c.28.751.681 1.45 1.192 2.069l2.359-.257zM8 11a3 3 0 110-6 3 3 0 010 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
  }));
};

var icon = EuiIconGear;
exports.icon = icon;
EuiIconGear.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconGear"
};