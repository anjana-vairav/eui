function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconExpand = function EuiIconExpand(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.354 12.354l8-8a.5.5 0 00-.708-.708l-8 8a.5.5 0 00.708.708zM1 10.5a.5.5 0 111 0v3a.5.5 0 00.5.5h3a.5.5 0 110 1h-3A1.5 1.5 0 011 13.5v-3zm14-5a.5.5 0 11-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 110-1h3A1.5 1.5 0 0115 2.5v3z"
  }));
};

export var icon = EuiIconExpand;
EuiIconExpand.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconExpand"
};