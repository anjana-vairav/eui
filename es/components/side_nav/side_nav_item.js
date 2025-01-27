function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiIcon } from '../icon';

var defaultRenderItem = function defaultRenderItem(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["href", "onClick", "className", "children"]);

  if (href) {
    return React.createElement("a", _extends({
      className: className,
      href: href,
      onClick: onClick
    }, rest), children);
  }

  if (onClick) {
    return React.createElement("button", _extends({
      type: "button",
      className: className,
      onClick: onClick
    }, rest), children);
  }

  return React.createElement("div", _extends({
    className: className
  }, rest), children);
};

export var EuiSideNavItem = function EuiSideNavItem(_ref2) {
  var isOpen = _ref2.isOpen,
      isSelected = _ref2.isSelected,
      isParent = _ref2.isParent,
      icon = _ref2.icon,
      onClick = _ref2.onClick,
      href = _ref2.href,
      items = _ref2.items,
      children = _ref2.children,
      depth = _ref2.depth,
      _ref2$renderItem = _ref2.renderItem,
      renderItem = _ref2$renderItem === void 0 ? defaultRenderItem : _ref2$renderItem,
      rest = _objectWithoutProperties(_ref2, ["isOpen", "isSelected", "isParent", "icon", "onClick", "href", "items", "children", "depth", "renderItem"]);

  var childItems;

  if (items && isOpen) {
    childItems = React.createElement("div", {
      className: "euiSideNavItem__items"
    }, items);
  }

  var buttonIcon;

  if (icon) {
    buttonIcon = cloneElement(icon, {
      className: 'euiSideNavItemButton__icon'
    });
  }

  var classes = classNames('euiSideNavItem', {
    'euiSideNavItem--root': depth === 0,
    'euiSideNavItem--rootIcon': depth === 0 && icon,
    'euiSideNavItem--trunk': depth === 1,
    'euiSideNavItem--branch': depth > 1,
    'euiSideNavItem--hasChildItems': !!childItems
  });
  var buttonClasses = classNames('euiSideNavItemButton', {
    'euiSideNavItemButton--isClickable': onClick || href,
    'euiSideNavItemButton-isOpen': depth > 0 && isOpen && !isSelected,
    'euiSideNavItemButton-isSelected': isSelected
  });
  var caret;

  if (depth > 0 && isParent && !isOpen && !isSelected) {
    caret = React.createElement(EuiIcon, {
      type: "arrowDown",
      color: "subdued",
      size: "s"
    });
  }

  var buttonContent = React.createElement("span", {
    className: "euiSideNavItemButton__content"
  }, buttonIcon, React.createElement("span", {
    className: "euiSideNavItemButton__label"
  }, children), caret);
  return React.createElement("div", {
    className: classes
  }, renderItem(_objectSpread({
    href: href,
    onClick: onClick,
    className: buttonClasses,
    children: buttonContent
  }, rest)), childItems);
};
EuiSideNavItem.propTypes = {
  isOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  isParent: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  items: PropTypes.node,
  children: PropTypes.node,
  depth: PropTypes.number,
  renderItem: PropTypes.func
};
EuiSideNavItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSideNavItem",
  "props": {
    "renderItem": {
      "defaultValue": {
        "value": "({ href, onClick, className, children, ...rest }) => {\n  if (href) {\n    return (\n      <a className={className} href={href} onClick={onClick} {...rest}>\n        {children}\n      </a>\n    );\n  }\n\n  if (onClick) {\n    return (\n      <button type=\"button\" className={className} onClick={onClick} {...rest}>\n        {children}\n      </button>\n    );\n  }\n\n  return (\n    <div className={className} {...rest}>\n      {children}\n    </div>\n  );\n}",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isOpen": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isParent": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "items": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "depth": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    }
  }
};