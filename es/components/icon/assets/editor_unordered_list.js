function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconEditorUnorderedList = function EuiIconEditorUnorderedList(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M5.5 4h8a.5.5 0 110 1h-8a.5.5 0 010-1zm0 4h8a.5.5 0 110 1h-8a.5.5 0 010-1zm0 4h8a.5.5 0 110 1h-8a.5.5 0 110-1zm-3-7a.5.5 0 110-1 .5.5 0 010 1zm0 4a.5.5 0 110-1 .5.5 0 010 1zm0 4a.5.5 0 110-1 .5.5 0 010 1z"
  }));
};

export var icon = EuiIconEditorUnorderedList;
EuiIconEditorUnorderedList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconEditorUnorderedList"
};