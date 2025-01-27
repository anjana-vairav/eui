function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoNginx = function EuiIconLogoNginx(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#119639",
    d: "M16 0l13.856 8v16L16 32 2.144 24V8z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M11.17 13.512v8.376a1.607 1.607 0 11-3.215 0V9.632c0-1.432 1.731-2.149 2.744-1.136l9.51 9.512V9.632a1.607 1.607 0 013.215 0v12.256c0 1.432-1.731 2.149-2.744 1.136l-9.51-9.512z"
  })));
};

export var icon = EuiIconLogoNginx;
EuiIconLogoNginx.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoNginx"
};