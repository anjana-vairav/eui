function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconTokenOperator = function EuiIconTokenOperator(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.667 8.002c0-1.5.394-2.743 1.248-3.822h1.437c-.652.8-1.14 2.388-1.14 3.822 0 1.43.488 3.018 1.14 3.818H3.915c-.854-1.08-1.248-2.322-1.248-3.818zM6.77 9.998l-.818-.803 1.23-1.197-1.23-1.203.83-.793 1.221 1.193L9.23 6.002l.818.793-1.227 1.2 1.227 1.2-.818.803L8 8.795 6.77 9.998zm6.563-2c0 1.5-.394 2.743-1.248 3.822h-1.437c.652-.8 1.14-2.388 1.14-3.822 0-1.43-.488-3.018-1.14-3.818h1.437c.854 1.08 1.248 2.322 1.248 3.818z"
  }));
};

export var icon = EuiIconTokenOperator;
EuiIconTokenOperator.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenOperator"
};