function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { EuiPopover } from '../../../popover';
import { formatTimeString } from '../pretty_duration';
import { EuiDatePopoverContent } from './date_popover_content';
export function EuiDatePopoverButton(props) {
  var position = props.position,
      isDisabled = props.isDisabled,
      isInvalid = props.isInvalid,
      needsUpdating = props.needsUpdating,
      value = props.value,
      buttonProps = props.buttonProps,
      roundUp = props.roundUp,
      onChange = props.onChange,
      locale = props.locale,
      dateFormat = props.dateFormat,
      timeFormat = props.timeFormat,
      isOpen = props.isOpen,
      onPopoverToggle = props.onPopoverToggle,
      onPopoverClose = props.onPopoverClose,
      rest = _objectWithoutProperties(props, ["position", "isDisabled", "isInvalid", "needsUpdating", "value", "buttonProps", "roundUp", "onChange", "locale", "dateFormat", "timeFormat", "isOpen", "onPopoverToggle", "onPopoverClose"]);

  var classes = classNames(['euiDatePopoverButton', "euiDatePopoverButton--".concat(position), {
    'euiDatePopoverButton-isSelected': isOpen,
    'euiDatePopoverButton-isInvalid': isInvalid,
    'euiDatePopoverButton-needsUpdating': needsUpdating,
    'euiDatePopoverButton-disabled': isDisabled
  }]);
  var title = value;

  if (isInvalid) {
    title = "Invalid date: ".concat(title);
  } else if (needsUpdating) {
    title = "Update needed: ".concat(title);
  }

  var button = React.createElement("button", _extends({
    onClick: onPopoverToggle,
    className: classes,
    title: title,
    disabled: isDisabled,
    "data-test-subj": "superDatePicker".concat(position, "DatePopoverButton")
  }, buttonProps), formatTimeString(value, dateFormat, roundUp, locale));
  return React.createElement(EuiPopover, _extends({
    button: button,
    isOpen: isOpen,
    closePopover: onPopoverClose,
    anchorPosition: position === 'start' ? 'downLeft' : 'downRight',
    display: "block",
    panelPaddingSize: "none",
    ownFocus: true
  }, rest), React.createElement(EuiDatePopoverContent, {
    value: value,
    roundUp: roundUp,
    onChange: onChange,
    dateFormat: dateFormat,
    timeFormat: timeFormat,
    locale: locale,
    position: position
  }));
}
EuiDatePopoverButton.propTypes = {
  position: PropTypes.oneOf(['start', 'end']),
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  needsUpdating: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  roundUp: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onPopoverToggle: PropTypes.func.isRequired,
  onPopoverClose: PropTypes.func.isRequired
};
EuiDatePopoverButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDatePopoverButton",
  "props": {
    "position": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'start'",
          "computed": false
        }, {
          "value": "'end'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "needsUpdating": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "dateFormat": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "timeFormat": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "roundUp": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isOpen": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "onPopoverToggle": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onPopoverClose": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};