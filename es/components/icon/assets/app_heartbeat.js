function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppHeartbeat = function EuiIconAppHeartbeat(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M4.14 15.39a8.058 8.058 0 01-2.2-4.043A6.788 6.788 0 014.198 5.47a6.73 6.73 0 018.727-.213l1.26-1.464a8.65 8.65 0 00-11.277.232A8.727 8.727 0 00.068 11.6a10.172 10.172 0 002.793 5.275l1.28-1.484z"
  }), React.createElement("path", {
    d: "M15.515 31.274L4.548 18.454 15.855 4.763a8.67 8.67 0 0112.266-.746 8.727 8.727 0 012.91 7.205c-.243 2.695-2.037 4.732-3.482 6.37L15.515 31.275zm-8.427-12.82l8.427 9.862 10.55-11.995c1.32-1.503 2.822-3.21 3.007-5.265a6.788 6.788 0 00-2.24-5.586 6.73 6.73 0 00-9.504.563L7.088 18.455z"
  }));
};

export var icon = EuiIconAppHeartbeat;
EuiIconAppHeartbeat.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppHeartbeat"
};