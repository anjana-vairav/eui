function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiText } from '../text';
import { IconPropType, EuiIcon } from '../icon';
export var EuiDatePickerRange = function EuiDatePickerRange(_ref) {
  var children = _ref.children,
      className = _ref.className,
      startDateControl = _ref.startDateControl,
      endDateControl = _ref.endDateControl,
      iconType = _ref.iconType,
      fullWidth = _ref.fullWidth,
      isCustom = _ref.isCustom,
      readOnly = _ref.readOnly,
      rest = _objectWithoutProperties(_ref, ["children", "className", "startDateControl", "endDateControl", "iconType", "fullWidth", "isCustom", "readOnly"]);

  var classes = classNames('euiDatePickerRange', {
    'euiDatePickerRange--fullWidth': fullWidth,
    'euiDatePickerRange--readOnly': readOnly
  }, className); // Set the icon for the entire group instead of per control

  var optionalIcon;

  if (iconType) {
    var icon = typeof iconType === 'string' ? iconType : 'calendar';
    optionalIcon = React.createElement("span", {
      className: "euiDatePickerRange__icon"
    }, React.createElement(EuiIcon, {
      type: icon
    }));
  } else {
    optionalIcon = null;
  }

  var startControl = startDateControl;
  var endControl = endDateControl;

  if (!isCustom) {
    startControl = cloneElement(startDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly
    });
    endControl = cloneElement(endDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly
    });
  }

  return React.createElement("div", _extends({
    className: classes
  }, rest), children ? children : React.createElement(Fragment, null, optionalIcon, startControl, React.createElement(EuiText, {
    className: "euiDatePickerRange__delimeter",
    size: "s",
    color: "subdued"
  }, "\u2192"), endControl));
};
EuiDatePickerRange.propTypes = {
  /**
   * The start date `EuiDatePicker` element
   */
  startDateControl: PropTypes.node.isRequired,

  /**
   * The end date `EuiDatePicker` element
   */
  endDateControl: PropTypes.node.isRequired,

  /**
   * Pass either an icon type or set to `false` to remove icon entirely
   */
  iconType: PropTypes.oneOfType([PropTypes.bool, IconPropType]),
  fullWidth: PropTypes.bool,

  /**
   * Won't apply any additional props to start and end date components
   */
  isCustom: PropTypes.bool,

  /**
   * Including any children will replace all innerds with the provided children
   */
  children: PropTypes.node
};
EuiDatePickerRange.defaultProps = {
  iconType: true
};
EuiDatePickerRange.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDatePickerRange",
  "props": {
    "iconType": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "custom",
          "raw": "IconPropType"
        }]
      },
      "required": false,
      "description": "Pass either an icon type or set to `false` to remove icon entirely"
    },
    "startDateControl": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "The start date `EuiDatePicker` element"
    },
    "endDateControl": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "The end date `EuiDatePicker` element"
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isCustom": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Won't apply any additional props to start and end date components"
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Including any children will replace all innerds with the provided children"
    }
  }
};