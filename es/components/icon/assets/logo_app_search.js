function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoAppSearch = function EuiIconLogoAppSearch(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fill: "#0080D5",
    d: "M19.5.938a7.002 7.002 0 00-7 0l-8 4.619A7 7 0 001 11.62v9.237a7 7 0 003.5 6.062l7.5 4.33V17.979a7 7 0 013.5-6.062L27 5.276 19.5.939z"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M19.5.938a7.002 7.002 0 00-7 0L5 5.277l11 6.35 11-6.35-7.5-4.34z"
  }), React.createElement("path", {
    fill: "#FA744E",
    d: "M28.435 7.76l-10.026 5.79a6.994 6.994 0 011.59 4.428v13.27l7.5-4.33a7 7 0 003.5-6.061v-9.238a6.992 6.992 0 00-1.586-4.422l-.978.564z"
  }));
};

export var icon = EuiIconLogoAppSearch;
EuiIconLogoAppSearch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoAppSearch"
};