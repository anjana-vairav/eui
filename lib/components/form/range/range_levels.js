"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeLevels = exports.LEVEL_COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LEVEL_COLORS = ['primary', 'success', 'warning', 'danger'];
exports.LEVEL_COLORS = LEVEL_COLORS;

var EuiRangeLevels = function EuiRangeLevels(_ref) {
  var _ref$levels = _ref.levels,
      levels = _ref$levels === void 0 ? [] : _ref$levels,
      max = _ref.max,
      min = _ref.min,
      showTicks = _ref.showTicks,
      compressed = _ref.compressed;

  var validateLevelIsInRange = function validateLevelIsInRange(level) {
    if (level.min < min) {
      throw new Error("The level min of ".concat(level.min, " is lower than the min value of ").concat(min, "."));
    }

    if (level.max > max) {
      throw new Error("The level max of ".concat(level.max, " is higher than the max value of ").concat(max, "."));
    }
  };

  var classes = (0, _classnames.default)('euiRangeLevels', {
    'euiRangeLevels--hasTicks': showTicks,
    'euiRangeLevels--compressed': compressed
  });
  return _react.default.createElement("div", {
    className: classes
  }, levels.map(function (level, index) {
    validateLevelIsInRange(level);
    var range = level.max - level.min;
    var width = range / (max - min) * 100;
    return _react.default.createElement("span", {
      key: index,
      style: {
        width: "".concat(width, "%")
      },
      className: "euiRangeLevel euiRangeLevel--".concat(level.color)
    });
  }));
};

exports.EuiRangeLevels = EuiRangeLevels;
EuiRangeLevels.propTypes = {
  levels: _propTypes.default.arrayOf(_propTypes.default.shape({
    min: _propTypes.default.number.isRequired,
    max: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "success", "warning", "danger"]).isRequired
  }).isRequired),
  max: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  showTicks: _propTypes.default.bool,
  compressed: _propTypes.default.bool
};
EuiRangeLevels.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeLevels",
  "props": {
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