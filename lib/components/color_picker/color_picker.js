"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorPicker = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _color_picker_swatch = require("./color_picker_swatch");

var _focus_trap = require("../focus_trap");

var _flex = require("../flex");

var _field_text = require("../form/field_text");

var _form_control_layout = require("../form/form_control_layout");

var _i18n = require("../i18n");

var _popover = require("../popover");

var _services = require("../../services");

var _hue = require("./hue");

var _saturation = require("./saturation");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isKeyboardEvent(event) {
  return _typeof(event) === 'object' && 'keyCode' in event;
}

var EuiColorPicker = function EuiColorPicker(_ref) {
  var button = _ref.button,
      className = _ref.className,
      color = _ref.color,
      _ref$compressed = _ref.compressed,
      compressed = _ref$compressed === void 0 ? false : _ref$compressed,
      disabled = _ref.disabled,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'default' : _ref$display,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      id = _ref.id,
      isInvalid = _ref.isInvalid,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'default' : _ref$mode,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$swatches = _ref.swatches,
      swatches = _ref$swatches === void 0 ? _services.VISUALIZATION_COLORS : _ref$swatches,
      popoverZIndex = _ref.popoverZIndex;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isColorSelectorShown = _useState2[0],
      setIsColorSelectorShown = _useState2[1];

  var _useState3 = (0, _react.useState)(color ? (0, _services.hexToHsv)(color) : (0, _services.hexToHsv)('')),
      _useState4 = _slicedToArray(_useState3, 2),
      colorAsHsv = _useState4[0],
      setColorAsHsv = _useState4[1];

  var _useState5 = (0, _react.useState)(color),
      _useState6 = _slicedToArray(_useState5, 2),
      lastHex = _useState6[0],
      setLastHex = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      inputRef = _useState8[0],
      setInputRef = _useState8[1]; // Ideally this is uses `useRef`, but `EuiFieldText` isn't ready for that


  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      popoverShouldOwnFocus = _useState10[0],
      setPopoverShouldOwnFocus = _useState10[1];

  var satruationRef = (0, _react.useRef)(null);
  var swatchRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    // Mimics `componentDidMount` and `componentDidUpdate`
    if (lastHex !== color) {
      // Only react to outside changes
      var newColorAsHsv = color ? (0, _services.hexToHsv)(color) : (0, _services.hexToHsv)('');
      setColorAsHsv(newColorAsHsv);
    }
  }, [color, lastHex]);
  var classes = (0, _classnames.default)('euiColorPicker', className);
  var panelClasses = (0, _classnames.default)('euiColorPicker__popoverPanel', {
    'euiColorPicker__popoverPanel--pickerOnly': mode === 'picker',
    'euiColorPicker__popoverPanel--customButton': button
  });
  var swatchClass = 'euiColorPicker__swatchSelect';
  var testSubjAnchor = 'colorPickerAnchor';
  var testSubjPopover = 'colorPickerPopover';

  var handleOnChange = function handleOnChange(hex) {
    setLastHex(hex);
    onChange(hex);
  };

  var closeColorSelector = function closeColorSelector() {
    var shouldDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (onBlur) {
      onBlur();
    }

    if (shouldDelay) {
      setTimeout(function () {
        return setIsColorSelectorShown(false);
      });
    } else {
      setIsColorSelectorShown(false);
    }
  };

  var showColorSelector = function showColorSelector() {
    var shouldFocusInside = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (isColorSelectorShown || readOnly) return;

    if (onFocus) {
      onFocus();
    }

    setPopoverShouldOwnFocus(shouldFocusInside);
    setIsColorSelectorShown(true);
  };

  var handleToggle = function handleToggle() {
    if (isColorSelectorShown) {
      closeColorSelector();
    } else {
      showColorSelector(true);
    }
  };

  var handleFinalSelection = function handleFinalSelection() {
    // When the trigger is an input, focus the input so you can adjust
    if (inputRef) {
      inputRef.focus();
    }

    closeColorSelector(true);
  };

  var handleOnKeyDown = function handleOnKeyDown(e) {
    if (e.keyCode === _services.keyCodes.ENTER) {
      if (isColorSelectorShown) {
        handleFinalSelection();
      } else {
        showColorSelector();
      }
    }
  };

  var handleInputActivity = function handleInputActivity(e) {
    if (isKeyboardEvent(e)) {
      if (e.keyCode === _services.keyCodes.ENTER) {
        e.preventDefault();
        handleToggle();
      }
    } else {
      showColorSelector();
    }
  };

  var handleToggleOnKeyDown = function handleToggleOnKeyDown(e) {
    if (e.keyCode === _services.keyCodes.DOWN) {
      e.preventDefault();

      if (isColorSelectorShown) {
        var nextFocusEl = mode !== 'swatch' ? satruationRef : swatchRef;

        if (nextFocusEl.current) {
          nextFocusEl.current.focus();
        }
      } else {
        showColorSelector(true);
      }
    }
  };

  var handleColorInput = function handleColorInput(e) {
    handleOnChange(e.target.value);

    if ((0, _services.isValidHex)(e.target.value)) {
      setColorAsHsv((0, _services.hexToHsv)(e.target.value));
    }
  };

  var handleColorSelection = function handleColorSelection(color) {
    var h = colorAsHsv.h;
    var hue = h ? h : 1;

    var newHsv = _objectSpread({}, color, {
      h: hue
    });

    handleOnChange((0, _services.hsvToHex)(newHsv));
    setColorAsHsv(newHsv);
  };

  var handleHueSelection = function handleHueSelection(hue) {
    var s = colorAsHsv.s,
        v = colorAsHsv.v;
    var satVal = s && v ? {
      s: s,
      v: v
    } : {
      s: 1,
      v: 1
    };

    var newHsv = _objectSpread({}, satVal, {
      h: hue
    });

    handleOnChange((0, _services.hsvToHex)(newHsv));
    setColorAsHsv(newHsv);
  };

  var handleSwatchSelection = function handleSwatchSelection(color) {
    handleOnChange(color);
    setColorAsHsv((0, _services.hexToHsv)(color));
    handleFinalSelection();
  };

  var composite = _react.default.createElement(_react.default.Fragment, null, mode !== 'swatch' && _react.default.createElement("div", {
    onKeyDown: handleOnKeyDown
  }, _react.default.createElement(_saturation.EuiSaturation, {
    id: id,
    color: _typeof(colorAsHsv) === 'object' ? colorAsHsv : undefined,
    hex: color || undefined,
    onChange: handleColorSelection,
    ref: satruationRef
  }), _react.default.createElement(_hue.EuiHue, {
    id: id,
    hue: _typeof(colorAsHsv) === 'object' ? colorAsHsv.h : undefined,
    hex: color || undefined,
    onChange: handleHueSelection
  })), mode !== 'picker' && _react.default.createElement(_flex.EuiFlexGroup, {
    wrap: true,
    responsive: false,
    gutterSize: "s",
    role: "listbox"
  }, swatches.map(function (swatch, index) {
    return _react.default.createElement(_flex.EuiFlexItem, {
      grow: false,
      key: swatch
    }, _react.default.createElement(_i18n.EuiI18n, {
      token: "euiColorPicker.swatchAriaLabel",
      values: {
        swatch: swatch
      },
      default: "Select {swatch} as the color"
    }, function (swatchAriaLabel) {
      return _react.default.createElement(_color_picker_swatch.EuiColorPickerSwatch, {
        className: swatchClass,
        color: swatch,
        onClick: function onClick() {
          return handleSwatchSelection(swatch);
        },
        "aria-label": swatchAriaLabel,
        role: "option",
        ref: index === 0 ? swatchRef : undefined
      });
    }));
  })));

  var buttonOrInput;

  if (button) {
    buttonOrInput = (0, _react.cloneElement)(button, {
      onClick: handleToggle,
      id: id,
      disabled: disabled,
      'data-test-subj': testSubjAnchor
    });
  } else {
    var showColor = color && (0, _services.isValidHex)(color);
    buttonOrInput = _react.default.createElement(_form_control_layout.EuiFormControlLayout, {
      icon: !readOnly ? {
        type: 'arrowDown',
        side: 'right'
      } : undefined,
      readOnly: readOnly,
      fullWidth: fullWidth,
      compressed: compressed,
      onKeyDown: handleToggleOnKeyDown
    }, _react.default.createElement("div", {
      // Used to pass the chosen color through to form layout SVG using currentColor
      style: {
        color: showColor && color ? color : undefined
      }
    }, _react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColorPicker.openLabel', 'euiColorPicker.closeLabel'],
      defaults: ['Press the escape key to close the popover', 'Press the down key to open a popover containing color options']
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          openLabel = _ref3[0],
          closeLabel = _ref3[1];

      return _react.default.createElement(_field_text.EuiFieldText, {
        className: "euiColorPicker__input",
        onClick: handleInputActivity,
        onKeyDown: handleInputActivity,
        value: color ? color.toUpperCase() : '',
        placeholder: !color ? 'Transparent' : undefined,
        id: id,
        onChange: handleColorInput,
        maxLength: 7,
        icon: showColor ? 'swatchInput' : 'stopSlash',
        inputRef: setInputRef,
        isInvalid: isInvalid,
        compressed: compressed,
        disabled: disabled,
        readOnly: readOnly,
        fullWidth: fullWidth,
        autoComplete: "off",
        "data-test-subj": testSubjAnchor,
        "aria-label": isColorSelectorShown ? openLabel : closeLabel
      });
    })));
  }

  return display === 'inline' ? _react.default.createElement("div", {
    className: classes
  }, composite) : _react.default.createElement(_popover.EuiPopover, {
    ownFocus: popoverShouldOwnFocus,
    button: buttonOrInput,
    isOpen: isColorSelectorShown,
    closePopover: handleFinalSelection,
    zIndex: popoverZIndex,
    panelClassName: panelClasses,
    display: button ? 'inlineBlock' : 'block',
    attachToAnchor: button ? false : true,
    anchorPosition: "downLeft",
    panelPaddingSize: "s"
  }, _react.default.createElement("div", {
    className: classes,
    "data-test-subj": testSubjPopover
  }, _react.default.createElement(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: true
  }, _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", {
    "aria-live": "polite"
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColorPicker.screenReaderAnnouncement",
    default: "A popup with a range of selectable colors opened. Tab forward to cycle through colors choices or press escape to close this popup."
  }))), composite)));
};

