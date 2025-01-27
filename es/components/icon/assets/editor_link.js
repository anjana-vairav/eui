function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var EuiIconEditorLink = function EuiIconEditorLink(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("title", null, title), React.createElement("path", {
    d: "M5.393 13.42a1.98 1.98 0 01-1.408-.583l-.403-.402a1.994 1.994 0 010-2.817l2.616-2.615a1.98 1.98 0 011.408-.584c.532 0 1.033.208 1.409.584l.402.402a.284.284 0 11-.402.403l-.403-.403a1.414 1.414 0 00-1.006-.417c-.38 0-.737.149-1.006.417L3.985 10.02a1.424 1.424 0 000 2.012l.402.402c.269.27.626.417 1.006.417s.737-.148 1.006-.417l1.811-1.81a.284.284 0 11.402.402l-1.81 1.81a1.977 1.977 0 01-1.409.584zM8.813 10a1.978 1.978 0 01-1.408-.583.284.284 0 11.403-.403c.268.269.626.417 1.006.417s.737-.148 1.006-.417L12.435 6.4a1.424 1.424 0 000-2.012l-.402-.403a1.425 1.425 0 00-2.012 0l-1.81 1.811a.284.284 0 11-.403-.402l1.81-1.81a1.994 1.994 0 012.817 0l.403.402c.776.776.776 2.04 0 2.816l-2.616 2.616A1.979 1.979 0 018.814 10z"
  }));
};

export var icon = EuiIconEditorLink;
EuiIconEditorLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconEditorLink"
};