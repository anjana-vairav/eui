function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconVisArea = function EuiIconVisArea(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M3 13h10V9.913l-2.571-2.826L8.56 8.753a.5.5 0 01-.728-.067L4.448 4.317 3 6.191V13zm5.295-5.35l1.837-1.64a.5.5 0 01.703.037l3.035 3.336a.5.5 0 01.13.337v3.78a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V6.02a.5.5 0 01.104-.305l1.947-2.52a.5.5 0 01.791-.001L8.295 7.65zM1 15h13.5a.5.5 0 110 1H.5a.5.5 0 01-.5-.5v-14a.5.5 0 011 0V15z"
  }));
};

export var icon = EuiIconVisArea;
EuiIconVisArea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisArea"
};