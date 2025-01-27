function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from "prop-types";
import React from 'react';
import classNames from 'classnames';
import { EuiStepHorizontal } from './step_horizontal';

function renderHorizontalSteps(steps) {
  return steps.map(function (step, index) {
    return React.createElement(EuiStepHorizontal, _extends({
      key: index,
      step: index + 1
    }, step));
  });
}

export var EuiStepsHorizontal = function EuiStepsHorizontal(_ref) {
  var className = _ref.className,
      steps = _ref.steps,
      rest = _objectWithoutProperties(_ref, ["className", "steps"]);

  var classes = classNames('euiStepsHorizontal', className);
  return React.createElement("div", _extends({
    role: "tablist",
    className: classes
  }, rest), renderHorizontalSteps(steps));
};
EuiStepsHorizontal.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * An array of `EuiStepHorizontal` objects excluding the `step` prop
     */
  steps: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired
};
EuiStepsHorizontal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiStepsHorizontal",
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
    "steps": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": true,
      "description": "An array of `EuiStepHorizontal` objects excluding the `step` prop"
    }
  }
};