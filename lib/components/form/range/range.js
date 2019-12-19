"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRange = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _number = require("../../../services/number");

var _popover = require("../../popover");

var _make_id = _interopRequireDefault(require("../form_row/make_id"));

var _range_highlight = require("./range_highlight");

var _range_input = require("./range_input");

var _range_label = require("./range_label");

var _range_slider = require("./range_slider");

var _range_tooltip = require("./range_tooltip");

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

var EuiRange =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiRange, _Component);

  function EuiRange(props) {
    var _this;

    _classCallCheck(this, EuiRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiRange).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (e) {
      var isValid = (0, _number.isWithinRange)(_this.props.min, _this.props.max, e.target.value);

      _this.props.onChange(e, isValid);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputFocus", function (e) {
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }

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

    _this.state = {
      id: props.id || (0, _make_id.default)(),
      isPopoverOpen: false
    };
    _this.preventPopoverClose = false;
    return _this;
  }

  _createClass(EuiRange, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          compressed = _this$props.compressed,
          disabled = _this$props.disabled,
          fullWidth = _this$props.fullWidth,
          isLoading = _this$props.isLoading,
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
          showRange = _this$props.showRange,
          showValue = _this$props.showValue,
          valueAppend = _this$props.valueAppend,
          valuePrepend = _this$props.valuePrepend,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          value = _this$props.value,
          style = _this$props.style,
          tabIndex = _this$props.tabIndex,
          isInvalid = _this$props.isInvalid,
          rest = _objectWithoutProperties(_this$props, ["className", "compressed", "disabled", "fullWidth", "isLoading", "readOnly", "id", "max", "min", "name", "step", "showLabels", "showInput", "showTicks", "tickInterval", "ticks", "levels", "showRange", "showValue", "valueAppend", "valuePrepend", "onBlur", "onChange", "onFocus", "value", "style", "tabIndex", "isInvalid"]);

      var id = this.state.id;
      var digitTolerance = Math.max(String(min).length, String(max).length);
      var showInputOnly = showInput === 'inputWithPopover';
      var canShowDropdown = showInputOnly && !readOnly && !disabled;
      var theInput = !!showInput ? _react.default.createElement(_range_input.EuiRangeInput, _extends({
        id: id,
        min: min,
        max: max,
        digitTolerance: digitTolerance,
        step: step,
        value: value,
        readOnly: readOnly,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleOnChange,
        name: name,
        onFocus: canShowDropdown ? this.onInputFocus : onFocus,
        onBlur: canShowDropdown ? this.onInputBlur : onBlur,
        fullWidth: showInputOnly && fullWidth,
        isLoading: showInputOnly && isLoading,
        isInvalid: isInvalid,
        autoSize: !showInputOnly
      }, rest)) : undefined;
      var classes = (0, _classnames.default)('euiRange', className);

      var theRange = _react.default.createElement(_range_wrapper.EuiRangeWrapper, {
        className: classes,
        fullWidth: fullWidth,
        compressed: compressed
      }, showLabels && _react.default.createElement(_range_label.EuiRangeLabel, {
        side: "min",
        disabled: disabled
      }, min), _react.default.createElement(_range_track.EuiRangeTrack, {
        disabled: disabled,
        compressed: compressed,
        max: max,
        min: min,
        step: step,
        showTicks: showTicks,
        tickInterval: tickInterval,
        ticks: ticks,
        levels: levels,
        onChange: this.handleOnChange,
        value: value
      }, showRange && this.isValid && _react.default.createElement(_range_highlight.EuiRangeHighlight, {
        compressed: compressed,
        showTicks: showTicks,
        min: Number(min),
        max: Number(max),
        lowerValue: Number(min),
        upperValue: Number(value)
      }), _react.default.createElement(_range_slider.EuiRangeSlider, _extends({
        id: showInput ? undefined : id // Attach id only to the input if there is one
        ,
        name: name,
        min: min,
        max: max,
        step: step,
        value: value,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleOnChange,
        style: style,
        showTicks: showTicks,
        showRange: showRange,
        tabIndex: showInput ? -1 : tabIndex || null,
        onMouseDown: showInputOnly ? function () {
          return _this2.preventPopoverClose = true;
        } : null,
        onFocus: showInput === true ? null : onFocus,
        onBlur: showInputOnly ? this.onInputBlur : onBlur
      }, rest)), showValue && !!String(value).length && _react.default.createElement(_range_tooltip.EuiRangeTooltip, {
        compressed: compressed,
        value: value,
        max: max,
        min: min,
        name: name,
        showTicks: showTicks,
        valuePrepend: valuePrepend,
        valueAppend: valueAppend
      })), showLabels && _react.default.createElement(_range_label.EuiRangeLabel, {
        side: "max",
        disabled: disabled
      }, max), !showInputOnly && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "euiRange__horizontalSpacer"
      }), theInput));

      var thePopover = showInputOnly ? _react.default.createElement(_popover.EuiInputPopover, {
        className: "euiRange__popover",
        input: theInput,
        fullWidth: fullWidth,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        disableFocusTrap: true
      }, theRange) : undefined;
      return thePopover ? thePopover : theRange;
    }
  }, {
    key: "isValid",
    get: function get() {
      return (0, _number.isWithinRange)(this.props.min, this.props.max, this.props.value);
    }
  }]);

  return EuiRange;
}(_react.Component);

exports.EuiRange = EuiRange;
EuiRange.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  step: _propTypes.default.number,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  fullWidth: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  disabled: _propTypes.default.bool,

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
   * Function signature: `(event, isValid)`
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
   * Shows a thick line from min to value
   */
  showRange: _propTypes.default.bool,

  /**
   * Shows a tooltip styled value
   */
  showValue: _propTypes.default.bool,

  /**
   * Appends to the tooltip
   */
  valueAppend: _propTypes.default.node,

  /**
   * Prepends to the tooltip
   */
  valuePrepend: _propTypes.default.node
};
EuiRange.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  fullWidth: false,
  compressed: false,
  showLabels: false,
  showInput: false,
  showRange: false,
  showTicks: false,
  showValue: false,
  levels: []
};
EuiRange.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleOnChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "isValid",
    "docblock": null,
    "modifiers": ["get"],
    "params": [],
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
  }],
  "displayName": "EuiRange",
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
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows a thick line from min to value"
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
    "showValue": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows a tooltip styled value"
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
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
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
      "description": "Function signature: `(event, isValid)`"
    },
    "valueAppend": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Appends to the tooltip"
    },
    "valuePrepend": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Prepends to the tooltip"
    }
  }
};