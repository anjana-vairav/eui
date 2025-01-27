"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorStopThumb = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _utils2 = require("../utils");

var _services = require("../../../services");

var _button = require("../../button");

var _color_picker = require("../color_picker");

var _flex = require("../../flex");

var _form = require("../../form");

var _i18n = require("../../i18n");

var _range_thumb = require("../../form/range/range_thumb");

var _popover = require("../../popover");

var _accessibility = require("../../accessibility");

var _spacer = require("../../spacer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EuiColorStopThumb = function EuiColorStopThumb(_ref) {
  var className = _ref.className,
      stop = _ref.stop,
      color = _ref.color,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onRemove = _ref.onRemove,
      globalMin = _ref.globalMin,
      globalMax = _ref.globalMax,
      localMin = _ref.localMin,
      localMax = _ref.localMax,
      min = _ref.min,
      max = _ref.max,
      _ref$isRangeMin = _ref.isRangeMin,
      isRangeMin = _ref$isRangeMin === void 0 ? false : _ref$isRangeMin,
      _ref$isRangeMax = _ref.isRangeMax,
      isRangeMax = _ref$isRangeMax === void 0 ? false : _ref$isRangeMax,
      parentRef = _ref.parentRef,
      colorPickerMode = _ref.colorPickerMode,
      colorPickerSwatches = _ref.colorPickerSwatches,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      isPopoverOpen = _ref.isPopoverOpen,
      openPopover = _ref.openPopover,
      closePopover = _ref.closePopover,
      dataIndex = _ref['data-index'],
      ariaValueText = _ref['aria-valuetext'];

  var _useState = (0, _react.useState)(isPopoverOpen),
      _useState2 = _slicedToArray(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _utils.isColorInvalid)(color)),
      _useState4 = _slicedToArray(_useState3, 2),
      colorIsInvalid = _useState4[0],
      setColorIsInvalid = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _utils.isStopInvalid)(stop)),
      _useState6 = _slicedToArray(_useState5, 2),
      stopIsInvalid = _useState6[0],
      setStopIsInvalid = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      numberInputRef = _useState8[0],
      setNumberInputRef = _useState8[1];

  var popoverRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (isPopoverOpen && popoverRef && popoverRef.current) {
      popoverRef.current.positionPopoverFixed();
    }
  }, [isPopoverOpen, stop]);

  var getStopFromMouseLocationFn = function getStopFromMouseLocationFn(location) {
    // Guard against `null` ref in usage
    return (0, _utils.getStopFromMouseLocation)(location, parentRef, globalMin, globalMax);
  };

  var getPositionFromStopFn = function getPositionFromStopFn(stop) {
    // Guard against `null` ref in usage
    return (0, _utils.getPositionFromStop)(stop, parentRef, globalMin, globalMax);
  };

  var handleOnRemove = function handleOnRemove() {
    if (onRemove) {
      closePopover();
      onRemove();
    }
  };

  var handleFocus = function handleFocus() {
    setHasFocus(true);

    if (onFocus) {
      onFocus();
    }
  };

  var handleColorChange = function handleColorChange(value) {
    setColorIsInvalid((0, _utils.isColorInvalid)(value));
    onChange({
      stop: stop,
      color: value
    });
  };

  var handleStopChange = function handleStopChange(value) {
    var willBeInvalid = value > localMax || value < localMin;

    if (willBeInvalid) {
      if (value > localMax) {
        value = localMax;
      }

      if (value < localMin) {
        value = localMin;
      }
    }

    setStopIsInvalid((0, _utils.isStopInvalid)(value));
    onChange({
      stop: value,
      color: color
    });
  };

  var handleStopInputChange = function handleStopInputChange(value) {
    var willBeInvalid = value > globalMax || value < globalMin;

    if (willBeInvalid) {
      if (value > globalMax && max != null) {
        value = globalMax;
      }

      if (value < globalMin && min != null) {
        value = globalMin;
      }
    }

    setStopIsInvalid((0, _utils.isStopInvalid)(value));
    onChange({
      stop: value,
      color: color
    });
  };

  var handlePointerChange = function handlePointerChange(location, isFirstInteraction) {
    if (isFirstInteraction) return; // Prevents change on the inital MouseDown event

    if (parentRef == null) {
      return;
    }

    var newStop = getStopFromMouseLocationFn(location);
    handleStopChange(newStop);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.keyCode) {
      case _services.keyCodes.ENTER:
        e.preventDefault();
        openPopover();
        break;

      case _services.keyCodes.LEFT:
        e.preventDefault();
        if (readOnly) return;
        handleStopChange(stop - 1);
        break;

      case _services.keyCodes.RIGHT:
        e.preventDefault();
        if (readOnly) return;
        handleStopChange(stop + 1);
        break;
    }
  };

  var _useMouseMove = (0, _utils2.useMouseMove)(handlePointerChange),
      _useMouseMove2 = _slicedToArray(_useMouseMove, 2),
      handleMouseDown = _useMouseMove2[0],
      handleInteraction = _useMouseMove2[1];

  var handleOnMouseDown = function handleOnMouseDown(e) {
    if (!readOnly) {
      handleMouseDown(e);
    }

    openPopover();
  };

  var handleTouchStart = function handleTouchStart(e) {
    if (!readOnly) {
      handleInteraction(e);
    }

    openPopover();
  };

  var classes = (0, _classnames.default)('euiColorStopPopover', {
    'euiColorStopPopover-hasFocus': hasFocus || isPopoverOpen
  }, className);
  return _react.default.createElement(_popover.EuiPopover, {
    ref: popoverRef,
    className: classes,
    anchorClassName: "euiColorStopPopover__anchor",
    panelPaddingSize: "s",
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    ownFocus: isPopoverOpen,
    initialFocus: numberInputRef,
    panelClassName: numberInputRef ? undefined : 'euiColorStopPopover-isLoadingPanel',
    style: {
      left: "".concat(getPositionFromStopFn(stop), "%")
    },
    button: _react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColorStopThumb.buttonAriaLabel', 'euiColorStopThumb.buttonTitle'],
      defaults: ['Press the Enter key to modify this stop. Press Escape to focus the group', 'Click to edit, drag to reposition']
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          buttonAriaLabel = _ref3[0],
          buttonTitle = _ref3[1];

      var ariaLabel = buttonAriaLabel;
      var title = buttonTitle;
      return _react.default.createElement(_range_thumb.EuiRangeThumb, {
        "data-test-subj": "euiColorStopThumb",
        "data-index": dataIndex,
        min: localMin,
        max: localMax,
        value: stop,
        onFocus: handleFocus,
        onBlur: function onBlur() {
          return setHasFocus(false);
        },
        onMouseOver: function onMouseOver() {
          return setHasFocus(true);
        },
        onMouseOut: function onMouseOut() {
          return setHasFocus(false);
        },
        onKeyDown: handleKeyDown,
        onMouseDown: handleOnMouseDown,
        onTouchStart: handleTouchStart,
        onTouchMove: readOnly ? undefined : handleInteraction,
        "aria-valuetext": ariaValueText,
        "aria-label": ariaLabel,
        title: title,
        className: "euiColorStopThumb",
        tabIndex: -1,
        style: {
          background: color
        },
        disabled: disabled
      });
    })
  }, _react.default.createElement("div", {
    className: "euiColorStop",
    "data-test-subj": "euiColorStopPopover"
  }, _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", {
    "aria-live": "polite"
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColorStopThumb.screenReaderAnnouncement",
    default: "A popup with a color stop edit form opened. Tab forward to cycle through form controls or press escape to close this popup."
  }))), _react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "s",
    responsive: false
  }, _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiColorStopThumb.stopLabel', 'euiColorStopThumb.stopErrorMessage'],
    defaults: ['Stop value', 'Value is out of range']
  }, function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        stopLabel = _ref5[0],
        stopErrorMessage = _ref5[1];

    return _react.default.createElement(_form.EuiFormRow, {
      label: stopLabel,
      display: "rowCompressed",
      readOnly: readOnly,
      isInvalid: stopIsInvalid,
      error: stopIsInvalid ? stopErrorMessage : null
    }, _react.default.createElement(_form.EuiFieldNumber, {
      inputRef: setNumberInputRef,
      compressed: true,
      readOnly: readOnly,
      min: isRangeMin || min == null ? null : localMin,
      max: isRangeMax || max == null ? null : localMax,
      value: (0, _utils.isStopInvalid)(stop) ? '' : stop,
      isInvalid: stopIsInvalid,
      onChange: function onChange(e) {
        return handleStopInputChange(parseFloat(e.target.value));
      }
    }));
  })), _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, _react.default.createElement(_form.EuiFormRow, {
    grow: "false",
    display: "rowCompressed",
    hasEmptyLabelSpace: true
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColorStopThumb.removeLabel",
    default: "Remove this stop"
  }, function (removeLabel) {
    return _react.default.createElement(_button.EuiButtonIcon, {
      iconType: "trash",
      color: "danger",
      "aria-label": removeLabel,
      title: removeLabel,
      disabled: !onRemove || readOnly,
      onClick: handleOnRemove
    });
  })))), !readOnly && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_spacer.EuiSpacer, {
    size: "m"
  }), _react.default.createElement(_color_picker.EuiColorPicker, {
    onChange: handleColorChange,
    color: color,
    mode: colorPickerMode,
    swatches: colorPickerSwatches,
    display: "inline"
  })), colorPickerMode !== 'swatch' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_spacer.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiColorStopThumb.hexLabel', 'euiColorStopThumb.hexErrorMessage'],
    defaults: ['Hex color', 'Invalid hex value']
  }, function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        hexLabel = _ref7[0],
        hexErrorMessage = _ref7[1];

    return _react.default.createElement(_form.EuiFormRow, {
      label: hexLabel,
      display: "rowCompressed",
      readOnly: readOnly,
      isInvalid: colorIsInvalid,
      error: colorIsInvalid ? hexErrorMessage : null
    }, _react.default.createElement(_form.EuiFieldText, {
      compressed: true,
      readOnly: readOnly,
      value: color,
      isInvalid: colorIsInvalid,
      onChange: function onChange(e) {
        return handleColorChange(e.target.value);
      }
    }));
  }))));
};

