function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiI18n } from '../i18n';
import { EuiScreenReaderOnly, EuiKeyboardAccessible } from '../accessibility';
import { EuiStepNumber } from './step_number';
export var EuiStepHorizontal = function EuiStepHorizontal(_ref) {
  var className = _ref.className,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      title = _ref.title,
      isSelected = _ref.isSelected,
      isComplete = _ref.isComplete,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["className", "step", "title", "isSelected", "isComplete", "onClick", "disabled", "status"]);

  var classes = classNames('euiStepHorizontal', className, {
    'euiStepHorizontal-isSelected': isSelected,
    'euiStepHorizontal-isComplete': isComplete,
    'euiStepHorizontal-isIncomplete': !isSelected && !isComplete,
    'euiStepHorizontal-isDisabled': disabled
  });

  if (disabled) {
    status = 'disabled';
  } else if (isComplete) {
    status = 'complete';
  } else if (isSelected) {
    status = status;
  } else if (!status) {
    status = 'incomplete';
  }

  var onStepClick = function onStepClick(event) {
    if (disabled) return;
    onClick(event);
  };

  return React.createElement(EuiI18n, {
    token: "euiStepHorizontal.buttonTitle",
    default: function _default(_ref2) {
      var step = _ref2.step,
          title = _ref2.title,
          disabled = _ref2.disabled,
          isComplete = _ref2.isComplete;
      var titleAppendix = '';

      if (disabled) {
        titleAppendix = ' is disabled';
      } else if (isComplete) {
        titleAppendix = ' is complete';
      }

      return "Step ".concat(step, ": ").concat(title).concat(titleAppendix);
    },
    values: {
      step: step,
      title: title,
      disabled: disabled,
      isComplete: isComplete
    }
  }, function (buttonTitle) {
    return React.createElement(EuiKeyboardAccessible, null, React.createElement("div", _extends({
      role: "tab",
      "aria-selected": !!isSelected,
      "aria-disabled": !!disabled,
      className: classes,
      onClick: onStepClick,
      tabIndex: disabled ? -1 : 0,
      title: buttonTitle
    }, rest), React.createElement(EuiScreenReaderOnly, null, React.createElement("div", null, React.createElement(EuiI18n, {
      token: "euiStepHorizontal.step",
      default: "Step"
    }))), React.createElement(EuiStepNumber, {
      className: "euiStepHorizontal__number",
      status: status,
      number: step
    }), React.createElement("div", {
      className: "euiStepHorizontal__title"
    }, title)));
  });
};
EuiStepHorizontal.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * Is the current step
     */
  isSelected: PropTypes.bool,

  /**
     * Is a previous step that has been completed
     */
  isComplete: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,

  /**
     * The number of the step in the list of steps
     */
  step: PropTypes.number,
  title: PropTypes.string,

  /**
     * May replace the number provided in props.step with alternate styling.
     * The `isSelected`, `isComplete`, and `disabled` props will override these.
     */
  status: PropTypes.oneOf(["complete", "incomplete", "warning", "danger", "disabled"])
};
EuiStepHorizontal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiStepHorizontal",
  "props": {
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The number of the step in the list of steps"
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
    "isSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Is the current step"
    },
    "isComplete": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Is a previous step that has been completed"
    },
    "onClick": {
      "type": {
        "name": "func"
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
    },
    "title": {
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
      "description": "May replace the number provided in props.step with alternate styling.\nThe `isSelected`, `isComplete`, and `disabled` props will override these."
    }
  }
};