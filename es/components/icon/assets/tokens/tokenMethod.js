function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconTokenMethod = function EuiIconTokenMethod(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.333 11.027V5.05h2.059v1.136h.063c.25-.747.891-1.214 1.728-1.214.848 0 1.524.483 1.65 1.214h.063c.204-.731.927-1.214 1.822-1.214 1.155 0 1.949.798 1.949 2.023v4.03h-2.169V7.542c0-.521-.29-.84-.738-.84s-.723.319-.723.84v3.486H6.963V7.54c0-.521-.29-.84-.739-.84-.447 0-.722.319-.722.84v3.486H3.333z"
  }));
};

export var icon = EuiIconTokenMethod;
EuiIconTokenMethod.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenMethod"
};