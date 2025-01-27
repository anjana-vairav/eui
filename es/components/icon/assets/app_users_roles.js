function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppUsersRoles = function EuiIconAppUsersRoles(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M19.307 3.21a2.91 2.91 0 10-.223 1.94 11.636 11.636 0 018.232 7.049l1.775-.698a13.576 13.576 0 00-9.784-8.291zm-2.822 1.638a.97.97 0 110-1.939.97.97 0 010 1.94zm-4.267.805l-.717-1.774a13.576 13.576 0 00-8.291 9.784 2.91 2.91 0 101.94.223 11.636 11.636 0 017.068-8.233zm-8.34 11.802a.97.97 0 110-1.94.97.97 0 010 1.94zm12.607 8.727a2.91 2.91 0 00-2.599 1.62 11.636 11.636 0 01-8.233-7.05l-1.774.717a13.576 13.576 0 009.813 8.291 2.91 2.91 0 102.793-3.578zm0 3.879a.97.97 0 110-1.94.97.97 0 010 1.94zM32 16.485a2.91 2.91 0 10-4.199 2.599 11.636 11.636 0 01-7.05 8.232l.718 1.775a13.576 13.576 0 008.291-9.813A2.91 2.91 0 0032 16.485zm-2.91.97a.97.97 0 110-1.94.97.97 0 010 1.94z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M19.19 16.35a3.879 3.879 0 10-5.42 0 4.848 4.848 0 00-2.134 4.014v1.939h9.697v-1.94a4.848 4.848 0 00-2.143-4.014zm-4.645-2.774a1.94 1.94 0 113.88 0 1.94 1.94 0 01-3.88 0zm-.97 6.788a2.91 2.91 0 115.819 0h-5.818z"
  }));
};

export var icon = EuiIconAppUsersRoles;
EuiIconAppUsersRoles.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppUsersRoles"
};