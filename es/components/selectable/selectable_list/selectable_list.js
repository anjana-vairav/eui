function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
// eslint-disable-next-line import/named
import { List, AutoSizer } from 'react-virtualized';
import { htmlIdGenerator } from '../../../services';
import { EuiSelectableListItem } from './selectable_list_item'; // @ts-ignore

import { EuiHighlight } from '../../highlight';
export var EuiSelectableList =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSelectableList, _Component);

  function EuiSelectableList(props) {
    var _this;

    _classCallCheck(this, EuiSelectableList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSelectableList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rootId", _this.props.rootId || htmlIdGenerator());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddOrRemoveOption", function (option) {
      if (option.disabled) {
        return;
      }

      var allowExclusions = _this.props.allowExclusions;

      if (option.checked === 'on' && allowExclusions) {
        _this.onExcludeOption(option);
      } else if (option.checked === 'on' || option.checked === 'off') {
        _this.onRemoveOption(option);
      } else {
        _this.onAddOption(option);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddOption", function (addedOption) {
      var _this$props = _this.props,
          onOptionClick = _this$props.onOptionClick,
          options = _this$props.options,
          singleSelection = _this$props.singleSelection;
      var updatedOptions = options.map(function (option) {
        // if singleSelection is enabled, uncheck any selected option(s)
        var updatedOption = _objectSpread({}, option);

        if (singleSelection) {
          delete updatedOption.checked;
        } // if this is the now-selected option, check it


        if (option === addedOption) {
          updatedOption.checked = 'on';
        }

        return updatedOption;
      });
      onOptionClick(updatedOptions);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemoveOption", function (removedOption) {
      var _this$props2 = _this.props,
          onOptionClick = _this$props2.onOptionClick,
          singleSelection = _this$props2.singleSelection,
          options = _this$props2.options;
      var updatedOptions = options.map(function (option) {
        var updatedOption = _objectSpread({}, option);

        if (option === removedOption && singleSelection !== 'always') {
          delete updatedOption.checked;
        }

        return updatedOption;
      });
      onOptionClick(updatedOptions);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExcludeOption", function (excludedOption) {
      var _this$props3 = _this.props,
          onOptionClick = _this$props3.onOptionClick,
          options = _this$props3.options;
      excludedOption.checked = 'off';
      var updatedOptions = options.map(function (option) {
        var updatedOption = _objectSpread({}, option);

        if (option === excludedOption) {
          updatedOption.checked = 'off';
        }

        return updatedOption;
      });
      onOptionClick(updatedOptions);
    });

    return _this;
  }

  _createClass(EuiSelectableList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          options = _this$props4.options,
          searchValue = _this$props4.searchValue,
          onOptionClick = _this$props4.onOptionClick,
          renderOption = _this$props4.renderOption,
          forcedHeight = _this$props4.height,
          virtualizedProps = _this$props4.virtualizedProps,
          rowHeight = _this$props4.rowHeight,
          activeOptionIndex = _this$props4.activeOptionIndex,
          rootId = _this$props4.rootId,
          showIcons = _this$props4.showIcons,
          singleSelection = _this$props4.singleSelection,
          visibleOptions = _this$props4.visibleOptions,
          allowExclusions = _this$props4.allowExclusions,
          bordered = _this$props4.bordered,
          rest = _objectWithoutProperties(_this$props4, ["className", "options", "searchValue", "onOptionClick", "renderOption", "height", "virtualizedProps", "rowHeight", "activeOptionIndex", "rootId", "showIcons", "singleSelection", "visibleOptions", "allowExclusions", "bordered"]);

      var optionArray = visibleOptions || options;
      var heightIsFull = forcedHeight === 'full';
      var calculatedHeight = heightIsFull ? false : forcedHeight; // If calculatedHeight is still undefined, then calculate it

      if (calculatedHeight === undefined) {
        var maxVisibleOptions = 7;
        var numVisibleOptions = optionArray.length;
        var numVisibleMoreThanMax = optionArray.length > maxVisibleOptions;

        if (numVisibleMoreThanMax) {
          // Show only half of the last one to indicate there's more to scroll to
          calculatedHeight = (maxVisibleOptions - 0.5) * rowHeight;
        } else {
          calculatedHeight = numVisibleOptions * rowHeight;
        }
      }

      var classes = classNames('euiSelectableList', {
        'euiSelectableList-fullHeight': heightIsFull,
        'euiSelectableList-bordered': bordered
      }, className);
      return React.createElement("div", _extends({
        className: classes
      }, rest), React.createElement(AutoSizer, {
        disableHeight: !heightIsFull
      }, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return React.createElement(List, _extends({
          id: _this2.rootId('listbox'),
          className: "euiSelectableList__list",
          role: "listbox",
          width: width,
          height: calculatedHeight || height,
          rowCount: optionArray.length,
          rowHeight: rowHeight,
          scrollToIndex: activeOptionIndex
        }, virtualizedProps, {
          rowRenderer: function rowRenderer(_ref2) {
            var rowKey = _ref2.key,
                index = _ref2.index,
                style = _ref2.style;
            var option = optionArray[index];

            var label = option.label,
                isGroupLabel = option.isGroupLabel,
                checked = option.checked,
                disabled = option.disabled,
                prepend = option.prepend,
                append = option.append,
                ref = option.ref,
                key = option.key,
                optionRest = _objectWithoutProperties(option, ["label", "isGroupLabel", "checked", "disabled", "prepend", "append", "ref", "key"]);

            if (isGroupLabel) {
              return React.createElement("div", _extends({
                className: "euiSelectableList__groupLabel",
                key: rowKey,
                style: style
              }, optionRest), prepend, label, append);
            }

            return React.createElement(EuiSelectableListItem, _extends({
              id: _this2.rootId("_option-".concat(index)),
              style: style,
              key: key || option.label.toLowerCase(),
              onClick: function onClick() {
                return _this2.onAddOrRemoveOption(option);
              },
              ref: ref ? ref.bind(null, index) : undefined,
              isFocused: activeOptionIndex === index,
              title: label,
              showIcons: showIcons,
              checked: checked,
              disabled: disabled,
              prepend: prepend,
              append: append
            }, optionRest), renderOption ? renderOption(option, searchValue) : React.createElement(EuiHighlight, {
              search: searchValue
            }, label));
          }
        }));
      }));
    }
  }]);

  return EuiSelectableList;
}(Component);

