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

var EuiIconLogoWebhook = function EuiIconLogoWebhook(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    fill: "#C73A63",
    d: "M14.943 13.563c-1.327 2.23-2.597 4.388-3.894 6.531-.334.55-.498.998-.232 1.698.734 1.931-.302 3.811-2.25 4.321-1.837.482-3.627-.726-3.992-2.692-.323-1.741 1.028-3.448 2.948-3.72.16-.023.325-.026.595-.046l2.92-4.896C9.2 12.933 8.108 10.8 8.35 8.154c.171-1.87.907-3.486 2.25-4.81a7.639 7.639 0 019.531-1c2.91 1.87 4.244 5.512 3.107 8.629l-2.668-.724c.357-1.733.093-3.29-1.076-4.623-.772-.88-1.763-1.341-2.89-1.511-2.258-.341-4.476 1.11-5.134 3.327-.748 2.516.383 4.572 3.473 6.121z"
  }), _react.default.createElement("path", {
    fill: "#4B4B4B",
    d: "M18.73 10.926l2.823 4.98c4.753-1.47 8.336 1.16 9.622 3.977 1.552 3.402.491 7.432-2.558 9.531-3.13 2.155-7.089 1.787-9.862-.981l2.176-1.821c2.739 1.774 5.135 1.69 6.913-.41a4.766 4.766 0 00-.077-6.219c-1.8-2.025-4.213-2.086-7.13-.143-1.209-2.146-2.44-4.275-3.61-6.436-.396-.729-.832-1.152-1.722-1.306-1.487-.257-2.446-1.534-2.504-2.964a3.258 3.258 0 012.08-3.192 3.243 3.243 0 013.671 1.002c.71.896.935 1.905.562 3.01-.104.309-.238.607-.384.972z"
  }), _react.default.createElement("path", {
    fill: "#4A4A4A",
    d: "M20.963 24.401h-5.72c-.55 2.256-1.734 4.077-3.775 5.235-1.586.9-3.296 1.205-5.116.911C3 30.007.26 26.99.019 23.593c-.273-3.848 2.372-7.268 5.898-8.036l.732 2.658c-3.234 1.65-4.353 3.73-3.448 6.33.797 2.287 3.06 3.541 5.518 3.056 2.51-.495 3.776-2.581 3.621-5.929 2.38 0 4.761-.024 7.14.012.93.015 1.648-.081 2.348-.9 1.152-1.349 3.273-1.227 4.515.046 1.268 1.301 1.207 3.395-.135 4.641a3.236 3.236 0 01-4.553-.157c-.249-.267-.445-.585-.692-.913z"
  })));
};

var icon = EuiIconLogoWebhook;
exports.icon = icon;
EuiIconLogoWebhook.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoWebhook"
};