"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _key_codes = require("../../services/key_codes");

var _portal = require("../portal");

var _combo_box_input = require("./combo_box_input");

var _combo_box_options_list = require("./combo_box_options_list");

var _matching_options = require("./matching_options");

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

var EuiComboBox =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiComboBox, _Component);

  function EuiComboBox(props) {
    var _this;

    _classCallCheck(this, EuiComboBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiComboBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openList", function () {
      _this.setState({
        isListOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeList", function () {
      _this.clearActiveOption();

      _this.setState({
        isListOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateListPosition", function () {
      var listElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.listElement;

      if (!_this._isMounted) {
        return;
      }

      if (!_this.state.isListOpen) {
        return;
      }

      if (!listElement) {
        return;
      } // it's possible that updateListPosition is called when listElement is becoming visible, but isn't yet


      var listElementBounds = listElement.getBoundingClientRect();

      if (listElementBounds.width === 0 || listElementBounds.height === 0) {
        return;
      }

      var comboBoxBounds = _this.comboBox.getBoundingClientRect();

      var _findPopoverPosition = (0, _services.findPopoverPosition)({
        anchor: _this.comboBox,
        popover: listElement,
        position: 'bottom',
        allowCrossAxis: false
      }),
          position = _findPopoverPosition.position,
          top = _findPopoverPosition.top;

      _this.optionsList.style.top = "".concat(top, "px"); // listElement doesn't have its width set until after updating the position
      // which means the popover service won't know about the correct width
      // however, we already know where to position the element

      _this.optionsList.style.left = "".concat(comboBoxBounds.left + window.pageXOffset, "px");
      _this.optionsList.style.width = "".concat(comboBoxBounds.width, "px"); // Cache for future calls.

      _this.setState({
        listElement: listElement,
        width: comboBoxBounds.width,
        listPosition: position
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "incrementActiveOptionIndex", function (amount) {
      // If there are no options available, do nothing.
      if (!_this.state.matchingOptions.length) {
        return;
      }

      _this.setState(function (_ref) {
        var activeOptionIndex = _ref.activeOptionIndex,
            matchingOptions = _ref.matchingOptions;
        var nextActiveOptionIndex;

        if (activeOptionIndex < 0) {
          // If this is the beginning of the user's keyboard navigation of the menu, then we'll focus
          // either the first or last item.
          nextActiveOptionIndex = amount < 0 ? matchingOptions.length - 1 : 0;
        } else {
          nextActiveOptionIndex = activeOptionIndex + amount;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = matchingOptions.length - 1;
          } else if (nextActiveOptionIndex === matchingOptions.length) {
            nextActiveOptionIndex = 0;
          }
        } // Group titles are included in option list but are not selectable
        // Skip group title options


        var direction = amount > 0 ? 1 : -1;

        while (matchingOptions[nextActiveOptionIndex].isGroupLabelOption) {
          nextActiveOptionIndex = nextActiveOptionIndex + direction;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = matchingOptions.length - 1;
          } else if (nextActiveOptionIndex === matchingOptions.length) {
            nextActiveOptionIndex = 0;
          }
        }

        return {
          activeOptionIndex: nextActiveOptionIndex
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasActiveOption", function () {
      return _this.state.activeOptionIndex > -1 && _this.state.activeOptionIndex < _this.state.matchingOptions.length;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearActiveOption", function () {
      _this.setState({
        activeOptionIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearSearchValue", function () {
      _this.onSearchChange('');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeLastOption", function () {
      if (!_this.props.selectedOptions.length) {
        return;
      } // Backspace will be used to delete the input, not a pill.


      if (_this.state.searchValue.length) {
        return;
      } // Delete last pill.


      _this.onRemoveOption(_this.props.selectedOptions[_this.props.selectedOptions.length - 1]);

      if (_this.props.singleSelection && !_this.state.isListOpen) {
        _this.openList();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addCustomOption", function (isContainerBlur) {
      var _this$props = _this.props,
          options = _this$props.options,
          selectedOptions = _this$props.selectedOptions,
          onCreateOption = _this$props.onCreateOption,
          singleSelection = _this$props.singleSelection;
      var _this$state = _this.state,
          searchValue = _this$state.searchValue,
          matchingOptions = _this$state.matchingOptions;

      if (_this.doesSearchMatchOnlyOption()) {
        _this.onAddOption(matchingOptions[0], isContainerBlur);

        return;
      }

      if (!onCreateOption) {
        return;
      } // Don't bother trying to create an option if the user hasn't typed anything.


      if (!searchValue) {
        return;
      } // Don't create the value if it's already been selected.


      if ((0, _matching_options.getSelectedOptionForSearchValue)(searchValue, selectedOptions)) {
        return;
      } // Add new custom pill if this is custom input, even if it partially matches an option..


      var isOptionCreated = _this.props.onCreateOption(searchValue, (0, _matching_options.flattenOptionGroups)(options)); // Expect the consumer to be explicit in rejecting a custom option.


      if (isOptionCreated === false) {
        return;
      }

      _this.clearSearchValue();

      if (_this.isSingleSelectionCustomOption() || singleSelection && matchingOptions.length < 1) {
        // Adding a custom option to a single select that does not appear in the list of options
        _this.closeList();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "doesSearchMatchOnlyOption", function () {
      var searchValue = _this.state.searchValue;

      if (_this.state.matchingOptions.length !== 1) {
        return false;
      }

      return _this.state.matchingOptions[0].label.toLowerCase() === searchValue.toLowerCase();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "areAllOptionsSelected", function () {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          selectedOptions = _this$props2.selectedOptions,
          async = _this$props2.async; // Assume if this is async then there could be infinite options.

      if (async) {
        return false;
      }

      return (0, _matching_options.flattenOptionGroups)(options).length === selectedOptions.length;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSingleSelectionCustomOption", function () {
      var _this$props3 = _this.props,
          onCreateOption = _this$props3.onCreateOption,
          options = _this$props3.options,
          selectedOptions = _this$props3.selectedOptions,
          singleSelection = _this$props3.singleSelection; // The selected option of a single select is custom and does not appear in the list of options

      return singleSelection && onCreateOption && selectedOptions.length > 0 && !options.includes(selectedOptions[0]);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onComboBoxFocus", function () {
      if (_this.props.onFocus) {
        _this.props.onFocus();
      }

      if (!_this.isSingleSelectionCustomOption()) {
        _this.openList();
      }

      _this.setState({
        hasFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onContainerBlur", function (e) {
      // close the options list, unless the use clicked on an option
      // FireFox returns `relatedTarget` as `null` for security reasons, but provides a proprietary `explicitOriginalTarget`
      var relatedTarget = e.relatedTarget || e.explicitOriginalTarget;

      var focusedInOptionsList = relatedTarget && _this.optionsList && _this.optionsList.contains(relatedTarget);

      var focusedInInput = relatedTarget && _this.comboBox && _this.comboBox.contains(relatedTarget);

      if (!focusedInOptionsList && !focusedInInput) {
        _this.closeList();

        if (_this.props.onBlur) {
          _this.props.onBlur();
        }

        _this.setState({
          hasFocus: false
        }); // If the user tabs away or changes focus to another element, take whatever input they've
        // typed and convert it into a pill, to prevent the combo box from looking like a text input.


        if (!_this.hasActiveOption()) {
          _this.addCustomOption(true);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      switch (e.keyCode) {
        case _services.comboBoxKeyCodes.UP:
          e.preventDefault();
          e.stopPropagation();

          if (_this.state.isListOpen) {
            _this.incrementActiveOptionIndex(-1);
          } else {
            _this.openList();
          }

          break;

        case _services.comboBoxKeyCodes.DOWN:
          e.preventDefault();
          e.stopPropagation();

          if (_this.state.isListOpen) {
            _this.incrementActiveOptionIndex(1);
          } else {
            _this.openList();
          }

          break;

        case _key_codes.BACKSPACE:
          e.stopPropagation();

          _this.removeLastOption();

          break;

        case _key_codes.ESCAPE:
          e.stopPropagation();

          _this.closeList();

          break;

        case _services.comboBoxKeyCodes.ENTER:
          e.stopPropagation();

          if (_this.hasActiveOption()) {
            _this.onAddOption(_this.state.matchingOptions[_this.state.activeOptionIndex]);
          } else {
            _this.addCustomOption();
          }

          break;

        case _key_codes.TAB:
          // Disallow tabbing when the user is navigating the options.
          if (_this.hasActiveOption() && _this.state.isListOpen) {
            e.preventDefault();
            e.stopPropagation();
          }

          break;

        default:
          if (_this.props.onKeyDown) {
            _this.props.onKeyDown(e);
          }

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionEnterKey", function (option) {
      _this.onAddOption(option);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionClick", function (option) {
      _this.onAddOption(option);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddOption", function (addedOption, isContainerBlur) {
      if (addedOption.disabled) {
        return;
      }

      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          selectedOptions = _this$props4.selectedOptions,
          singleSelection = _this$props4.singleSelection;
      onChange(singleSelection ? [addedOption] : selectedOptions.concat(addedOption));

      _this.clearSearchValue();

      _this.clearActiveOption();

      if (!isContainerBlur) {
        _this.searchInput.focus();
      }

      if (singleSelection) {
        requestAnimationFrame(_this.closeList);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRemoveOption", function (removedOption) {
      var _this$props5 = _this.props,
          onChange = _this$props5.onChange,
          selectedOptions = _this$props5.selectedOptions;
      onChange(selectedOptions.filter(function (option) {
        return option !== removedOption;
      }));

      _this.clearActiveOption();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearSelectedOptions", function () {
      _this.props.onChange([]); // Clicking the clear button will also cause it to disappear. This would result in focus
      // shifting unexpectedly to the body element so we set it to the input which is more reasonable,


      _this.searchInput.focus();

      if (!_this.state.isListOpen) {
        _this.openList();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onComboBoxClick", function () {
      // When the user clicks anywhere on the box, enter the interaction state.
      _this.searchInput.focus(); // If the user does this from a state in which an option has focus, then we need to reset it or clear it.


      if (_this.props.singleSelection && _this.props.selectedOptions.length === 1) {
        _this.setState({
          activeOptionIndex: _this.state.matchingOptions.indexOf(_this.props.selectedOptions[0])
        });
      } else {
        _this.clearActiveOption();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpenListClick", function () {
      _this.searchInput.focus();

      if (!_this.state.isListOpen) {
        _this.openList();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseListClick", function () {
      _this.closeList();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchChange", function (searchValue) {
      if (_this.props.onSearchChange) {
        var hasMatchingOptions = _this.state.matchingOptions.length > 0;

        _this.props.onSearchChange(searchValue, hasMatchingOptions);
      }

      _this.setState({
        searchValue: searchValue
      }, function () {
        if (searchValue && _this.state.isListOpen === false) _this.openList();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "comboBoxRef", function (node) {
      // IE11 doesn't support the `relatedTarget` event property for blur events
      // but does add it for focusout. React doesn't support `onFocusOut` so here we are.
      if (_this.comboBox != null) {
        _this.comboBox.removeEventListener('focusout', _this.onContainerBlur);
      }

      _this.comboBox = node;

      if (_this.comboBox) {
        _this.comboBox.addEventListener('focusout', _this.onContainerBlur);

        var comboBoxBounds = _this.comboBox.getBoundingClientRect();

        _this.setState({
          width: comboBoxBounds.width
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoSizeInputRef", function (node) {
      _this.autoSizeInput = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchInputRef", function (node) {
      _this.searchInput = node;

      if (_this.props.inputRef) {
        _this.props.inputRef(node);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsListRef", function (node) {
      _this.optionsList = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionRef", function (index, node) {
      _this.options[index] = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleButtonRef", function (node) {
      _this.toggleButton = node;
    });

    var initialSearchValue = '';
    var _options = props.options,
        _selectedOptions = props.selectedOptions,
        _singleSelection = props.singleSelection;
    _this.state = {
      matchingOptions: (0, _matching_options.getMatchingOptions)(_options, _selectedOptions, initialSearchValue, props.async, _singleSelection),
      listElement: undefined,
      searchValue: initialSearchValue,
      isListOpen: false,
      listPosition: 'bottom',
      activeOptionIndex: -1,
      hasFocus: false
    };
    _this.rootId = (0, _services.htmlIdGenerator)(); // Refs.

    _this.comboBox = undefined;
    _this.autoSizeInput = undefined;
    _this.searchInput = undefined;
    _this.optionsList = undefined;
    _this.options = [];
    return _this;
  }

  _createClass(EuiComboBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._isMounted = true; // TODO: This will need to be called once the actual stylesheet loads.

      setTimeout(function () {
        if (_this2.autoSizeInput) {
          _this2.autoSizeInput.copyInputStyles();
        }
      }, 100);
    }
  }, {
    key: "updateMatchingOptionsIfDifferent",
    value: function updateMatchingOptionsIfDifferent(newMatchingOptions) {
      var _this$state2 = this.state,
          matchingOptions = _this$state2.matchingOptions,
          activeOptionIndex = _this$state2.activeOptionIndex;
      var _this$props6 = this.props,
          singleSelection = _this$props6.singleSelection,
          selectedOptions = _this$props6.selectedOptions;
      var areOptionsDifferent = false;

      if (matchingOptions.length !== newMatchingOptions.length) {
        areOptionsDifferent = true;
      } else {
        for (var i = 0; i < matchingOptions.length; i++) {
          if (matchingOptions[i].label !== newMatchingOptions[i].label) {
            areOptionsDifferent = true;
            break;
          }
        }
      }

      if (areOptionsDifferent) {
        this.options = [];
        var nextActiveOptionIndex = activeOptionIndex; // ensure that the currently selected single option is active if it is in the matchingOptions

        if (singleSelection && selectedOptions.length === 1) {
          if (newMatchingOptions.includes(selectedOptions[0])) {
            nextActiveOptionIndex = newMatchingOptions.indexOf(selectedOptions[0]);
          }
        }

        this.setState({
          matchingOptions: newMatchingOptions,
          activeOptionIndex: nextActiveOptionIndex
        });

        if (!newMatchingOptions.length) {
          // Prevent endless setState -> componentWillUpdate -> setState loop.
          if (this.hasActiveOption()) {
            this.clearActiveOption();
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props7 = this.props,
          options = _this$props7.options,
          selectedOptions = _this$props7.selectedOptions,
          singleSelection = _this$props7.singleSelection;
      var searchValue = this.state.searchValue; // React 16.3 has a bug (fixed in 16.4) where getDerivedStateFromProps
      // isn't called after a state change, and we track `searchValue` in state
      // instead we need to react to a change in searchValue here

      this.updateMatchingOptionsIfDifferent((0, _matching_options.getMatchingOptions)(options, selectedOptions, searchValue, this.props.async, singleSelection));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          id = _this$props8.id,
          isDisabled = _this$props8.isDisabled,
          className = _this$props8.className,
          isLoading = _this$props8.isLoading,
          options = _this$props8.options,
          selectedOptions = _this$props8.selectedOptions,
          onCreateOption = _this$props8.onCreateOption,
          placeholder = _this$props8.placeholder,
          noSuggestions = _this$props8.noSuggestions,
          renderOption = _this$props8.renderOption,
          singleSelection = _this$props8.singleSelection,
          onChange = _this$props8.onChange,
          onSearchChange = _this$props8.onSearchChange,
          async = _this$props8.async,
          onBlur = _this$props8.onBlur,
          inputRef = _this$props8.inputRef,
          isInvalid = _this$props8.isInvalid,
          rowHeight = _this$props8.rowHeight,
          isClearable = _this$props8.isClearable,
          fullWidth = _this$props8.fullWidth,
          compressed = _this$props8.compressed,
          dataTestSubj = _this$props8['data-test-subj'],
          rest = _objectWithoutProperties(_this$props8, ["id", "isDisabled", "className", "isLoading", "options", "selectedOptions", "onCreateOption", "placeholder", "noSuggestions", "renderOption", "singleSelection", "onChange", "onSearchChange", "async", "onBlur", "inputRef", "isInvalid", "rowHeight", "isClearable", "fullWidth", "compressed", "data-test-subj"]);

      var _this$state3 = this.state,
          hasFocus = _this$state3.hasFocus,
          searchValue = _this$state3.searchValue,
          isListOpen = _this$state3.isListOpen,
          listPosition = _this$state3.listPosition,
          width = _this$state3.width,
          activeOptionIndex = _this$state3.activeOptionIndex; // Visually indicate the combobox is in an invalid state if it has lost focus but there is text entered in the input.
      // When custom options are disabled and the user leaves the combo box after entering text that does not match any
      // options, this tells the user that they've entered invalid input.

      var markAsInvalid = isInvalid || (hasFocus === false || isListOpen === false) && searchValue;
      var classes = (0, _classnames.default)('euiComboBox', className, {
        'euiComboBox-isOpen': isListOpen,
        'euiComboBox-isInvalid': markAsInvalid,
        'euiComboBox-isDisabled': isDisabled,
        'euiComboBox--fullWidth': fullWidth,
        'euiComboBox--compressed': compressed
      });
      var value = selectedOptions.map(function (selectedOption) {
        return selectedOption.label;
      }).join(', ');
      var optionsList;

      if (!noSuggestions && isListOpen) {
        var optionsListDataTestSubj = dataTestSubj ? "".concat(dataTestSubj, "-optionsList") : undefined;
        optionsList = _react.default.createElement(_portal.EuiPortal, null, _react.default.createElement(_combo_box_options_list.EuiComboBoxOptionsList, {
          isLoading: isLoading,
          options: options,
          selectedOptions: selectedOptions,
          onCreateOption: onCreateOption,
          searchValue: searchValue,
          matchingOptions: this.state.matchingOptions,
          activeOptionIndex: this.state.activeOptionIndex,
          listRef: this.optionsListRef,
          optionRef: this.optionRef,
          onOptionClick: this.onOptionClick,
          onOptionEnterKey: this.onOptionEnterKey,
          areAllOptionsSelected: this.areAllOptionsSelected(),
          getSelectedOptionForSearchValue: _matching_options.getSelectedOptionForSearchValue,
          updatePosition: this.updateListPosition,
          position: listPosition,
          renderOption: renderOption,
          width: width,
          scrollToIndex: activeOptionIndex,
          rowHeight: rowHeight,
          "data-test-subj": optionsListDataTestSubj,
          fullWidth: fullWidth,
          rootId: this.rootId,
          onCloseList: this.closeList,
          onScroll: function onScroll() {
            return _this3.searchInput.focus();
          }
        }));
      }

      return (
        /**
         * Re: jsx-a11y/interactive-supports-focus
         * Focus is managed and is placed on the textbox element (`EuiComboBoxInput`)
         *
         * Re: jsx-a11y/role-has-required-aria-props
         * Expansion is managed and required `aria-controls` prop is placed on the textbox element (`EuiComboBoxInput`)
         *
         * Reference for both: https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#combobox,
         * which verifies that this implementation follows the spec.
         */
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        _react.default.createElement("div", _extends({}, rest, {
          className: classes,
          onKeyDown: this.onKeyDown,
          ref: this.comboBoxRef,
          "data-test-subj": dataTestSubj,
          role: "combobox",
          "aria-haspopup": "listbox",
          "aria-expanded": isListOpen
        }), _react.default.createElement(_combo_box_input.EuiComboBoxInput, {
          id: id,
          placeholder: placeholder,
          selectedOptions: selectedOptions,
          onRemoveOption: this.onRemoveOption,
          onClick: this.onComboBoxClick,
          onChange: this.onSearchChange,
          onFocus: this.onComboBoxFocus,
          value: value,
          searchValue: searchValue,
          autoSizeInputRef: this.autoSizeInputRef,
          inputRef: this.searchInputRef,
          updatePosition: this.updateListPosition,
          onClear: isClearable && !isDisabled ? this.clearSelectedOptions : undefined,
          hasSelectedOptions: selectedOptions.length > 0,
          isListOpen: isListOpen,
          onOpenListClick: this.onOpenListClick,
          onCloseListClick: this.onCloseListClick,
          singleSelection: singleSelection,
          isDisabled: isDisabled,
          toggleButtonRef: this.toggleButtonRef,
          fullWidth: fullWidth,
          noIcon: !!noSuggestions,
          rootId: this.rootId,
          focusedOptionId: this.hasActiveOption() ? this.rootId("_option-".concat(this.state.activeOptionIndex)) : null,
          compressed: compressed
        }), optionsList)
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var options = nextProps.options,
          selectedOptions = nextProps.selectedOptions,
          singleSelection = nextProps.singleSelection;
      var activeOptionIndex = prevState.activeOptionIndex,
          searchValue = prevState.searchValue; // Calculate and cache the options which match the searchValue, because we use this information
      // in multiple places and it would be expensive to calculate repeatedly.

      var matchingOptions = (0, _matching_options.getMatchingOptions)(options, selectedOptions, searchValue, nextProps.async, singleSelection);
      var stateUpdate = {
        matchingOptions: matchingOptions
      };

      if (activeOptionIndex >= matchingOptions.length) {
        stateUpdate.activeOptionIndex = -1;
      }

      return stateUpdate;
    }
  }]);

  return EuiComboBox;
}(_react.Component);

exports.EuiComboBox = EuiComboBox;

_defineProperty(EuiComboBox, "propTypes", {
  id: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  isLoading: _propTypes.default.bool,
  async: _propTypes.default.bool,
  singleSelection: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    asPlainText: _propTypes.default.bool
  })]),
  noSuggestions: _propTypes.default.bool,
  options: _propTypes.default.array,
  selectedOptions: _propTypes.default.array,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onSearchChange: _propTypes.default.func,
  onCreateOption: _propTypes.default.func,
  renderOption: _propTypes.default.func,
  isInvalid: _propTypes.default.bool,
  rowHeight: _propTypes.default.number,
  isClearable: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  inputRef: _propTypes.default.func
});

_defineProperty(EuiComboBox, "defaultProps", {
  options: [],
  selectedOptions: [],
  isClearable: true,
  singleSelection: false,
  fullWidth: false,
  compressed: false
});

EuiComboBox.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "openList",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeList",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "updateListPosition",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "listElement",
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
    "name": "hasActiveOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "clearActiveOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "clearSearchValue",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "removeLastOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "addCustomOption",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isContainerBlur",
      "type": null
    }],
    "returns": null
  }, {
    "name": "doesSearchMatchOnlyOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "areAllOptionsSelected",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "isSingleSelectionCustomOption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onComboBoxFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onContainerBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
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
    "name": "onOptionEnterKey",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "option",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onOptionClick",
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
    }, {
      "name": "isContainerBlur",
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
    "name": "clearSelectedOptions",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onComboBoxClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onOpenListClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onCloseListClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onSearchChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "searchValue",
      "type": null
    }],
    "returns": null
  }, {
    "name": "comboBoxRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "autoSizeInputRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "searchInputRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "optionsListRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "optionRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "index",
      "type": null
    }, {
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleButtonRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateMatchingOptionsIfDifferent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newMatchingOptions",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiComboBox",
  "props": {
    "options": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "selectedOptions": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "isClearable": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "singleSelection": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "shape",
          "value": {
            "asPlainText": {
              "name": "bool",
              "required": false
            }
          }
        }]
      },
      "required": false,
      "description": ""
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
      "description": ""
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
      "description": ""
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "placeholder": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "async": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "noSuggestions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onBlur": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onFocus": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onSearchChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onCreateOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "renderOption": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "rowHeight": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};