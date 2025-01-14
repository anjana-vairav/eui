"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EuiRangeTooltip = function EuiRangeTooltip(_ref) {
  var value = _ref.value,
      valueAppend = _ref.valueAppend,
      valuePrepend = _ref.valuePrepend,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      showTicks = _ref.showTicks,
      compressed = _ref.compressed;
  var classes = (0, _classnames.default)('euiRangeTooltip', {
    'euiRangeTooltip--compressed': compressed
  }); // Calculate the left position based on value

  var val = 0;

  if (typeof value === 'number') {
    val = value;
  } else if (typeof value === 'string') {
    val = parseFloat(value);
  }

  var decimal = (val - min) / (max - min); // Must be between 0-100%

  var valuePosition = decimal <= 1 ? decimal : 1;
  valuePosition = valuePosition >= 0 ? valuePosition : 0;
  var valuePositionSide;
  var valuePositionStyle;

  if (valuePosition > 0.5) {
    valuePositionSide = 'left';
    valuePositionStyle = {
      right: "".concat((1 - valuePosition) * 100, "%")
    };
  } else {
    valuePositionSide = 'right';
    valuePositionStyle = {
      left: "".concat(valuePosition * 100, "%")
    };
  } // Change left/right position based on value (half way point)


  var valueClasses = (0, _classnames.default)('euiRangeTooltip__value', "euiRangeTooltip__value--".concat(valuePositionSide), {
    'euiRangeTooltip__value--hasTicks': showTicks
  });
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("output", {
    className: valueClasses,
    htmlFor: name,
    style: valuePositionStyle
  }, valuePrepend, value, valueAppend));
};

exports.EuiRangeTooltip = EuiRangeTooltip;
EuiRangeTooltip.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),
  valueAppend: _propTypes.default.node,
  valuePrepend: _propTypes.default.node,
  max: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  name: _propTypes.default.string,
  showTicks: _propTypes.default.bool,
  compressed: _propTypes.default.bool
};
EuiRangeTooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeTooltip",
  "props": {
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
    "valueAppend": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "valuePrepend": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "max": {
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
      "required": true,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
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
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};