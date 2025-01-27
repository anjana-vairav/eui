function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiIcon } from '../icon';
import { EuiSideNavItem } from './side_nav_item';
export var EuiSideNav =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSideNav, _Component);

  function EuiSideNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiSideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiSideNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isItemOpen", function (item) {
      // The developer can force the item to be open.
      if (item.forceOpen) {
        return true;
      } // Of course a selected item is open.


      if (item.isSelected) {
        return true;
      } // The item has to be open if it has a child that's open.


      if (item.items) {
        return item.items.some(_this.isItemOpen);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTree", function (items) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var renderItem = _this.props.renderItem;
      return items.map(function (item) {
        var id = item.id,
            name = item.name,
            isSelected = item.isSelected,
            childItems = item.items,
            icon = item.icon,
            onClick = item.onClick,
            href = item.href,
            forceOpen = item.forceOpen,
            rest = _objectWithoutProperties(item, ["id", "name", "isSelected", "items", "icon", "onClick", "href", "forceOpen"]); // Root items are always open.


        var isOpen = depth === 0 ? true : _this.isItemOpen(item);
        var renderedItems;

        if (childItems) {
          renderedItems = _this.renderTree(childItems, depth + 1);
        }

        return React.createElement(EuiSideNavItem, _extends({
          isOpen: isOpen,
          isSelected: isSelected,
          isParent: !!childItems,
          icon: icon,
          onClick: onClick,
          href: href,
          items: renderedItems,
          key: id,
          depth: depth,
          renderItem: renderItem
        }, rest), name);
      });
    });

    return _this;
  }

  _createClass(EuiSideNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items,
          toggleOpenOnMobile = _this$props.toggleOpenOnMobile,
          isOpenOnMobile = _this$props.isOpenOnMobile,
          mobileTitle = _this$props.mobileTitle,
          renderItem = _this$props.renderItem,
          rest = _objectWithoutProperties(_this$props, ["className", "items", "toggleOpenOnMobile", "isOpenOnMobile", "mobileTitle", "renderItem"]);

      var classes = classNames('euiSideNav', className, {
        'euiSideNav-isOpenMobile': isOpenOnMobile
      });
      var nav = this.renderTree(items);
      return React.createElement("nav", _extends({
        className: classes
      }, rest), React.createElement("button", {
        type: "button",
        className: "euiSideNav__mobileToggle euiLink",
        onClick: toggleOpenOnMobile
      }, React.createElement("span", {
        className: "euiSideNav__mobileWrap"
      }, React.createElement("span", {
        className: "euiSideNav__mobileTitle"
      }, mobileTitle), React.createElement(EuiIcon, {
        className: "euiSideNav__mobileIcon",
        type: "apps",
        size: "m",
        "aria-hidden": "true"
      }))), React.createElement("div", {
        className: "euiSideNav__content"
      }, nav));
    }
  }]);

  return EuiSideNav;
}(Component);
EuiSideNav.propTypes = {
  /**
   * `children` are not rendered. Use `items` to specify navigation items instead.
   */
  children: PropTypes.node,

  /**
   * Class names to be merged into the final `className` property.
   */
  className: PropTypes.string,

  /**
   * When called, toggles visibility of the navigation menu at mobile responsive widths. The callback should set the `isOpenOnMobile` prop to actually toggle navigation visibility.
   */
  toggleOpenOnMobile: PropTypes.func,

  /**
   * If `true`, the navigation menu will be open at mobile device widths. Use in conjunction with the `toggleOpenOnMobile` prop.
   */
  isOpenOnMobile: PropTypes.bool,

  /**
   * A React node to render at mobile responsive widths, representing the title of this navigation menu.
   */
  mobileTitle: PropTypes.node,

  /**
   * `items` is an array of objects (navigation menu `item`s).
   * Each `item` may contain the following properties (this is an incomplete list):
   * `item.id` is a required value that is passed to React as the `key` for this item
   * `item.forceOpen` is an optional boolean; if set to true it will force the item to display in an "open" state at all times.
   * `item.href` is an optional string to be passed as the navigation item's `href` prop, and by default it will force rendering of the item as an `<a>`.
   * `item.icon` is an optional React node which will be rendered as a small icon to the left of the navigation item text.
   * `item.isSelected` is an optional boolean; if set to true it will render the item in a visible "selected" state, and will force all ancestor navigation items to render in an "open" state.
   * `item.items` is an optional array containing additional item objects, representing nested children of this navigation item.
   * `item.name` is a required React node representing the text to render for this item (usually a string will suffice).
   * `item.onClick` is an optional callback function to be passed as the navigation item's `onClick` prop, and by default it will force rendering of the item as a `<button>` instead of a link.
   * `item.renderItem` is an optional function overriding default rendering for this navigation item — when called, it should return a React node representing a replacement navigation item.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired
  }).isRequired),

  /**
   * Overrides default navigation menu item rendering. When called, it should return a React node representing a replacement navigation item.
   */
  renderItem: PropTypes.func
};
EuiSideNav.defaultProps = {
  items: []
};
EuiSideNav.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "isItemOpen",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTree",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "items",
      "type": null
    }, {
      "name": "depth",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSideNav",
  "props": {
    "items": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "number"
              }],
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": "`items` is an array of objects (navigation menu `item`s).\nEach `item` may contain the following properties (this is an incomplete list):\n`item.id` is a required value that is passed to React as the `key` for this item\n`item.forceOpen` is an optional boolean; if set to true it will force the item to display in an \"open\" state at all times.\n`item.href` is an optional string to be passed as the navigation item's `href` prop, and by default it will force rendering of the item as an `<a>`.\n`item.icon` is an optional React node which will be rendered as a small icon to the left of the navigation item text.\n`item.isSelected` is an optional boolean; if set to true it will render the item in a visible \"selected\" state, and will force all ancestor navigation items to render in an \"open\" state.\n`item.items` is an optional array containing additional item objects, representing nested children of this navigation item.\n`item.name` is a required React node representing the text to render for this item (usually a string will suffice).\n`item.onClick` is an optional callback function to be passed as the navigation item's `onClick` prop, and by default it will force rendering of the item as a `<button>` instead of a link.\n`item.renderItem` is an optional function overriding default rendering for this navigation item \u2014 when called, it should return a React node representing a replacement navigation item."
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "`children` are not rendered. Use `items` to specify navigation items instead."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Class names to be merged into the final `className` property."
    },
    "toggleOpenOnMobile": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "When called, toggles visibility of the navigation menu at mobile responsive widths. The callback should set the `isOpenOnMobile` prop to actually toggle navigation visibility."
    },
    "isOpenOnMobile": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "If `true`, the navigation menu will be open at mobile device widths. Use in conjunction with the `toggleOpenOnMobile` prop."
    },
    "mobileTitle": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "A React node to render at mobile responsive widths, representing the title of this navigation menu."
    },
    "renderItem": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Overrides default navigation menu item rendering. When called, it should return a React node representing a replacement navigation item."
    }
  }
};