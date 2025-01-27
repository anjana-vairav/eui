function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconLogoGithub = function EuiIconLogoGithub(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M16 0C7.164 0 0 7.343 0 16.4c0 7.248 4.584 13.394 10.942 15.562.8.15 1.092-.356 1.092-.789 0-.39-.014-1.684-.022-3.053-4.45.991-5.39-1.934-5.39-1.934-.728-1.894-1.776-2.398-1.776-2.398-1.454-1.017.11-.997.11-.997 1.606.114 2.452 1.69 2.452 1.69 1.428 2.506 3.746 1.781 4.656 1.36.146-1.056.56-1.78 1.016-2.19-3.552-.414-7.288-1.821-7.288-8.105 0-1.792.624-3.254 1.646-4.402-.164-.416-.714-2.085.158-4.342 0 0 1.341-.44 4.4 1.681A14.882 14.882 0 0116 7.932c1.36.006 2.728.188 4.006.553 3.053-2.124 4.396-1.681 4.396-1.681.875 2.259.325 3.926.16 4.34 1.026 1.148 1.645 2.61 1.645 4.402 0 6.3-3.742 7.687-7.307 8.094.577.508 1.086 1.505 1.086 3.035 0 2.192-.021 3.96-.021 4.5 0 .437.29.947 1.101.787C27.42 29.79 32 23.644 32 16.4 32 7.343 24.836 0 16 0z"
  }));
};

export var icon = EuiIconLogoGithub;
EuiIconLogoGithub.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoGithub"
};