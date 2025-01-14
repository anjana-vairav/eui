function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { cloneElement } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiGlobalToastListItem = function EuiGlobalToastListItem(_ref) {
  var children = _ref.children,
      isDismissed = _ref.isDismissed;

  if (!children) {
    return null;
  }

  var classes = classNames('euiGlobalToastListItem', children.props.className, {
    'euiGlobalToastListItem-isDismissed': isDismissed
  });
  return cloneElement(children, _objectSpread({}, children.props, {
    className: classes
  }));
};
EuiGlobalToastListItem.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  isDismissed: PropTypes.bool,
  children: PropTypes.element
};