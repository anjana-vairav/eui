function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import find from 'lodash/find';
import { useInnerText } from '../../inner_text';

var EuiTickValue = function EuiTickValue(_ref) {
  var disabled = _ref.disabled,
      ticks = _ref.ticks,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      onChange = _ref.onChange,
      percentageWidth = _ref.percentageWidth,
      tickValue = _ref.tickValue;
  var tickStyle = {};
  var customTick;

  if (ticks) {
    customTick = find(ticks, function (o) {
      return o.value === tickValue;
    });

    if (customTick) {
      tickStyle.left = "".concat((customTick.value - min) / (max - min) * 100, "%");
    }
  } else {
    tickStyle.width = "".concat(percentageWidth, "%");
  }

  var tickClasses = classNames('euiRangeTick', {
    'euiRangeTick--selected': value === tickValue,
    'euiRangeTick--isCustom': customTick
  });
  var label = customTick ? customTick.label : tickValue;

  var _useInnerText = useInnerText(),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  return React.createElement("button", {
    type: "button",
    className: tickClasses,
    value: tickValue,
    disabled: disabled,
    onClick: onChange,
    style: tickStyle,
    tabIndex: -1,
    ref: ref,
    title: typeof label === 'string' ? label : innerText
  }, label);
};

EuiTickValue.propTypes = {
  ticks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.node.isRequired
  }).isRequired),
  tickSequence: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired).isRequired]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
  interval: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tickValue: PropTypes.any.isRequired,
  percentageWidth: PropTypes.number.isRequired
};
export var EuiRangeTicks = function EuiRangeTicks(props) {
  var ticks = props.ticks,
      tickSequence = props.tickSequence,
      max = props.max,
      min = props.min,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 1 : _props$interval,
      compressed = props.compressed; // Calculate the width of each tick mark

  var percentageWidth = interval / (max - min + interval) * 100; // Align with item labels across the range by adding
  // left and right negative margins that is half of the tick marks

  var ticksStyle = !!ticks ? undefined : {
    margin: "0 ".concat(percentageWidth / -2, "%"),
    left: 0,
    right: 0
  };
  var classes = classNames('euiRangeTicks', {
    'euiRangeTicks--compressed': compressed
  });
  return React.createElement("div", {
    className: classes,
    style: ticksStyle
  }, tickSequence.map(function (tickValue) {
    return React.createElement(EuiTickValue, _extends({
      key: tickValue
    }, props, {
      percentageWidth: percentageWidth,
      tickValue: tickValue
    }));
  }));
};
EuiRangeTicks.propTypes = {
  ticks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.node.isRequired
  }).isRequired),
  tickSequence: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired).isRequired]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
  interval: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
EuiRangeTicks.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeTicks",
  "props": {
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
    "tickSequence": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": true,
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
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "interval": {
      "type": {
        "name": "number"
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
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};