"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiIconTokenAnnotation = function EuiIconTokenAnnotation(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8.15 3.392c2.797 0 4.524 1.644 4.517 4.289.007 1.816-.708 2.893-2.21 3.004-.908.076-1.081-.287-1.157-.725h-.041c-.163.42-.964.732-1.744.683-1.053-.065-2.082-.842-2.09-2.572.008-1.72 1.071-2.441 1.959-2.586.804-.135 1.598.158 1.723.462h.051v-.386h1.195v3.452c.007.3.128.425.304.425.4 0 .677-.583.673-1.861.004-2.376-1.705-2.914-3.187-2.914-2.34 0-3.415 1.522-3.422 3.387.007 2.127 1.22 3.277 3.433 3.277.808 0 1.598-.176 2.006-.349l.393 1.122c-.435.27-1.419.508-2.493.508-2.98 0-4.723-1.66-4.727-4.496.004-2.804 1.748-4.72 4.817-4.72zM7.964 6.79c-.76 0-1.185.459-1.188 1.24.003.683.3 1.332 1.202 1.332.821 0 1.094-.473 1.077-1.343-.004-.718-.204-1.23-1.091-1.23z"
  }));
};

var icon = EuiIconTokenAnnotation;
exports.icon = icon;
EuiIconTokenAnnotation.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenAnnotation"
};