function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconKeyboardShortcut = function EuiIconKeyboardShortcut(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M15 9a1 1 0 01.993.883L16 10v5a1 1 0 01-.883.993L15 16H7a1 1 0 01-.993-.883L6 15v-5a1 1 0 01.883-.993L7 9h8zM2.5 10a.5.5 0 01.492.41L3 10.5V12h1.5a.5.5 0 01.09.992L4.5 13H3v1.5a.5.5 0 01-.992.09L2 14.5V13H.5a.5.5 0 01-.09-.992L.5 12H2v-1.5a.5.5 0 01.5-.5zM15 10H7v5h8v-5zm-1 3v1H8v-1h6zm1-13a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zm0 1H1v5h14V1zM8 4v1H2V4h6z"
  }));
};

export var icon = EuiIconKeyboardShortcut;
EuiIconKeyboardShortcut.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconKeyboardShortcut"
};