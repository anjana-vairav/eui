function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppSecurityAnalytics = function EuiIconAppSecurityAnalytics(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M10 12c5.43 0 9.848 4.327 9.996 9.72L20 22v1h-9v9h-1C4.477 32 0 27.523 0 22s4.477-10 10-10zm-1 9v-6.938a8.001 8.001 0 00-.25 15.84l.25.036V14.062 21zm2-6.938V21h6.938a8.005 8.005 0 00-6.68-6.902l-.257-.036z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M10 6c8.731 0 15.83 6.994 15.997 15.685L26 22h-2c0-7.628-6.1-13.83-13.687-13.997L10 8V6zm0-6c12.029 0 21.803 9.654 21.997 21.636L32 22h-2c0-10.93-8.769-19.813-19.656-19.997L10 2V0z"
  }));
};

export var icon = EuiIconAppSecurityAnalytics;
EuiIconAppSecurityAnalytics.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppSecurityAnalytics"
};