function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconMemory = function EuiIconMemory(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M7 10h2V6H7zM3 10h2V6H3zM11.025 10h2V6h-2zM3.5 13.75h1v-2.4h-1zM6.175 13.75h1.001v-2.4H6.175zM8.85 13.75h1v-2.4h-1zM11.525 13.75h1v-2.4h-1z"
  }), React.createElement("path", {
    d: "M0 3v7.05h1v3.698h1v-3.699h12v3.699h1v-3.699h1V3H0zm1 6h14V4H1v5z"
  }));
};

export var icon = EuiIconMemory;
EuiIconMemory.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMemory"
};