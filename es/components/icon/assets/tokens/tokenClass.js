function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconTokenClass = function EuiIconTokenClass(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.333 7.027H9.375c-.056-.708-.48-1.187-1.222-1.187-.972 0-1.5.806-1.5 2.16 0 1.43.545 2.16 1.486 2.16.708 0 1.139-.415 1.236-1.08l1.958.015C11.236 10.418 10.181 12 8.097 12c-1.958 0-3.43-1.41-3.43-4 0-2.6 1.514-4 3.43-4 1.792 0 3.084 1.095 3.236 3.027z"
  }));
};

export var icon = EuiIconTokenClass;
EuiIconTokenClass.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenClass"
};