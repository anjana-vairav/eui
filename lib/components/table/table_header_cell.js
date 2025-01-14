"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableHeaderCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _icon = require("../icon");

var _utils = require("./utils");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableHeaderCell = function EuiTableHeaderCell(_ref) {
  var children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? _services.LEFT_ALIGNMENT : _ref$align,
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

  var classes = (0, _classnames.default)('euiTableHeaderCell', className, {
    'euiTableHeaderCell--hideForDesktop': mobileOptions.only || isMobileHeader,
    'euiTableHeaderCell--hideForMobile': !mobileOptions.show || hideForMobile
  });
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);

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

    var buttonClasses = (0, _classnames.default)('euiTableHeaderButton', {
      'euiTableHeaderButton-isSorted': isSorted
    });
    var ariaSortValue = 'none';

    if (isSorted) {
      ariaSortValue = isSortAscending ? 'ascending' : 'descending';
    }

    return _react.default.createElement("th", _extends({
      className: classes,
      scope: scope,
      role: "columnheader",
      "aria-sort": ariaSortValue,
      "aria-live": "polite",
      style: styleObj
    }, rest), _react.default.createElement("button", {
      type: "button",
      className: buttonClasses,
      onClick: onSort,
      "data-test-subj": "tableHeaderSortButton"
    }, _react.default.createElement("span", {
      className: contentClasses
    }, _react.default.createElement("span", {
      className: "euiTableCellContent__text"
    }, children), isSorted && _react.default.createElement(_icon.EuiIcon, {
      className: "euiTableSortIcon",
      type: isSortAscending ? 'sortUp' : 'sortDown',
      size: "m",
      "aria-label": "Sorted in ".concat(ariaSortValue, " order")
    }), _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("span", null, getScreenCasterDirection())))));
  }

  return _react.default.createElement("th", _extends({
    className: classes,
    scope: scope,
    role: "columnheader",
    style: styleObj
  }, rest), _react.default.createElement("div", {
    className: contentClasses
  }, _react.default.createElement("span", {
    className: "euiTableCellContent__text"
  }, children)));
};

exports.EuiTableHeaderCell = EuiTableHeaderCell;
EuiTableHeaderCell.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  align: _propTypes.default.oneOf(["left", "right", "center"]),

  /**
       * Set `allowNeutralSort` on EuiInMemoryTable to false to force column
       * sorting.  EuiBasicTable always forces column sorting.
       */
  allowNeutralSort: _propTypes.default.bool,

  /**
       * _DEPRECATED: use `mobileOptions.show = false`_ Indicates if the
       * column should not show for mobile users (typically hidden because a
       * custom mobile header utilizes the column's contents)
       */
  hideForMobile: _propTypes.default.bool,

  /**
       * _DEPRECATED: use `mobileOptions.only = true`_ Indicates if the
       * column was created to be the row's heading in mobile view (this
       * column will be hidden at larger screens)
       */
  isMobileHeader: _propTypes.default.bool,
  isSortAscending: _propTypes.default.bool,
  isSorted: _propTypes.default.bool,

  /**
       * Mobile options for displaying differently at small screens
       */
  mobileOptions: _propTypes.default.shape({
    /**
           * If false, will not render the column at all for mobile
           */
    show: _propTypes.default.bool,

    /**
           * Only show for mobile? If true, will not render the column at all
           * for desktop
           */
    only: _propTypes.default.bool
  }),
  onSort: _propTypes.default.func,
  scope: _propTypes.default.oneOf(["col", "row", "colgroup", "rowgroup"]),
  width: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired])
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
        "name": "custom",
        "raw": "_propTypes.default.oneOf([\"left\", \"right\", \"center\"])"
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