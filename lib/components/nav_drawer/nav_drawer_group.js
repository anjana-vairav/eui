"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNavDrawerGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _list_group = require("../list_group/list_group");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiNavDrawerGroup = function EuiNavDrawerGroup(_ref) {
  var className = _ref.className,
      listItems = _ref.listItems,
      flyoutMenuButtonClick = _ref.flyoutMenuButtonClick,
      rest = _objectWithoutProperties(_ref, ["className", "listItems", "flyoutMenuButtonClick"]);

  var classes = (0, _classnames.default)('euiNavDrawerGroup', className);
  var listItemsExists = listItems && !!listItems.length; // Alter listItems object with prop flyoutMenu and extra props

  var newListItems = !listItemsExists ? undefined : listItems.map(function (item) {
    // If the flyout menu exists, pass back the list of times and the title with the onClick handler of the item
    var flyoutMenu = item.flyoutMenu,
        itemProps = _objectWithoutProperties(item, ["flyoutMenu"]);

    if (flyoutMenu && flyoutMenuButtonClick) {
      var items = _toConsumableArray(flyoutMenu.listItems);

      var title = "".concat(flyoutMenu.title);

      itemProps.onClick = function () {
        return flyoutMenuButtonClick(items, title);
      };
    } // Make some declarations of props for the side nav implementation


    itemProps.className = (0, _classnames.default)('euiNavDrawerGroup__item', item.className);
    itemProps.size = item.size || 's';
    itemProps['aria-label'] = item['aria-label'] || item.label; // Add an avatar in place of non-existent icons

    var itemProvidesIcon = !!item.iconType || !!item.icon;

    if (!itemProvidesIcon) {
      itemProps.icon = _react.default.createElement("span", {
        className: "euiNavDrawerGroup__itemDefaultIcon"
      }, (0, _services.toInitials)(item.label));
    } // And return the item with conditional `onClick` and without `flyoutMenu`


    return _objectSpread({}, itemProps);
  });
  return _react.default.createElement(_list_group.EuiListGroup, _extends({
    className: classes,
    listItems: newListItems
  }, rest));
};

exports.EuiNavDrawerGroup = EuiNavDrawerGroup;
EuiNavDrawerGroup.propTypes = {
  listItems: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread({}, _list_group.EuiListGroup.propTypes.listItems[0], {
    flyoutMenu: _propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      listItems: _list_group.EuiListGroup.propTypes.listItems.isRequired
    })
  }))),

  /**
   * While not normally required, it is required to pass a function for handling
   * of the flyout menu button click
   */
  flyoutMenuButtonClick: _propTypes.default.func
};
EuiNavDrawerGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiNavDrawerGroup",
  "props": {
    "listItems": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "flyoutMenu": {
              "name": "shape",
              "value": {
                "title": {
                  "name": "string",
                  "required": true
                },
                "listItems": {
                  "name": "custom",
                  "raw": "EuiListGroup.propTypes.listItems.isRequired",
                  "required": true
                }
              },
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": ""
    },
    "flyoutMenuButtonClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "While not normally required, it is required to pass a function for handling\nof the flyout menu button click"
    }
  }
};