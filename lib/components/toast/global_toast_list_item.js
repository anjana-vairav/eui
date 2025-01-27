"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiGlobalToastListItem = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiGlobalToastListItem = function EuiGlobalToastListItem(_ref) {
  var children = _ref.children,
      isDismissed = _ref.isDismissed;

  if (!children) {
    return null;
  }

  var classes = (0, _classnames.default)('euiGlobalToastListItem', children.props.className, {
    'euiGlobalToastListItem-isDismissed': isDismissed
  });
  return (0, _react.cloneElement)(children, _objectSpread({}, children.props, {
    className: classes
  }));
};

exports.EuiGlobalToastListItem = EuiGlobalToastListItem;
EuiGlobalToastListItem.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  isDismissed: _propTypes.default.bool,
  children: _propTypes.default.element
};