function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoSiteSearch = function EuiIconLogoSiteSearch(_ref) {
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
    fill: "#FA744E",
    d: "M27.05 10h-7.34l-11 22s15.696-4.96 21.855-16.076C32.037 13.266 30.088 10 27.05 10"
  }), React.createElement("path", {
    fill: "#00BFB3",
    d: "M21.355 0H7.533L.427 14.211C-.903 16.871 1.032 20 4.004 20h7.351l10-20z"
  }), React.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M2.533 10L.428 14.211C-.903 16.871 1.032 20 4.005 20h7.35l5-10H2.533z"
  })));
};

export var icon = EuiIconLogoSiteSearch;
EuiIconLogoSiteSearch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoSiteSearch"
};