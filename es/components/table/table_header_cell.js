function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiIcon } from '../icon';
import { resolveWidthAsStyle } from './utils';
import { LEFT_ALIGNMENT, RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services';
export var EuiTableHeaderCell = function EuiTableHeaderCell(_ref) {
  var children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? LEFT_ALIGNMENT : _ref$align,
      onSort = _ref.onSort,
      isSorted = _ref.isSorted,
      isSortAscending = _ref.isSortAscending,
      allowNeutralSort = _ref.allowNeutralSort,
      className = _ref.className,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? 'col' : _ref$scope,
      _ref$mobileOptions = _ref.mobileOptions,
      mobileOptions = _ref$mobileOptions === void 0 ? {
    show: true
  } : _ref$mobileOptions,
      width = _ref.width,
      isMobileHeader = _ref.isMobileHeader,
      hideForMobile = _ref.hideForMobile,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["children", "align", "onSort", "isSorted", "isSortAscending", "allowNeutralSort", "className", "scope", "mobileOptions", "width", "isMobileHeader", "hideForMobile", "style"]);

  var classes = classNames('euiTableHeaderCell', className, {
    'euiTableHeaderCell--hideForDesktop': mobileOptions.only || isMobileHeader,
    'euiTableHeaderCell--hideForMobile': !mobileOptions.show || hideForMobile
  });
  var contentClasses = classNames('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === CENTER_ALIGNMENT
  });
  var styleObj = resolveWidthAsStyle(style, width);

  if (onSort) {
    var getScreenCasterDirection = function getScreenCasterDirection() {
      if (ariaSortValue === 'ascending') {
        return 'Click to sort in descending order';
      }

      if (allowNeutralSort && ariaSortValue === 'descending') {
        return 'Click to unsort';
      }

      return 'Click to sort in ascending order';
    };

    var buttonClasses = classNames('euiTableHeaderButton', {
      'euiTableHeaderButton-isSorted': isSorted
    });
    var ariaSortValue = 'none';

    if (isSorted) {
      ariaSortValue = isSortAscending ? 'ascending' : 'descending';
    }

    return React.createElement("th", _extends({
      className: classes,
      scope: scope,
      role: "columnheader",
      "aria-sort": ariaSortValue,
      "aria-live": "polite",
      style: styleObj
    }, rest), React.createElement("button", {
      type: "button",
      className: buttonClasses,
      onClick: onSort,
      "data-test-subj": "tableHeaderSortButton"
    }, React.createElement("span", {
      className: contentClasses
    }, React.createElement("span", {
      className: "euiTableCellContent__text"
    }, children), isSorted && React.createElement(EuiIcon, {
      className: "euiTableSortIcon",
      type: isSortAscending ? 'sortUp' : 'sortDown',
      size: "m",
      "aria-label": "Sorted in ".concat(ariaSortValue, " order")
    }), React.createElement(EuiScreenReaderOnly, null, React.createElement("span", null, getScreenCasterDirection())))));
  }

  return React.createElement("th", _extends({
    className: classes,
    scope: scope,
    role: "columnheader",
    style: styleObj
  }, rest), React.createElement("div", {
    className: contentClasses
  }, React.createElement("span", {
    className: "euiTableCellContent__text"
  }, children)));
};
EuiTableHeaderCell.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  align: PropTypes.oneOf(["left", "right", "center"]),

  /**
       * Set `allowNeutralSort` on EuiInMemoryTable to false to force column
       * sorting.  EuiBasicTable always forces column sorting.
       */
  allowNeutralSort: PropTypes.bool,

  /**
       * _DEPRECATED: use `mobileOptions.show = false`_ Indicates if the
       * column should not show for mobile users (typically hidden because a
       * custom mobile header utilizes the column's contents)
       */
  hideForMobile: PropTypes.bool,

  /**
       * _DEPRECATED: use `mobileOptions.only = true`_ Indicates if the
       * column was created to be the row's heading in mobile view (this
       * column will be hidden at larger screens)
       */
  isMobileHeader: PropTypes.bool,
  isSortAscending: PropTypes.bool,
  isSorted: PropTypes.bool,

  /**
       * Mobile options for displaying differently at small screens
       */
  mobileOptions: PropTypes.shape({
    /**
           * If false, will not render the column at all for mobile
           */
    show: PropTypes.bool,

    /**
           * Only show for mobile? If true, will not render the column at all
           * for desktop
           */
    only: PropTypes.bool
  }),
  onSort: PropTypes.func,
  scope: PropTypes.oneOf(["col", "row", "colgroup", "rowgroup"]),
  width: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
};
EuiTableHeaderCell.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableHeaderCell",
  "props": {
    "align": {
      "defaultValue": {
        "value": "LEFT_ALIGNMENT",
        "computed": true
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "scope": {
      "defaultValue": {
        "value": "'col'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"col\"",
          "computed": false
        }, {
          "value": "\"row\"",
          "computed": false
        }, {
          "value": "\"colgroup\"",
          "computed": false
        }, {
          "value": "\"rowgroup\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "mobileOptions": {
      "defaultValue": {
        "value": "{\n  show: true\n}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {
          "show": {
            "name": "bool",
            "description": "If false, will not render the column at all for mobile",
            "required": false
          },
          "only": {
            "name": "bool",
            "description": "Only show for mobile? If true, will not render the column at all\nfor desktop",
            "required": false
          }
        }
      },
      "required": false,
      "description": "Mobile options for displaying differently at small screens"
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
    "allowNeutralSort": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set `allowNeutralSort` on EuiInMemoryTable to false to force column\nsorting.  EuiBasicTable always forces column sorting."
    },
    "hideForMobile": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "_DEPRECATED: use `mobileOptions.show = false`_ Indicates if the\ncolumn should not show for mobile users (typically hidden because a\ncustom mobile header utilizes the column's contents)"
    },
    "isMobileHeader": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "_DEPRECATED: use `mobileOptions.only = true`_ Indicates if the\ncolumn was created to be the row's heading in mobile view (this\ncolumn will be hidden at larger screens)"
    },
    "isSortAscending": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isSorted": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onSort": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "width": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false,
      "description": ""
    }
  }
};