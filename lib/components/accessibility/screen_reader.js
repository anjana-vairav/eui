"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiScreenReaderOnly = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiScreenReaderOnly = function EuiScreenReaderOnly(_ref) {
  var children = _ref.children;
  var classes = (0, _classnames.default)('euiScreenReaderOnly', children.props.className);

  var props = _objectSpread({}, children.props, {
    className: classes
  });

  return (0, _react.cloneElement)(children, props);
};

exports.EuiScreenReaderOnly = EuiScreenReaderOnly;
EuiScreenReaderOnly.propTypes = {
  children: _propTypes.default.element.isRequired
};