function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiTitle } from '../title';
import { EuiNavDrawerGroup } from './nav_drawer_group';
import { EuiListGroup } from '../list_group/list_group';
export var EuiNavDrawerFlyout = function EuiNavDrawerFlyout(_ref) {
  var className = _ref.className,
      title = _ref.title,
      isCollapsed = _ref.isCollapsed,
      listItems = _ref.listItems,
      wrapText = _ref.wrapText,
      rest = _objectWithoutProperties(_ref, ["className", "title", "isCollapsed", "listItems", "wrapText"]);

  var classes = classNames('euiNavDrawerFlyout', {
    'euiNavDrawerFlyout-isCollapsed': isCollapsed,
    'euiNavDrawerFlyout-isExpanded': !isCollapsed
  }, className);
  return React.createElement("div", _extends({
    className: classes,
    "aria-labelledby": "navDrawerFlyoutTitle"
  }, rest), React.createElement(EuiTitle, {
    className: "euiNavDrawerFlyout__title",
    tabIndex: "-1",
    size: "xxs"
  }, React.createElement("div", {
    id: "navDrawerFlyoutTitle"
  }, title)), React.createElement(EuiNavDrawerGroup, {
    className: "euiNavDrawerFlyout__listGroup",
    listItems: listItems,
    wrapText: wrapText
  }));
};
EuiNavDrawerFlyout.propTypes = {
  className: PropTypes.string,
  listItems: EuiListGroup.propTypes.listItems,
  wrapText: EuiListGroup.propTypes.wrapText,

  /**
   * Display a title atop the flyout
   */
  title: PropTypes.string,

  /**
   * Toggle the nav drawer between collapsed and expanded
   */
  isCollapsed: PropTypes.bool
};
EuiNavDrawerFlyout.defaultProps = {
  isCollapsed: true
};
EuiNavDrawerFlyout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiNavDrawerFlyout",
  "props": {
    "isCollapsed": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Toggle the nav drawer between collapsed and expanded"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "listItems": {
      "type": {
        "name": "custom",
        "raw": "EuiListGroup.propTypes.listItems"
      },
      "required": false,
      "description": ""
    },
    "wrapText": {
      "type": {
        "name": "custom",
        "raw": "EuiListGroup.propTypes.wrapText"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Display a title atop the flyout"
    }
  }
};