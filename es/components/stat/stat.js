function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { keysOf } from '../common';
import classNames from 'classnames';
import { EuiText } from '../text';
import { EuiTitle } from '../title/title';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiI18n } from '../i18n';
var colorToClassNameMap = {
  default: null,
  subdued: 'euiStat__title--subdued',
  primary: 'euiStat__title--primary',
  secondary: 'euiStat__title--secondary',
  danger: 'euiStat__title--danger',
  accent: 'euiStat__title--accent'
};
export var COLORS = keysOf(colorToClassNameMap);
var textAlignToClassNameMap = {
  left: 'euiStat--leftAligned',
  center: 'euiStat--centerAligned',
  right: 'euiStat--rightAligned'
};
export var ALIGNMENTS = keysOf(textAlignToClassNameMap);
export var EuiStat = function EuiStat(_ref) {
  var children = _ref.children,
      className = _ref.className,
      description = _ref.description,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      title = _ref.title,
      _ref$titleColor = _ref.titleColor,
      titleColor = _ref$titleColor === void 0 ? 'default' : _ref$titleColor,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 'l' : _ref$titleSize,
      rest = _objectWithoutProperties(_ref, ["children", "className", "description", "isLoading", "reverse", "textAlign", "title", "titleColor", "titleSize"]);

  var classes = classNames('euiStat', textAlignToClassNameMap[textAlign], className);
  var titleClasses = classNames('euiStat__title', colorToClassNameMap[titleColor], {
    'euiStat__title-isLoading': isLoading
  });
  var descriptionDisplay = React.createElement(EuiText, {
    size: "s",
    className: "euiStat__description"
  }, React.createElement("p", {
    "aria-hidden": "true"
  }, description));
  var titleDisplay = React.createElement(EuiTitle, {
    size: titleSize,
    className: titleClasses
  }, React.createElement("p", {
    "aria-hidden": "true"
  }, isLoading ? '--' : title));
  var screenReader = React.createElement(EuiScreenReaderOnly, null, React.createElement("p", null, isLoading ? React.createElement(EuiI18n, {
    token: "euiStat.loadingText",
    default: "Statistic is loading"
  }) : React.createElement(Fragment, null, reverse ? "".concat(title, " ").concat(description) : "".concat(description, " ").concat(title))));
  var statDisplay = React.createElement(Fragment, null, !reverse && descriptionDisplay, titleDisplay, reverse && descriptionDisplay, screenReader);
  return React.createElement("div", _extends({
    className: classes
  }, rest), statDisplay, children);
};
EuiStat.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * Set the description (label) text
     */
  description: PropTypes.node.isRequired,

  /**
     * Will hide the title with an animation until false
     */
  isLoading: PropTypes.bool,

  /**
     * Flips the order of the description and title
     */
  reverse: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),

  /**
     * The (value) text
     */
  title: PropTypes.node.isRequired,

  /**
     * The color of the title text
     */
  titleColor: PropTypes.oneOf(["default", "subdued", "primary", "secondary", "danger", "accent"]),

  /**
     * Size of the title. See EuiTitle for options ('s', 'm', 'l'... etc)
     */
  titleSize: PropTypes.oneOf(["xxxs", "xxs", "xs", "s", "m", "l"])
};
EuiStat.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiStat",
  "props": {
    "isLoading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Will hide the title with an animation until false"
    },
    "reverse": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Flips the order of the description and title"
    },
    "textAlign": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "titleColor": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "The color of the title text"
    },
    "titleSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"xxxs\"",
          "computed": false
        }, {
          "value": "\"xxs\"",
          "computed": false
        }, {
          "value": "\"xs\"",
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
      "description": "Size of the title. See EuiTitle for options ('s', 'm', 'l'... etc)"
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
    "description": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "Set the description (label) text"
    },
    "title": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "The (value) text"
    }
  }
};