function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconVisPie = function EuiIconVisPie(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M6.5 9a.5.5 0 01-.5-.5V3.023A5.5 5.5 0 1011.978 9H6.5zM7 8h5.5a.5.5 0 01.5.5A6.5 6.5 0 116.5 2a.5.5 0 01.5.5V8zm2-6.972V6h4.972C13.696 3.552 11.448 1.304 9 1.028zM14.5 7h-6a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5C11.853 0 15 3.147 15 6.5a.5.5 0 01-.5.5zM6.146 8.854a.5.5 0 11.708-.708l4 4a.5.5 0 01-.708.708l-4-4z"
  }));
};

export var icon = EuiIconVisPie;
EuiIconVisPie.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisPie"
};