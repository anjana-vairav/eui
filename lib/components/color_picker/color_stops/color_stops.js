"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorStops = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _color_stop_thumb = require("./color_stop_thumb");

var _utils = require("./utils");

var _i18n = require("../../i18n");

var _range_highlight = require("../../form/range/range_highlight");

var _range_track = require("../../form/range/range_track");

var _range_wrapper = require("../../form/range/range_wrapper");

var _accessibility = require("../../accessibility");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Because of how the thumbs are rendered in the popover, using ref results in an infinite loop.
// We'll instead use old fashioned namespaced DOM selectors to get references
var STOP_ATTR = 'euiColorStop_';
var DEFAULT_MIN = 0;
var DEFAULT_MAX = 100;

function isTargetAThumb(target) {
  var element = target;
  var attr = element.getAttribute('data-index');
  return attr && attr.indexOf(STOP_ATTR) > -1;
}

function sortStops(colorStops) {
  return colorStops.map(function (el, index) {
    return _objectSpread({}, el, {
      id: index
    });
  }).sort(function (a, b) {
    return a.stop - b.stop;
  });
}

function getValidStops(colorStops) {
  return colorStops.map(function (el) {
    return el.stop;
  }).filter(function (stop) {
    return !isNaN(stop);
  });
}

function getRangeMin(colorStops, min) {
  var rangeMin = min || DEFAULT_MIN;
  var stops = getValidStops(colorStops);
  var first = Math.min.apply(Math, stops); // https://johnresig.com/blog/fast-javascript-maxmin/

  if (first < rangeMin) {
    if (stops.length === 1) {
      return first - DEFAULT_MIN;
    } else if (stops.length >= 2) {
      return first;
    }
  }

  return DEFAULT_MIN;
}

function getRangeMax(colorStops, max) {
  var rangeMax = max || DEFAULT_MAX;
  var stops = getValidStops(colorStops);
  var last = Math.max.apply(Math, stops); // https://johnresig.com/blog/fast-javascript-maxmin/

  if (last > rangeMax) {
    if (stops.length === 1) {
      return last + DEFAULT_MAX;
    } else if (stops.length >= 2) {
      return last;
    }
  }

  return DEFAULT_MAX;
}

