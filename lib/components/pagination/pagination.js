"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pagination_button = require("./pagination_button");

var _button = require("../button");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MAX_VISIBLE_PAGES = 5;
var NUMBER_SURROUNDING_PAGES = Math.floor(MAX_VISIBLE_PAGES * 0.5);

var EuiPagination = function EuiPagination(_ref) {
  var className = _ref.className,
      _ref$pageCount = _ref.pageCount,
      pageCount = _ref$pageCount === void 0 ? 1 : _ref$pageCount,
      _ref$activePage = _ref.activePage,
      activePage = _ref$activePage === void 0 ? 1 : _ref$activePage,
      _ref$onPageClick = _ref.onPageClick,
      onPageClick = _ref$onPageClick === void 0 ? function () {} : _ref$onPageClick,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["className", "pageCount", "activePage", "onPageClick", "compressed"]);

  var classes = (0, _classnames.default)('euiPagination', className);
  var pages = [];
  var firstPageInRange = Math.max(0, Math.min(activePage - NUMBER_SURROUNDING_PAGES, pageCount - MAX_VISIBLE_PAGES));
  var lastPageInRange = Math.min(pageCount, firstPageInRange + MAX_VISIBLE_PAGES);

  var _loop = function _loop(i, index) {
    pages.push(_react.default.createElement(_i18n.EuiI18n, {
      key: index,
      token: "euiPagination.pageOfTotal",
      default: "Page {page} of {total}",
      values: {
        page: i + 1,
        total: lastPageInRange
      }
    }, function (pageOfTotal) {
      return _react.default.createElement(_pagination_button.EuiPaginationButton, {
        isActive: i === activePage,
        onClick: onPageClick.bind(null, i),
        hideOnMobile: true,
        "aria-label": pageOfTotal,
        "data-test-subj": "pagination-button-".concat(i)
      }, i + 1);
    }));
  };

  for (var i = firstPageInRange, index = 0; i < lastPageInRange; i++, index++) {
    _loop(i, index);
  }

  var previousButton = _react.default.createElement(_i18n.EuiI18n, {
    token: "euiPagination.previousPage",
    default: "Previous page"
  }, function (previousPage) {
    return _react.default.createElement(_button.EuiButtonIcon, {
      onClick: onPageClick.bind(null, activePage - 1),
      iconType: "arrowLeft",
      disabled: activePage === 0,
      color: "text",
      "aria-label": previousPage,
      "data-test-subj": "pagination-button-previous"
    });
  });

  var firstPageButtons = [];

  if (firstPageInRange > 0) {
    firstPageButtons.push(_react.default.createElement(_i18n.EuiI18n, {
      key: "0",
      token: "euiPagination.pageOfTotal",
      default: "Page {page} of {total}",
      values: {
        page: 1,
        total: lastPageInRange
      }
    }, function (pageOfTotal) {
      return _react.default.createElement(_pagination_button.EuiPaginationButton, {
        onClick: onPageClick.bind(null, 0),
        hideOnMobile: true,
        "aria-label": pageOfTotal
      }, "1");
    }));

    if (firstPageInRange > 1) {
      firstPageButtons.push(_react.default.createElement(_pagination_button.EuiPaginationButton, {
        key: "beginningEllipsis",
        isPlaceholder: true,
        hideOnMobile: true,
        "aria-hidden": true
      }, _react.default.createElement("span", null, "\u2026")));
    }
  }

  var lastPageButtons = [];

  if (lastPageInRange < pageCount) {
    if (lastPageInRange < pageCount - 1) {
      lastPageButtons.push(_react.default.createElement(_pagination_button.EuiPaginationButton, {
        key: "endingEllipsis",
        isPlaceholder: true,
        hideOnMobile: true,
        "aria-hidden": true
      }, _react.default.createElement("span", null, "\u2026")));
    }

    lastPageButtons.push(_react.default.createElement(_i18n.EuiI18n, {
      key: pageCount - 1,
      token: "euiPagination.jumpToLastPage",
      default: "Jump to the last page, number {pageCount}",
      values: {
        pageCount: pageCount
      }
    }, function (jumpToLastPage) {
      return _react.default.createElement(_pagination_button.EuiPaginationButton, {
        onClick: onPageClick.bind(null, pageCount - 1),
        hideOnMobile: true,
        "aria-label": jumpToLastPage
      }, pageCount);
    }));
  }

  var nextButton = _react.default.createElement(_i18n.EuiI18n, {
    token: "euiPagination.nextPage",
    default: "Next page"
  }, function (nextPage) {
    return _react.default.createElement(_button.EuiButtonIcon, {
      onClick: onPageClick.bind(null, activePage + 1),
      iconType: "arrowRight",
      "aria-label": nextPage,
      disabled: activePage === pageCount - 1,
      color: "text",
      "data-test-subj": "pagination-button-next"
    });
  });

  var selectablePages = pages;

  if (compressed) {
    return _react.default.createElement("div", _extends({
      className: classes
    }, rest), previousButton, nextButton);
  }

  return _react.default.createElement("div", _extends({
    className: classes,
    role: "group"
  }, rest), previousButton, firstPageButtons, selectablePages, lastPageButtons, nextButton);
};

exports.EuiPagination = EuiPagination;
EuiPagination.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * The total number of pages.
     */
  pageCount: _propTypes.default.number,

  /**
     * The current page using a zero based index.
     * So if you set the activePage to 1, it will activate the second page.
     */
  activePage: _propTypes.default.number,
  onPageClick: _propTypes.default.func,

  /**
     * If true, will only show next/prev arrows instead of page numbers.
     */
  compressed: _propTypes.default.bool
};
EuiPagination.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPagination",
  "props": {
    "pageCount": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The total number of pages."
    },
    "activePage": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "The current page using a zero based index.\nSo if you set the activePage to 1, it will activate the second page."
    },
    "onPageClick": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "type": {
        "name": "func"
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
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "If true, will only show next/prev arrows instead of page numbers."
    }
  }
};