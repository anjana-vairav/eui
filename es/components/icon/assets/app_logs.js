function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconAppLogs = function EuiIconAppLogs(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M1 8c3.983 0 7.732 1.013 11.001 2.797v2.312A20.887 20.887 0 002 10.023v11.025c4.85.462 9.27 4.183 9.955 8.691l.035.261H12v2h-1.938l-.018-1.236c-.116-4.015-4.336-7.631-8.793-7.76L0 22.986V8h1zm13-8h1c9.28 0 16.825 7.437 16.997 16.677L32 17v15h-2V17c0-7.84-6.014-14.274-13.68-14.943L16 2.033v7.681l-2-1.143V0h1-1z"
  }), React.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M26.997 30.636L27.009 32H14V11.305l1.483.82c6.994 3.861 11.382 10.735 11.514 18.51zm-2.048-1.04C24.505 23.556 21.205 18.2 16 14.771V30h8.974l-.025-.404z"
  }));
};

export var icon = EuiIconAppLogs;
EuiIconAppLogs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAppLogs"
};