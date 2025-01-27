function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconPaint = function EuiIconPaint(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M11.993 8.17c0 .83-.673 1.507-1.499 1.507H5.498A1.505 1.505 0 013.999 8.17V6.662h7.994V8.17zm-2.998 5.998c0 .455-.448.827-.999.827-.55 0-1-.372-1-.827v-3.486h2v3.486zM4 5.658h1.262V1.005H4v4.653zm2.261 0h1.244V1.005H6.26v4.653zm2.244 0h1.235V1.005H8.504v4.653zm2.234 0h1.254V1.005h-1.254v4.653zM3.008 0L3 8.17a2.509 2.509 0 002.498 2.512h.5v3.486c0 1.01.896 1.832 1.998 1.832 1.102 0 1.998-.822 1.998-1.832v-3.486h.5a2.509 2.509 0 002.498-2.512L13 0H3.008z"
  }));
};

export var icon = EuiIconPaint;
EuiIconPaint.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconPaint"
};