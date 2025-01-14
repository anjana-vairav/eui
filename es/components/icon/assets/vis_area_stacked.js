function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconVisAreaStacked = function EuiIconVisAreaStacked(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M.5 1a.5.5 0 01.5.5V15h13.5a.5.5 0 110 1H.5a.5.5 0 01-.5-.5v-14A.5.5 0 01.5 1zm4.342 2.194L8.295 7.65l1.837-1.64a.5.5 0 01.703.037l3.035 3.336a.5.5 0 01.13.337v3.78a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V6.02a.5.5 0 01.104-.305l1.947-2.52a.5.5 0 01.791-.001zm-.394 1.123L3 6.191v4.101l1.146-1.146a.5.5 0 01.493-.126l.085.033L8.5 10.94l1.776-.888a.5.5 0 01.36-.034l.088.034L13 11.19V9.913l-2.571-2.826L8.56 8.753a.5.5 0 01-.728-.067L4.448 4.317z"
  }));
};

export var icon = EuiIconVisAreaStacked;
EuiIconVisAreaStacked.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisAreaStacked"
};