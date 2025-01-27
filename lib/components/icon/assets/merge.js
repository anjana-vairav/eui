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

var EuiIconMerge = function EuiIconMerge(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M7.352 6H2.5a.5.5 0 010-1h4.852L5.12 2.721c-.18-.183-.155-.46.055-.616a.551.551 0 01.705.048l3 3.062c.16.164.16.405 0 .57l-3 3.062A.532.532 0 015.5 9a.54.54 0 01-.325-.106c-.21-.157-.235-.433-.055-.616L7.352 6zm1.296 4H13.5a.5.5 0 010 1H8.648l2.232 2.278c.18.183.155.46-.055.617A.54.54 0 0110.5 14a.532.532 0 01-.38-.153l-3-3.063a.397.397 0 010-.568l3-3.063a.551.551 0 01.705-.047c.21.156.235.433.055.616L8.648 10z"
  }));
};

var icon = EuiIconMerge;
exports.icon = icon;
EuiIconMerge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMerge"
};