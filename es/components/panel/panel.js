function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiBetaBadge } from '../badge/beta_badge';
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiPanel--paddingSmall',
  m: 'euiPanel--paddingMedium',
  l: 'euiPanel--paddingLarge'
};
export var SIZES = Object.keys(paddingSizeToClassNameMap);
export var EuiPanel = function EuiPanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'm' : _ref$paddingSize,
      _ref$hasShadow = _ref.hasShadow,
      hasShadow = _ref$hasShadow === void 0 ? false : _ref$hasShadow,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      panelRef = _ref.panelRef,
      onClick = _ref.onClick,
      betaBadgeLabel = _ref.betaBadgeLabel,
      betaBadgeTooltipContent = _ref.betaBadgeTooltipContent,
      betaBadgeTitle = _ref.betaBadgeTitle,
      rest = _objectWithoutProperties(_ref, ["children", "className", "paddingSize", "hasShadow", "grow", "panelRef", "onClick", "betaBadgeLabel", "betaBadgeTooltipContent", "betaBadgeTitle"]);

  var classes = classNames('euiPanel', paddingSize ? paddingSizeToClassNameMap[paddingSize] : null, {
    'euiPanel--shadow': hasShadow,
    'euiPanel--flexGrowZero': !grow,
    'euiPanel--isClickable': onClick,
    'euiPanel--hasBetaBadge': betaBadgeLabel
  }, className);
  var optionalBetaBadge;

  if (betaBadgeLabel) {
    optionalBetaBadge = React.createElement("span", {
      className: "euiPanel__betaBadgeWrapper"
    }, React.createElement(EuiBetaBadge, {
      label: betaBadgeLabel,
      title: betaBadgeTitle,
      tooltipContent: betaBadgeTooltipContent,
      className: "euiPanel__betaBadge"
    }));
  }

  if (onClick) {
    return React.createElement("button", _extends({
      ref: panelRef,
      className: classes,
      onClick: onClick
    }, rest), optionalBetaBadge, children);
  }

  return React.createElement("div", _extends({
    ref: panelRef,
    className: classes
  }, rest), optionalBetaBadge, children);
};
EuiPanel.propTypes = {
  /**
     * If active, adds a deeper shadow to the panel
     */

  /**
     * If active, adds a deeper shadow to the panel
     */
  hasShadow: PropTypes.bool,

  /**
     * Padding applied to the panel
     */

  /**
     * Padding applied to the panel
     */
  paddingSize: PropTypes.oneOf(["none", "s", "m", "l"]),

  /**
     * When true the panel will grow to match `EuiFlexItem`
     */

  /**
     * When true the panel will grow to match `EuiFlexItem`
     */
  grow: PropTypes.bool,
  panelRef: PropTypes.any,

  /**
     * Add a badge to the panel to label it as "Beta" or other non-GA state
     */

  /**
     * Add a badge to the panel to label it as "Beta" or other non-GA state
     */
  betaBadgeLabel: PropTypes.string,

  /**
     * Add a description to the beta badge (will appear in a tooltip)
     */

  /**
     * Add a description to the beta badge (will appear in a tooltip)
     */
  betaBadgeTooltipContent: PropTypes.node,

  /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */

  /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */
  betaBadgeTitle: PropTypes.string,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiPanel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPanel",
  "props": {
    "paddingSize": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Padding applied to the panel"
    },
    "hasShadow": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "If active, adds a deeper shadow to the panel"
    },
    "grow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "When true the panel will grow to match `EuiFlexItem`"
    },
    "panelRef": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "betaBadgeLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Add a badge to the panel to label it as \"Beta\" or other non-GA state"
    },
    "betaBadgeTooltipContent": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Add a description to the beta badge (will appear in a tooltip)"
    },
    "betaBadgeTitle": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Optional title will be supplied as tooltip title or title attribute otherwise the label will be used"
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
    }
  }
};