function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogstashQueue = function EuiIconLogstashQueue(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M11.339 15.464H4.77a3.248 3.248 0 01-3.245-3.244V4.549H0v-1h2.526v8.67a2.247 2.247 0 002.245 2.245h6.568a2.247 2.247 0 002.244-2.244V3.549h2.455v1h-1.455v7.67a3.247 3.247 0 01-3.244 3.245zm.513-5.962v1.095l-3.848 1.72-3.85-1.72V9.502l3.85 1.72 3.848-1.72zm0-4.251v1.095l-3.848 1.72-3.85-1.72V5.25l3.85 1.72 3.848-1.72zm0-4.251v1.095l-3.848 1.72-3.85-1.72V1l3.85 1.72L11.852 1z"
  }));
};

export var icon = EuiIconLogstashQueue;
EuiIconLogstashQueue.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogstashQueue"
};