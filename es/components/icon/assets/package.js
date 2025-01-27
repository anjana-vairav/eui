function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconPackage = function EuiIconPackage(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M14.447 3.724l-6-3a1 1 0 00-.894 0l-6 3A1 1 0 001 4.618v6.764a1 1 0 00.553.894l6 3a1 1 0 00.894 0l6-3a1 1 0 00.553-.894V4.618a1 1 0 00-.553-.894zM5.871 5.897l5.343-2.672 2.158 1.079L8 6.943zM8 1.618l2.096 1.048-5.353 2.677-2.115-1.039zM2 5.11l2.25 1.105V9a.5.5 0 001 0V6.706L7.5 7.811v6.321L2 11.382zm6.5 9.022v-6.32L14 5.11v6.272z"
  }));
};

export var icon = EuiIconPackage;
EuiIconPackage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconPackage"
};