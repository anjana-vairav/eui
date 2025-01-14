function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoElasticStack = function EuiIconLogoElasticStack(_ref) {
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
    fill: "#F04E98",
    d: "M32 9V2.5A2.5 2.5 0 0029.5 0h-27A2.5 2.5 0 000 2.5V9h32z"
  }), React.createElement("path", {
    fill: "#00BFB3",
    d: "M0 20h32v-8H0z"
  }), React.createElement("path", {
    fill: "#0080D5",
    d: "M14.5 23H0v6.5A2.5 2.5 0 002.5 32h12v-9z"
  }), React.createElement("path", {
    fill: "#FEC514",
    d: "M17.5 23v9h12a2.5 2.5 0 002.5-2.5V23H17.5z"
  })));
};

export var icon = EuiIconLogoElasticStack;
EuiIconLogoElasticStack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoElasticStack"
};