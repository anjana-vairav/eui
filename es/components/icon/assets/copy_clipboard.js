function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconCopyClipboard = function EuiIconCopyClipboard(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M0 2.729V2a1 1 0 011-1h2v1H1v12h4v1H1a1 1 0 01-1-1V2.729zM12 5V2a1 1 0 00-1-1H9v1h2v3h1zm-1 1h2v9H6V6h5V5H6a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V6a1 1 0 00-1-1h-2v1z"
  }), React.createElement("path", {
    d: "M7 10h5V9H7zM7 8h5V7H7zM7 12h5v-1H7zM7 14h5v-1H7zM9 2V1a1 1 0 00-1-1H4a1 1 0 00-1 1v1h1V1h4v1h1zM3 3h6V2H3z"
  }));
};

export var icon = EuiIconCopyClipboard;
EuiIconCopyClipboard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconCopyClipboard"
};