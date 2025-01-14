"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepNumber = exports.STATUS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _i18n = require("../i18n");

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var statusToClassNameMap = {
  complete: 'euiStepNumber--complete',
  incomplete: 'euiStepNumber--incomplete',
  warning: 'euiStepNumber--warning',
  danger: 'euiStepNumber--danger',
  disabled: 'euiStepNumber--disabled'
};
var STATUS = (0, _common.keysOf)(statusToClassNameMap);
exports.STATUS = STATUS;

var EuiStepNumber = function EuiStepNumber(_ref) {
  var className = _ref.className,
      status = _ref.status,
      number = _ref.number,
      isHollow = _ref.isHollow,
      rest = _objectWithoutProperties(_ref, ["className", "status", "number", "isHollow"]);

  var classes = (0, _classnames.default)('euiStepNumber', status ? statusToClassNameMap[status] : undefined, {
    'euiStepNumber-isHollow': isHollow
  }, className);
  var numberOrIcon;

  if (status === 'complete') {
    numberOrIcon = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.isComplete",
      default: "complete"
    }, function (isComplete) {
      return _react.default.createElement(_icon.EuiIcon, {
        type: "check",
        className: "euiStepNumber__icon",
        "aria-label": isComplete
      });
    });
  } else if (status === 'warning') {
    numberOrIcon = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.hasWarnings",
      default: "has warnings"
    }, function (hasWarnings) {
      return _react.default.createElement(_icon.EuiIcon, {
        type: "alert",
        className: "euiStepNumber__icon",
        "aria-label": hasWarnings
      });
    });
  } else if (status === 'danger') {
    numberOrIcon = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiStepNumber.hasErrors",
      default: "has errors"
    }, function (hasErrors) {
      return _react.default.createElement(_icon.EuiIcon, {
        type: "cross",
        className: "euiStepNumber__icon",
        "aria-label": hasErrors
      });
    });
  } else if (!isHollow) {
    numberOrIcon = number;
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), numberOrIcon);
};

exports.EuiStepNumber = EuiStepNumber;
EuiStepNumber.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * May replace the number provided in props.number with alternate styling
     */
  status: _propTypes.default.oneOf(["complete", "incomplete", "warning", "danger", "disabled"]),
  number: _propTypes.default.number,

  /**
     * Uses a border and removes the step number
     */
  isHollow: _propTypes.default.bool
};
EuiStepNumber.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiStepNumber",
  "props": {
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
    "status": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"complete\"",
          "computed": false
        }, {
          "value": "\"incomplete\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"disabled\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "May replace the number provided in props.number with alternate styling"
    },
    "number": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "isHollow": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Uses a border and removes the step number"
    }
  }
};