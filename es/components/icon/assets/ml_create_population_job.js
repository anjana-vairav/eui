function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconMlCreatePopulationJob = function EuiIconMlCreatePopulationJob(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M16 21.706c-5.718 0-10.353-4.635-10.353-10.353S10.282 1 16 1s10.353 4.635 10.353 10.353S21.718 21.706 16 21.706zm0-18.824a8.47 8.47 0 100 16.942 8.47 8.47 0 000-16.942z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M20.706 10.412h-3.765V6.647h-1.882v3.765h-3.765v1.882h3.765v3.765h1.882v-3.765h3.765zM10.136 22.308l-1.449-1.204-2.381 2.823a3.765 3.765 0 00-1.6-.339 3.765 3.765 0 103.05 1.572l2.38-2.852zm-5.43 6.927a1.882 1.882 0 110-3.764 1.882 1.882 0 010 3.764zm22.588-5.647c-.554.003-1.1.129-1.6.367l-2.381-2.823-1.45 1.204 2.382 2.824a3.765 3.765 0 103.05-1.572zm0 5.647a1.882 1.882 0 110-3.764 1.882 1.882 0 010 3.764z"
  }));
};

export var icon = EuiIconMlCreatePopulationJob;
EuiIconMlCreatePopulationJob.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconMlCreatePopulationJob"
};