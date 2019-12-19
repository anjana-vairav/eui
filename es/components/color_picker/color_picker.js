function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import PropTypes from "prop-types";
import React, { cloneElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiColorPickerSwatch } from './color_picker_swatch';
import { EuiFocusTrap } from '../focus_trap';
import { EuiFlexGroup, EuiFlexItem } from '../flex'; // @ts-ignore

import { EuiFieldText } from '../form/field_text';
import { EuiFormControlLayout } from '../form/form_control_layout';
import { EuiI18n } from '../i18n';
import { EuiPopover } from '../popover';
import { VISUALIZATION_COLORS, keyCodes, hexToHsv, hsvToHex, isValidHex } from '../../services';
import { EuiHue } from './hue';
import { EuiSaturation } from './saturation';

function isKeyboardEvent(event) {
  return _typeof(event) === 'object' && 'keyCode' in event;
}

export var EuiColorPicker = function EuiColorPicker(_ref) {
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
      swatches = _ref$swatches === void 0 ? VISUALIZATION_COLORS : _ref$swatches,
      popoverZIndex = _ref.popoverZIndex;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isColorSelectorShown = _useState2[0],
      setIsColorSelectorShown = _useState2[1];

  var _useState3 = useState(color ? hexToHsv(color) : hexToHsv('')),
      _useState4 = _slicedToArray(_useState3, 2),
      colorAsHsv = _useState4[0],
      setColorAsHsv = _useState4[1];

  var _useState5 = useState(color),
      _useState6 = _slicedToArray(_useState5, 2),
      lastHex = _useState6[0],
      setLastHex = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      inputRef = _useState8[0],
      setInputRef = _useState8[1]; // Ideally this is uses `useRef`, but `EuiFieldText` isn't ready for that


  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      popoverShouldOwnFocus = _useState10[0],
      setPopoverShouldOwnFocus = _useState10[1];

  var satruationRef = useRef(null);
  var swatchRef = useRef(null);
  useEffect(function () {
    // Mimics `componentDidMount` and `componentDidUpdate`
    if (lastHex !== color) {
      // Only react to outside changes
      var newColorAsHsv = color ? hexToHsv(color) : hexToHsv('');
      setColorAsHsv(newColorAsHsv);
    }
  }, [color, lastHex]);
  var classes = classNames('euiColorPicker', className);
  var panelClasses = classNames('euiColorPicker__popoverPanel', {
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
    if (e.keyCode === keyCodes.ENTER) {
      if (isColorSelectorShown) {
        handleFinalSelection();
      } else {
        showColorSelector();
      }
    }
  };

  var handleInputActivity = function handleInputActivity(e) {
    if (isKeyboardEvent(e)) {
      if (e.keyCode === keyCodes.ENTER) {
        e.preventDefault();
        handleToggle();
      }
    } else {
      showColorSelector();
    }
  };

  var handleToggleOnKeyDown = function handleToggleOnKeyDown(e) {
    if (e.keyCode === keyCodes.DOWN) {
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

    if (isValidHex(e.target.value)) {
      setColorAsHsv(hexToHsv(e.target.value));
    }
  };

  var handleColorSelection = function handleColorSelection(color) {
    var h = colorAsHsv.h;
    var hue = h ? h : 1;

    var newHsv = _objectSpread({}, color, {
      h: hue
    });

    handleOnChange(hsvToHex(newHsv));
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

    handleOnChange(hsvToHex(newHsv));
    setColorAsHsv(newHsv);
  };

  var handleSwatchSelection = function handleSwatchSelection(color) {
    handleOnChange(color);
    setColorAsHsv(hexToHsv(color));
    handleFinalSelection();
  };

  var composite = React.createElement(React.Fragment, null, mode !== 'swatch' && React.createElement("div", {
    onKeyDown: handleOnKeyDown
  }, React.createElement(EuiSaturation, {
    id: id,
    color: _typeof(colorAsHsv) === 'object' ? colorAsHsv : undefined,
    hex: color || undefined,
    onChange: handleColorSelection,
    ref: satruationRef
  }), React.createElement(EuiHue, {
    id: id,
    hue: _typeof(colorAsHsv) === 'object' ? colorAsHsv.h : undefined,
    hex: color || undefined,
    onChange: handleHueSelection
  })), mode !== 'picker' && React.createElement(EuiFlexGroup, {
    wrap: true,
    responsive: false,
    gutterSize: "s",
    role: "listbox"
  }, swatches.map(function (swatch, index) {
    return React.createElement(EuiFlexItem, {
      grow: false,
      key: swatch
    }, React.createElement(EuiI18n, {
      token: "euiColorPicker.swatchAriaLabel",
      values: {
        swatch: swatch
      },
      default: "Select {swatch} as the color"
    }, function (swatchAriaLabel) {
      return React.createElement(EuiColorPickerSwatch, {
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
    buttonOrInput = cloneElement(button, {
      onClick: handleToggle,
      id: id,
      disabled: disabled,
      'data-test-subj': testSubjAnchor
    });
  } else {
    var showColor = color && isValidHex(color);
    buttonOrInput = React.createElement(EuiFormControlLayout, {
      icon: !readOnly ? {
        type: 'arrowDown',
        side: 'right'
      } : undefined,
      readOnly: readOnly,
      fullWidth: fullWidth,
      compressed: compressed,
      onKeyDown: handleToggleOnKeyDown
    }, React.createElement("div", {
      // Used to pass the chosen color through to form layout SVG using currentColor
      style: {
        color: showColor && color ? color : undefined
      }
    }, React.createElement(EuiI18n, {
      tokens: ['euiColorPicker.openLabel', 'euiColorPicker.closeLabel'],
      defaults: ['Press the escape key to close the popover', 'Press the down key to open a popover containing color options']
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          openLabel = _ref3[0],
          closeLabel = _ref3[1];

      return React.createElement(EuiFieldText, {
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

  return display === 'inline' ? React.createElement("div", {
    className: classes
  }, composite) : React.createElement(EuiPopover, {
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
  }, React.createElement("div", {
    className: classes,
    "data-test-subj": testSubjPopover
  }, React.createElement(EuiFocusTrap, {
    clickOutsideDisables: true
  }, React.createElement(EuiScreenReaderOnly, null, React.createElement("p", {
    "aria-live": "polite"
  }, React.createElement(EuiI18n, {
    token: "euiColorPicker.screenReaderAnnouncement",
    default: "A popup with a range of selectable colors opened. Tab forward to cycle through colors choices or press escape to close this popup."
  }))), composite)));
};
EuiColorPicker.propTypes = {
  /**
     *  Custom element to use instead of text input
     */
  button: PropTypes.element,

  /**
     *  Use the compressed style for EuiFieldText
     */
  compressed: PropTypes.bool,
  display: PropTypes.oneOf(["default", "inline"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,

  /**
     *  Custom validation flag
     */
  isInvalid: PropTypes.bool,

  /**
     * Choose between swatches with gradient picker (default), swatches only, or gradient picker only.
     */
  mode: PropTypes.oneOf(["default", "swatch", "picker"]),

  /**
     *  Custom z-index for the popover
     */
  popoverZIndex: PropTypes.number,
  readOnly: PropTypes.bool,

  /**
     *  Array of hex strings (3 or 6 character) to use as swatch options. Defaults to EUI visualization colors
     */
  swatches: PropTypes.arrayOf(PropTypes.string.isRequired),
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     *  Hex string (3 or 6 character). Empty string will register as 'transparent'
     */
  color: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null])]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
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