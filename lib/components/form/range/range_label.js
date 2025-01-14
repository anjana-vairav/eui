"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EuiRangeLabel = function EuiRangeLabel(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'max' : _ref$side;
  var classes = (0, _classnames.default)('euiRangeLabel', "euiRangeLabel--".concat(side), {
    'euiRangeLabel--isDisabled': disabled
  });
  return _react.default.createElement("label", {
    className: classes
  }, children);
};

exports.EuiRangeLabel = EuiRangeLabel;
EuiRangeLabel.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired,
  disabled: _propTypes.default.bool,
  side: _propTypes.default.oneOf(["min", "max"])
};
EuiRangeLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeLabel",
  "props": {
    "side": {
      "defaultValue": {
        "value": "'max'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"min\"",
          "computed": false
        }, {
          "value": "\"max\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": true,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};