exports.EuiColorStopThumb = EuiColorStopThumb;
EuiColorStopThumb.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  globalMin: _propTypes.default.number.isRequired,
  globalMax: _propTypes.default.number.isRequired,
  localMin: _propTypes.default.number.isRequired,
  localMax: _propTypes.default.number.isRequired,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  isRangeMin: _propTypes.default.bool,
  isRangeMax: _propTypes.default.bool,
  parentRef: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.oneOf([null])]),
  colorPickerMode: _propTypes.default.oneOf(["default", "swatch", "picker"]).isRequired,
  colorPickerSwatches: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  isPopoverOpen: _propTypes.default.bool.isRequired,
  openPopover: _propTypes.default.func.isRequired,
  closePopover: _propTypes.default.func.isRequired,
  "data-index": _propTypes.default.string,
  "aria-valuetext": _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  stop: _propTypes.default.number.isRequired,
  color: _propTypes.default.string.isRequired
};
EuiColorStopThumb.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiColorStopThumb",
  "props": {
    "isRangeMin": {
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
    "isRangeMax": {
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
    "className": {
      "type": {
        "name": "string"
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
    },
    "onRemove": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "globalMin": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "globalMax": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "localMin": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "localMax": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "min": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "parentRef": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "enum",
          "value": [{
            "value": "null",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": ""
    },
    "colorPickerMode": {
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
      "required": true,
      "description": ""
    },
    "colorPickerSwatches": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "readOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isPopoverOpen": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "openPopover": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "closePopover": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "data-index": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-valuetext": {
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
    "stop": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "color": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};