function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconImport = function EuiIconImport(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M9 10.114l1.85-1.943a.52.52 0 01.77 0c.214.228.214.6 0 .829l-1.95 2.05a1.552 1.552 0 01-2.31 0L5.41 9a.617.617 0 010-.829.52.52 0 01.77 0L8 10.082V1.556C8 1.249 8.224 1 8.5 1s.5.249.5.556v8.558zM4.18 6a.993.993 0 00-.972.804l-1.189 6A.995.995 0 002.991 14h11.018a1 1 0 00.972-1.196l-1.19-6a.993.993 0 00-.97-.804H4.18zM6 5v1h5V5h1.825c.946 0 1.76.673 1.946 1.608l1.19 6A2 2 0 0114.016 15H2.984a1.992 1.992 0 01-1.945-2.392l1.19-6C2.414 5.673 3.229 5 4.174 5H6z"
  }));
};

export var icon = EuiIconImport;
EuiIconImport.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconImport"
};