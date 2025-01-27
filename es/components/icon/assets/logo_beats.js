function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoBeats = function EuiIconLogoBeats(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fill: "#0080D5",
    d: "M15 20H4V0h11c5.522 0 10 4.478 10 10s-4.478 10-10 10"
  }), React.createElement("path", {
    fill: "#00C2B3",
    d: "M26.702 15.624C24.6 19.979 20.152 23 15 23H4v9h15c5.522 0 10-4.478 10-10a9.952 9.952 0 00-2.298-6.376"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M24.338 13.554A9.942 9.942 0 0019 12H4v8h11c4.27 0 7.903-2.68 9.338-6.446"
  }));
};

export var icon = EuiIconLogoBeats;
EuiIconLogoBeats.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoBeats"
};