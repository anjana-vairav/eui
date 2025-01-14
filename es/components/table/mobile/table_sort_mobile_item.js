function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiContextMenuItem } from '../../context_menu';
export var EuiTableSortMobileItem = function EuiTableSortMobileItem(_ref) {
  var children = _ref.children,
      onSort = _ref.onSort,
      isSorted = _ref.isSorted,
      isSortAscending = _ref.isSortAscending,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      rest = _objectWithoutProperties(_ref, ["children", "onSort", "isSorted", "isSortAscending", "className", "ariaLabel"]);

  var sortIcon = 'empty';

  if (isSorted) {
    sortIcon = isSortAscending ? 'sortUp' : 'sortDown';
  }

  var buttonClasses = classNames('euiTableSortMobileItem', className, {
    'euiTableSortMobileItem-isSorted': isSorted
  });
  var columnTitle = ariaLabel ? ariaLabel : children;
  var statefulAriaLabel = "Sort ".concat(columnTitle, " ").concat(isSortAscending ? 'descending' : 'ascending');
  return React.createElement(EuiContextMenuItem, _extends({
    className: buttonClasses,
    icon: sortIcon,
    onClick: onSort,
    "aria-label": statefulAriaLabel
  }, rest), children);
};
EuiTableSortMobileItem.propTypes = {
  /**
     * Callback to know when an item has been clicked
     */
  onSort: PropTypes.func,

  /**
     * Indicates current option is the sorted on column
     */
  isSorted: PropTypes.bool,

  /**
     * Indicates which direction the current column is sorted on
     */
  isSortAscending: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiTableSortMobileItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableSortMobileItem",
  "props": {
    "onSort": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Callback to know when an item has been clicked"
    },
    "isSorted": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates current option is the sorted on column"
    },
    "isSortAscending": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates which direction the current column is sorted on"
    },
    "ariaLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
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