function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var EuiIconAccessibility = function EuiIconAccessibility(props) {
  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    d: "M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zm3.974 4.342a.5.5 0 01-.233.596l-.083.036L9 6.86v2.559l.974 2.923a.5.5 0 01-.233.596l-.083.036a.5.5 0 01-.596-.233l-.036-.083-1-3L8 9.5l-.026.158-1 3a.5.5 0 01-.97-.228l.022-.088L7 9.416V6.86l-2.658-.886a.5.5 0 01.228-.97l.088.022L7.583 6h.833l2.926-.974a.5.5 0 01.632.316zM8 3a1 1 0 110 2 1 1 0 010-2z"
  }));
};

export var icon = EuiIconAccessibility;
EuiIconAccessibility.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAccessibility"
};