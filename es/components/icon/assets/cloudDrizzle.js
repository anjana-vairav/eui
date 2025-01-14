function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconCloudDrizzle = function EuiIconCloudDrizzle(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M6.348 3.761A3.995 3.995 0 018 7a.5.5 0 01-1 0 3 3 0 10-4.878 2.34.5.5 0 01-.627.779 4 4 0 013.973-6.84 5.502 5.502 0 0110.096 4.37.5.5 0 11-.92-.39 4.5 4.5 0 10-8.296-3.497zm-1.61 4.935a.5.5 0 11.775.633l-1.466 1.792a.5.5 0 11-.774-.633l1.466-1.792zm-3.12 3.647a.5.5 0 01.774.634l-1.505 1.84a.5.5 0 01-.774-.634l1.505-1.84zm7.62-3.647a.5.5 0 01.775.633l-1.466 1.792a.5.5 0 11-.774-.633l1.466-1.792zm-3.12 3.647a.5.5 0 01.774.634l-1.505 1.84a.5.5 0 01-.774-.634l1.505-1.84zm7.62-3.647a.5.5 0 11.775.633l-1.466 1.792a.5.5 0 11-.774-.633l1.466-1.792zm-3.12 3.647a.5.5 0 01.774.634l-1.505 1.84a.5.5 0 01-.774-.634l1.505-1.84z"
  }));
};

export var icon = EuiIconCloudDrizzle;
EuiIconCloudDrizzle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconCloudDrizzle"
};