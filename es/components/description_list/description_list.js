function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiDescriptionListTitle } from './description_list_title';
import { EuiDescriptionListDescription } from './description_list_description';
import { keysOf } from '../common';
var typesToClassNameMap = {
  row: 'euiDescriptionList--row',
  inline: 'euiDescriptionList--inline',
  column: 'euiDescriptionList--column',
  responsiveColumn: 'euiDescriptionList--responsiveColumn'
};
export var TYPES = keysOf(typesToClassNameMap);
var alignmentsToClassNameMap = {
  center: 'euiDescriptionList--center',
  left: ''
};
export var ALIGNMENTS = keysOf(alignmentsToClassNameMap);
var textStylesToClassNameMap = {
  normal: '',
  reverse: 'euiDescriptionList--reverse'
};
export var TEXT_STYLES = keysOf(textStylesToClassNameMap);
export var EuiDescriptionList = function EuiDescriptionList(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children,
      className = _ref.className,
      _ref$compressed = _ref.compressed,
      compressed = _ref$compressed === void 0 ? false : _ref$compressed,
      descriptionProps = _ref.descriptionProps,
      listItems = _ref.listItems,
      _ref$textStyle = _ref.textStyle,
      textStyle = _ref$textStyle === void 0 ? 'normal' : _ref$textStyle,
      titleProps = _ref.titleProps,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'row' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["align", "children", "className", "compressed", "descriptionProps", "listItems", "textStyle", "titleProps", "type"]);

  var classes = classNames('euiDescriptionList', type ? typesToClassNameMap[type] : undefined, align ? alignmentsToClassNameMap[align] : undefined, textStyle ? textStylesToClassNameMap[textStyle] : undefined, {
    'euiDescriptionList--compressed': compressed
  }, className);
  var childrenOrListItems = null;

  if (listItems) {
    childrenOrListItems = listItems.map(function (item, index) {
      return [React.createElement(EuiDescriptionListTitle, _extends({
        key: "title-".concat(index)
      }, titleProps), item.title), React.createElement(EuiDescriptionListDescription, _extends({
        key: "description-".concat(index)
      }, descriptionProps), item.description)];
    });
  } else {
    childrenOrListItems = children;
  }

  return React.createElement("dl", _extends({
    className: classes
  }, rest), childrenOrListItems);
};
EuiDescriptionList.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired
  }).isRequired),

  /**
     * Text alignment
     */
  align: PropTypes.oneOf(["center", "left"]),

  /**
     * Smaller text and condensed spacing
     */
  compressed: PropTypes.bool,

  /**
     * How should the content be styled, by default
     * this will emphasize the title
     */
  textStyle: PropTypes.oneOf(["normal", "reverse"]),

  /**
     * How each item should be layed out
     */
  type: PropTypes.oneOf(["row", "inline", "column", "responsiveColumn"]),

  /**
     * Props object to be passed to `EuiDescriptionListTitle`
     */
  titleProps: PropTypes.any,

  /**
     * Props object to be passed to `EuiDescriptionListDescription`
     */
  descriptionProps: PropTypes.any
};
EuiDescriptionList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDescriptionList",
  "props": {
    "align": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"left\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Text alignment"
    },
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Smaller text and condensed spacing"
    },
    "textStyle": {
      "defaultValue": {
        "value": "'normal'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"normal\"",
          "computed": false
        }, {
          "value": "\"reverse\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "How should the content be styled, by default\nthis will emphasize the title"
    },
    "type": {
      "defaultValue": {
        "value": "'row'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"inline\"",
          "computed": false
        }, {
          "value": "\"column\"",
          "computed": false
        }, {
          "value": "\"responsiveColumn\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "How each item should be layed out"
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
    "listItems": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "title": {
              "name": "any",
              "required": true
            },
            "description": {
              "name": "any",
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": ""
    },
    "titleProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Props object to be passed to `EuiDescriptionListTitle`"
    },
    "descriptionProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Props object to be passed to `EuiDescriptionListDescription`"
    }
  }
};