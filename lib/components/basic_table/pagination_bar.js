"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationBar = exports.defaults = void 0;

var _react = _interopRequireDefault(require("react"));

var _spacer = require("../spacer");

var _table = require("../table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  pageSizeOptions: [10, 25, 50]
};
exports.defaults = defaults;

var PaginationBar = function PaginationBar(_ref) {
  var pagination = _ref.pagination,
      onPageSizeChange = _ref.onPageSizeChange,
      onPageChange = _ref.onPageChange;
  var pageSizeOptions = pagination.pageSizeOptions ? pagination.pageSizeOptions : defaults.pageSizeOptions;
  var pageCount = Math.ceil(pagination.totalItemCount / pagination.pageSize);
  return _react.default.createElement("div", null, _react.default.createElement(_spacer.EuiSpacer, {
    size: "m"
  }), _react.default.createElement(_table.EuiTablePagination, {
    activePage: pagination.pageIndex,
    hidePerPageOptions: pagination.hidePerPageOptions,
    itemsPerPage: pagination.pageSize,
    itemsPerPageOptions: pageSizeOptions,
    pageCount: pageCount,
    onChangeItemsPerPage: onPageSizeChange,
    onChangePage: onPageChange
  }));
};

exports.PaginationBar = PaginationBar;
PaginationBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PaginationBar"
};