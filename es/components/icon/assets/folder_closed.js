function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconFolderClosed = function EuiIconFolderClosed(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M6 2H1v11h14V3.5H7.125A1.125 1.125 0 016 2.375V2zm.25-1a.75.75 0 01.75.75v.625c0 .069.056.125.125.125H15a1 1 0 011 1V13a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h5.25z"
  }));
};

export var icon = EuiIconFolderClosed;
EuiIconFolderClosed.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconFolderClosed"
};