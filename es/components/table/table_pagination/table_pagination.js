function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import { EuiButtonEmpty } from '../../button';
import { EuiContextMenuItem, EuiContextMenuPanel } from '../../context_menu';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { EuiPagination } from '../../pagination';
import { EuiPopover } from '../../popover';
import { EuiI18n } from '../../i18n';
export var EuiTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiTablePagination, _Component);

  function EuiTablePagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiTablePagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiTablePagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(EuiTablePagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activePage = _this$props.activePage,
          _this$props$itemsPerP = _this$props.itemsPerPage,
          itemsPerPage = _this$props$itemsPerP === void 0 ? 50 : _this$props$itemsPerP,
          _this$props$itemsPerP2 = _this$props.itemsPerPageOptions,
          itemsPerPageOptions = _this$props$itemsPerP2 === void 0 ? [10, 20, 50, 100] : _this$props$itemsPerP2,
          _this$props$hidePerPa = _this$props.hidePerPageOptions,
          hidePerPageOptions = _this$props$hidePerPa === void 0 ? false : _this$props$hidePerPa,
          _this$props$onChangeI = _this$props.onChangeItemsPerPage,
          onChangeItemsPerPage = _this$props$onChangeI === void 0 ? function () {} : _this$props$onChangeI,
          onChangePage = _this$props.onChangePage,
          pageCount = _this$props.pageCount;
      var button = React.createElement(EuiButtonEmpty, {
        size: "xs",
        color: "text",
        iconType: "arrowDown",
        iconSide: "right",
        "data-test-subj": "tablePaginationPopoverButton",
        onClick: this.onButtonClick
      }, React.createElement(EuiI18n, {
        token: "euiTablePagination.rowsPerPage",
        default: "Rows per page"
      }), ": ", itemsPerPage);
      var items = itemsPerPageOptions.map(function (itemsPerPageOption) {
        return React.createElement(EuiContextMenuItem, {
          key: itemsPerPageOption,
          icon: itemsPerPageOption === itemsPerPage ? 'check' : 'empty',
          onClick: function onClick() {
            _this2.closePopover();

            onChangeItemsPerPage(itemsPerPageOption);
          }
        }, React.createElement(EuiI18n, {
          token: "euiTablePagination.rowsPerPageOption",
          values: {
            rowsPerPage: itemsPerPageOption
          },
          default: "{rowsPerPage} rows"
        }));
      });
      var itemsPerPagePopover = React.createElement(EuiPopover, {
        button: button,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        panelPaddingSize: "none",
        withTitle: true,
        anchorPosition: "upRight"
      }, React.createElement(EuiContextMenuPanel, {
        items: items
      }));
      return React.createElement(EuiFlexGroup, {
        justifyContent: "spaceBetween",
        alignItems: "center",
        responsive: false
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, hidePerPageOptions ? null : itemsPerPagePopover), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiPagination, {
        pageCount: pageCount,
        activePage: activePage,
        onPageClick: onChangePage
      })));
    }
  }]);

  return EuiTablePagination;
}(Component);
EuiTablePagination.propTypes = {
  activePage: PropTypes.number,
  hidePerPageOptions: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number.isRequired),
  onChangeItemsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  pageCount: PropTypes.number
};
EuiTablePagination.__docgenInfo = {
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
  "displayName": "EuiTablePagination",
  "props": {
    "activePage": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "hidePerPageOptions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "itemsPerPage": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "itemsPerPageOptions": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false,
      "description": ""
    },
    "onChangeItemsPerPage": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onChangePage": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "pageCount": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    }
  }
};