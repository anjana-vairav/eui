function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { cloneElement } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiScreenReaderOnly = function EuiScreenReaderOnly(_ref) {
  var children = _ref.children;
  var classes = classNames('euiScreenReaderOnly', children.props.className);

  var props = _objectSpread({}, children.props, {
    className: classes
  });

  return cloneElement(children, props);
};
EuiScreenReaderOnly.propTypes = {
  children: PropTypes.element.isRequired
};