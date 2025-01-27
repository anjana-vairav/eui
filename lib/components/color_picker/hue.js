"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHue = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HUE_RANGE = 360;

var EuiHue = function EuiHue(_ref) {
  var className = _ref.className,
      hex = _ref.hex,
      _ref$hue = _ref.hue,
      hue = _ref$hue === void 0 ? 1 : _ref$hue,
      id = _ref.id,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["className", "hex", "hue", "id", "onChange"]);

  var handleChange = function handleChange(e) {
    onChange(Number(e.target.value));
  };

  var classes = (0, _classnames.default)('euiHue', className);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("label", {
    htmlFor: "".concat(id, "-hue")
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiHue.label",
    default: "Select the HSV color mode 'hue' value"
  }))), _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", {
    "aria-live": "polite"
  }, hex)), _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("input", _extends({
    id: "".concat(id, "-hue"),
    min: 0,
    max: HUE_RANGE,
    step: 1,
    type: "range",
    className: "euiHue__range",
    value: hue,
    onChange: handleChange
  }, rest))));
};

exports.EuiHue = EuiHue;
EuiHue.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  hex: _propTypes.default.string,
  hue: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]),
  onChange: _propTypes.default.func.isRequired
};
EuiHue.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHue",
  "props": {
    "hue": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
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
    "hex": {
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
    }
  }
};