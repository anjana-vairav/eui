function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLink = function EuiIconLink(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M7.66 3.803a.5.5 0 11-.706-.707L9.268.78c1.187-1.187 3.242-1 4.596.354s1.54 3.409.354 4.596l-3.536 3.536c-1.187 1.187-3.242 1-4.596-.354a.5.5 0 11.707-.707c.99.99 2.417 1.119 3.182.354l3.536-3.536c.765-.765.635-2.193-.354-3.182-.99-.99-2.417-1.119-3.182-.354L7.661 3.803zm-.32 7.392a.5.5 0 11.707.707l-2.315 2.314c-1.187 1.188-3.242 1-4.596-.353-1.354-1.354-1.54-3.41-.353-4.596L4.318 5.73c1.187-1.187 3.242-1 4.596.354a.5.5 0 01-.707.707c-.989-.99-2.416-1.12-3.182-.354L1.49 9.974c-.766.765-.636 2.193.353 3.182.99.989 2.417 1.119 3.182.353l2.315-2.314z"
  }));
};

export var icon = EuiIconLink;
EuiIconLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLink"
};