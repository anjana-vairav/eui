function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppFilebeat = function EuiIconAppFilebeat(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M8 18h16v2H8zM8 13h9v2H8zM8 23h16v2H8z"
  }), React.createElement("path", {
    d: "M21.41 0H5a3 3 0 00-3 3v26a3 3 0 003 3h22a3 3 0 003-3V8.59L21.41 0zM22 3.41L26.59 8H22V3.41zM27 30H5a1 1 0 01-1-1V3a1 1 0 011-1h15v8h8v19a1 1 0 01-1 1z"
  }));
};

export var icon = EuiIconAppFilebeat;
EuiIconAppFilebeat.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppFilebeat"
};