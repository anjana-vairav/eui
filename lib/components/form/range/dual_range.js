"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDualRange = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _number = require("../../../services/number");

var _popover = require("../../popover");

var _form_control_layout = require("../form_control_layout");

var _make_id = _interopRequireDefault(require("../form_row/make_id"));

var _range_highlight = require("./range_highlight");

var _range_input = require("./range_input");

var _range_label = require("./range_label");

var _range_slider = require("./range_slider");

var _range_thumb = require("./range_thumb");

var _range_track = require("./range_track");

var _range_wrapper = require("./range_wrapper");

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

var EuiDualRange =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDualRange, _Component);

  function EuiDualRange() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiDualRange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiDualRange)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      id: _this.props.id || (0, _make_id.default)(),
      hasFocus: false,
      rangeSliderRefAvailable: false,
      isPopoverOpen: false,
      rangeWidth: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preventPopoverClose", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rangeSliderRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRangeSliderRefUpdate", function (ref) {
      _this.rangeSliderRef = ref;

      _this.setState({
        rangeSliderRefAvailable: !!ref,
        rangeWidth: !!ref ? ref.clientWidth : null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_determineInvalidThumbMovement", function (newVal, lower, upper, e) {
      // If the values are invalid, find whether the new value is in the upper
      // or lower half and move the appropriate handle to the new value,
      // while the other handle gets moved to the opposite bound (if invalid)
      var lowerHalf = Math.abs(_this.props.max - _this.props.min) / 2 + _this.props.min;

      var newValIsLow = (0, _number.isWithinRange)(_this.props.min, lowerHalf, newVal);

      if (newValIsLow) {
        lower = newVal;
        upper = !_this.upperValueIsValid ? _this.props.max : upper;
      } else {
        lower = !_this.lowerValueIsValid ? _this.props.min : lower;
        upper = newVal;
      }

      _this._handleOnChange(lower, upper, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_determineValidThumbMovement", function (newVal, lower, upper, e) {
      // Lower thumb targeted or right-moving swap has occured
      if (Math.abs(lower - newVal) < Math.abs(upper - newVal)) {
        lower = newVal;
      } // Upper thumb targeted or left-moving swap has occured
      else {
          upper = newVal;
        }

      _this._handleOnChange(lower, upper, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_determineThumbMovement", function (newVal, e) {
      // Determine thumb movement based on slider interaction
      if (!_this.isValid) {
        // Non-standard positioning follows
        _this._determineInvalidThumbMovement(newVal, _this.lowerValue, _this.upperValue, e);
      } else {
        // Standard positioning based on click event proximity to thumb locations
        _this._determineValidThumbMovement(newVal, _this.lowerValue, _this.upperValue, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleOnChange", function (lower, upper, e) {
      var isValid = (0, _number.isWithinRange)(_this.props.min, upper, lower) && (0, _number.isWithinRange)(lower, _this.props.max, upper);

      _this.props.onChange([lower, upper], isValid, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSliderChange", function (e) {
      _this._determineThumbMovement(e.target.value, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_resetToRangeEnds", function (e) {
      // Arbitrary decision to pass `min` instead of `max`. Result is the same.
      _this._determineInvalidThumbMovement(_this.props.min, _this.lowerValue, _this.upperValue, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isDirectionalKeyPress", function (e) {
      return [_services.keyCodes.UP, _services.keyCodes.RIGHT, _services.keyCodes.DOWN, _services.keyCodes.LEFT].indexOf(e.keyCode) > -1;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputKeyDown", function (e) {
      // Relevant only when initial values are both `''` and `showInput` is set
      if (_this._isDirectionalKeyPress(e) && !_this.isValid) {
        e.preventDefault();

        _this._resetToRangeEnds(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLowerInputChange", function (e) {
      _this._handleOnChange(e.target.value, _this.upperValue, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpperInputChange", function (e) {
      _this._handleOnChange(_this.lowerValue, e.target.value, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleKeyDown", function (value, e) {
      var newVal = Number(value);
      var stepRemainder = 0;
      var step = _this.props.step || 1;

      switch (e.keyCode) {
        case _services.keyCodes.UP:
        case _services.keyCodes.RIGHT:
          e.preventDefault();
          newVal += step;
          stepRemainder = (newVal - _this.props.min) % step;

          if (step !== 1 && stepRemainder > 0) {
            newVal = newVal - stepRemainder;
          }

          break;

        case _services.keyCodes.DOWN:
        case _services.keyCodes.LEFT:
          e.preventDefault();
          newVal -= step;
          stepRemainder = (newVal - _this.props.min) % step;

          if (step !== 1 && stepRemainder > 0) {
            newVal = newVal + (step - stepRemainder);
          }

          break;
      }

      return newVal;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLowerKeyDown", function (e) {
      var lower = _this.lowerValue;

      switch (e.keyCode) {
        case _services.keyCodes.TAB:
          return;

        default:
          if (!_this.lowerValueIsValid) {
            // Relevant only when initial value is `''` and `showInput` is not set
            e.preventDefault();

            _this._resetToRangeEnds(e);

            return;
          }

          lower = _this._handleKeyDown(lower, e);
      }

      if (lower >= _this.upperValue || lower < _this.props.min) return;

      _this._handleOnChange(lower, _this.upperValue, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpperKeyDown", function (e) {
      var upper = _this.upperValue;

      switch (e.keyCode) {
        case _services.keyCodes.TAB:
          return;

        default:
          if (!_this.upperValueIsValid) {
            // Relevant only when initial value is `''` and `showInput` is not set
            e.preventDefault();

            _this._resetToRangeEnds(e);

            return;
          }

          upper = _this._handleKeyDown(upper, e);
      }

      if (upper <= _this.lowerValue || upper > _this.props.max) return;

      _this._handleOnChange(_this.lowerValue, upper, e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateThumbPositionStyle", function (value, width) {
      // Calculate the left position based on value
      var decimal = (value - _this.props.min) / (_this.props.max - _this.props.min); // Must be between 0-100%

      var valuePosition = decimal <= 1 ? decimal : 1;
      valuePosition = valuePosition >= 0 ? valuePosition : 0;
      var EUI_THUMB_SIZE = 16;
      var trackWidth = _this.props.showInput === 'only' && !!width ? width : _this.rangeSliderRef.clientWidth;
      var thumbToTrackRatio = EUI_THUMB_SIZE / trackWidth;
      var trackPositionScale = (1 - thumbToTrackRatio) * 100;
      return {
        left: "".concat(valuePosition * trackPositionScale, "%")
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleHasFocus", function () {
      var shouldFocused = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.hasFocus;

      _this.setState({
        hasFocus: shouldFocused
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onThumbFocus", function (e) {
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }

      _this.toggleHasFocus(true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onThumbBlur", function (e) {
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }

      _this.toggleHasFocus(false);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputFocus", function (e) {
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }

      _this.preventPopoverClose = true;

      _this.setState({
        isPopoverOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputBlur", function (e) {
      return setTimeout(function () {
        // Safari does not recognize any focus-related eventing for input[type=range]
        // making it impossible to capture its state using active/focus/relatedTarget
        // Instead, a prevention flag is set on mousedown, with a waiting period here.
        // Mousedown is viable because in the popover case, it is inaccessable via keyboard (intentionally)
        if (_this.preventPopoverClose) {
          _this.preventPopoverClose = false;
          return;
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(e);
        }

        _this.closePopover();
      }, 200);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.preventPopoverClose = false;

      _this.setState({
        isPopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function (width) {
      _this.setState({
        rangeWidth: width
      });
    });

    return _this;
  }

  _createClass(EuiDualRange, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          compressed = _this$props.compressed,
          disabled = _this$props.disabled,
          fullWidth = _this$props.fullWidth,
          readOnly = _this$props.readOnly,
          propsId = _this$props.id,
          max = _this$props.max,
          min = _this$props.min,
          name = _this$props.name,
          step = _this$props.step,
          showLabels = _this$props.showLabels,
          showInput = _this$props.showInput,
          showTicks = _this$props.showTicks,
          tickInterval = _this$props.tickInterval,
          ticks = _this$props.ticks,
          levels = _this$props.levels,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          showRange = _this$props.showRange,
          value = _this$props.value,
          style = _this$props.style,
          isInvalid = _this$props.isInvalid,
          append = _this$props.append,
          prepend = _this$props.prepend,
          rest = _objectWithoutProperties(_this$props, ["className", "compressed", "disabled", "fullWidth", "readOnly", "id", "max", "min", "name", "step", "showLabels", "showInput", "showTicks", "tickInterval", "ticks", "levels", "onBlur", "onChange", "onFocus", "showRange", "value", "style", "isInvalid", "append", "prepend"]);

      var id = this.state.id;
      var digitTolerance = Math.max(String(min).length, String(max).length);
      var showInputOnly = showInput === 'inputWithPopover';
      var canShowDropdown = showInputOnly && !readOnly && !disabled;
      var minInput = !!showInput ? _react.default.createElement(_range_input.EuiRangeInput, {
        digitTolerance: digitTolerance,
        side: "min",
        min: min,
        max: Number(this.upperValue),
        step: step,
        value: this.lowerValue,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleLowerInputChange,
        onKeyDown: this.handleInputKeyDown,
        name: "".concat(name, "-minValue"),
        "aria-describedby": this.props['aria-describedby'],
        "aria-label": this.props['aria-label'],
        onFocus: canShowDropdown ? this.onInputFocus : onFocus,
        onBlur: canShowDropdown ? this.onInputBlur : onBlur,
        readOnly: readOnly,
        autoSize: !showInputOnly,
        fullWidth: !!showInputOnly && fullWidth,
        isInvalid: isInvalid,
        controlOnly: showInputOnly,
        onMouseDown: showInputOnly ? function () {
          return _this2.preventPopoverClose = true;
        } : null
      }) : undefined;
      var maxInput = !!showInput ? _react.default.createElement(_range_input.EuiRangeInput, {
        digitTolerance: digitTolerance,
        side: "max",
        min: Number(this.lowerValue),
        max: max,
        step: step,
        value: this.upperValue,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleUpperInputChange,
        onKeyDown: this.handleInputKeyDown,
        name: "".concat(name, "-maxValue"),
        "aria-describedby": this.props['aria-describedby'],
        "aria-label": this.props['aria-label'],
        onFocus: canShowDropdown ? this.onInputFocus : onFocus,
        onBlur: canShowDropdown ? this.onInputBlur : onBlur,
        readOnly: readOnly,
        autoSize: !showInputOnly,
        fullWidth: !!showInputOnly && fullWidth,
        controlOnly: showInputOnly,
        isInvalid: isInvalid,
        onMouseDown: showInputOnly ? function () {
          return _this2.preventPopoverClose = true;
        } : null
      }) : undefined;
      var classes = (0, _classnames.default)('euiDualRange', className);

      var theRange = _react.default.createElement(_range_wrapper.EuiRangeWrapper, {
        className: classes,
        fullWidth: fullWidth,
        compressed: compressed
      }, !showInputOnly && _react.default.createElement(_react.default.Fragment, null, minInput, _react.default.createElement("div", {
        className: "euiRange__horizontalSpacer"
      })), showLabels && _react.default.createElement(_range_label.EuiRangeLabel, {
        side: "min",
        disabled: disabled
      }, min), _react.default.createElement(_range_track.EuiRangeTrack, {
        compressed: compressed,
        disabled: disabled,
        max: max,
        min: min,
        step: step,
        showTicks: showTicks,
        tickInterval: tickInterval,
        ticks: ticks,
        levels: levels,
        onChange: this.handleSliderChange,
        value: value
      }, showRange && this.isValid && _react.default.createElement(_range_highlight.EuiRangeHighlight, {
        compressed: compressed,
        hasFocus: this.state.hasFocus,
        showTicks: showTicks,
        min: Number(min),
        max: Number(max),
        lowerValue: Number(this.lowerValue),
        upperValue: Number(this.upperValue)
      }), _react.default.createElement(_range_slider.EuiRangeSlider, _extends({
        className: "euiDualRange__slider",
        ref: this.handleRangeSliderRefUpdate,
        id: id,
        name: name,
        min: min,
        max: max,
        step: step,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleSliderChange,
        style: style,
        showTicks: showTicks,
        hasFocus: this.state.hasFocus,
        "aria-hidden": true,
        tabIndex: -1,
        showRange: showRange,
        onFocus: onFocus,
        onBlur: onBlur
      }, rest)), this.state.rangeSliderRefAvailable && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_range_thumb.EuiRangeThumb, {
        min: min,
        max: Number(this.upperValue),
        value: this.lowerValue,
        disabled: disabled,
        showTicks: showTicks,
        showInput: !!showInput,
        onKeyDown: this.handleLowerKeyDown,
        onFocus: this.onThumbFocus,
        onBlur: this.onThumbBlur,
        style: this.calculateThumbPositionStyle(this.lowerValue || min, this.state.rangeWidth),
        "aria-describedby": this.props['aria-describedby'],
        "aria-label": this.props['aria-label']
      }), _react.default.createElement(_range_thumb.EuiRangeThumb, {
        min: Number(this.lowerValue),
        max: max,
        value: this.upperValue,
        disabled: disabled,
        showTicks: showTicks,
        showInput: !!showInput,
        onKeyDown: this.handleUpperKeyDown,
        onFocus: this.onThumbFocus,
        onBlur: this.onThumbBlur,
        style: this.calculateThumbPositionStyle(this.upperValue || max, this.state.rangeWidth),
        "aria-describedby": this.props['aria-describedby'],
        "aria-label": this.props['aria-label']
      }))), showLabels && _react.default.createElement(_range_label.EuiRangeLabel, {
        disabled: disabled
      }, max), !showInputOnly && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "euiRange__horizontalSpacer"
      }), maxInput));

      var thePopover = showInputOnly ? _react.default.createElement(_popover.EuiInputPopover, {
        className: "euiRange__popover",
        input: _react.default.createElement(_form_control_layout.EuiFormControlLayoutDelimited, {
          startControl: minInput,
          endControl: maxInput,
          isDisabled: disabled,
          fullWidth: fullWidth,
          compressed: compressed,
          readOnly: readOnly,
          append: append,
          prepend: prepend
        }),
        fullWidth: fullWidth,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        disableFocusTrap: true,
        onPanelResize: this.onResize
      }, theRange) : undefined;
      return thePopover || theRange;
    }
  }, {
    key: "lowerValue",
    get: function get() {
      return this.props.value ? this.props.value[0] : this.props.min;
    }
  }, {
    key: "upperValue",
    get: function get() {
      return this.props.value ? this.props.value[1] : this.props.max;
    }
  }, {
    key: "lowerValueIsValid",
    get: function get() {
      return (0, _number.isWithinRange)(this.props.min, this.upperValue, this.lowerValue);
    }
  }, {
    key: "upperValueIsValid",
    get: function get() {
      return (0, _number.isWithinRange)(this.lowerValue, this.props.max, this.upperValue);
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.lowerValueIsValid && this.upperValueIsValid;
    }
  }]);

  return EuiDualRange;
}(_react.Component);

exports.EuiDualRange = EuiDualRange;
EuiDualRange.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  step: _propTypes.default.number,

  /**
   * Array containing lower and upper values. Fallback is `min` and `max` respectively
   */
  value: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),
  fullWidth: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,

  /**
   * Shows static min/max labels on the sides of the range slider
   */
  showLabels: _propTypes.default.bool,

  /**
   * Pass `true` to displays an extra input control for direct manipulation.
   * Pass `'inputWithPopover'` to only show the input but show the range in a dropdown.
   */
  showInput: _propTypes.default.oneOf([true, false, 'inputWithPopover']),

  /**
   * Shows clickable tick marks and labels at the given interval (`step`/`tickInterval`)
   */
  showTicks: _propTypes.default.bool,

  /**
   * Modifies the number of tick marks and at what interval
   */
  tickInterval: _propTypes.default.number,

  /**
   * Specified ticks at specified values
   */
  ticks: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.node.isRequired
  })),

  /**
   * Function signature: `([lowerValue, upperValue], isValid, event)`
   */
  onChange: _propTypes.default.func,

  /**
   * Create colored indicators for certain intervals
   */
  levels: _propTypes.default.arrayOf(_propTypes.default.shape({
    min: _propTypes.default.number,
    max: _propTypes.default.number,
    color: _propTypes.default.oneOf(_range_track.LEVEL_COLORS)
  })),

  /**
   * Shows a thick line from lower value to upper value
   */
  showRange: _propTypes.default.bool
};
EuiDualRange.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  fullWidth: false,
  compressed: false,
  showLabels: false,
  showInput: false,
  showRange: true,
  showTicks: false,
  levels: []
};
EuiDualRange.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleRangeSliderRefUpdate",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }, {
    "name": "lowerValue",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
    "returns": null
  }, {
    "name": "upperValue",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
    "returns": null
  }, {
    "name": "lowerValueIsValid",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
    "returns": null
  }, {
    "name": "upperValueIsValid",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
    "returns": null
  }, {
    "name": "isValid",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
    "returns": null
  }, {
    "name": "_determineInvalidThumbMovement",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newVal",
      "type": null
    }, {
      "name": "lower",
      "type": null
    }, {
      "name": "upper",
      "type": null
    }, {
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_determineValidThumbMovement",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newVal",
      "type": null
    }, {
      "name": "lower",
      "type": null
    }, {
      "name": "upper",
      "type": null
    }, {
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_determineThumbMovement",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newVal",
      "type": null
    }, {
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_handleOnChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "lower",
      "type": null
    }, {
      "name": "upper",
      "type": null
    }, {
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleSliderChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_resetToRangeEnds",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_isDirectionalKeyPress",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleInputKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleLowerInputChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleUpperInputChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "_handleKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }, {
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleLowerKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleUpperKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "calculateThumbPositionStyle",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }, {
      "name": "width",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleHasFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "shouldFocused",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onThumbFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onThumbBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onInputFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onInputBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onResize",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "width",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiDualRange",
  "props": {
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "max": {
      "defaultValue": {
        "value": "100",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
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
    "showLabels": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows static min/max labels on the sides of the range slider"
    },
    "showInput": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "true",
          "computed": false
        }, {
          "value": "false",
          "computed": false
        }, {
          "value": "'inputWithPopover'",
          "computed": false
        }]
      },
      "required": false,
      "description": "Pass `true` to displays an extra input control for direct manipulation.\nPass `'inputWithPopover'` to only show the input but show the range in a dropdown."
    },
    "showRange": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows a thick line from lower value to upper value"
    },
    "showTicks": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows clickable tick marks and labels at the given interval (`step`/`tickInterval`)"
    },
    "levels": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "min": {
              "name": "number",
              "required": false
            },
            "max": {
              "name": "number",
              "required": false
            },
            "color": {
              "name": "enum",
              "computed": true,
              "value": "LEVEL_COLORS",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": "Create colored indicators for certain intervals"
    },
    "name": {
      "type": {
        "name": "string"
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
    "value": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "union",
          "value": [{
            "name": "number"
          }, {
            "name": "string"
          }]
        }
      },
      "required": false,
      "description": "Array containing lower and upper values. Fallback is `min` and `max` respectively"
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
    "tickInterval": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Modifies the number of tick marks and at what interval"
    },
    "ticks": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "value": {
              "name": "number",
              "required": true
            },
            "label": {
              "name": "node",
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": "Specified ticks at specified values"
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Function signature: `([lowerValue, upperValue], isValid, event)`"
    }
  }
};