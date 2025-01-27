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
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiButtonEmpty } from '../../button/button_empty';
import { EuiPopover } from '../../popover';
import { EuiContextMenuPanel } from '../../context_menu';
import { EuiI18n } from '../../i18n';
import { EuiTableSortMobileItem } from './table_sort_mobile_item';
export var EuiTableSortMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiTableSortMobile, _Component);

  function EuiTableSortMobile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiTableSortMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiTableSortMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isPopoverOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onButtonClick", function () {
      _this.setState({
        isPopoverOpen: !_this.state.isPopoverOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });
    });

    return _this;
  }

  _createClass(EuiTableSortMobile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          anchorPosition = _this$props.anchorPosition,
          items = _this$props.items,
          rest = _objectWithoutProperties(_this$props, ["className", "anchorPosition", "items"]);

      var classes = classNames('euiTableSortMobile', className);
      var mobileSortButton = React.createElement(EuiButtonEmpty, {
        iconType: "arrowDown",
        iconSide: "right",
        onClick: this.onButtonClick.bind(this),
        flush: "right",
        size: "xs"
      }, React.createElement(EuiI18n, {
        token: "euiTableSortMobile.sorting",
        default: "Sorting"
      }));
      var mobileSortPopover = React.createElement(EuiPopover, _extends({
        id: "sortPopover",
        ownFocus: true,
        button: mobileSortButton,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        anchorPosition: anchorPosition || 'downRight',
        panelPaddingSize: "none"
      }, rest), React.createElement(EuiContextMenuPanel, {
        style: {
          minWidth: 200
        },
        items: items && items.length ? items.map(function (item) {
          return React.createElement(EuiTableSortMobileItem, {
            key: item.key,
            onSort: item.onSort,
            isSorted: item.isSorted,
            isSortAscending: item.isSortAscending
          }, item.name);
        }) : undefined,
        watchedItemProps: ['isSorted', 'isSortAscending']
      }));
      return React.createElement("div", {
        className: classes
      }, mobileSortPopover);
    }
  }]);

  return EuiTableSortMobile;
}(Component);
EuiTableSortMobile.propTypes = {
  className: PropTypes.string,
  anchorPosition: PropTypes.oneOf(["upCenter", "upLeft", "upRight", "downCenter", "downLeft", "downRight", "leftCenter", "leftUp", "leftDown", "rightCenter", "rightUp", "rightDown"]),
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.node.isRequired,
    key: PropTypes.any,
    onSort: PropTypes.func,
    isSorted: PropTypes.bool,
    isSortAscending: PropTypes.bool
  }).isRequired)
};
EuiTableSortMobile.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onButtonClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiTableSortMobile",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "anchorPosition": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"upCenter\"",
          "computed": false
        }, {
          "value": "\"upLeft\"",
          "computed": false
        }, {
          "value": "\"upRight\"",
          "computed": false
        }, {
          "value": "\"downCenter\"",
          "computed": false
        }, {
          "value": "\"downLeft\"",
          "computed": false
        }, {
          "value": "\"downRight\"",
          "computed": false
        }, {
          "value": "\"leftCenter\"",
          "computed": false
        }, {
          "value": "\"leftUp\"",
          "computed": false
        }, {
          "value": "\"leftDown\"",
          "computed": false
        }, {
          "value": "\"rightCenter\"",
          "computed": false
        }, {
          "value": "\"rightUp\"",
          "computed": false
        }, {
          "value": "\"rightDown\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "items": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "name": {
              "name": "node",
              "required": true
            },
            "key": {
              "name": "any",
              "required": false
            },
            "onSort": {
              "name": "func",
              "required": false
            },
            "isSorted": {
              "name": "bool",
              "required": false
            },
            "isSortAscending": {
              "name": "bool",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};