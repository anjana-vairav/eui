function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconEditorUnderline = function EuiIconEditorUnderline(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M5 3.536V7.8c0 1.628 1.224 2.6 3 2.6 1.783 0 3-.972 3-2.6V3.536c0-.357.167-.536.5-.536.333 0 .5.179.5.536v4.318c0 2.093-1.665 3.546-4 3.546S4 9.893 4 7.8V3.536C4 3.179 4.167 3 4.5 3c.333 0 .5.179.5.536zM2.5 13h11a.5.5 0 110 1h-11a.5.5 0 110-1z"
  }));
};

export var icon = EuiIconEditorUnderline;
EuiIconEditorUnderline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconEditorUnderline"
};