function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconVisText = function EuiIconVisText(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M8.5 5v6h2a.5.5 0 110 1h-5a.5.5 0 110-1h2V5H5v.5a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5h7a.5.5 0 01.5.51l-.021 1a.5.5 0 11-1-.02l.01-.49H8.5zM1 15h1.5a.5.5 0 110 1h-2a.5.5 0 01-.5-.5v-1.996a.5.5 0 011 0V15zM1 1v1.497a.5.5 0 11-1 0V.5A.5.5 0 01.5 0h2a.5.5 0 010 1H1zm14 0h-1.495a.5.5 0 010-1H15.5a.5.5 0 01.5.5v2a.5.5 0 11-1 0V1zm0 14v-1.5a.5.5 0 111 0v2a.5.5 0 01-.5.5h-2a.5.5 0 110-1H15zM0 6.5a.5.5 0 011 0v3a.5.5 0 01-1 0v-3zM9.5 0a.5.5 0 010 1h-3a.5.5 0 010-1h3zM15 6.5a.5.5 0 111 0v3a.5.5 0 11-1 0v-3zM9.5 15a.5.5 0 110 1h-3a.5.5 0 110-1h3z"
  }));
};

export var icon = EuiIconVisText;
EuiIconVisText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisText"
};