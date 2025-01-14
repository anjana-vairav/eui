"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));

var _accessibility = require("../../accessibility");

var _form = require("../../form");

var _combo_box_pill = require("./combo_box_pill");

var _services = require("../../../services");

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

var makeId = (0, _services.htmlIdGenerator)();

var EuiComboBoxInput =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiComboBoxInput, _Component);

  function EuiComboBoxInput(props) {
    var _this;

    _classCallCheck(this, EuiComboBoxInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiComboBoxInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePosition", function () {
      // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
      requestAnimationFrame(function () {
        _this.props.updatePosition();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.props.onFocus();

      _this.setState({
        hasFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }

      _this.setState({
        hasFocus: false
      });
    });

    _this.state = {
      hasFocus: false
    };
    return _this;
  }

  _createClass(EuiComboBoxInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var searchValue = prevProps.searchValue; // We need to update the position of everything if the user enters enough input to change
      // the size of the input.

      if (searchValue !== this.props.searchValue) {
        this.updatePosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          selectedOptions = _this$props.selectedOptions,
          onRemoveOption = _this$props.onRemoveOption,
          onClick = _this$props.onClick,
          _onChange = _this$props.onChange,
          value = _this$props.value,
          searchValue = _this$props.searchValue,
          autoSizeInputRef = _this$props.autoSizeInputRef,
          inputRef = _this$props.inputRef,
          onClear = _this$props.onClear,
          hasSelectedOptions = _this$props.hasSelectedOptions,
          isListOpen = _this$props.isListOpen,
          onOpenListClick = _this$props.onOpenListClick,
          onCloseListClick = _this$props.onCloseListClick,
          singleSelection = _this$props.singleSelection,
          isDisabled = _this$props.isDisabled,
          toggleButtonRef = _this$props.toggleButtonRef,
          fullWidth = _this$props.fullWidth,
          noIcon = _this$props.noIcon,
          rootId = _this$props.rootId,
          focusedOptionId = _this$props.focusedOptionId,
          compressed = _this$props.compressed;
      var pills = selectedOptions.map(function (option) {
        var label = option.label,
            color = option.color,
            onClick = option.onClick,
            rest = _objectWithoutProperties(option, ["label", "color", "onClick"]);

        var asPlainText = singleSelection && singleSelection.asPlainText;
        return _react.default.createElement(_combo_box_pill.EuiComboBoxPill, _extends({
          option: option,
          onClose: isDisabled || singleSelection || onClick ? null : onRemoveOption,
          key: label.toLowerCase(),
          color: color,
          onClick: onClick,
          onClickAriaLabel: onClick ? 'Change' : null,
          asPlainText: asPlainText
        }, rest), label);
      });
      var removeOptionMessage;
      var removeOptionMessageId;

      if (this.state.hasFocus) {
        var readPlaceholder = placeholder ? "".concat(placeholder, ".") : '';
        var removeOptionMessageContent = "Combo box. Selected. ".concat(searchValue ? "".concat(searchValue, ". Selected. ") : '').concat(selectedOptions.length ? "".concat(value, ". Press Backspace to delete ").concat(selectedOptions[selectedOptions.length - 1].label, ". ") : '', "Combo box input. ").concat(readPlaceholder, " Type some text or, to display a list of choices, press Down Arrow. ") + 'To exit the list of choices, press Escape.';
        removeOptionMessageId = makeId(); // aria-live="assertive" will read this message aloud immediately once it enters the DOM.
        // We'll render to the DOM when the input gains focus and remove it when the input loses focus.
        // We'll use aria-hidden to prevent default aria information from being read by the screen
        // reader.

        removeOptionMessage = _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("span", {
          "aria-live": "assertive",
          id: removeOptionMessageId
        }, removeOptionMessageContent));
      }

      var placeholderMessage;

      if (placeholder && !selectedOptions.length && !searchValue) {
        placeholderMessage = _react.default.createElement("p", {
          className: "euiComboBoxPlaceholder"
        }, placeholder);
      }

      var clickProps = {};

      if (!isDisabled && onClear && hasSelectedOptions) {
        clickProps.clear = {
          onClick: onClear,
          'data-test-subj': 'comboBoxClearButton'
        };
      }

      var icon;

      if (!noIcon) {
        icon = {
          type: 'arrowDown',
          side: 'right',
          onClick: isListOpen && !isDisabled ? onCloseListClick : onOpenListClick,
          ref: toggleButtonRef,
          'aria-label': isListOpen ? 'Close list of options' : 'Open list of options',
          disabled: isDisabled,
          'data-test-subj': 'comboBoxToggleListButton'
        };
      }

      var wrapClasses = (0, _classnames.default)('euiComboBox__inputWrap', {
        'euiComboBox__inputWrap--compressed': compressed,
        'euiComboBox__inputWrap--fullWidth': fullWidth,
        'euiComboBox__inputWrap--noWrap': singleSelection,
        'euiComboBox__inputWrap-isClearable': onClear
      });
      return _react.default.createElement(_form.EuiFormControlLayout, _extends({
        icon: icon
      }, clickProps, {
        fullWidth: fullWidth,
        compressed: compressed
      }), _react.default.createElement("div", {
        className: wrapClasses,
        onClick: onClick,
        tabIndex: "-1" // becomes onBlur event's relatedTarget, otherwise relatedTarget is null when clicking on this div
        ,
        "data-test-subj": "comboBoxInput"
      }, !singleSelection || !searchValue ? pills : null, placeholderMessage, _react.default.createElement(_reactInputAutosize.default, {
        role: "textbox",
        "aria-controls": isListOpen ? rootId('listbox') : null,
        "aria-activedescendant": focusedOptionId,
        id: id,
        style: {
          fontSize: 14
        },
        className: "euiComboBox__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        value: searchValue,
        ref: autoSizeInputRef,
        inputRef: inputRef,
        disabled: isDisabled,
        "data-test-subj": "comboBoxSearchInput"
      }), removeOptionMessage));
    }
  }]);

  return EuiComboBoxInput;
}(_react.Component);

