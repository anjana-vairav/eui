function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { formatAuto, formatBoolean, formatDate, formatNumber, formatText, LEFT_ALIGNMENT, RIGHT_ALIGNMENT, SortDirection } from '../../services';
import { isFunction } from '../../services/predicate';
import { get } from '../../services/objects';
import { EuiFlexGroup, EuiFlexItem } from '../flex'; // @ts-ignore

import { EuiCheckbox } from '../form/checkbox/checkbox';
import { EuiTable, EuiTableBody, EuiTableFooter, EuiTableFooterCell, EuiTableHeader, EuiTableHeaderCell, EuiTableHeaderCellCheckbox, EuiTableHeaderMobile, EuiTableRow, EuiTableRowCell, EuiTableRowCellCheckbox, EuiTableSortMobile } from '../table';
import { CollapsedItemActions } from './collapsed_item_actions';
import { ExpandedItemActions } from './expanded_item_actions';
import { PaginationBar } from './pagination_bar';
import { EuiIcon } from '../icon';
import { LoadingTableBody } from './loading_table_body';
import { EuiKeyboardAccessible, EuiScreenReaderOnly } from '../accessibility';
import { EuiI18n } from '../i18n';
import { EuiDelayRender } from '../delay_render';
import makeId from '../form/form_row/make_id';
var dataTypesProfiles = {
  auto: {
    align: LEFT_ALIGNMENT,
    render: function render(value) {
      return formatAuto(value);
    }
  },
  string: {
    align: LEFT_ALIGNMENT,
    render: function render(value) {
      return formatText(value);
    }
  },
  number: {
    align: RIGHT_ALIGNMENT,
    render: function render(value) {
      return formatNumber(value);
    }
  },
  boolean: {
    align: LEFT_ALIGNMENT,
    render: function render(value) {
      return formatBoolean(value);
    }
  },
  date: {
    align: LEFT_ALIGNMENT,
    render: function render(value) {
      return formatDate(value);
    }
  }
};
var DATA_TYPES = Object.keys(dataTypesProfiles);
export function getItemId(item, itemId) {
  if (itemId) {
    if (isFunction(itemId)) {
      return itemId(item);
    } // @ts-ignore never mind about the index signature


    return item[itemId];
  }
}

function getRowProps(item, rowProps) {
  if (rowProps) {
    if (isFunction(rowProps)) {
      return rowProps(item);
    }

    return rowProps;
  }

  return {};
}

function getCellProps(item, column, cellProps) {
  if (cellProps) {
    if (isFunction(cellProps)) {
      return cellProps(item, column);
    }

    return cellProps;
  }

  return {};
}

function getColumnFooter(column, _ref) {
  var items = _ref.items,
      pagination = _ref.pagination;
  var _ref2 = column,
      footer = _ref2.footer;

  if (footer) {
    if (isFunction(footer)) {
      return footer({
        items: items,
        pagination: pagination
      });
    }

    return footer;
  }

  return undefined;
}

function hasPagination(x) {
  return x.hasOwnProperty('pagination') && !!x.pagination;
}

