function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogstashOutput = function EuiIconLogstashOutput(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M2.21 4.008H13.76V0h1v4.008h.088c.619 0 1.122.504 1.122 1.123V7.49c0 .62-.503 1.122-1.122 1.122H1.122A1.122 1.122 0 010 7.49V5.13c0-.618.503-1.122 1.122-1.122h.089V0h1v4.008zm11.549 1H1.12A.123.123 0 001 5.13V7.49c0 .068.055.122.122.122h13.725a.122.122 0 00.122-.122V5.13a.123.123 0 00-.122-.122h-1.088zm-5.301 9.097l2.405-2.26.686.728-3.58 3.363-3.58-3.363.686-.728 2.383 2.24V9.577h1v4.528z"
  }));
};

export var icon = EuiIconLogstashOutput;
EuiIconLogstashOutput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogstashOutput"
};