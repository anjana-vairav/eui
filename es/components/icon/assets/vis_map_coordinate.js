function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconVisMapCoordinate = function EuiIconVisMapCoordinate(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M7.5 15C5.77 15 2 9.97 2 6.595 2 3.507 4.46 1 7.5 1S13 3.507 13 6.595C13 9.97 9.23 15 7.5 15zm0-1c.286 0 1.48-1.044 2.459-2.35C11.219 9.969 12 8.153 12 6.596 12 4.055 9.983 2 7.5 2S3 4.055 3 6.595c0 1.557.78 3.373 2.041 5.056C6.02 12.956 7.214 14 7.5 14zm0-4.996a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
};

export var icon = EuiIconVisMapCoordinate;
EuiIconVisMapCoordinate.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisMapCoordinate"
};