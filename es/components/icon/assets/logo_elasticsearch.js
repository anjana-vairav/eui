function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoElasticsearch = function EuiIconLogoElasticsearch(_ref) {
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
    className: "euiIcon__fillNegative",
    d: "M2 16c0 1.384.194 2.72.524 4H22a4 4 0 000-8H2.524A15.984 15.984 0 002 16"
  }), React.createElement("path", {
    fill: "#FEC514",
    d: "M28.924 7.662A15.381 15.381 0 0030.48 6C27.547 2.346 23.05 0 18 0 11.679 0 6.239 3.678 3.644 9H25.51a5.039 5.039 0 003.413-1.338"
  }), React.createElement("path", {
    fill: "#00BFB3",
    d: "M25.51 23H3.645C6.24 28.323 11.679 32 18 32c5.05 0 9.547-2.346 12.48-6a15.381 15.381 0 00-1.556-1.662A5.034 5.034 0 0025.51 23"
  })));
};

export var icon = EuiIconLogoElasticsearch;
EuiIconLogoElasticsearch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoElasticsearch"
};