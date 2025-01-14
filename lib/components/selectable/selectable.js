"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSelectable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _selectable_search = require("./selectable_search");

var _selectable_message = require("./selectable_message");

var _selectable_list = require("./selectable_list");

var _loading = require("../loading");

var _matching_options = require("./matching_options");

var _services = require("../../services");

var _key_codes = require("../../services/key_codes");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var EuiSelectable =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSelectable, _Component);

  function EuiSelectable(props) {
    var _this;

    _classCallCheck(this, EuiSelectable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSelectable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsListRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasActiveOption", function () {
      return _this.state.activeOptionIndex != null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      var optionsList = _this.optionsListRef.current;

      switch (e.keyCode) {
        case _services.comboBoxKeyCodes.UP:
          e.preventDefault();
          e.stopPropagation();

          _this.incrementActiveOptionIndex(-1);

          break;

        case _services.comboBoxKeyCodes.DOWN:
          e.preventDefault();
          e.stopPropagation();

          _this.incrementActiveOptionIndex(1);

          break;

        case _services.comboBoxKeyCodes.ENTER:
          e.stopPropagation();

          if (_this.state.activeOptionIndex != null && optionsList) {
            optionsList.onAddOrRemoveOption(_this.state.visibleOptions[_this.state.activeOptionIndex]);
          }

          break;

        case _key_codes.TAB:
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
          visibleOptions: (0, _matching_options.getMatchingOptions)(options, state.searchValue)
        };
      });

      if (_this.props.onChange) {
        _this.props.onChange(options);
      }
    });

    var _options = props.options,
        singleSelection = props.singleSelection;
    var initialSearchValue = '';

    var _visibleOptions = (0, _matching_options.getMatchingOptions)(_options, initialSearchValue); // ensure that the currently selected single option is active if it is in the visibleOptions


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
        messageContent = _react.default.createElement(_react.Fragment, null, _react.default.createElement(_loading.EuiLoadingChart, {
          size: "m",
          mono: true
        }), _react.default.createElement("br", null), _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
          token: "euiSelectable.loadingOptions",
          default: "Loading options"
        })));
      } else if (searchValue && visibleOptions.length === 0) {
        messageContent = _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
          token: "euiSelectable.noMatchingOptions",
          default: "{searchValue} doesn't match any options",
          values: {
            searchValue: _react.default.createElement("strong", null, searchValue)
          }
        }));
      } else if (!options.length) {
        messageContent = _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
          token: "euiSelectable.noAvailableOptions",
          default: "No options available"
        }));
      }

      var classes = (0, _classnames.default)('euiSelectable', {
        'euiSelectable-fullHeight': height === 'full'
      }, className);
      var search = searchable ? _react.default.createElement(_selectable_search.EuiSelectableSearch, _extends({
        key: "listSearch",
        options: options,
        onChange: this.onSearchChange
      }, searchProps)) : undefined;
      var list = messageContent ? _react.default.createElement(_selectable_message.EuiSelectableMessage, {
        key: "listMessage"
      }, messageContent) : _react.default.createElement(_selectable_list.EuiSelectableList, _extends({
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
      return _react.default.createElement("div", _extends({
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
      var matchingOptions = (0, _matching_options.getMatchingOptions)(options, searchValue);
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
}(_react.Component);

exports.EuiSelectable = EuiSelectable;

_defineProperty(EuiSelectable, "defaultProps", {
  options: [],
  singleSelection: false
});

EuiSelectable.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Hooks up a search box to filter the list
       */
  searchable: _propTypes.default.oneOfType([_propTypes.default.oneOf([false]), _propTypes.default.oneOf([true]).isRequired]),

  /**
       * Passes props down to the `EuiFieldSearch`
       */
  searchProps: _propTypes.default.shape({}),

  /**
       * Function that takes the `list` node and then
       * the `search` node (if `searchable` is applied)
       */
  children: _propTypes.default.func,

  /**
       * Array or Option objects, see docs for props
       */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Visible label of option. Must be unique across items if `key` is not supplied
       */
    label: _propTypes.default.string.isRequired,

    /**
       * Must be unique across items
       */
    key: _propTypes.default.string,

    /**
       * Leave off to indicate not selected,
       * 'on' to indicate inclusion and
       * 'off' to indicate exclusion
       */
    checked: _propTypes.default.oneOf(["on", "off", undefined]),
    disabled: _propTypes.default.bool,

    /**
       * Set to true to indicate object is just a grouping label, not a selectable item
       */
    isGroupLabel: _propTypes.default.bool,

    /**
       * Node to add between the selection icon and the label
       */
    prepend: _propTypes.default.node,

    /**
       * Node to add to the far right of the item
       */
    append: _propTypes.default.node,
    ref: _propTypes.default.func,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired).isRequired,

  /**
       * Passes back the altered `options` array with selected options as
       */
  onChange: _propTypes.default.func,

  /**
       * Sets the single selection policy of
       * `false`: allows multiple selection
       * `true`: only allows one selection
       * `always`: can and must have only one selection
       */
  singleSelection: _propTypes.default.oneOfType([_propTypes.default.oneOf(["always"]), _propTypes.default.bool.isRequired]),

  /**
       * Allows marking options as checked = 'off' as well as 'on'
       */
  allowExclusions: _propTypes.default.bool,

  /**
       * Show an loading indicator while you load and hook up your data
       */
  isLoading: _propTypes.default.bool,

  /**
       * Sets the max height in pixels or pass `full` to allow
       * the whole group to fill the height of its container and
       * allows the list grow as well
       */
  height: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.oneOf(["full"])]),

  /**
       * See `EuiSelectableList`
       */
  listProps: _propTypes.default.any,

  /**
       * Custom render function for each option.
       * Returns (option, searchValue)
       */
  renderOption: _propTypes.default.func
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