_defineProperty(EuiSelectableList, "defaultProps", {
  rowHeight: 32,
  searchValue: ''
});

EuiSelectableList.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * The index of the option to be highlighted as pseudo-focused;
       * Good for use when only one selection is allowed and needing to open
       * directly to that option
       */
  activeOptionIndex: PropTypes.number,

  /**
       *  The height of each option in pixels. Defaults to `32`
       */
  rowHeight: PropTypes.number.isRequired,

  /**
       * Show the check/cross selection indicator icons
       */
  showIcons: PropTypes.bool,
  singleSelection: PropTypes.oneOfType([PropTypes.oneOf(["always"]), PropTypes.bool.isRequired]),

  /**
       * Any props to send specifically to the react-virtualized `List`
       */
  virtualizedProps: PropTypes.any,

  /**
       * Adds a border around the list to indicate the bounds;
       * Useful when the list scrolls, otherwise use your own container
       */
  bordered: PropTypes.bool,

  /**
     * All possible options
     */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Visible label of option. Must be unique across items if `key` is not supplied
       */
    label: PropTypes.string.isRequired,

    /**
       * Must be unique across items
       */
    key: PropTypes.string,

    /**
       * Leave off to indicate not selected,
       * 'on' to indicate inclusion and
       * 'off' to indicate exclusion
       */
    checked: PropTypes.oneOf(["on", "off", undefined]),
    disabled: PropTypes.bool,

    /**
       * Set to true to indicate object is just a grouping label, not a selectable item
       */
    isGroupLabel: PropTypes.bool,

    /**
       * Node to add between the selection icon and the label
       */
    prepend: PropTypes.node,

    /**
       * Node to add to the far right of the item
       */
    append: PropTypes.node,
    ref: PropTypes.func,
    className: PropTypes.string,
    "aria-label": PropTypes.string,
    "data-test-subj": PropTypes.string
  }).isRequired).isRequired,

  /**
     * Filtered options list (if applicable)
     */
  visibleOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string,
    checked: PropTypes.oneOf(["on", "off", undefined]),
    disabled: PropTypes.bool,
    isGroupLabel: PropTypes.bool,
    prepend: PropTypes.node,
    append: PropTypes.node,
    ref: PropTypes.func,
    className: PropTypes.string,
    "aria-label": PropTypes.string,
    "data-test-subj": PropTypes.string
  }).isRequired),

  /**
     * Search value to highlight on the option render
     */
  searchValue: PropTypes.string.isRequired,

  /**
     * Returns the array of options with altered checked state
     */
  onOptionClick: PropTypes.func.isRequired,

  /**
     * Custom render for the label portion of the option;
     * Takes (option, searchValue), returns ReactNode
     */
  renderOption: PropTypes.func,

  /**
     * Sets the max height in pixels or pass `full` to allow
     * the whole group to fill the height of its container and
     * allows the list grow as well
     */
  height: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.oneOf(["full"])]),

  /**
     * Allow cycling through the on, off and undefined state of option.checked
     * and not just on and undefined
     */
  allowExclusions: PropTypes.bool,
  rootId: PropTypes.func
};
EuiSelectableList.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onAddOrRemoveOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "option",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onAddOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "addedOption",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onRemoveOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "removedOption",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onExcludeOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "excludedOption",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSelectableList",
  "props": {
    "rowHeight": {
      "defaultValue": {
        "value": "32",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The height of each option in pixels. Defaults to `32`"
    },
    "searchValue": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Search value to highlight on the option render"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "activeOptionIndex": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The index of the option to be highlighted as pseudo-focused;\nGood for use when only one selection is allowed and needing to open\ndirectly to that option"
    },
    "showIcons": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Show the check/cross selection indicator icons"
    },
    "singleSelection": {
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "\"always\"",
            "computed": false
          }]
        }, {
          "name": "bool"
        }]
      },
      "required": false,
      "description": ""
    },
    "virtualizedProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Any props to send specifically to the react-virtualized `List`"
    },
    "bordered": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Adds a border around the list to indicate the bounds;\nUseful when the list scrolls, otherwise use your own container"
    },
    "options": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "label": {
              "name": "string",
              "description": "Visible label of option. Must be unique across items if `key` is not supplied",
              "required": true
            },
            "key": {
              "name": "string",
              "description": "Must be unique across items",
              "required": false
            },
            "checked": {
              "name": "enum",
              "value": [{
                "value": "\"on\"",
                "computed": false
              }, {
                "value": "\"off\"",
                "computed": false
              }, {
                "value": "undefined",
                "computed": true
              }],
              "description": "Leave off to indicate not selected,\n'on' to indicate inclusion and\n'off' to indicate exclusion",
              "required": false
            },
            "disabled": {
              "name": "bool",
              "required": false
            },
            "isGroupLabel": {
              "name": "bool",
              "description": "Set to true to indicate object is just a grouping label, not a selectable item",
              "required": false
            },
            "prepend": {
              "name": "node",
              "description": "Node to add between the selection icon and the label",
              "required": false
            },
            "append": {
              "name": "node",
              "description": "Node to add to the far right of the item",
              "required": false
            },
            "ref": {
              "name": "func",
              "required": false
            },
            "className": {
              "name": "string",
              "required": false
            },
            "aria-label": {
              "name": "string",
              "required": false
            },
            "data-test-subj": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": "All possible options"
    },
    "visibleOptions": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "label": {
              "name": "string",
              "required": true
            },
            "key": {
              "name": "string",
              "required": false
            },
            "checked": {
              "name": "enum",
              "value": [{
                "value": "\"on\"",
                "computed": false
              }, {
                "value": "\"off\"",
                "computed": false
              }, {
                "value": "undefined",
                "computed": true
              }],
              "required": false
            },
            "disabled": {
              "name": "bool",
              "required": false
            },
            "isGroupLabel": {
              "name": "bool",
              "required": false
            },
            "prepend": {
              "name": "node",
              "required": false
            },
            "append": {
              "name": "node",
              "required": false
            },
            "ref": {
              "name": "func",
              "required": false
            },
            "className": {
              "name": "string",
              "required": false
            },
            "aria-label": {
              "name": "string",
              "required": false
            },
            "data-test-subj": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": "Filtered options list (if applicable)"
    },
    "onOptionClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": "Returns the array of options with altered checked state"
    },
    "renderOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Custom render for the label portion of the option;\nTakes (option, searchValue), returns ReactNode"
    },
    "height": {
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "enum",
          "value": [{
            "value": "\"full\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Sets the max height in pixels or pass `full` to allow\nthe whole group to fill the height of its container and\nallows the list grow as well"
    },
    "allowExclusions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allow cycling through the on, off and undefined state of option.checked\nand not just on and undefined"
    },
    "rootId": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};