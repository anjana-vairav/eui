function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiTableRow = function EuiTableRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      hasActions = _ref.hasActions,
      isExpandedRow = _ref.isExpandedRow,
      isExpandable = _ref.isExpandable,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isSelected", "isSelectable", "hasActions", "isExpandedRow", "isExpandable", "onClick"]);

  var classes = classNames('euiTableRow', className, {
    'euiTableRow-isSelectable': isSelectable,
    'euiTableRow-isSelected': isSelected,
    'euiTableRow-hasActions': hasActions,
    'euiTableRow-isExpandedRow': isExpandedRow,
    'euiTableRow-isExpandable': isExpandable,
    'euiTableRow-isClickable': onClick
  });
  return React.createElement("tr", _extends({
    className: classes,
    onClick: onClick
  }, rest), children);
};
EuiTableRow.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * Indicates if the table has a single column of checkboxes for selecting
     * rows (affects mobile only)
     */
  isSelectable: PropTypes.bool,

  /**
     * Indicates the current row has been selected
     */
  isSelected: PropTypes.bool,

  /**
     * Indicates if the table has a dedicated column for icon-only actions
     * (affects mobile only)
     */
  hasActions: PropTypes.bool,

  /**
     * Indicates if the row will have an expanded row
     */
  isExpandable: PropTypes.bool,

  /**
     * Indicates if the row will be the expanded row
     */
  isExpandedRow: PropTypes.bool
};
EuiTableRow.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableRow",
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
    "isSelectable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates if the table has a single column of checkboxes for selecting\nrows (affects mobile only)"
    },
    "isSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates the current row has been selected"
    },
    "hasActions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates if the table has a dedicated column for icon-only actions\n(affects mobile only)"
    },
    "isExpandable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates if the row will have an expanded row"
    },
    "isExpandedRow": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates if the row will be the expanded row"
    }
  }
};