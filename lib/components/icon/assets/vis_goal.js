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

var EuiIconVisGoal = function EuiIconVisGoal(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M10.725 3.653a6 6 0 012.847 7.576.5.5 0 01-.928-.372 5 5 0 10-9.293-.014.5.5 0 01-.218.619L1.39 12.47a.5.5 0 01-.708-.23A7.99 7.99 0 010 9a8 8 0 0111.212-7.329.5.5 0 01.234.704l-.721 1.278zm-.933-.38l.5-.889a7 7 0 00-8.902 8.93l.886-.511a6 6 0 017.516-7.53zM6.73 9.467a1.75 1.75 0 112.539 0 2 2 0 11-2.539 0zM8 12.013a1 1 0 100-2 1 1 0 000 2zm0-3a.75.75 0 100-1.5.75.75 0 000 1.5z"
  }));
};

var icon = EuiIconVisGoal;
exports.icon = icon;
EuiIconVisGoal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisGoal"
};