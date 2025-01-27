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

var EuiIconOffline = function EuiIconOffline(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M6.517 12.271l1.254-1.254a1.5 1.5 0 11-1.254 1.254zm2.945-2.944l.74-.74c.361.208.694.467.987.772a.5.5 0 01-.721.693 3.424 3.424 0 00-1.006-.725zm2.162-2.163l.716-.715c.308.232.599.49.87.772a.5.5 0 11-.722.692 6.26 6.26 0 00-.864-.749zM7.061 6.07A6.198 6.198 0 003.54 7.885a.5.5 0 01-.717-.697 7.199 7.199 0 015.309-2.187l-1.07 1.07zm6.672-1.014l.71-.71c.274.23.536.476.786.736a.5.5 0 01-.721.692 9.1 9.1 0 00-.775-.718zm-3.807-1.85A9.06 9.06 0 008 3a8.99 8.99 0 00-6.469 2.734.5.5 0 11-.717-.697A9.99 9.99 0 018 2c.944 0 1.868.131 2.75.382l-.824.824zM8 13a.5.5 0 100-1 .5.5 0 000 1zm-5.424 1a.5.5 0 01-.707-.707L14.146 1.146a.5.5 0 01.708.708L2.576 14z"
  }));
};

var icon = EuiIconOffline;
exports.icon = icon;
EuiIconOffline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconOffline"
};