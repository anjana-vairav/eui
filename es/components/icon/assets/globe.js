function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconGlobe = function EuiIconGlobe(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M1.019 8a6.462 6.462 0 001.003 3h2.382a14.469 14.469 0 01-.396-3h-2.99zm0-1h2.989c.033-1.078.172-2.094.396-3H2.022a6.462 6.462 0 00-1.003 3zM13.98 8h-2.989a14.469 14.469 0 01-.396 3h2.382a6.462 6.462 0 001.003-3zm0-1a6.462 6.462 0 00-1.003-3h-2.382c.224.906.363 1.922.396 3h2.99zM5.008 8c.037 1.107.195 2.127.429 3h4.126c.234-.873.392-1.893.429-3H5.008zm0-1h4.984a13.422 13.422 0 00-.429-3H5.437a13.422 13.422 0 00-.429 3zM.016 8H0V7h.016a7.5 7.5 0 0114.968 0H15v1h-.016A7.5 7.5 0 01.016 8zm2.794 4a6.501 6.501 0 002.717 1.695A7.315 7.315 0 014.7 12H2.81zm9.38 0H10.3c-.23.657-.51 1.23-.827 1.695A6.501 6.501 0 0012.19 12zm-6.428 0c.484 1.24 1.132 2 1.738 2 .606 0 1.254-.76 1.738-2H5.762zM2.81 3H4.7c.23-.657.51-1.23.827-1.695A6.501 6.501 0 002.81 3zm9.38 0a6.501 6.501 0 00-2.717-1.695c.317.465.597 1.038.827 1.695h1.89zM5.762 3h3.476C8.754 1.76 8.106 1 7.5 1c-.606 0-1.254.76-1.738 2z"
  }));
};

export var icon = EuiIconGlobe;
EuiIconGlobe.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconGlobe"
};