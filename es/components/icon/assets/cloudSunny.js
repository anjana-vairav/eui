function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconCloudSunny = function EuiIconCloudSunny(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M10.746 5.005A5.5 5.5 0 0110.5 16H4a4 4 0 01-1.61-7.663A4.473 4.473 0 012.029 7H.5a.5.5 0 010-1h1.527a4.479 4.479 0 01.957-2.309L1.646 2.354a.5.5 0 11.708-.708L3.69 2.984A4.479 4.479 0 016 2.027V.5a.5.5 0 011 0v1.528a4.493 4.493 0 012.309.956l1.337-1.338a.5.5 0 01.708.708L10.016 3.69c.311.388.56.831.73 1.314zM4 15h6.5a4.5 4.5 0 10-4.152-6.239A3.995 3.995 0 018 12a.5.5 0 11-1 0 3 3 0 10-3 3zm5.691-9.94a3.5 3.5 0 10-6.33 2.991 4.029 4.029 0 012.106.227 5.505 5.505 0 014.224-3.219z"
  }));
};

export var icon = EuiIconCloudSunny;
EuiIconCloudSunny.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconCloudSunny"
};