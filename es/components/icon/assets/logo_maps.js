function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoMaps = function EuiIconLogoMaps(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fill: "#22A7F3",
    d: "M25.5 9.5c0 6.65-9.5 11.425-9.5 11.425S6.5 16.15 6.5 9.5A9.5 9.5 0 0116 0a9.5 9.5 0 019.5 9.5"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M16 20.925s4.326-2.183 7.141-5.645l-2.505-1.878a7.725 7.725 0 00-9.272 0L8.859 15.28C11.674 18.742 16 20.925 16 20.925"
  }), React.createElement("path", {
    fill: "#FA744E",
    d: "M25.53 17.073a21.124 21.124 0 01-2.834 2.916c-2.62 2.235-5.239 3.561-5.349 3.616L16 24.282l-1.348-.677c-.109-.055-2.728-1.381-5.349-3.616a21.182 21.182 0 01-2.834-2.916L0 21.925l11.364 8.523a7.724 7.724 0 009.271 0L32 21.925l-6.47-4.852z"
  }));
};

export var icon = EuiIconLogoMaps;
EuiIconLogoMaps.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoMaps"
};