exports.EuiColorPicker = EuiColorPicker;
EuiColorPicker.propTypes = {
  /**
     *  Custom element to use instead of text input
     */
  button: _propTypes.default.element,

  /**
     *  Use the compressed style for EuiFieldText
     */
  compressed: _propTypes.default.bool,
  display: _propTypes.default.oneOf(["default", "inline"]),
  disabled: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  id: _propTypes.default.string,

  /**
     *  Custom validation flag
     */
  isInvalid: _propTypes.default.bool,

  /**
     * Choose between swatches with gradient picker (default), swatches only, or gradient picker only.
     */
  mode: _propTypes.default.oneOf(["default", "swatch", "picker"]),

  /**
     *  Custom z-index for the popover
     */
  popoverZIndex: _propTypes.default.number,
  readOnly: _propTypes.default.bool,

  /**
     *  Array of hex strings (3 or 6 character) to use as swatch options. Defaults to EUI visualization colors
     */
  swatches: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     *  Hex string (3 or 6 character). Empty string will register as 'transparent'
     */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf([null])]),
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func
};
EuiColorPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiColorPicker",
  "props": {
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Use the compressed style for EuiFieldText"
    },
    "display": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"inline\"",
          "computed": false
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
    "mode": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"swatch\"",
          "computed": false
        }, {
          "value": "\"picker\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Choose between swatches with gradient picker (default), swatches only, or gradient picker only."
    },
    "readOnly": {
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
    "swatches": {
      "defaultValue": {
        "value": "VISUALIZATION_COLORS",
        "computed": true
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false,
      "description": "Array of hex strings (3 or 6 character) to use as swatch options. Defaults to EUI visualization colors"
    },
    "button": {
      "type": {
        "name": "element"
      },
      "required": false,
      "description": "Custom element to use instead of text input"
    },
    "disabled": {
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
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Custom validation flag"
    },
    "popoverZIndex": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Custom z-index for the popover"
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
    "color": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "enum",
          "value": [{
            "value": "null",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Hex string (3 or 6 character). Empty string will register as 'transparent'"
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
      "required": true,
      "description": ""
    },
    "onFocus": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};