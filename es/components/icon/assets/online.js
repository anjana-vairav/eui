function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconOnline = function EuiIconOnline(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M8 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-1a.5.5 0 100-1 .5.5 0 000 1zm3.189-3.64a.5.5 0 01-.721.692A3.408 3.408 0 008 9c-.937 0-1.813.378-2.453 1.037a.5.5 0 01-.717-.697A4.408 4.408 0 018 8c1.22 0 2.361.497 3.189 1.36zm2.02-2.14a.5.5 0 11-.721.693A6.2 6.2 0 008 6a6.199 6.199 0 00-4.46 1.885.5.5 0 01-.718-.697A7.199 7.199 0 018 5a7.2 7.2 0 015.21 2.22zm2.02-2.138a.5.5 0 01-.721.692A8.99 8.99 0 008 3a8.99 8.99 0 00-6.469 2.734.5.5 0 11-.717-.697A9.99 9.99 0 018 2a9.99 9.99 0 017.23 3.082z"
  }));
};

export var icon = EuiIconOnline;
EuiIconOnline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconOnline"
};