exports.EuiComboBoxInput = EuiComboBoxInput;

_defineProperty(EuiComboBoxInput, "propTypes", {
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  selectedOptions: _propTypes.default.array,
  onRemoveOption: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  searchValue: _propTypes.default.string,
  autoSizeInputRef: _propTypes.default.func,
  inputRef: _propTypes.default.func,
  updatePosition: _propTypes.default.func.isRequired,
  onClear: _propTypes.default.func,
  hasSelectedOptions: _propTypes.default.bool.isRequired,
  isListOpen: _propTypes.default.bool.isRequired,
  noIcon: _propTypes.default.bool.isRequired,
  onOpenListClick: _propTypes.default.func.isRequired,
  onCloseListClick: _propTypes.default.func.isRequired,
  singleSelection: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    asPlainText: _propTypes.default.bool
  })]),
  isDisabled: _propTypes.default.bool,
  toggleButtonRef: _propTypes.default.func,
  fullWidth: _propTypes.default.bool,
  rootId: _propTypes.default.func.isRequired,
  focusedOptionId: _propTypes.default.string,
  compressed: _propTypes.default.bool.isRequired
});

EuiComboBoxInput.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updatePosition",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onBlur",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiComboBoxInput",
  "props": {
    "id": {
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
    "selectedOptions": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": ""
    },
    "onRemoveOption": {
      "type": {
        "name": "func"
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
    "onClick": {
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
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "searchValue": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "autoSizeInputRef": {
      "type": {
        "name": "func"
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
    },
    "updatePosition": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onClear": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "hasSelectedOptions": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "isListOpen": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "noIcon": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "onOpenListClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onCloseListClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "singleSelection": {
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
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "toggleButtonRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "rootId": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "focusedOptionId": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    }
  }
};