function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconPencil = function EuiIconPencil(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M12.148 3.148L11 2l-9 9v3h3l9-9-1.144-1.144-8.002 7.998a.502.502 0 01-.708 0 .502.502 0 010-.708l8.002-7.998zM11 1c.256 0 .512.098.707.293l3 3a.999.999 0 010 1.414l-9 9A.997.997 0 015 15H2a1 1 0 01-1-1v-3c0-.265.105-.52.293-.707l9-9A.997.997 0 0111 1zM5 14H2v-3l3 3z"
  }));
};

export var icon = EuiIconPencil;
EuiIconPencil.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconPencil"
};