function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppPipeline = function EuiIconAppPipeline(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M29 12a3 3 0 00-3 3h-4a3 3 0 00-3-3h-6a3 3 0 00-3 3H6a3 3 0 00-3-3H0v14h3a3 3 0 003-3h4a3 3 0 003 3h6a3 3 0 003-3h4a3 3 0 003 3h3V12h-3zM3 24H2V14h1a1 1 0 011 1v8a1 1 0 01-1 1zm17-3v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2H6v-4h6v-2a1 1 0 011-1h6a1 1 0 011 1v2h6v4h-6zm10 3h-1a1 1 0 01-1-1v-8a1 1 0 011-1h1v10z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M22 6H10v2h5v2h2V8h5z"
  }));
};

export var icon = EuiIconAppPipeline;
EuiIconAppPipeline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppPipeline"
};