function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoUptime = function EuiIconLogoUptime(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fill: "#3EBEB0",
    d: "M19 15c0 7.062-4.888 12.969-11.46 14.563A15.914 15.914 0 0016 32c8.836 0 16-7.163 16-16v-3l-6.5-6-6.5 6v2z"
  }), React.createElement("path", {
    fill: "#07C",
    d: "M6.833 26.646a11.954 11.954 0 008.544-7.834A12.43 12.43 0 0113 11.5V.292C5.6 1.696 0 8.19 0 16.002c0 4.358 1.75 8.306 4.577 11.192l2.256-.547z"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M30.362 23.02c-1.494.63-3.137.98-4.861.98a12.443 12.443 0 01-7.852-2.78 15.042 15.042 0 01-10.11 8.343A15.91 15.91 0 0016.002 32c6.314 0 11.758-3.669 14.36-8.98"
  }));
};

export var icon = EuiIconLogoUptime;
EuiIconLogoUptime.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoUptime"
};