var EuiColorStops = function EuiColorStops(_ref) {
  var _ref$addColor = _ref.addColor,
      addColor = _ref$addColor === void 0 ? _services.DEFAULT_VISUALIZATION_COLOR : _ref$addColor,
      max = _ref.max,
      min = _ref.min,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'default' : _ref$mode,
      colorStops = _ref.colorStops,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      compressed = _ref.compressed,
      fullWidth = _ref.fullWidth,
      className = _ref.className,
      label = _ref.label,
      _ref$stopType = _ref.stopType,
      stopType = _ref$stopType === void 0 ? 'gradient' : _ref$stopType,
      swatches = _ref.swatches;
  var sortedStops = (0, _react.useMemo)(function () {
    return sortStops(colorStops);
  }, [colorStops]);
  var rangeMax = (0, _react.useMemo)(function () {
    var result = max != null ? max : getRangeMax(colorStops, max);
    var width = max != null ? 0 : Math.round(result * 0.05);
    return !isNaN(result) ? result + width : DEFAULT_MAX;
  }, [colorStops, max]);
  var rangeMin = (0, _react.useMemo)(function () {
    var result = min != null ? min : getRangeMin(colorStops, min);
    var width = min != null ? 0 : Math.round(rangeMax * 0.05);
    return !isNaN(result) ? result - width : DEFAULT_MIN;
  }, [colorStops, min, rangeMax]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedStopIndex = _useState4[0],
      setFocusedStopIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      openedStopId = _useState6[0],
      setOpenedStopId = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      wrapperRef = _useState8[0],
      setWrapperRef = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      addTargetPosition = _useState10[0],
      setAddTargetPosition = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isHoverDisabled = _useState12[0],
      setIsHoverDisabled = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      focusStopOnUpdate = _useState14[0],
      setFocusStopOnUpdate = _useState14[1];

  var isNotInteractive = disabled || readOnly;
  var classes = (0, _classnames.default)('euiColorStops', {
    'euiColorStops-isDragging': isHoverDisabled,
    'euiColorStops-isDisabled': disabled,
    'euiColorStops-isReadOnly': readOnly
  }, className);

  var getStopFromMouseLocationFn = function getStopFromMouseLocationFn(location) {
    // Guard against `null` ref in usage
    return (0, _utils.getStopFromMouseLocation)(location, wrapperRef, min || rangeMin, max || rangeMax);
  };

  var getPositionFromStopFn = function getPositionFromStopFn(stop) {
    // Guard against `null` ref in usage
    return (0, _utils.getPositionFromStop)(stop, wrapperRef, min || rangeMin, max || rangeMax);
  };

  var handleOnChange = function handleOnChange(colorStops) {
    onChange(colorStops, (0, _utils.isInvalid)(colorStops));
  };

  var handleStopChange = function handleStopChange(stop, id) {
    var newColorStops = _toConsumableArray(colorStops);

    newColorStops.splice(id, 1, stop);
    handleOnChange(newColorStops);
  };

  var onFocusStop = (0, _react.useCallback)(function (index) {
    if (disabled || !wrapperRef) return;
    var toFocus = wrapperRef.querySelector("[data-index=".concat(STOP_ATTR).concat(index, "]"));

    if (toFocus) {
      setHasFocus(false);
      setFocusedStopIndex(index);
      toFocus.focus();
    }
  }, [disabled, wrapperRef]);
  (0, _react.useEffect)(function () {
    if (focusStopOnUpdate !== null) {
      var toFocusIndex = sortedStops.map(function (el) {
        return el.stop;
      }).indexOf(focusStopOnUpdate);
      var toFocusId = toFocusIndex > -1 ? sortedStops[toFocusIndex].id : null;
      onFocusStop(toFocusIndex);
      setOpenedStopId(toFocusId);
      setFocusStopOnUpdate(null);
    }
  }, [sortedStops, onFocusStop, setFocusStopOnUpdate, focusStopOnUpdate]);

  var onFocusWrapper = function onFocusWrapper() {
    setFocusedStopIndex(null);

    if (wrapperRef) {
      wrapperRef.focus();
    }
  };

  var onAdd = function onAdd() {
    var stops = sortedStops.map(function (_ref2) {
      var color = _ref2.color,
          stop = _ref2.stop;
      return {
        color: color,
        stop: stop
      };
    });
    var newColorStops = (0, _utils.addStop)(stops, addColor, max || rangeMax);
    setFocusStopOnUpdate(newColorStops[colorStops.length].stop);
    handleOnChange(newColorStops);
  };

  var onRemove = function onRemove(index) {
    var newColorStops = (0, _utils.removeStop)(colorStops, index);
    onFocusWrapper();
    handleOnChange(newColorStops);
  };

  var handleAddHover = function handleAddHover(e) {
    if (isNotInteractive || !wrapperRef) return;
    var stop = getStopFromMouseLocationFn({
      x: e.pageX,
      y: e.pageY
    });
    var position = getPositionFromStopFn(stop);
    setAddTargetPosition(position);
  };

  var handleAddClick = function handleAddClick(e) {
    if (isNotInteractive || isTargetAThumb(e.target) || !wrapperRef) return;
    var newStop = getStopFromMouseLocationFn({
      x: e.pageX,
      y: e.pageY
    });
    var newColorStops = (0, _utils.addDefinedStop)(colorStops, newStop, addColor);
    setFocusStopOnUpdate(newStop);
    handleOnChange(newColorStops);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (disabled) return;

    switch (e.keyCode) {
      case _services.keyCodes.ESCAPE:
        onFocusWrapper();
        break;

      case _services.keyCodes.ENTER:
        if (readOnly || !hasFocus) return;
        onAdd();
        break;

      case _services.keyCodes.BACKSPACE:
        if (readOnly || hasFocus || focusedStopIndex == null) return;

        if (isTargetAThumb(e.target)) {
          if (min == null && focusedStopIndex === 0 || max == null && focusedStopIndex === sortedStops.length - 1) {
            return;
          }

          var index = sortedStops[focusedStopIndex].id;
          onRemove(index);
        }

        break;

      case _services.keyCodes.DOWN:
        if (e.target === wrapperRef || isTargetAThumb(e.target)) {
          e.preventDefault();

          if (focusedStopIndex == null) {
            onFocusStop(0);
          } else {
            var next = focusedStopIndex === sortedStops.length - 1 ? focusedStopIndex : focusedStopIndex + 1;
            onFocusStop(next);
          }
        }

        break;

      case _services.keyCodes.UP:
        if (e.target === wrapperRef || isTargetAThumb(e.target)) {
          e.preventDefault();

          if (focusedStopIndex == null) {
            onFocusStop(0);
          } else {
            var _next = focusedStopIndex === 0 ? focusedStopIndex : focusedStopIndex - 1;

            onFocusStop(_next);
          }
        }

        break;
    }
  };

  var thumbs = sortedStops.map(function (colorStop, index) {
    return _react.default.createElement(_color_stop_thumb.EuiColorStopThumb, {
      isRangeMin: min == null && colorStop.stop === rangeMin,
      isRangeMax: max == null && colorStop.stop === rangeMax,
      "data-index": "".concat(STOP_ATTR).concat(index),
      key: colorStop.id,
      globalMin: min || rangeMin,
      globalMax: max || rangeMax,
      min: min,
      max: max,
      localMin: index === 0 ? min || rangeMin : sortedStops[index - 1].stop + 1,
      localMax: index === sortedStops.length - 1 ? max || rangeMax : sortedStops[index + 1].stop - 1,
      stop: colorStop.stop,
      color: colorStop.color,
      onRemove: sortedStops.length > 1 ? function () {
        return onRemove(colorStop.id);
      } : undefined,
      onChange: function onChange(stop) {
        return handleStopChange(stop, colorStop.id);
      },
      onFocus: function onFocus() {
        return setFocusedStopIndex(index);
      },
      parentRef: wrapperRef,
      colorPickerMode: mode,
      colorPickerSwatches: swatches,
      disabled: disabled,
      readOnly: readOnly,
      "aria-valuetext": "Stop: ".concat(colorStop.stop, ", Color: ").concat(colorStop.color, " (").concat(index + 1, " of ").concat(colorStops.length, ")"),
      isPopoverOpen: colorStop.id === openedStopId,
      openPopover: function openPopover() {
        setOpenedStopId(colorStop.id);
      },
      closePopover: function closePopover() {
        setOpenedStopId(null);
      }
    });
  });
  var positions = wrapperRef ? sortedStops.map(function (_ref3) {
    var stop = _ref3.stop;
    return getPositionFromStopFn(stop);
  }) : [];

  var gradientStop = function gradientStop(colorStop, index) {
    if (index === 0) {
      return "currentColor, currentColor ".concat(positions[index], "%, ").concat(colorStop.color, " ").concat(positions[index], "%");
    }

    return "".concat(colorStop.color, " ").concat(positions[index], "%");
  };

  var fixedStop = function fixedStop(colorStop, index) {
    if (index === sortedStops.length - 1) {
      return gradientStop(colorStop, index);
    } else {
      return "".concat(gradientStop(colorStop, index), ", ").concat(gradientStop(colorStop, index + 1));
    }
  };

  var linearGradient = sortedStops.map(stopType === 'gradient' ? gradientStop : fixedStop);
  var background = "linear-gradient(to right,".concat(linearGradient, ")");
  return _react.default.createElement(_range_wrapper.EuiRangeWrapper, {
    "data-test-subj": "euiColorStops",
    ref: setWrapperRef,
    className: classes,
    fullWidth: fullWidth,
    tabIndex: disabled ? -1 : 0,
    onMouseDown: function onMouseDown() {
      return !disabled && setIsHoverDisabled(true);
    },
    onMouseUp: function onMouseUp() {
      return !disabled && setIsHoverDisabled(false);
    },
    onMouseLeave: function onMouseLeave() {
      return !disabled && setIsHoverDisabled(false);
    },
    onKeyDown: handleKeyDown,
    onFocus: function onFocus(e) {
      if (e.target === wrapperRef) {
        setHasFocus(true);
      }
    },
    onBlur: function onBlur() {
      return setHasFocus(false);
    }
  }, _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", {
    "aria-live": "polite"
  }, _react.default.createElement(_i18n.EuiI18n, {
    values: {
      label: label,
      disabled: disabled ? 'Disabled.' : '',
      readOnly: readOnly ? 'Read-only.' : ''
    },
    token: "euiColorStops.screenReaderAnnouncement",
    default: "{label}: {readOnly} {disabled} Color stop picker. Each stop consists of a number and corresponding color value. Use the Down and Up arrow keys to select individual stops. Press the Enter key to create a new stop."
  }))), _react.default.createElement(_range_track.EuiRangeTrack, {
    min: min || rangeMin,
    max: max || rangeMax,
    compressed: compressed,
    disabled: disabled,
    step: 1
  }, _react.default.createElement(_range_highlight.EuiRangeHighlight, {
    className: "euiColorStops__highlight",
    min: min || rangeMin,
    max: max || rangeMax,
    lowerValue: min || rangeMin,
    upperValue: max || rangeMax,
    background: background,
    compressed: compressed
  }), _react.default.createElement("div", {
    "data-test-subj": "euiColorStopsAdd",
    className: (0, _classnames.default)('euiColorStops__addContainer', {
      'euiColorStops__addContainer-isDisabled': isHoverDisabled || disabled || readOnly
    }),
    onClick: handleAddClick,
    onMouseMove: handleAddHover
  }, _react.default.createElement("div", {
    className: "euiColorStops__addTarget",
    style: {
      left: "".concat(addTargetPosition, "%")
    }
  })), thumbs));
};

