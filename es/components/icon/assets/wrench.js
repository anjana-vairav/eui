function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconWrench = function EuiIconWrench(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M6.918 9.746l4.537 4.537a2 2 0 102.828-2.829l-3.157-3.156a.5.5 0 01.708-.708l3.156 3.157a3 3 0 11-4.243 4.243l-4.949-4.95a5.001 5.001 0 01-5.22-7.106.5.5 0 01.805-.138L3.676 5.09a1 1 0 101.415-1.414L2.797 1.382a.5.5 0 01.138-.805 5.001 5.001 0 113.983 9.169zM1.226 4.054a4.002 4.002 0 006.693 3.865 4 4 0 00-3.865-6.693l1.744 1.743a2 2 0 11-2.829 2.828L1.226 4.054zm10.229 8.814a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414z"
  }));
};

export var icon = EuiIconWrench;
EuiIconWrench.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconWrench"
};