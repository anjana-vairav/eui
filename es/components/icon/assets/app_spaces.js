function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppSpaces = function EuiIconAppSpaces(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M4 4h6v2H4zM22 4h6v2h-6zM4 22h6v2H4z"
  }), React.createElement("path", {
    d: "M0 14h14V0H0v14zM2 2h10v10H2V2zm16-2v14h14V0H18zm12 12H20V2h10v10zM0 32h14V18H0v14zm2-12h10v10H2V20zm16 12h14V18H18v14zm2-12h10v10H20V20z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M22 22h6v2h-6z"
  }));
};

export var icon = EuiIconAppSpaces;
EuiIconAppSpaces.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppSpaces"
};