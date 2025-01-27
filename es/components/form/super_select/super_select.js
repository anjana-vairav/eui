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
import { EuiScreenReaderOnly } from '../../accessibility';
import { EuiSuperSelectControl } from './super_select_control';
import { EuiPopover } from '../../popover';
import { EuiContextMenuItem } from '../../context_menu';
import { keyCodes } from '../../../services';
import { EuiI18n } from '../../i18n';
var SHIFT_BACK = 'back';
var SHIFT_FORWARD = 'forward';
export var EuiSuperSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSuperSelect, _Component);

  function EuiSuperSelect(props) {
    var _this;

    _classCallCheck(this, EuiSuperSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSuperSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setItemNode", function (node, index) {
      _this.itemNodes[index] = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopoverRef", function (ref) {
      _this.popoverRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openPopover", function () {
      _this.setState({
        isPopoverOpen: true
      });

      var focusSelected = function focusSelected() {
        var indexOfSelected = _this.props.options.reduce(function (indexOfSelected, option, index) {
          if (indexOfSelected != null) return indexOfSelected;
          if (option == null) return null;
          return option.value === _this.props.valueOfSelected ? index : null;
        }, null);

        requestAnimationFrame(function () {
          if (!_this._isMounted) {
            return;
          }

          _this.setState({
            menuWidth: _this.popoverRef.getBoundingClientRect().width - 2 // account for border not inner shadow

          });

          if (_this.props.valueOfSelected != null) {
            if (indexOfSelected != null) {
              _this.focusItemAt(indexOfSelected);
            } else {
              focusSelected();
            }
          }
        });
      };

      requestAnimationFrame(focusSelected);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "itemClicked", function (value) {
      _this.setState({
        isPopoverOpen: false
      });

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectKeyDown", function (e) {
      if (e.keyCode === keyCodes.UP || e.keyCode === keyCodes.DOWN) {
        e.preventDefault();
        e.stopPropagation();

        _this.openPopover();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onItemKeyDown", function (e) {
      switch (e.keyCode) {
        case keyCodes.ESCAPE:
          // close the popover and prevent ancestors from handling
          e.preventDefault();
          e.stopPropagation();

          _this.closePopover();

          break;

        case keyCodes.TAB:
          // no-op
          e.preventDefault();
          e.stopPropagation();
          break;

        case keyCodes.UP:
          e.preventDefault();
          e.stopPropagation();

          _this.shiftFocus(SHIFT_BACK);

          break;

        case keyCodes.DOWN:
          e.preventDefault();
          e.stopPropagation();

          _this.shiftFocus(SHIFT_FORWARD);

          break;
      }
    });

    _this.itemNodes = [];
    _this.state = {
      isPopoverOpen: props.isOpen || false,
      menuWidth: null
    };
    return _this;
  }

  _createClass(EuiSuperSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "focusItemAt",
    value: function focusItemAt(index) {
      var targetElement = this.itemNodes[index];

      if (targetElement != null) {
        targetElement.focus();
      }
    }
  }, {
    key: "shiftFocus",
    value: function shiftFocus(direction) {
      var currentIndex = this.itemNodes.indexOf(document.activeElement);
      var targetElementIndex;

      if (currentIndex === -1) {
        // somehow the select options has lost focus
        targetElementIndex = 0;
      } else {
        if (direction === SHIFT_BACK) {
          targetElementIndex = currentIndex === 0 ? this.itemNodes.length - 1 : currentIndex - 1;
        } else {
          targetElementIndex = currentIndex === this.itemNodes.length - 1 ? 0 : currentIndex + 1;
        }
      }

      this.focusItemAt(targetElementIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          options = _this$props.options,
          valueOfSelected = _this$props.valueOfSelected,
          onChange = _this$props.onChange,
          isOpen = _this$props.isOpen,
          isInvalid = _this$props.isInvalid,
          hasDividers = _this$props.hasDividers,
          itemClassName = _this$props.itemClassName,
          itemLayoutAlign = _this$props.itemLayoutAlign,
          fullWidth = _this$props.fullWidth,
          popoverClassName = _this$props.popoverClassName,
          compressed = _this$props.compressed,
          rest = _objectWithoutProperties(_this$props, ["className", "options", "valueOfSelected", "onChange", "isOpen", "isInvalid", "hasDividers", "itemClassName", "itemLayoutAlign", "fullWidth", "popoverClassName", "compressed"]);

      var popoverClasses = classNames('euiSuperSelect', {
        'euiSuperSelect--fullWidth': fullWidth
      }, popoverClassName);
      var popoverPanelClasses = classNames('euiSuperSelect__popoverPanel', _defineProperty({}, "".concat(popoverClassName, "__popoverPanel"), !!popoverClassName));
      var buttonClasses = classNames({
        'euiSuperSelect--isOpen__button': this.state.isPopoverOpen
      }, className);
      var itemClasses = classNames('euiSuperSelect__item', {
        'euiSuperSelect__item--hasDividers': hasDividers
      }, itemClassName);
      var button = React.createElement(EuiSuperSelectControl, _extends({
        options: options,
        value: valueOfSelected,
        onClick: this.state.isPopoverOpen ? this.closePopover : this.openPopover,
        onKeyDown: this.onSelectKeyDown,
        className: buttonClasses,
        fullWidth: fullWidth,
        isInvalid: isInvalid,
        compressed: compressed
      }, rest));
      var items = options.map(function (option, index) {
        var value = option.value,
            dropdownDisplay = option.dropdownDisplay,
            inputDisplay = option.inputDisplay,
            optionRest = _objectWithoutProperties(option, ["value", "dropdownDisplay", "inputDisplay"]);

        return React.createElement(EuiContextMenuItem, _extends({
          key: index,
          className: itemClasses,
          icon: valueOfSelected === value ? 'check' : 'empty',
          onClick: function onClick() {
            return _this2.itemClicked(value);
          },
          onKeyDown: _this2.onItemKeyDown,
          layoutAlign: itemLayoutAlign,
          buttonRef: function buttonRef(node) {
            return _this2.setItemNode(node, index);
          },
          role: "option",
          id: value,
          "aria-selected": valueOfSelected === value
        }, optionRest), dropdownDisplay || inputDisplay);
      });
      return React.createElement(EuiPopover, {
        className: popoverClasses,
        display: "block",
        panelClassName: popoverPanelClasses,
        button: button,
        isOpen: isOpen || this.state.isPopoverOpen,
        closePopover: this.closePopover,
        panelPaddingSize: "none",
        anchorPosition: "downCenter",
        ownFocus: false,
        popoverRef: this.setPopoverRef,
        hasArrow: false
      }, React.createElement(EuiScreenReaderOnly, null, React.createElement("p", {
        role: "alert"
      }, React.createElement(EuiI18n, {
        token: "euiSuperSelect.screenReaderAnnouncement",
        default: "You are in a form selector of {optionsCount} items and must select a single option. Use the up and down keys to navigate or escape to close.",
        values: {
          optionsCount: options.length
        }
      }))), React.createElement("div", {
        className: "euiSuperSelect__listbox",
        role: "listbox",
        "aria-activedescendant": valueOfSelected,
        style: {
          width: this.state.menuWidth
        },
        tabIndex: "0"
      }, items));
    }
  }]);

  return EuiSuperSelect;
}(Component);
EuiSuperSelect.propTypes = {
  /**
   * Classes (and `...rest`) will be applied to the control
   */
  className: PropTypes.string,

  /**
   * Classes for the context menu item
   */
  itemClassName: PropTypes.string,

  /**
   * You must pass an `onChange` function to handle the update of the value
   */
  onChange: PropTypes.func,

  /**
   * Pass an array of options that must at least include:
   * `value`: storing unique value of item,
   * `inputDisplay`: what shows inside the form input when selected
   * `dropdownDisplay` (optional): what shows for the item in the dropdown
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    inputDisplay: PropTypes.node,
    dropdownDisplay: PropTypes.node
  })).isRequired,
  valueOfSelected: PropTypes.string,

  /**
   * Change to `true` if you want horizontal lines between options.
   * This is best used when options are multi-line.
   */
  hasDividers: PropTypes.bool,

  /**
   * Change `EuiContextMenuItem` layout position of icon
   */
  itemLayoutAlign: PropTypes.string,

  /**
   * Make it wide
   */
  fullWidth: PropTypes.bool,

  /**
   * Provides invalid styling
   */
  isInvalid: PropTypes.bool,

  /**
   * Provides loading indictor
   */
  isLoading: PropTypes.bool,

  /**
   * Make it short
   */
  compressed: PropTypes.bool,

  /**
   * Applied to the outermost wrapper (popover)
   */
  popoverClassName: PropTypes.string
};
EuiSuperSelect.defaultProps = {
  hasDividers: false,
  fullWidth: false,
  compressed: false,
  isInvalid: false
};
EuiSuperSelect.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setItemNode",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }, {
      "name": "index",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setPopoverRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }, {
    "name": "openPopover",
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
  }, {
    "name": "itemClicked",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onSelectKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onItemKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "focusItemAt",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "index",
      "type": null
    }],
    "returns": null
  }, {
    "name": "shiftFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "direction",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSuperSelect",
  "props": {
    "hasDividers": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Change to `true` if you want horizontal lines between options.\nThis is best used when options are multi-line."
    },
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Make it wide"
    },
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Make it short"
    },
    "isInvalid": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Provides invalid styling"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Classes (and `...rest`) will be applied to the control"
    },
    "itemClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Classes for the context menu item"
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "You must pass an `onChange` function to handle the update of the value"
    },
    "options": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "value": {
              "name": "string",
              "required": true
            },
            "inputDisplay": {
              "name": "node",
              "required": false
            },
            "dropdownDisplay": {
              "name": "node",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": "Pass an array of options that must at least include:\n`value`: storing unique value of item,\n`inputDisplay`: what shows inside the form input when selected\n`dropdownDisplay` (optional): what shows for the item in the dropdown"
    },
    "valueOfSelected": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "itemLayoutAlign": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Change `EuiContextMenuItem` layout position of icon"
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Provides loading indictor"
    },
    "popoverClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Applied to the outermost wrapper (popover)"
    }
  }
};