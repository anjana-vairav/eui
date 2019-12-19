function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiIcon, IconPropType } from '../icon';
var colorToClassNameMap = {
  tint0: 'euiSuggestItem__type--tint0',
  tint1: 'euiSuggestItem__type--tint1',
  tint2: 'euiSuggestItem__type--tint2',
  tint3: 'euiSuggestItem__type--tint3',
  tint4: 'euiSuggestItem__type--tint4',
  tint5: 'euiSuggestItem__type--tint5',
  tint6: 'euiSuggestItem__type--tint6',
  tint7: 'euiSuggestItem__type--tint7',
  tint8: 'euiSuggestItem__type--tint8',
  tint9: 'euiSuggestItem__type--tint9'
};
export var COLORS = Object.keys(colorToClassNameMap);
var labelDisplayToClassMap = {
  fixed: 'euiSuggestItem__labelDisplay--fixed',
  expand: 'euiSuggestItem__labelDisplay--expand'
};
export var DISPLAYS = Object.keys(labelDisplayToClassMap);
export var EuiSuggestItem = function EuiSuggestItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      type = _ref.type,
      labelDisplay = _ref.labelDisplay,
      description = _ref.description,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "label", "type", "labelDisplay", "description", "onClick"]);

  var classes = classNames('euiSuggestItem', {
    'euiSuggestItem-isClickable': onClick
  }, className);
  var colorClass = '';
  var labelDisplayClass = classNames('euiSuggestItem__label', labelDisplayToClassMap[labelDisplay], {
    'euiSuggestItem__labelDisplay--expand': !description
  });

  if (type && type.color) {
    if (COLORS.indexOf(type.color) > -1) {
      colorClass = colorToClassNameMap[type.color];
    }
  }

  var OuterElement = 'div';

  if (onClick) {
    OuterElement = 'button';
  }

  return React.createElement(OuterElement, _extends({
    onClick: onClick,
    className: classes
  }, rest), React.createElement("span", {
    className: "euiSuggestItem__type ".concat(colorClass)
  }, React.createElement(EuiIcon, {
    type: type.iconType
  })), React.createElement("span", {
    className: labelDisplayClass
  }, label), React.createElement("span", {
    className: "euiSuggestItem__description"
  }, description));
};
EuiSuggestItem.propTypes = {
  className: PropTypes.string,

  /**
   * Takes 'iconType' for EuiIcon and 'color'. 'color' can be tint1 through tint9.
   */
  type: PropTypes.shape({
    iconType: IconPropType.isRequired,
    color: PropTypes.oneOfType([PropTypes.oneOf(COLORS), PropTypes.string]).isRequired
  }).isRequired,

  /**
   * Label or primary text.
   */
  label: PropTypes.string.isRequired,

  /**
   * Description or secondary text (optional).
   */
  description: PropTypes.string,

  /**
   * Label display is 'fixed' by default. Label will increase its width beyond 50% if needed with 'expand'.
   */
  labelDisplay: PropTypes.oneOf(DISPLAYS),

  /**
   * Handler for click on a suggestItem.
   */
  onClick: PropTypes.func
};
EuiSuggestItem.defaultProps = {
  labelDisplay: 'fixed'
};
EuiSuggestItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSuggestItem",
  "props": {
    "labelDisplay": {
      "defaultValue": {
        "value": "'fixed'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"fixed\"",
          "computed": false
        }, {
          "value": "\"expand\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Label display is 'fixed' by default. Label will increase its width beyond 50% if needed with 'expand'."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "type": {
      "type": {
        "name": "shape",
        "value": {
          "iconType": {
            "name": "custom",
            "raw": "IconPropType.isRequired",
            "required": true
          },
          "color": {
            "name": "union",
            "value": [{
              "name": "enum",
              "value": [{
                "value": "\"tint0\"",
                "computed": false
              }, {
                "value": "\"tint1\"",
                "computed": false
              }, {
                "value": "\"tint2\"",
                "computed": false
              }, {
                "value": "\"tint3\"",
                "computed": false
              }, {
                "value": "\"tint4\"",
                "computed": false
              }, {
                "value": "\"tint5\"",
                "computed": false
              }, {
                "value": "\"tint6\"",
                "computed": false
              }, {
                "value": "\"tint7\"",
                "computed": false
              }, {
                "value": "\"tint8\"",
                "computed": false
              }, {
                "value": "\"tint9\"",
                "computed": false
              }]
            }, {
              "name": "string"
            }],
            "required": true
          }
        }
      },
      "required": true,
      "description": "Takes 'iconType' for EuiIcon and 'color'. 'color' can be tint1 through tint9."
    },
    "label": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": "Label or primary text."
    },
    "description": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Description or secondary text (optional)."
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Handler for click on a suggestItem."
    }
  }
};