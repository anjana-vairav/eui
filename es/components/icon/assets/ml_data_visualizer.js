function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconMlDataVisualizer = function EuiIconMlDataVisualizer(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M23 12.05V13a10 10 0 01-.11 1.44 6 6 0 11-8.45 8.45A10 10 0 0113 23h-.95A8 8 0 1023 12.05z"
  }), React.createElement("path", {
    d: "M0 11h2V2h9V0H0zM21 0v2h9v9h2V0zM2 21H0v11h11v-2H2zM30 30h-9v2h11V21h-2zM13 21a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12z"
  }));
};

export var icon = EuiIconMlDataVisualizer;
EuiIconMlDataVisualizer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMlDataVisualizer"
};