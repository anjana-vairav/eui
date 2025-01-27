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

import React, { Component, createRef, Fragment } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiSelectableSearch } from './selectable_search';
import { EuiSelectableMessage } from './selectable_message';
import { EuiSelectableList } from './selectable_list';
import { EuiLoadingChart } from '../loading';
import { getMatchingOptions } from './matching_options';
import { comboBoxKeyCodes } from '../../services';
import { TAB } from '../../services/key_codes';
import { EuiI18n } from '../i18n';
export var EuiSelectable =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSelectable, _Component);

  function EuiSelectable(props) {
    var _this;

    _classCallCheck(this, EuiSelectable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSelectable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsListRef", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasActiveOption", function () {
      return _this.state.activeOptionIndex != null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      var optionsList = _this.optionsListRef.current;

      switch (e.keyCode) {
        case comboBoxKeyCodes.UP:
          e.preventDefault();
          e.stopPropagation();

          _this.incrementActiveOptionIndex(-1);

          break;

        case comboBoxKeyCodes.DOWN:
          e.preventDefault();
          e.stopPropagation();

          _this.incrementActiveOptionIndex(1);

          break;

        case comboBoxKeyCodes.ENTER:
          e.stopPropagation();

          if (_this.state.activeOptionIndex != null && optionsList) {
            optionsList.onAddOrRemoveOption(_this.state.visibleOptions[_this.state.activeOptionIndex]);
          }

          break;

        case TAB:
          // Disallow tabbing when the user is navigating the options.
          // TODO: Can we force the tab to the next sibling element?
          if (_this.hasActiveOption()) {
            e.preventDefault();
            e.stopPropagation();
          }

          break;

        default:
          if (_this.props.onKeyDown) {
            _this.props.onKeyDown(e);
          }

          _this.clearActiveOption();

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "incrementActiveOptionIndex", function (amount) {
      // If there are no options available, do nothing.
      if (!_this.state.visibleOptions.length) {
        return;
      }

      _this.setState(function (_ref) {
        var activeOptionIndex = _ref.activeOptionIndex,
            visibleOptions = _ref.visibleOptions;
        var nextActiveOptionIndex;

        if (activeOptionIndex == null) {
          // If this is the beginning of the user's keyboard navigation of the menu, then we'll focus
          // either the first or last item.
          nextActiveOptionIndex = amount < 0 ? visibleOptions.length - 1 : 0;
        } else {
          nextActiveOptionIndex = activeOptionIndex + amount;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = visibleOptions.length - 1;
          } else if (nextActiveOptionIndex === visibleOptions.length) {
            nextActiveOptionIndex = 0;
          }
        } // Group titles are included in option list but are not selectable
        // Skip group title options


        var direction = amount > 0 ? 1 : -1;

        while (visibleOptions[nextActiveOptionIndex].isGroupLabel) {
          nextActiveOptionIndex = nextActiveOptionIndex + direction;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = visibleOptions.length - 1;
          } else if (nextActiveOptionIndex === visibleOptions.length) {
            nextActiveOptionIndex = 0;
          }
        }

        return {
          activeOptionIndex: nextActiveOptionIndex
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearActiveOption", function () {
      _this.setState({
        activeOptionIndex: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchChange", function (visibleOptions, searchValue) {
      _this.setState({
        visibleOptions: visibleOptions,
        searchValue: searchValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onContainerBlur", function () {
      _this.clearActiveOption();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionClick", function (options) {
      _this.setState(function (state) {
        return {
          visibleOptions: getMatchingOptions(options, state.searchValue)
        };
      });

      if (_this.props.onChange) {
        _this.props.onChange(options);
      }
    });

    var _options = props.options,
        singleSelection = props.singleSelection;
    var initialSearchValue = '';

    var _visibleOptions = getMatchingOptions(_options, initialSearchValue); // ensure that the currently selected single option is active if it is in the visibleOptions


    var selectedOptions = _options.filter(function (option) {
      return option.checked;
    });

    var _activeOptionIndex;

    if (singleSelection && selectedOptions.length === 1) {
      if (_visibleOptions.includes(selectedOptions[0])) {
        _activeOptionIndex = _visibleOptions.indexOf(selectedOptions[0]);
      }
    }

    _this.state = {
      activeOptionIndex: _activeOptionIndex,
      searchValue: initialSearchValue,
      visibleOptions: _visibleOptions
    };
    return _this;
  }

  _createClass(EuiSelectable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          className = _this$props.className,
          options = _this$props.options,
          onChange = _this$props.onChange,
          searchable = _this$props.searchable,
          searchProps = _this$props.searchProps,
          singleSelection = _this$props.singleSelection,
          isLoading = _this$props.isLoading,
          listProps = _this$props.listProps,
          renderOption = _this$props.renderOption,
          height = _this$props.height,
          allowExclusions = _this$props.allowExclusions,
          rest = _objectWithoutProperties(_this$props, ["id", "children", "className", "options", "onChange", "searchable", "searchProps", "singleSelection", "isLoading", "listProps", "renderOption", "height", "allowExclusions"]);

      var _this$state = this.state,
          searchValue = _this$state.searchValue,
          visibleOptions = _this$state.visibleOptions,
          activeOptionIndex = _this$state.activeOptionIndex;
      var messageContent;

      if (isLoading) {
        messageContent = React.createElement(Fragment, null, React.createElement(EuiLoadingChart, {
          size: "m",
          mono: true
        }), React.createElement("br", null), React.createElement("p", null, React.createElement(EuiI18n, {
          token: "euiSelectable.loadingOptions",
          default: "Loading options"
        })));
      } else if (searchValue && visibleOptions.length === 0) {
        messageContent = React.createElement("p", null, React.createElement(EuiI18n, {
          token: "euiSelectable.noMatchingOptions",
          default: "{searchValue} doesn't match any options",
          values: {
            searchValue: React.createElement("strong", null, searchValue)
          }
        }));
      } else if (!options.length) {
        messageContent = React.createElement("p", null, React.createElement(EuiI18n, {
          token: "euiSelectable.noAvailableOptions",
          default: "No options available"
        }));
      }

      var classes = classNames('euiSelectable', {
        'euiSelectable-fullHeight': height === 'full'
      }, className);
      var search = searchable ? React.createElement(EuiSelectableSearch, _extends({
        key: "listSearch",
        options: options,
        onChange: this.onSearchChange
      }, searchProps)) : undefined;
      var list = messageContent ? React.createElement(EuiSelectableMessage, {
        key: "listMessage"
      }, messageContent) : React.createElement(EuiSelectableList, _extends({
        key: "list",
        options: options,
        visibleOptions: visibleOptions,
        searchValue: searchValue,
        activeOptionIndex: activeOptionIndex,
        onOptionClick: this.onOptionClick,
        singleSelection: singleSelection,
        ref: this.optionsListRef,
        renderOption: renderOption,
        height: height,
        allowExclusions: allowExclusions
      }, listProps));
      return React.createElement("div", _extends({
        className: classes,
        onKeyDown: this.onKeyDown,
        onBlur: this.onContainerBlur
      }, rest), children && children(list, search));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var options = nextProps.options;
      var activeOptionIndex = prevState.activeOptionIndex,
          searchValue = prevState.searchValue;
      var matchingOptions = getMatchingOptions(options, searchValue);
      var stateUpdate = {
        visibleOptions: matchingOptions,
        activeOptionIndex: activeOptionIndex
      };

      if (activeOptionIndex != null && activeOptionIndex >= matchingOptions.length) {
        stateUpdate.activeOptionIndex = -1;
      }

      return stateUpdate;
    }
  }]);

  return EuiSelectable;
}(Component);

_defineProperty(EuiSelectable, "defaultProps", {
  options: [],
  singleSelection: false
});

EuiSelectable.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Hooks up a search box to filter the list
       */
  searchable: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.oneOf([true]).isRequired]),

  /**
       * Passes props down to the `EuiFieldSearch`
       */
  searchProps: PropTypes.shape({}),

  /**
       * Function that takes the `list` node and then
       * the `search` node (if `searchable` is applied)
       */
  children: PropTypes.func,

  /**
       * Array or Option objects, see docs for props
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
       * Passes back the altered `options` array with selected options as
       */
  onChange: PropTypes.func,

  /**
       * Sets the single selection policy of
       * `false`: allows multiple selection
       * `true`: only allows one selection
       * `always`: can and must have only one selection
       */
  singleSelection: PropTypes.oneOfType([PropTypes.oneOf(["always"]), PropTypes.bool.isRequired]),

  /**
       * Allows marking options as checked = 'off' as well as 'on'
       */
  allowExclusions: PropTypes.bool,

  /**
       * Show an loading indicator while you load and hook up your data
       */
  isLoading: PropTypes.bool,

  /**
       * Sets the max height in pixels or pass `full` to allow
       * the whole group to fill the height of its container and
       * allows the list grow as well
       */
  height: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.oneOf(["full"])]),

  /**
       * See `EuiSelectableList`
       */
  listProps: PropTypes.any,

  /**
       * Custom render function for each option.
       * Returns (option, searchValue)
       */
  renderOption: PropTypes.func
};
EuiSelectable.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "hasActiveOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "incrementActiveOptionIndex",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "amount",
      "type": null
    }],
    "returns": null
  }, {
    "name": "clearActiveOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onSearchChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "visibleOptions",
      "type": null
    }, {
      "name": "searchValue",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onContainerBlur",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onOptionClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "options",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSelectable",
  "props": {
    "options": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
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
      "required": false,
      "description": "Array or Option objects, see docs for props"
    },
    "singleSelection": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
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
      "description": "Sets the single selection policy of\n`false`: allows multiple selection\n`true`: only allows one selection\n`always`: can and must have only one selection"
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
    "searchable": {
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "false",
            "computed": false
          }]
        }, {
          "name": "enum",
          "value": [{
            "value": "true",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Hooks up a search box to filter the list"
    },
    "searchProps": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false,
      "description": "Passes props down to the `EuiFieldSearch`"
    },
    "children": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Function that takes the `list` node and then\nthe `search` node (if `searchable` is applied)"
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Passes back the altered `options` array with selected options as"
    },
    "allowExclusions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allows marking options as checked = 'off' as well as 'on'"
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Show an loading indicator while you load and hook up your data"
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
    "listProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "See `EuiSelectableList`"
    },
    "renderOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Custom render function for each option.\nReturns (option, searchValue)"
    }
  }
};