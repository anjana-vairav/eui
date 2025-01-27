"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LEVEL_COLORS", {
  enumerable: true,
  get: function get() {
    return _range_levels.LEVEL_COLORS;
  }
});
exports.EuiRangeTrack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _range = _interopRequireDefault(require("lodash/range"));

var _services = require("../../../services");

var _range_levels = require("./range_levels");

var _range_ticks = require("./range_ticks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiRangeTrack =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiRangeTrack, _Component);

  function EuiRangeTrack() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiRangeTrack);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiRangeTrack)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateValueIsInStep", function (value) {
      if (value < _this.props.min) {
        throw new Error("The value of ".concat(value, " is lower than the min value of ").concat(_this.props.min, "."));
      }

      if (value > _this.props.max) {
        throw new Error("The value of ".concat(value, " is higher than the max value of ").concat(_this.props.max, "."));
      } // Error out if the value doesn't line up with the sequence of steps


      if (!(0, _services.isEvenlyDivisibleBy)(value - _this.props.min, _this.props.step !== undefined ? _this.props.step : 1)) {
        throw new Error("The value of ".concat(value, " is not included in the possible sequence provided by the step of ").concat(_this.props.step, "."));
      } // Return the value if nothing fails


      return value;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateSequence", function (min, max, interval) {
      // Loop from min to max, creating adding values at each interval
      // (adds a very small number to the max since `range` is not inclusive of the max value)
      var toBeInclusive = 0.000000001;
      return (0, _range.default)(min, max + toBeInclusive, interval);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateTicks", function (min, max, step, tickInterval, customTicks) {
      var ticks;

      if (customTicks) {
        // If custom values were passed, use those for the sequence
        // But make sure they align with the possible sequence
        ticks = customTicks.map(function (tick) {
          return _this.validateValueIsInStep(tick.value);
        });
      } else {
        // If a custom interval was passed, use those for the sequence
        // But make sure they align with the possible sequence
        var interval = tickInterval || step;

        var tickSequence = _this.calculateSequence(min, max, interval);

        ticks = tickSequence.map(function (tick) {
          return _this.validateValueIsInStep(tick);
        });
      } // Error out if there are too many ticks to render


      if (ticks.length > 20) {
        throw new Error("The number of ticks to render is too high (".concat(ticks.length, "), reduce the interval."));
      }

      return ticks;
    });

    return _this;
  }

  _createClass(EuiRangeTrack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step,
          showTicks = _this$props.showTicks,
          tickInterval = _this$props.tickInterval,
          ticks = _this$props.ticks,
          levels = _this$props.levels,
          onChange = _this$props.onChange,
          value = _this$props.value,
          compressed = _this$props.compressed; // TODO: Move these to only re-calculate if no-value props have changed

      this.validateValueIsInStep(max);
      var tickSequence;
      var inputWrapperStyle = {};

      if (showTicks) {
        tickSequence = this.calculateTicks(min, max, step, tickInterval, ticks); // Calculate if any extra margin should be added to the inputWrapper
        // because of longer tick labels on the ends

        var lengthOfMinLabel = String(tickSequence[0]).length;
        var lenghtOfMaxLabel = String(tickSequence[tickSequence.length - 1]).length;
        var isLastTickTheMax = tickSequence[tickSequence.length - 1] === max;

        if (lengthOfMinLabel > 2) {
          inputWrapperStyle.marginLeft = "".concat(lengthOfMinLabel / 5, "em");
        }

        if (isLastTickTheMax && lenghtOfMaxLabel > 2) {
          inputWrapperStyle.marginRight = "".concat(lenghtOfMaxLabel / 5, "em");
        }
      }

      var trackClasses = (0, _classnames.default)('euiRangeTrack', {
        'euiRangeTrack--disabled': disabled
      });
      return _react.default.createElement("div", {
        className: trackClasses,
        style: inputWrapperStyle
      }, levels && !!levels.length && _react.default.createElement(_range_levels.EuiRangeLevels, {
        compressed: compressed,
        levels: levels,
        max: max,
        min: min,
        showTicks: showTicks
      }), tickSequence && _react.default.createElement(_range_ticks.EuiRangeTicks, {
        disabled: disabled,
        compressed: compressed,
        onChange: onChange,
        ticks: ticks,
        tickSequence: tickSequence,
        value: value,
        min: min,
        max: max,
        interval: tickInterval || step
      }), children);
    }
  }]);

  return EuiRangeTrack;
}(_react.Component);

exports.EuiRangeTrack = EuiRangeTrack;
EuiRangeTrack.propTypes = {
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  step: _propTypes.default.number,
  value: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired).isRequired]),
  compressed: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  showTicks: _propTypes.default.bool,
  tickInterval: _propTypes.default.number,
  ticks: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.node.isRequired
  }).isRequired),
  onChange: _propTypes.default.func,
  levels: _propTypes.default.arrayOf(_propTypes.default.shape({
    min: _propTypes.default.number.isRequired,
    max: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "success", "warning", "danger"]).isRequired
  }).isRequired)
};
EuiRangeTrack.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "validateValueIsInStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "calculateSequence",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "min",
      "type": null
    }, {
      "name": "max",
      "type": null
    }, {
      "name": "interval",
      "type": null
    }],
    "returns": null
  }, {
    "name": "calculateTicks",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "min",
      "type": null
    }, {
      "name": "max",
      "type": null
    }, {
      "name": "step",
      "type": null
    }, {
      "name": "tickInterval",
      "type": null
    }, {
      "name": "customTicks",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiRangeTrack",
  "props": {
    "min": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "step": {
      "type": {
        "name": "number"
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
        }, {
          "name": "arrayOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }]
          }
        }]
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
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "showTicks": {
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
      "description": ""
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
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "levels": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "min": {
              "name": "number",
              "required": true
            },
            "max": {
              "name": "number",
              "required": true
            },
            "color": {
              "name": "enum",
              "value": [{
                "value": "\"primary\"",
                "computed": false
              }, {
                "value": "\"success\"",
                "computed": false
              }, {
                "value": "\"warning\"",
                "computed": false
              }, {
                "value": "\"danger\"",
                "computed": false
              }],
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};