exports.EuiColorStops = EuiColorStops;
EuiColorStops.propTypes = {
  addColor: _propTypes.default.string,
  colorStops: _propTypes.default.arrayOf(_propTypes.default.shape({
    stop: _propTypes.default.number.isRequired,
    color: _propTypes.default.string.isRequired
  }).isRequired).isRequired,
  onChange: _propTypes.default.func.isRequired,
  fullWidth: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  className: _propTypes.default.string,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  label: _propTypes.default.string.isRequired,
  stopType: _propTypes.default.oneOf(["fixed", "gradient"]),
  mode: _propTypes.default.oneOf(["default", "swatch", "picker"]),
  swatches: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiColorStops.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiColorStops",
  "props": {
    "addColor": {
      "defaultValue": {
        "value": "DEFAULT_VISUALIZATION_COLOR",
        "computed": true
      },
      "type": {
        "name": "string"
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
      "description": ""
    },
    "stopType": {
      "defaultValue": {
        "value": "'gradient'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"fixed\"",
          "computed": false
        }, {
          "value": "\"gradient\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "colorStops": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "stop": {
              "name": "number",
              "required": true
            },
            "color": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "fullWidth": {
      "type": {
        "name": "bool"
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
    "invalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
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
    "max": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "min": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "swatches": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
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
    }
  }
};