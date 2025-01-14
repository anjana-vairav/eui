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

var EuiIconBell = function EuiIconBell(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M2.316 12h10.368c-.188-.704-.28-1.691-.348-3.037-.07-1.382-.103-1.888-.19-2.612-.028-.236-.06-.462-.096-.68-.31-1.892-1.506-2.923-3.708-3.131a1 1 0 10-1.684 0c-2.202.208-3.397 1.24-3.708 3.13a16.01 16.01 0 00-.096.68c-.087.725-.12 1.23-.19 2.613-.068 1.346-.16 2.333-.348 3.037zm10.843 1H1.84c-.308.353-.737.5-1.341.5a.5.5 0 110-1c.786 0 1.024-.783 1.166-3.587.07-1.407.105-1.926.196-2.681.03-.25.063-.49.102-.724.334-2.041 1.546-3.313 3.556-3.792a2 2 0 013.96 0c2.01.479 3.222 1.75 3.557 3.792a17 17 0 01.102.724c.09.755.125 1.274.196 2.681.14 2.804.379 3.587 1.165 3.587a.5.5 0 110 1c-.604 0-1.033-.147-1.341-.5zM5.5 14h4a2 2 0 11-4 0z"
  }));
};

var icon = EuiIconBell;
exports.icon = icon;
EuiIconBell.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconBell"
};