function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiIcon } from '../icon';
import { EuiI18n } from '../i18n';
import { keysOf } from '../common';
var statusToClassNameMap = {
  complete: 'euiStepNumber--complete',
  incomplete: 'euiStepNumber--incomplete',
  warning: 'euiStepNumber--warning',
  danger: 'euiStepNumber--danger',
  disabled: 'euiStepNumber--disabled'
};
export var STATUS = keysOf(statusToClassNameMap);
export var EuiStepNumber = function EuiStepNumber(_ref) {
  var className = _ref.className,
      status = _ref.status,
      number = _ref.number,
      isHollow = _ref.isHollow,
      rest = _objectWithoutProperties(_ref, ["className", "status", "number", "isHollow"]);

  var classes = classNames('euiStepNumber', status ? statusToClassNameMap[status] : undefined, {
    'euiStepNumber-isHollow': isHollow
  }, className);
  var numberOrIcon;

  if (status === 'complete') {
    numberOrIcon = React.createElement(EuiI18n, {
      token: "euiStepNumber.isComplete",
      default: "complete"
    }, function (isComplete) {
      return React.createElement(EuiIcon, {
        type: "check",
        className: "euiStepNumber__icon",
        "aria-label": isComplete
      });
    });
  } else if (status === 'warning') {
    numberOrIcon = React.createElement(EuiI18n, {
      token: "euiStepNumber.hasWarnings",
      default: "has warnings"
    }, function (hasWarnings) {
      return React.createElement(EuiIcon, {
        type: "alert",
        className: "euiStepNumber__icon",
        "aria-label": hasWarnings
      });
    });
  } else if (status === 'danger') {
    numberOrIcon = React.createElement(EuiI18n, {
      token: "euiStepNumber.hasErrors",
      default: "has errors"
    }, function (hasErrors) {
      return React.createElement(EuiIcon, {
        type: "cross",
        className: "euiStepNumber__icon",
        "aria-label": hasErrors
      });
    });
  } else if (!isHollow) {
    numberOrIcon = number;
  }

  return React.createElement("div", _extends({
    className: classes
  }, rest), numberOrIcon);
};
EuiStepNumber.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * May replace the number provided in props.number with alternate styling
     */
  status: PropTypes.oneOf(["complete", "incomplete", "warning", "danger", "disabled"]),
  number: PropTypes.number,

  /**
     * Uses a border and removes the step number
     */
  isHollow: PropTypes.bool
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