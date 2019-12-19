function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoSecurity = function EuiIconLogoSecurity(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fill: "#00BFB3",
    d: "M0 22c0 5.522 4.478 10 10 10V12C4.478 12 0 16.477 0 22"
  }), React.createElement("path", {
    fill: "#F04E98",
    d: "M10 0v9c7.168 0 13 5.831 13 13h9C32 9.85 22.15 0 10 0"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M10 12v10h10c0-5.523-4.478-10-10-10"
  }));
};

export var icon = EuiIconLogoSecurity;
EuiIconLogoSecurity.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoSecurity"
};