function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconFaceSad = function EuiIconFaceSad(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M8 16A8 8 0 118 0a8 8 0 010 16zm0-1.067A6.933 6.933 0 108 1.067a6.933 6.933 0 000 13.866zM5.333 6.4a1.067 1.067 0 110-2.133 1.067 1.067 0 010 2.133zm5.334 0a1.067 1.067 0 110-2.133 1.067 1.067 0 010 2.133zm2.487 3.868a.533.533 0 11-.708.797C10.936 9.725 9.458 9.067 8 9.067c-1.458 0-2.937.657-4.446 1.998a.533.533 0 11-.708-.797C4.536 8.765 6.258 8 8 8s3.463.765 5.154 2.268z"
  }));
};

export var icon = EuiIconFaceSad;
EuiIconFaceSad.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconFaceSad"
};