function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppTimelion = function EuiIconAppTimelion(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M4 4v20.34L16 32l12-7.64V4H4zm22 2v4h-4a3 3 0 00-3 3v5h-6v-5a3 3 0 00-3-3H6V6h20zm-7.87 14L16 22.52 13.87 20h4.26zM6 12h4a1 1 0 011 1v6.7l3.69 4.37-2.58 3.06L6 23.24V12zm7.81 16.22l2.19-2.6 2.19 2.6L16 29.61l-2.19-1.39zm6.08-1.09l-2.58-3.06L21 19.7V13a1 1 0 011-1h4v11.24l-6.11 3.89z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M4 0h24v2H4z"
  }));
};

export var icon = EuiIconAppTimelion;
EuiIconAppTimelion.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppTimelion"
};