"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiI18nNumber = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultFormatter = new Intl.NumberFormat('en');

function defaultFormatNumber(value) {
  return defaultFormatter.format(value);
}

function hasValues(x) {
  return x.values != null;
}

var EuiI18nNumber = function EuiI18nNumber(props) {
  return _react.default.createElement(_context.EuiI18nConsumer, null, function (i18nConfig) {
    var formatNumber = i18nConfig.formatNumber || defaultFormatNumber;

    if (hasValues(props)) {
      return props.children(props.values.map(function (value) {
        return formatNumber(value);
      }));
    }

    var formattedValue = (formatNumber || defaultFormatNumber)(props.value);

    if (props.children) {
      return props.children(formattedValue);
    } else {
      return formattedValue;
    }
  });
};

exports.EuiI18nNumber = EuiI18nNumber;
EuiI18nNumber.propTypes = {
  value: _propTypes.default.number,
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.func.isRequired]),
  values: _propTypes.default.arrayOf(_propTypes.default.number.isRequired)
};
EuiI18nNumber.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiI18nNumber",
  "props": {
    "value": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "values": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false,
      "description": ""
    }
  }
};