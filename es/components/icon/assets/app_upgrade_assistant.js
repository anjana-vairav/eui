function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppUpgradeAssistant = function EuiIconAppUpgradeAssistant(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M16 21a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"
  }), React.createElement("path", {
    d: "M27.42 19.69a12 12 0 01-23.11-1l2.27-.45-4.32-4.47L0 19.55l2.39-.47a14 14 0 0027 1.23l-1.97-.62zm2.23-6.77a14 14 0 00-27-1.23l1.9.62a12 12 0 0123.11 1l-2.27.45 4.32 4.46L32 12.45l-2.35.47z"
  }));
};

export var icon = EuiIconAppUpgradeAssistant;
EuiIconAppUpgradeAssistant.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppUpgradeAssistant"
};