export var EuiBasicTable =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiBasicTable, _Component);

  function EuiBasicTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiBasicTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiBasicTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selection: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSelectAll", function (isMobile) {
      var _this$props = _this.props,
          items = _this$props.items,
          selection = _this$props.selection;

      if (!selection) {
        return;
      }

      var selectableItems = items.filter(function (item) {
        return !selection.selectable || selection.selectable(item);
      });
      var checked = _this.state.selection && selectableItems.length > 0 && _this.state.selection.length === selectableItems.length;
      var disabled = selectableItems.length === 0;

      var onChange = function onChange(event) {
        if (event.target.checked) {
          _this.changeSelection(selectableItems);
        } else {
          _this.changeSelection([]);
        }
      };

      return React.createElement(EuiI18n, {
        token: "euiBasicTable.selectAllRows",
        default: "Select all rows"
      }, function (selectAllRows) {
        return React.createElement(EuiCheckbox, {
          id: "_selection_column-checkbox_".concat(makeId()),
          type: isMobile ? undefined : 'inList',
          checked: checked,
          disabled: disabled,
          onChange: onChange // Only add data-test-subj to one of the checkboxes
          ,
          "data-test-subj": isMobile ? undefined : 'checkboxSelectAll',
          "aria-label": selectAllRows,
          label: isMobile ? selectAllRows : null
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resolveColumnSortDirection", function (column) {
      var sorting = _this.props.sorting;
      var _ref3 = column,
          sortable = _ref3.sortable,
          field = _ref3.field,
          name = _ref3.name;

      if (!sorting || !sorting.sort || !sortable) {
        return;
      }

      if (sorting.sort.field === field || sorting.sort.field === name) {
        return sorting.sort.direction;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resolveColumnOnSort", function (column) {
      var sorting = _this.props.sorting;
      var _ref4 = column,
          sortable = _ref4.sortable,
          name = _ref4.name;

      if (!sorting || !sortable) {
        return;
      }

      if (!_this.props.onChange) {
        throw new Error("BasicTable is configured to be sortable on column [".concat(name, "] but\n          [onChange] is not configured. This callback must be implemented to handle the sort requests"));
      }

      return function () {
        return _this.onColumnSortChange(column);
      };
    });

    return _this;
  }

  _createClass(EuiBasicTable, [{
    key: "buildCriteria",
    value: function buildCriteria(props) {
      var criteria = {};

      if (hasPagination(props)) {
        criteria.page = {
          index: props.pagination.pageIndex,
          size: props.pagination.pageSize
        };
      }

      if (props.sorting) {
        criteria.sort = props.sorting.sort;
      }

      return criteria;
    }
  }, {
    key: "changeSelection",
    value: function changeSelection(selection) {
      if (!this.props.selection) {
        return;
      }

      this.setState({
        selection: selection
      });

      if (this.props.selection.onSelectionChange) {
        this.props.selection.onSelectionChange(selection);
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.changeSelection([]);
    }
  }, {
    key: "onPageSizeChange",
    value: function onPageSizeChange(size) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);

      var criteria = _objectSpread({}, currentCriteria, {
        page: {
          index: 0,
          // when page size changes, we take the user back to the first page
          size: size
        }
      });

      if (this.props.onChange) {
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(index) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);

      var criteria = _objectSpread({}, currentCriteria, {
        page: _objectSpread({}, currentCriteria.page, {
          index: index
        })
      });

      if (this.props.onChange) {
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "onColumnSortChange",
    value: function onColumnSortChange(column) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);
      var direction = SortDirection.ASC;

      if (currentCriteria && currentCriteria.sort && (currentCriteria.sort.field === column.field || currentCriteria.sort.field === column.name)) {
        direction = SortDirection.reverse(currentCriteria.sort.direction);
      }

      var criteria = _objectSpread({}, currentCriteria, {
        // resetting the page if the criteria has one
        page: !currentCriteria.page ? undefined : {
          index: 0,
          size: currentCriteria.page.size
        },
        sort: {
          field: column.field || column.name,
          direction: direction
        }
      });

      if (this.props.onChange) {
        // @ts-ignore complex relationship between pagination's existance and criteria, the code logic ensures this is correctly maintained
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          loading = _this$props2.loading,
          items = _this$props2.items,
          itemId = _this$props2.itemId,
          columns = _this$props2.columns,
          pagination = _this$props2.pagination,
          sorting = _this$props2.sorting,
          selection = _this$props2.selection,
          onChange = _this$props2.onChange,
          error = _this$props2.error,
          noItemsMessage = _this$props2.noItemsMessage,
          compressed = _this$props2.compressed,
          itemIdToExpandedRowMap = _this$props2.itemIdToExpandedRowMap,
          responsive = _this$props2.responsive,
          isSelectable = _this$props2.isSelectable,
          isExpandable = _this$props2.isExpandable,
          hasActions = _this$props2.hasActions,
          rowProps = _this$props2.rowProps,
          cellProps = _this$props2.cellProps,
          rest = _objectWithoutProperties(_this$props2, ["className", "loading", "items", "itemId", "columns", "pagination", "sorting", "selection", "onChange", "error", "noItemsMessage", "compressed", "itemIdToExpandedRowMap", "responsive", "isSelectable", "isExpandable", "hasActions", "rowProps", "cellProps"]);

      var classes = classNames('euiBasicTable', {
        'euiBasicTable-loading': loading
      }, className);
      var table = this.renderTable();
      var paginationBar = this.renderPaginationBar(items.length);
      return React.createElement("div", _extends({
        className: classes
      }, rest), table, paginationBar);
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      var _this$props3 = this.props,
          compressed = _this$props3.compressed,
          responsive = _this$props3.responsive;
      var mobileHeader = responsive ? React.createElement(EuiTableHeaderMobile, null, React.createElement(EuiFlexGroup, {
        responsive: false,
        justifyContent: "spaceBetween",
        alignItems: "baseline"
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, this.renderSelectAll(true)), React.createElement(EuiFlexItem, {
        grow: false
      }, this.renderTableMobileSort()))) : undefined;
      var caption = this.renderTableCaption();
      var head = this.renderTableHead();
      var body = this.renderTableBody();
      var footer = this.renderTableFooter();
      return React.createElement("div", null, mobileHeader, React.createElement(EuiTable, {
        responsive: responsive,
        compressed: compressed
      }, caption, head, body, footer));
    }
  }, {
    key: "renderTableMobileSort",
    value: function renderTableMobileSort() {
      var _this2 = this;

      var _this$props4 = this.props,
          columns = _this$props4.columns,
          sorting = _this$props4.sorting;
      var items = [];

      if (!sorting) {
        return null;
      }

      columns.forEach(function (column, index) {
        if (!column.sortable || column.hideForMobile) {
          return;
        }

        var sortDirection = _this2.resolveColumnSortDirection(column);

        items.push({
          name: column.name,
          key: "_data_s_".concat(column.field, "_").concat(index),
          onSort: _this2.resolveColumnOnSort(column),
          isSorted: !!sortDirection,
          isSortAscending: sortDirection ? SortDirection.isAsc(sortDirection) : undefined
        });
      });
      return items.length ? React.createElement(EuiTableSortMobile, {
        items: items
      }) : null;
    }
  }, {
    key: "renderTableCaption",
    value: function renderTableCaption() {
      var items = this.props.items;
      return React.createElement(EuiScreenReaderOnly, null, React.createElement("caption", {
        className: "euiTableCaption",
        role: "status",
        "aria-relevant": "text",
        "aria-live": "polite"
      }, React.createElement(EuiDelayRender, null, React.createElement(EuiI18n, {
        token: "euiBasicTable.tableDescription",
        default: "Below is a table of {itemCount} items.",
        values: {
          itemCount: items.length
        }
      }))));
    }
  }, {
    key: "renderTableHead",
    value: function renderTableHead() {
      var _this3 = this;

      var _this$props5 = this.props,
          columns = _this$props5.columns,
          selection = _this$props5.selection;
      var headers = [];

      if (selection) {
        headers.push(React.createElement(EuiTableHeaderCellCheckbox, {
          key: "_selection_column_h",
          width: "24px"
        }, this.renderSelectAll(false)));
      }

      columns.forEach(function (column, index) {
        var _ref5 = column,
            field = _ref5.field,
            width = _ref5.width,
            name = _ref5.name,
            align = _ref5.align,
            dataType = _ref5.dataType,
            sortable = _ref5.sortable,
            mobileOptions = _ref5.mobileOptions,
            isMobileHeader = _ref5.isMobileHeader,
            hideForMobile = _ref5.hideForMobile;

        var columnAlign = align || _this3.getAlignForDataType(dataType); // actions column


        if (column.actions) {
          headers.push(React.createElement(EuiTableHeaderCell, {
            key: "_actions_h_".concat(index),
            align: "right",
            width: width,
            mobileOptions: mobileOptions
          }, name));
          return;
        } // computed column


        if (!column.field) {
          var _sorting = {}; // computed columns are only sortable if their `sortable` is a function

          if (_this3.props.sorting && typeof sortable === 'function') {
            var sortDirection = _this3.resolveColumnSortDirection(column);

            _sorting.isSorted = !!sortDirection;
            _sorting.isSortAscending = sortDirection ? SortDirection.isAsc(sortDirection) : undefined;
            _sorting.onSort = _this3.resolveColumnOnSort(column);
            _sorting.allowNeutralSort = _this3.props.sorting.allowNeutralSort;
          }

          headers.push(React.createElement(EuiTableHeaderCell, _extends({
            key: "_computed_column_h_".concat(index),
            align: columnAlign,
            width: width,
            mobileOptions: mobileOptions,
            "data-test-subj": "tableHeaderCell_".concat(name, "_").concat(index)
          }, _sorting), name));
          return;
        } // field data column


        var sorting = {};

        if (_this3.props.sorting && sortable) {
          var _sortDirection = _this3.resolveColumnSortDirection(column);

          sorting.isSorted = !!_sortDirection;
          sorting.isSortAscending = _sortDirection ? SortDirection.isAsc(_sortDirection) : undefined;
          sorting.onSort = _this3.resolveColumnOnSort(column);
          sorting.allowNeutralSort = _this3.props.sorting.allowNeutralSort;
        }

        headers.push(React.createElement(EuiTableHeaderCell, _extends({
          key: "_data_h_".concat(field, "_").concat(index),
          align: columnAlign,
          width: width,
          isMobileHeader: isMobileHeader,
          hideForMobile: hideForMobile,
          mobileOptions: mobileOptions,
          "data-test-subj": "tableHeaderCell_".concat(field, "_").concat(index)
        }, sorting), name));
      });
      return React.createElement(EuiTableHeader, null, headers);
    }
  }, {
    key: "renderTableFooter",
    value: function renderTableFooter() {
      var _this$props6 = this.props,
          items = _this$props6.items,
          columns = _this$props6.columns,
          pagination = _this$props6.pagination,
          selection = _this$props6.selection;
      var footers = [];
      var hasDefinedFooter = false;

      if (selection) {
        // Create an empty cell to compensate for additional selection column
        footers.push(React.createElement(EuiTableFooterCell, {
          key: "_selection_column_f"
        }, undefined));
      }

      columns.forEach(function (column) {
        var footer = getColumnFooter(column, {
          items: items,
          pagination: pagination
        });
        var _ref6 = column,
            mobileOptions = _ref6.mobileOptions,
            isMobileHeader = _ref6.isMobileHeader,
            field = _ref6.field,
            align = _ref6.align;

        if (mobileOptions && mobileOptions.only || isMobileHeader) {
          return; // exclude columns that only exist for mobile headers
        }

        if (footer) {
          footers.push(React.createElement(EuiTableFooterCell, {
            key: "footer_".concat(field),
            align: align
          }, footer));
          hasDefinedFooter = true;
        } else {
          // Footer is undefined, so create an empty cell to preserve layout
          footers.push(React.createElement(EuiTableFooterCell, {
            key: "footer_empty_".concat(footers.length - 1),
            align: align
          }, undefined));
        }
      });
      return footers.length && hasDefinedFooter ? React.createElement(EuiTableFooter, null, footers) : null;
    }
  }, {
    key: "renderTableBody",
    value: function renderTableBody() {
      var _this4 = this;

      if (this.props.error) {
        return this.renderErrorBody(this.props.error);
      }

      var items = this.props.items;

      if (items.length === 0) {
        return this.renderEmptyBody();
      }

      var rows = items.map(function (item, index) {
        // if there's pagination the item's index must be adjusted to the where it is in the whole dataset
        var tableItemIndex = hasPagination(_this4.props) ? _this4.props.pagination.pageIndex * _this4.props.pagination.pageSize + index : index;
        return _this4.renderItemRow(item, tableItemIndex);
      });

      if (this.props.loading) {
        return React.createElement(LoadingTableBody, null, rows);
      }

      return React.createElement(EuiTableBody, null, rows);
    }
  }, {
    key: "renderErrorBody",
    value: function renderErrorBody(error) {
      var colSpan = this.props.columns.length + (this.props.selection ? 1 : 0);
      return React.createElement(EuiTableBody, null, React.createElement(EuiTableRow, null, React.createElement(EuiTableRowCell, {
        align: "center",
        colSpan: colSpan,
        isMobileFullWidth: true
      }, React.createElement(EuiIcon, {
        type: "minusInCircle",
        color: "danger"
      }), " ", error)));
    }
  }, {
    key: "renderEmptyBody",
    value: function renderEmptyBody() {
      var _this$props7 = this.props,
          columns = _this$props7.columns,
          selection = _this$props7.selection,
          noItemsMessage = _this$props7.noItemsMessage;
      var colSpan = columns.length + (selection ? 1 : 0);
      return React.createElement(EuiTableBody, null, React.createElement(EuiTableRow, null, React.createElement(EuiTableRowCell, {
        align: "center",
        colSpan: colSpan,
        isMobileFullWidth: true
      }, noItemsMessage)));
    }
  }, {
    key: "renderItemRow",
    value: function renderItemRow(item, rowIndex) {
      var _this5 = this;

      var _this$props8 = this.props,
          columns = _this$props8.columns,
          selection = _this$props8.selection,
          isSelectable = _this$props8.isSelectable,
          hasActions = _this$props8.hasActions,
          _this$props8$itemIdTo = _this$props8.itemIdToExpandedRowMap,
          itemIdToExpandedRowMap = _this$props8$itemIdTo === void 0 ? {} : _this$props8$itemIdTo,
          isExpandable = _this$props8.isExpandable;
      var cells = [];
      var itemIdCallback = this.props.itemId;
      var itemId = getItemId(item, itemIdCallback) || rowIndex;
      var selected = !selection ? false : this.state.selection && !!this.state.selection.find(function (selectedItem) {
        return getItemId(selectedItem, itemIdCallback) === itemId;
      });
      var calculatedHasSelection;

      if (selection) {
        cells.push(this.renderItemSelectionCell(itemId, item, selected));
        calculatedHasSelection = true;
      }

      var calculatedHasActions;
      columns.forEach(function (column, columnIndex) {
        if (column.actions) {
          cells.push(_this5.renderItemActionsCell(itemId, item, column, columnIndex));
          calculatedHasActions = true;
        } else if (column.field) {
          cells.push(_this5.renderItemFieldDataCell(itemId, item, column, columnIndex));
        } else {
          cells.push(_this5.renderItemComputedCell(itemId, item, column, columnIndex));
        }
      }); // Occupy full width of table, taking checkbox & mobile only columns into account.

      var expandedRowColSpan = selection ? columns.length + 1 : columns.length;
      var mobileOnlyCols = columns.reduce(function (num, column) {
        if (column.mobileOptions && column.mobileOptions.only) {
          return num + 1;
        }

        return column.isMobileHeader ? num + 1 : num + 0; // BWC only
      }, 0);
      expandedRowColSpan = expandedRowColSpan - mobileOnlyCols; // We'll use the ID to associate the expanded row with the original.

      var hasExpandedRow = itemIdToExpandedRowMap.hasOwnProperty(itemId);
      var expandedRowId = hasExpandedRow ? "row_".concat(itemId, "_expansion") : undefined;
      var expandedRow = hasExpandedRow ? React.createElement(EuiTableRow, {
        id: expandedRowId,
        isExpandedRow: true,
        isSelectable: isSelectable
      }, React.createElement(EuiTableRowCell, {
        colSpan: expandedRowColSpan,
        textOnly: false
      }, itemIdToExpandedRowMap[itemId])) : undefined;
      var rowPropsCallback = this.props.rowProps;
      var rowProps = getRowProps(item, rowPropsCallback);
      var row = React.createElement(EuiTableRow, _extends({
        "aria-owns": expandedRowId,
        isSelectable: isSelectable == null ? calculatedHasSelection : isSelectable,
        isSelected: selected,
        hasActions: hasActions == null ? calculatedHasActions : hasActions,
        isExpandable: isExpandable
      }, rowProps), cells);
      return React.createElement(Fragment, {
        key: "row_".concat(itemId)
      }, rowProps.onClick ? React.createElement(EuiKeyboardAccessible, null, row) : row, expandedRow);
    }
  }, {
    key: "renderItemSelectionCell",
    value: function renderItemSelectionCell(itemId, item, selected) {
      var _this6 = this;

      var selection = this.props.selection;
      var key = "_selection_column_".concat(itemId);
      var checked = selected;
      var disabled = selection.selectable && !selection.selectable(item);
      var title = selection.selectableMessage && selection.selectableMessage(!disabled, item);

      var onChange = function onChange(event) {
        if (event.target.checked) {
          _this6.changeSelection(_toConsumableArray(_this6.state.selection).concat([item]));
        } else {
          var itemIdCallback = _this6.props.itemId;

          _this6.changeSelection(_this6.state.selection.reduce(function (selection, selectedItem) {
            if (getItemId(selectedItem, itemIdCallback) !== itemId) {
              selection.push(selectedItem);
            }

            return selection;
          }, []));
        }
      };

      return React.createElement(EuiTableRowCellCheckbox, {
        key: key
      }, React.createElement(EuiI18n, {
        token: "euiBasicTable.selectThisRow",
        default: "Select this row"
      }, function (selectThisRow) {
        return React.createElement(EuiCheckbox, {
          id: "".concat(key, "-checkbox"),
          type: "inList",
          disabled: disabled,
          checked: checked,
          onChange: onChange,
          title: title || selectThisRow,
          "aria-label": title || selectThisRow,
          "data-test-subj": "checkboxSelectRow-".concat(itemId)
        });
      }));
    }
  }, {
    key: "renderItemActionsCell",
    value: function renderItemActionsCell(itemId, item, column, columnIndex) {
      var _this7 = this;

      var actionEnabled = function actionEnabled(action) {
        return _this7.state.selection.length === 0 && (!action.enabled || action.enabled(item));
      };

      var actualActions = column.actions;

      if (column.actions.length > 2) {
        // if any of the actions `isPrimary`, add them inline as well, but only the first 2
        var primaryActions = column.actions.filter(function (o) {
          return o.isPrimary;
        });
        actualActions = primaryActions.slice(0, 2); // if we have more than 1 action, we don't show them all in the cell, instead we
        // put them all in a popover tool. This effectively means we can only have a maximum
        // of one tool per row (it's either and normal action, or it's a popover that shows multiple actions)
        //
        // here we create a single custom action that triggers the popover with all the configured actions

        actualActions.push({
          name: 'All actions',
          render: function render(item) {
            return React.createElement(CollapsedItemActions, {
              actions: column.actions,
              itemId: itemId,
              item: item,
              actionEnabled: actionEnabled
            });
          }
        });
      }

      var tools = React.createElement(ExpandedItemActions, {
        actions: actualActions,
        itemId: itemId,
        item: item,
        actionEnabled: actionEnabled
      });
      var key = "record_actions_".concat(itemId, "_").concat(columnIndex);
      return React.createElement(EuiTableRowCell, {
        showOnHover: true,
        key: key,
        align: "right",
        textOnly: false,
        hasActions: true
      }, tools);
    }
  }, {
    key: "renderItemFieldDataCell",
    value: function renderItemFieldDataCell(itemId, item, column, columnIndex) {
      var field = column.field,
          render = column.render,
          dataType = column.dataType;
      var key = "_data_column_".concat(field, "_").concat(itemId, "_").concat(columnIndex);
      var contentRenderer = render || this.getRendererForDataType(dataType);
      var value = get(item, field);
      var content = contentRenderer(value, item);
      return this.renderItemCell(item, column, key, content);
    }
  }, {
    key: "renderItemComputedCell",
    value: function renderItemComputedCell(itemId, item, column, columnIndex) {
      var render = column.render;
      var key = "_computed_column_".concat(itemId, "_").concat(columnIndex);
      var contentRenderer = render || this.getRendererForDataType();
      var content = contentRenderer(item);
      return this.renderItemCell(item, column, key, content);
    }
  }, {
    key: "renderItemCell",
    value: function renderItemCell(item, column, key, content) {
      var _ref7 = column,
          align = _ref7.align,
          render = _ref7.render,
          dataType = _ref7.dataType,
          isExpander = _ref7.isExpander,
          textOnly = _ref7.textOnly,
          name = _ref7.name,
          field = _ref7.field,
          description = _ref7.description,
          sortable = _ref7.sortable,
          footer = _ref7.footer,
          mobileOptions = _ref7.mobileOptions,
          rest = _objectWithoutProperties(_ref7, ["align", "render", "dataType", "isExpander", "textOnly", "name", "field", "description", "sortable", "footer", "mobileOptions"]);

      var columnAlign = align || this.getAlignForDataType(dataType);
      var cellPropsCallback = this.props.cellProps;
      var cellProps = getCellProps(item, column, cellPropsCallback);
      return React.createElement(EuiTableRowCell, _extends({
        key: key,
        align: columnAlign,
        isExpander: isExpander,
        textOnly: textOnly || !render,
        mobileOptions: _objectSpread({}, mobileOptions, {
          render: mobileOptions && mobileOptions.render && mobileOptions.render(item),
          header: mobileOptions && mobileOptions.header === false ? false : name
        })
      }, cellProps, rest), content);
    }
  }, {
    key: "getRendererForDataType",
    value: function getRendererForDataType() {
      var dataType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
      var profile = dataTypesProfiles[dataType];

      if (!profile) {
        throw new Error("Unknown dataType [".concat(dataType, "]. The supported data types are [").concat(DATA_TYPES.join(', '), "]"));
      }

      return profile.render;
    }
  }, {
    key: "getAlignForDataType",
    value: function getAlignForDataType() {
      var dataType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
      var profile = dataTypesProfiles[dataType];

      if (!profile) {
        throw new Error("Unknown dataType [".concat(dataType, "]. The supported data types are [").concat(DATA_TYPES.join(', '), "]"));
      }

      return profile.align;
    }
  }, {
    key: "renderPaginationBar",
    value: function renderPaginationBar(itemsLength) {
      var _this$props9 = this.props,
          error = _this$props9.error,
          pagination = _this$props9.pagination,
          onChange = _this$props9.onChange;

      if (!error && pagination && itemsLength > 0) {
        if (!onChange) {
          throw new Error("The Basic Table is configured with pagination but [onChange] is\n        not configured. This callback must be implemented to handle pagination changes");
        }

        return React.createElement(PaginationBar, {
          pagination: pagination,
          onPageSizeChange: this.onPageSizeChange.bind(this),
          onPageChange: this.onPageChange.bind(this)
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.selection) {
        // next props doesn't have a selection, reset our state
        return {
          selection: []
        };
      }

      var itemId = nextProps.itemId;
      var selection = prevState.selection.filter(function (selectedItem) {
        return nextProps.items.findIndex(function (item) {
          return getItemId(item, itemId) === getItemId(selectedItem, itemId);
        }) !== -1;
      });

      if (selection.length !== prevState.selection.length) {
        if (nextProps.selection.onSelectionChange) {
          nextProps.selection.onSelectionChange(selection);
        }

        return {
          selection: selection
        };
      }

      return null;
    }
  }]);

  return EuiBasicTable;
}(Component);

_defineProperty(EuiBasicTable, "defaultProps", {
  responsive: true,
  noItemsMessage: 'No items found'
});

EuiBasicTable.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  itemId: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]),
  itemIdToExpandedRowMap: PropTypes.shape({}),
  items: PropTypes.arrayOf(PropTypes.any.isRequired),
  cellProps: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.func.isRequired]),
  columns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    field: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.string.isRequired]).isRequired,
    // supports outer.inner key paths
    name: PropTypes.node.isRequired,
    description: PropTypes.string,
    dataType: PropTypes.oneOf(["auto", "string", "number", "boolean", "date"]),
    width: PropTypes.string,
    sortable: PropTypes.oneOfType([PropTypes.bool.isRequired, PropTypes.func.isRequired]),
    isExpander: PropTypes.bool,
    textOnly: PropTypes.bool,
    align: PropTypes.oneOf(["left", "right", "center"]),
    truncateText: PropTypes.bool,
    isMobileHeader: PropTypes.bool,
    mobileOptions: PropTypes.shape({
      show: PropTypes.bool,
      only: PropTypes.bool,
      render: PropTypes.func,
      header: PropTypes.bool
    }),
    hideForMobile: PropTypes.bool,
    render: PropTypes.func,
    footer: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element.isRequired, PropTypes.func.isRequired]),
    className: PropTypes.string,
    "aria-label": PropTypes.string,
    "data-test-subj": PropTypes.string
  }).isRequired, PropTypes.shape({
    render: PropTypes.func.isRequired,
    name: PropTypes.node,
    description: PropTypes.string,
    sortable: PropTypes.func,
    width: PropTypes.string,
    truncateText: PropTypes.bool,
    isExpander: PropTypes.bool,
    align: PropTypes.oneOf(["left", "right", "center"]),
    className: PropTypes.string,
    "aria-label": PropTypes.string,
    "data-test-subj": PropTypes.string
  }).isRequired, PropTypes.shape({
    actions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
      type: PropTypes.oneOfType([PropTypes.oneOf(["button"]), PropTypes.oneOf(["icon"]).isRequired]),
      color: PropTypes.oneOfType([PropTypes.oneOfType([PropTypes.oneOf(["primary", "danger", "disabled", "text", "ghost"]).isRequired, PropTypes.func.isRequired]), PropTypes.oneOfType([PropTypes.oneOf(["danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]).isRequired, PropTypes.func.isRequired])]),
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      href: PropTypes.string,
      target: PropTypes.string,
      available: PropTypes.func,
      enabled: PropTypes.func,
      isPrimary: PropTypes.bool,
      "data-test-subj": PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, PropTypes.func.isRequired])
    }).isRequired, PropTypes.shape({
      render: PropTypes.func.isRequired,
      available: PropTypes.func,
      enabled: PropTypes.func,
      isPrimary: PropTypes.bool
    }).isRequired]).isRequired).isRequired,
    name: PropTypes.node,
    description: PropTypes.string,
    width: PropTypes.string
  }).isRequired]).isRequired),
  compressed: PropTypes.bool,
  error: PropTypes.string,
  hasActions: PropTypes.bool,
  isExpandable: PropTypes.bool,
  isSelectable: PropTypes.bool,
  loading: PropTypes.bool,
  noItemsMessage: PropTypes.node,
  onChange: PropTypes.func,
  pagination: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.shape({
    pageIndex: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalItemCount: PropTypes.number.isRequired,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number.isRequired),
    hidePerPageOptions: PropTypes.bool
  })]),
  responsive: PropTypes.bool,
  rowProps: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.func.isRequired]),
  selection: PropTypes.shape({
    onSelectionChange: PropTypes.func,
    selectable: PropTypes.func,
    selectableMessage: PropTypes.func
  }),
  sorting: PropTypes.shape({
    sort: PropTypes.shape({
      field: PropTypes.any.isRequired,
      direction: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.any.isRequired]).isRequired
    }),
    allowNeutralSort: PropTypes.bool
  })
};
EuiBasicTable.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "buildCriteria",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "props",
      "type": null
    }],
    "returns": null
  }, {
    "name": "changeSelection",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "selection",
      "type": null
    }],
    "returns": null
  }, {
    "name": "clearSelection",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onPageSizeChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "size",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onPageChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "index",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onColumnSortChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "column",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTable",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTableMobileSort",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTableCaption",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderSelectAll",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isMobile",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTableHead",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTableFooter",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTableBody",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderErrorBody",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "error",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderEmptyBody",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderItemRow",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }, {
      "name": "rowIndex",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemSelectionCell",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "itemId",
      "type": null
    }, {
      "name": "item",
      "type": null
    }, {
      "name": "selected",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemActionsCell",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "itemId",
      "type": null
    }, {
      "name": "item",
      "type": null
    }, {
      "name": "column",
      "type": null
    }, {
      "name": "columnIndex",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemFieldDataCell",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "itemId",
      "type": null
    }, {
      "name": "item",
      "type": null
    }, {
      "name": "column",
      "type": null
    }, {
      "name": "columnIndex",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemComputedCell",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "itemId",
      "type": null
    }, {
      "name": "item",
      "type": null
    }, {
      "name": "column",
      "type": null
    }, {
      "name": "columnIndex",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemCell",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }, {
      "name": "column",
      "type": null
    }, {
      "name": "key",
      "type": null
    }, {
      "name": "content",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resolveColumnSortDirection",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "column",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resolveColumnOnSort",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "column",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getRendererForDataType",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "dataType",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getAlignForDataType",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "dataType",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderPaginationBar",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "itemsLength",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiBasicTable",
  "props": {
    "responsive": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "noItemsMessage": {
      "defaultValue": {
        "value": "'No items found'",
        "computed": false
      },
      "type": {
        "name": "node"
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
    "itemId": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "itemIdToExpandedRowMap": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false,
      "description": ""
    },
    "items": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": false,
      "description": ""
    },
    "cellProps": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "columns": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "union",
          "value": [{
            "name": "shape",
            "value": {
              "field": {
                "name": "union",
                "value": [{
                  "name": "any"
                }, {
                  "name": "string"
                }],
                "required": true
              },
              "name": {
                "name": "node",
                "required": true
              },
              "description": {
                "name": "string",
                "required": false
              },
              "dataType": {
                "name": "enum",
                "value": [{
                  "value": "\"auto\"",
                  "computed": false
                }, {
                  "value": "\"string\"",
                  "computed": false
                }, {
                  "value": "\"number\"",
                  "computed": false
                }, {
                  "value": "\"boolean\"",
                  "computed": false
                }, {
                  "value": "\"date\"",
                  "computed": false
                }],
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              },
              "sortable": {
                "name": "union",
                "value": [{
                  "name": "bool"
                }, {
                  "name": "func"
                }],
                "required": false
              },
              "isExpander": {
                "name": "bool",
                "required": false
              },
              "textOnly": {
                "name": "bool",
                "required": false
              },
              "align": {
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
                }],
                "required": false
              },
              "truncateText": {
                "name": "bool",
                "required": false
              },
              "isMobileHeader": {
                "name": "bool",
                "required": false
              },
              "mobileOptions": {
                "name": "shape",
                "value": {
                  "show": {
                    "name": "bool",
                    "required": false
                  },
                  "only": {
                    "name": "bool",
                    "required": false
                  },
                  "render": {
                    "name": "func",
                    "required": false
                  },
                  "header": {
                    "name": "bool",
                    "required": false
                  }
                },
                "required": false
              },
              "hideForMobile": {
                "name": "bool",
                "required": false
              },
              "render": {
                "name": "func",
                "required": false
              },
              "footer": {
                "name": "union",
                "value": [{
                  "name": "string"
                }, {
                  "name": "element"
                }, {
                  "name": "func"
                }],
                "required": false
              },
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              }
            }
          }, {
            "name": "shape",
            "value": {
              "render": {
                "name": "func",
                "required": true
              },
              "name": {
                "name": "node",
                "required": false
              },
              "description": {
                "name": "string",
                "required": false
              },
              "sortable": {
                "name": "func",
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              },
              "truncateText": {
                "name": "bool",
                "required": false
              },
              "isExpander": {
                "name": "bool",
                "required": false
              },
              "align": {
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
                }],
                "required": false
              },
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              }
            }
          }, {
            "name": "shape",
            "value": {
              "actions": {
                "name": "arrayOf",
                "value": {
                  "name": "union",
                  "value": [{
                    "name": "shape",
                    "value": {
                      "type": {
                        "name": "union",
                        "value": [{
                          "name": "enum",
                          "value": [{
                            "value": "\"button\"",
                            "computed": false
                          }]
                        }, {
                          "name": "enum",
                          "value": [{
                            "value": "\"icon\"",
                            "computed": false
                          }]
                        }],
                        "required": false
                      },
                      "color": {
                        "name": "union",
                        "value": [{
                          "name": "union",
                          "value": [{
                            "name": "enum",
                            "value": [{
                              "value": "\"primary\"",
                              "computed": false
                            }, {
                              "value": "\"danger\"",
                              "computed": false
                            }, {
                              "value": "\"disabled\"",
                              "computed": false
                            }, {
                              "value": "\"text\"",
                              "computed": false
                            }, {
                              "value": "\"ghost\"",
                              "computed": false
                            }]
                          }, {
                            "name": "func"
                          }]
                        }, {
                          "name": "union",
                          "value": [{
                            "name": "enum",
                            "value": [{
                              "value": "\"danger\"",
                              "computed": false
                            }, {
                              "value": "\"disabled\"",
                              "computed": false
                            }, {
                              "value": "\"ghost\"",
                              "computed": false
                            }, {
                              "value": "\"primary\"",
                              "computed": false
                            }, {
                              "value": "\"subdued\"",
                              "computed": false
                            }, {
                              "value": "\"success\"",
                              "computed": false
                            }, {
                              "value": "\"text\"",
                              "computed": false
                            }, {
                              "value": "\"warning\"",
                              "computed": false
                            }]
                          }, {
                            "name": "func"
                          }]
                        }],
                        "required": false
                      },
                      "name": {
                        "name": "string",
                        "required": true
                      },
                      "description": {
                        "name": "string",
                        "required": true
                      },
                      "onClick": {
                        "name": "func",
                        "required": false
                      },
                      "href": {
                        "name": "string",
                        "required": false
                      },
                      "target": {
                        "name": "string",
                        "required": false
                      },
                      "available": {
                        "name": "func",
                        "required": false
                      },
                      "enabled": {
                        "name": "func",
                        "required": false
                      },
                      "isPrimary": {
                        "name": "bool",
                        "required": false
                      },
                      "data-test-subj": {
                        "name": "string",
                        "required": false
                      },
                      "icon": {
                        "name": "union",
                        "value": [{
                          "name": "enum",
                          "value": [{
                            "value": "\"accessibility\"",
                            "computed": false
                          }, {
                            "value": "\"addDataApp\"",
                            "computed": false
                          }, {
                            "value": "\"advancedSettingsApp\"",
                            "computed": false
                          }, {
                            "value": "\"alert\"",
                            "computed": false
                          }, {
                            "value": "\"apmApp\"",
                            "computed": false
                          }, {
                            "value": "\"apmTrace\"",
                            "computed": false
                          }, {
                            "value": "\"apps\"",
                            "computed": false
                          }, {
                            "value": "\"arrowDown\"",
                            "computed": false
                          }, {
                            "value": "\"arrowLeft\"",
                            "computed": false
                          }, {
                            "value": "\"arrowRight\"",
                            "computed": false
                          }, {
                            "value": "\"arrowUp\"",
                            "computed": false
                          }, {
                            "value": "\"asterisk\"",
                            "computed": false
                          }, {
                            "value": "\"auditbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"beaker\"",
                            "computed": false
                          }, {
                            "value": "\"bell\"",
                            "computed": false
                          }, {
                            "value": "\"bolt\"",
                            "computed": false
                          }, {
                            "value": "\"boxesHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"boxesVertical\"",
                            "computed": false
                          }, {
                            "value": "\"branch\"",
                            "computed": false
                          }, {
                            "value": "\"broom\"",
                            "computed": false
                          }, {
                            "value": "\"brush\"",
                            "computed": false
                          }, {
                            "value": "\"bug\"",
                            "computed": false
                          }, {
                            "value": "\"bullseye\"",
                            "computed": false
                          }, {
                            "value": "\"calendar\"",
                            "computed": false
                          }, {
                            "value": "\"canvasApp\"",
                            "computed": false
                          }, {
                            "value": "\"codeApp\"",
                            "computed": false
                          }, {
                            "value": "\"check\"",
                            "computed": false
                          }, {
                            "value": "\"checkInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"clock\"",
                            "computed": false
                          }, {
                            "value": "\"cloudDrizzle\"",
                            "computed": false
                          }, {
                            "value": "\"cloudStormy\"",
                            "computed": false
                          }, {
                            "value": "\"cloudSunny\"",
                            "computed": false
                          }, {
                            "value": "\"compute\"",
                            "computed": false
                          }, {
                            "value": "\"console\"",
                            "computed": false
                          }, {
                            "value": "\"consoleApp\"",
                            "computed": false
                          }, {
                            "value": "\"controlsHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"controlsVertical\"",
                            "computed": false
                          }, {
                            "value": "\"copy\"",
                            "computed": false
                          }, {
                            "value": "\"copyClipboard\"",
                            "computed": false
                          }, {
                            "value": "\"createAdvancedJob\"",
                            "computed": false
                          }, {
                            "value": "\"createMultiMetricJob\"",
                            "computed": false
                          }, {
                            "value": "\"createPopulationJob\"",
                            "computed": false
                          }, {
                            "value": "\"createSingleMetricJob\"",
                            "computed": false
                          }, {
                            "value": "\"cross\"",
                            "computed": false
                          }, {
                            "value": "\"crossClusterReplicationApp\"",
                            "computed": false
                          }, {
                            "value": "\"crosshairs\"",
                            "computed": false
                          }, {
                            "value": "\"crossInACircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"currency\"",
                            "computed": false
                          }, {
                            "value": "\"cut\"",
                            "computed": false
                          }, {
                            "value": "\"dashboardApp\"",
                            "computed": false
                          }, {
                            "value": "\"database\"",
                            "computed": false
                          }, {
                            "value": "\"dataVisualizer\"",
                            "computed": false
                          }, {
                            "value": "\"devToolsApp\"",
                            "computed": false
                          }, {
                            "value": "\"discoverApp\"",
                            "computed": false
                          }, {
                            "value": "\"document\"",
                            "computed": false
                          }, {
                            "value": "\"documentEdit\"",
                            "computed": false
                          }, {
                            "value": "\"documents\"",
                            "computed": false
                          }, {
                            "value": "\"dot\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignCenter\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorBold\"",
                            "computed": false
                          }, {
                            "value": "\"editorCodeBlock\"",
                            "computed": false
                          }, {
                            "value": "\"editorComment\"",
                            "computed": false
                          }, {
                            "value": "\"editorDistributeHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"editorDistributeVertical\"",
                            "computed": false
                          }, {
                            "value": "\"editorHeading\"",
                            "computed": false
                          }, {
                            "value": "\"editorItalic\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignBottom\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignCenter\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignMiddle\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignTop\"",
                            "computed": false
                          }, {
                            "value": "\"editorLink\"",
                            "computed": false
                          }, {
                            "value": "\"editorOrderedList\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionBottomLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionBottomRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionTopLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionTopRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorRedo\"",
                            "computed": false
                          }, {
                            "value": "\"editorStrike\"",
                            "computed": false
                          }, {
                            "value": "\"editorTable\"",
                            "computed": false
                          }, {
                            "value": "\"editorUnderline\"",
                            "computed": false
                          }, {
                            "value": "\"editorUndo\"",
                            "computed": false
                          }, {
                            "value": "\"editorUnorderedList\"",
                            "computed": false
                          }, {
                            "value": "\"email\"",
                            "computed": false
                          }, {
                            "value": "\"empty\"",
                            "computed": false
                          }, {
                            "value": "\"emsApp\"",
                            "computed": false
                          }, {
                            "value": "\"exit\"",
                            "computed": false
                          }, {
                            "value": "\"expand\"",
                            "computed": false
                          }, {
                            "value": "\"expandMini\"",
                            "computed": false
                          }, {
                            "value": "\"exportAction\"",
                            "computed": false
                          }, {
                            "value": "\"eye\"",
                            "computed": false
                          }, {
                            "value": "\"eyeClosed\"",
                            "computed": false
                          }, {
                            "value": "\"faceHappy\"",
                            "computed": false
                          }, {
                            "value": "\"faceNeutral\"",
                            "computed": false
                          }, {
                            "value": "\"faceSad\"",
                            "computed": false
                          }, {
                            "value": "\"filebeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"filter\"",
                            "computed": false
                          }, {
                            "value": "\"flag\"",
                            "computed": false
                          }, {
                            "value": "\"folderClosed\"",
                            "computed": false
                          }, {
                            "value": "\"folderOpen\"",
                            "computed": false
                          }, {
                            "value": "\"fullScreen\"",
                            "computed": false
                          }, {
                            "value": "\"gear\"",
                            "computed": false
                          }, {
                            "value": "\"gisApp\"",
                            "computed": false
                          }, {
                            "value": "\"glasses\"",
                            "computed": false
                          }, {
                            "value": "\"globe\"",
                            "computed": false
                          }, {
                            "value": "\"grab\"",
                            "computed": false
                          }, {
                            "value": "\"grabHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"graphApp\"",
                            "computed": false
                          }, {
                            "value": "\"grid\"",
                            "computed": false
                          }, {
                            "value": "\"grokApp\"",
                            "computed": false
                          }, {
                            "value": "\"heart\"",
                            "computed": false
                          }, {
                            "value": "\"heartbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"heatmap\"",
                            "computed": false
                          }, {
                            "value": "\"help\"",
                            "computed": false
                          }, {
                            "value": "\"iInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"importAction\"",
                            "computed": false
                          }, {
                            "value": "\"indexClose\"",
                            "computed": false
                          }, {
                            "value": "\"indexEdit\"",
                            "computed": false
                          }, {
                            "value": "\"indexFlush\"",
                            "computed": false
                          }, {
                            "value": "\"indexManagementApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexMapping\"",
                            "computed": false
                          }, {
                            "value": "\"indexOpen\"",
                            "computed": false
                          }, {
                            "value": "\"indexPatternApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexRollupApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexSettings\"",
                            "computed": false
                          }, {
                            "value": "\"metricsApp\"",
                            "computed": false
                          }, {
                            "value": "\"inputOutput\"",
                            "computed": false
                          }, {
                            "value": "\"inspect\"",
                            "computed": false
                          }, {
                            "value": "\"invert\"",
                            "computed": false
                          }, {
                            "value": "\"ip\"",
                            "computed": false
                          }, {
                            "value": "\"keyboardShortcut\"",
                            "computed": false
                          }, {
                            "value": "\"kqlField\"",
                            "computed": false
                          }, {
                            "value": "\"kqlFunction\"",
                            "computed": false
                          }, {
                            "value": "\"kqlOperand\"",
                            "computed": false
                          }, {
                            "value": "\"kqlSelector\"",
                            "computed": false
                          }, {
                            "value": "\"kqlValue\"",
                            "computed": false
                          }, {
                            "value": "\"lensApp\"",
                            "computed": false
                          }, {
                            "value": "\"link\"",
                            "computed": false
                          }, {
                            "value": "\"list\"",
                            "computed": false
                          }, {
                            "value": "\"listAdd\"",
                            "computed": false
                          }, {
                            "value": "\"lock\"",
                            "computed": false
                          }, {
                            "value": "\"lockOpen\"",
                            "computed": false
                          }, {
                            "value": "\"logsApp\"",
                            "computed": false
                          }, {
                            "value": "\"logoAerospike\"",
                            "computed": false
                          }, {
                            "value": "\"logoApache\"",
                            "computed": false
                          }, {
                            "value": "\"logoAPM\"",
                            "computed": false
                          }, {
                            "value": "\"logoAppSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoAWS\"",
                            "computed": false
                          }, {
                            "value": "\"logoAWSMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoAzure\"",
                            "computed": false
                          }, {
                            "value": "\"logoAzureMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoBeats\"",
                            "computed": false
                          }, {
                            "value": "\"logoBusinessAnalytics\"",
                            "computed": false
                          }, {
                            "value": "\"logoCeph\"",
                            "computed": false
                          }, {
                            "value": "\"logoCloud\"",
                            "computed": false
                          }, {
                            "value": "\"logoCloudEnterprise\"",
                            "computed": false
                          }, {
                            "value": "\"logoCode\"",
                            "computed": false
                          }, {
                            "value": "\"logoCodesandbox\"",
                            "computed": false
                          }, {
                            "value": "\"logoCouchbase\"",
                            "computed": false
                          }, {
                            "value": "\"logoDocker\"",
                            "computed": false
                          }, {
                            "value": "\"logoDropwizard\"",
                            "computed": false
                          }, {
                            "value": "\"logoElastic\"",
                            "computed": false
                          }, {
                            "value": "\"logoElasticsearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoElasticStack\"",
                            "computed": false
                          }, {
                            "value": "\"logoEnterpriseSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoEtcd\"",
                            "computed": false
                          }, {
                            "value": "\"logoGCP\"",
                            "computed": false
                          }, {
                            "value": "\"logoGCPMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoGithub\"",
                            "computed": false
                          }, {
                            "value": "\"logoGmail\"",
                            "computed": false
                          }, {
                            "value": "\"logoGolang\"",
                            "computed": false
                          }, {
                            "value": "\"logoHAproxy\"",
                            "computed": false
                          }, {
                            "value": "\"logoIBM\"",
                            "computed": false
                          }, {
                            "value": "\"logoIBMMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoKafka\"",
                            "computed": false
                          }, {
                            "value": "\"logoKibana\"",
                            "computed": false
                          }, {
                            "value": "\"logoKubernetes\"",
                            "computed": false
                          }, {
                            "value": "\"logoLogging\"",
                            "computed": false
                          }, {
                            "value": "\"logoLogstash\"",
                            "computed": false
                          }, {
                            "value": "\"logoMaps\"",
                            "computed": false
                          }, {
                            "value": "\"logoMemcached\"",
                            "computed": false
                          }, {
                            "value": "\"logoMetrics\"",
                            "computed": false
                          }, {
                            "value": "\"logoMongodb\"",
                            "computed": false
                          }, {
                            "value": "\"logoMySQL\"",
                            "computed": false
                          }, {
                            "value": "\"logoNginx\"",
                            "computed": false
                          }, {
                            "value": "\"logoOsquery\"",
                            "computed": false
                          }, {
                            "value": "\"logoPhp\"",
                            "computed": false
                          }, {
                            "value": "\"logoPostgres\"",
                            "computed": false
                          }, {
                            "value": "\"logoPrometheus\"",
                            "computed": false
                          }, {
                            "value": "\"logoRabbitmq\"",
                            "computed": false
                          }, {
                            "value": "\"logoRedis\"",
                            "computed": false
                          }, {
                            "value": "\"logoSecurity\"",
                            "computed": false
                          }, {
                            "value": "\"logoSiteSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoSketch\"",
                            "computed": false
                          }, {
                            "value": "\"logoSlack\"",
                            "computed": false
                          }, {
                            "value": "\"logoUptime\"",
                            "computed": false
                          }, {
                            "value": "\"logoWebhook\"",
                            "computed": false
                          }, {
                            "value": "\"logoWindows\"",
                            "computed": false
                          }, {
                            "value": "\"logstashFilter\"",
                            "computed": false
                          }, {
                            "value": "\"logstashIf\"",
                            "computed": false
                          }, {
                            "value": "\"logstashInput\"",
                            "computed": false
                          }, {
                            "value": "\"logstashOutput\"",
                            "computed": false
                          }, {
                            "value": "\"logstashQueue\"",
                            "computed": false
                          }, {
                            "value": "\"machineLearningApp\"",
                            "computed": false
                          }, {
                            "value": "\"magnet\"",
                            "computed": false
                          }, {
                            "value": "\"magnifyWithMinus\"",
                            "computed": false
                          }, {
                            "value": "\"magnifyWithPlus\"",
                            "computed": false
                          }, {
                            "value": "\"managementApp\"",
                            "computed": false
                          }, {
                            "value": "\"mapMarker\"",
                            "computed": false
                          }, {
                            "value": "\"memory\"",
                            "computed": false
                          }, {
                            "value": "\"menuLeft\"",
                            "computed": false
                          }, {
                            "value": "\"menuRight\"",
                            "computed": false
                          }, {
                            "value": "\"merge\"",
                            "computed": false
                          }, {
                            "value": "\"metricbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"minimize\"",
                            "computed": false
                          }, {
                            "value": "\"minusInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"minusInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"monitoringApp\"",
                            "computed": false
                          }, {
                            "value": "\"moon\"",
                            "computed": false
                          }, {
                            "value": "\"node\"",
                            "computed": false
                          }, {
                            "value": "\"notebookApp\"",
                            "computed": false
                          }, {
                            "value": "\"number\"",
                            "computed": false
                          }, {
                            "value": "\"offline\"",
                            "computed": false
                          }, {
                            "value": "\"online\"",
                            "computed": false
                          }, {
                            "value": "\"package\"",
                            "computed": false
                          }, {
                            "value": "\"packetbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"partial\"",
                            "computed": false
                          }, {
                            "value": "\"pause\"",
                            "computed": false
                          }, {
                            "value": "\"pencil\"",
                            "computed": false
                          }, {
                            "value": "\"pin\"",
                            "computed": false
                          }, {
                            "value": "\"pinFilled\"",
                            "computed": false
                          }, {
                            "value": "\"pipelineApp\"",
                            "computed": false
                          }, {
                            "value": "\"play\"",
                            "computed": false
                          }, {
                            "value": "\"plusInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"plusInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"popout\"",
                            "computed": false
                          }, {
                            "value": "\"questionInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"refresh\"",
                            "computed": false
                          }, {
                            "value": "\"reportingApp\"",
                            "computed": false
                          }, {
                            "value": "\"save\"",
                            "computed": false
                          }, {
                            "value": "\"savedObjectsApp\"",
                            "computed": false
                          }, {
                            "value": "\"scale\"",
                            "computed": false
                          }, {
                            "value": "\"search\"",
                            "computed": false
                          }, {
                            "value": "\"searchProfilerApp\"",
                            "computed": false
                          }, {
                            "value": "\"securityAnalyticsApp\"",
                            "computed": false
                          }, {
                            "value": "\"securityApp\"",
                            "computed": false
                          }, {
                            "value": "\"shard\"",
                            "computed": false
                          }, {
                            "value": "\"share\"",
                            "computed": false
                          }, {
                            "value": "\"snowflake\"",
                            "computed": false
                          }, {
                            "value": "\"sortable\"",
                            "computed": false
                          }, {
                            "value": "\"sortDown\"",
                            "computed": false
                          }, {
                            "value": "\"sortLeft\"",
                            "computed": false
                          }, {
                            "value": "\"sortRight\"",
                            "computed": false
                          }, {
                            "value": "\"sortUp\"",
                            "computed": false
                          }, {
                            "value": "\"spacesApp\"",
                            "computed": false
                          }, {
                            "value": "\"sqlApp\"",
                            "computed": false
                          }, {
                            "value": "\"starEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starEmptySpace\"",
                            "computed": false
                          }, {
                            "value": "\"starFilled\"",
                            "computed": false
                          }, {
                            "value": "\"starFilledSpace\"",
                            "computed": false
                          }, {
                            "value": "\"starMinusEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starMinusFilled\"",
                            "computed": false
                          }, {
                            "value": "\"starPlusEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starPlusFilled\"",
                            "computed": false
                          }, {
                            "value": "\"stats\"",
                            "computed": false
                          }, {
                            "value": "\"stop\"",
                            "computed": false
                          }, {
                            "value": "\"stopFilled\"",
                            "computed": false
                          }, {
                            "value": "\"stopSlash\"",
                            "computed": false
                          }, {
                            "value": "\"storage\"",
                            "computed": false
                          }, {
                            "value": "\"string\"",
                            "computed": false
                          }, {
                            "value": "\"submodule\"",
                            "computed": false
                          }, {
                            "value": "\"swatchInput\"",
                            "computed": false
                          }, {
                            "value": "\"symlink\"",
                            "computed": false
                          }, {
                            "value": "\"tableOfContents\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityExpanded\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityCompact\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityNormal\"",
                            "computed": false
                          }, {
                            "value": "\"tag\"",
                            "computed": false
                          }, {
                            "value": "\"tear\"",
                            "computed": false
                          }, {
                            "value": "\"temperature\"",
                            "computed": false
                          }, {
                            "value": "\"timelionApp\"",
                            "computed": false
                          }, {
                            "value": "\"training\"",
                            "computed": false
                          }, {
                            "value": "\"trash\"",
                            "computed": false
                          }, {
                            "value": "\"upgradeAssistantApp\"",
                            "computed": false
                          }, {
                            "value": "\"uptimeApp\"",
                            "computed": false
                          }, {
                            "value": "\"user\"",
                            "computed": false
                          }, {
                            "value": "\"usersRolesApp\"",
                            "computed": false
                          }, {
                            "value": "\"vector\"",
                            "computed": false
                          }, {
                            "value": "\"videoPlayer\"",
                            "computed": false
                          }, {
                            "value": "\"visArea\"",
                            "computed": false
                          }, {
                            "value": "\"visAreaStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visBarHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"visBarHorizontalStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visBarVertical\"",
                            "computed": false
                          }, {
                            "value": "\"visBarVerticalStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visControls\"",
                            "computed": false
                          }, {
                            "value": "\"visGauge\"",
                            "computed": false
                          }, {
                            "value": "\"visGoal\"",
                            "computed": false
                          }, {
                            "value": "\"visHeatmap\"",
                            "computed": false
                          }, {
                            "value": "\"visLine\"",
                            "computed": false
                          }, {
                            "value": "\"visMapCoordinate\"",
                            "computed": false
                          }, {
                            "value": "\"visMapRegion\"",
                            "computed": false
                          }, {
                            "value": "\"visMetric\"",
                            "computed": false
                          }, {
                            "value": "\"visPie\"",
                            "computed": false
                          }, {
                            "value": "\"visTable\"",
                            "computed": false
                          }, {
                            "value": "\"visTagCloud\"",
                            "computed": false
                          }, {
                            "value": "\"visText\"",
                            "computed": false
                          }, {
                            "value": "\"visTimelion\"",
                            "computed": false
                          }, {
                            "value": "\"visualizeApp\"",
                            "computed": false
                          }, {
                            "value": "\"visVega\"",
                            "computed": false
                          }, {
                            "value": "\"visVisualBuilder\"",
                            "computed": false
                          }, {
                            "value": "\"watchesApp\"",
                            "computed": false
                          }, {
                            "value": "\"wrench\"",
                            "computed": false
                          }, {
                            "value": "\"tokenClass\"",
                            "computed": false
                          }, {
                            "value": "\"tokenProperty\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEnum\"",
                            "computed": false
                          }, {
                            "value": "\"tokenVariable\"",
                            "computed": false
                          }, {
                            "value": "\"tokenMethod\"",
                            "computed": false
                          }, {
                            "value": "\"tokenAnnotation\"",
                            "computed": false
                          }, {
                            "value": "\"tokenException\"",
                            "computed": false
                          }, {
                            "value": "\"tokenInterface\"",
                            "computed": false
                          }, {
                            "value": "\"tokenParameter\"",
                            "computed": false
                          }, {
                            "value": "\"tokenField\"",
                            "computed": false
                          }, {
                            "value": "\"tokenElement\"",
                            "computed": false
                          }, {
                            "value": "\"tokenFunction\"",
                            "computed": false
                          }, {
                            "value": "\"tokenBoolean\"",
                            "computed": false
                          }, {
                            "value": "\"tokenString\"",
                            "computed": false
                          }, {
                            "value": "\"tokenArray\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNumber\"",
                            "computed": false
                          }, {
                            "value": "\"tokenConstant\"",
                            "computed": false
                          }, {
                            "value": "\"tokenObject\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEvent\"",
                            "computed": false
                          }, {
                            "value": "\"tokenKey\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNull\"",
                            "computed": false
                          }, {
                            "value": "\"tokenStruct\"",
                            "computed": false
                          }, {
                            "value": "\"tokenPackage\"",
                            "computed": false
                          }, {
                            "value": "\"tokenOperator\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEnumMember\"",
                            "computed": false
                          }, {
                            "value": "\"tokenRepo\"",
                            "computed": false
                          }, {
                            "value": "\"tokenSymbol\"",
                            "computed": false
                          }, {
                            "value": "\"tokenFile\"",
                            "computed": false
                          }, {
                            "value": "\"tokenModule\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNamespace\"",
                            "computed": false
                          }]
                        }, {
                          "name": "func"
                        }],
                        "required": false
                      }
                    }
                  }, {
                    "name": "shape",
                    "value": {
                      "render": {
                        "name": "func",
                        "required": true
                      },
                      "available": {
                        "name": "func",
                        "required": false
                      },
                      "enabled": {
                        "name": "func",
                        "required": false
                      },
                      "isPrimary": {
                        "name": "bool",
                        "required": false
                      }
                    }
                  }]
                },
                "required": true
              },
              "name": {
                "name": "node",
                "required": false
              },
              "description": {
                "name": "string",
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              }
            }
          }]
        }
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "error": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "hasActions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isExpandable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isSelectable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "loading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "pagination": {
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "undefined",
            "computed": true
          }]
        }, {
          "name": "shape",
          "value": {
            "pageIndex": {
              "name": "number",
              "required": true
            },
            "pageSize": {
              "name": "number",
              "required": true
            },
            "totalItemCount": {
              "name": "number",
              "required": true
            },
            "pageSizeOptions": {
              "name": "arrayOf",
              "value": {
                "name": "number"
              },
              "required": false
            },
            "hidePerPageOptions": {
              "name": "bool",
              "required": false
            }
          }
        }]
      },
      "required": false,
      "description": ""
    },
    "rowProps": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "selection": {
      "type": {
        "name": "shape",
        "value": {
          "onSelectionChange": {
            "name": "func",
            "required": false
          },
          "selectable": {
            "name": "func",
            "required": false
          },
          "selectableMessage": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    },
    "sorting": {
      "type": {
        "name": "shape",
        "value": {
          "sort": {
            "name": "shape",
            "value": {
              "field": {
                "name": "any",
                "required": true
              },
              "direction": {
                "name": "union",
                "value": [{
                  "name": "any"
                }, {
                  "name": "any"
                }],
                "required": true
              }
            },
            "required": false
          },
          "allowNeutralSort": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};