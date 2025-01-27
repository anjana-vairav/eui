"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGrid = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _i18n = require("../i18n");

var _data_grid_header_row = require("./data_grid_header_row");

var _button = require("../button");

var _services = require("../../services");

var _data_grid_body = require("./data_grid_body");

var _column_selector = require("./column_selector");

var _style_selector = require("./style_selector");

var _table_pagination = require("../table/table_pagination");

var _focus_trap = require("../focus_trap");

var _resize_observer = require("../observer/resize_observer");

var _data_grid_inmemory_renderer = require("./data_grid_inmemory_renderer");

var _data_grid_schema = require("./data_grid_schema");

var _column_sorting = require("./column_sorting");

var _mutation_observer = require("../observer/mutation_observer");

var _data_grid_context = require("./data_grid_context");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// When below this number the grid only shows the full screen button
var MINIMUM_WIDTH_FOR_GRID_CONTROLS = 479;
// Each gridStyle object above sets a specific CSS select to .euiGrid
var fontSizesToClassMap = {
  s: 'euiDataGrid--fontSizeSmall',
  m: '',
  l: 'euiDataGrid--fontSizeLarge'
};
var headerToClassMap = {
  shade: 'euiDataGrid--headerShade',
  underline: 'euiDataGrid--headerUnderline'
};
var rowHoverToClassMap = {
  highlight: 'euiDataGrid--rowHoverHighlight',
  none: ''
};
var bordersToClassMap = {
  all: 'euiDataGrid--bordersAll',
  horizontal: 'euiDataGrid--bordersHorizontal',
  none: 'euiDataGrid--bordersNone'
};
var cellPaddingsToClassMap = {
  s: 'euiDataGrid--paddingSmall',
  m: '',
  l: 'euiDataGrid--paddingLarge'
};

function computeVisibleRows(props) {
  var pagination = props.pagination,
      rowCount = props.rowCount;
  var startRow = pagination ? pagination.pageIndex * pagination.pageSize : 0;
  var endRow = pagination ? (pagination.pageIndex + 1) * pagination.pageSize : rowCount;
  endRow = Math.min(endRow, rowCount);
  return endRow - startRow;
}

function renderPagination(props) {
  var pagination = props.pagination;

  if (pagination == null) {
    return null;
  }

  var pageIndex = pagination.pageIndex,
      pageSize = pagination.pageSize,
      pageSizeOptions = pagination.pageSizeOptions,
      onChangePage = pagination.onChangePage,
      onChangeItemsPerPage = pagination.onChangeItemsPerPage;
  var pageCount = Math.ceil(props.rowCount / pageSize);

  if (pageCount === 1) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "euiDataGrid__pagination"
  }, _react.default.createElement(_table_pagination.EuiTablePagination, {
    activePage: pageIndex,
    itemsPerPage: pageSize,
    itemsPerPageOptions: pageSizeOptions,
    pageCount: pageCount,
    onChangePage: onChangePage,
    onChangeItemsPerPage: onChangeItemsPerPage
  }));
}

function useDefaultColumnWidth(container, columns) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      defaultColumnWidth = _useState2[0],
      setDefaultColumnWidth = _useState2[1];

  (0, _react.useEffect)(function () {
    if (container != null) {
      var gridWidth = container.clientWidth;
      var columnWidth = Math.max(gridWidth / columns.length, 100);
      setDefaultColumnWidth(columnWidth);
    }
  }, [container, columns]);
  return defaultColumnWidth;
}

function useColumnWidths() {
  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      columnWidths = _useState4[0],
      setColumnWidths = _useState4[1];

  var setColumnWidth = function setColumnWidth(columnId, width) {
    setColumnWidths(_objectSpread({}, columnWidths, _defineProperty({}, columnId, width)));
  };

  return [columnWidths, setColumnWidth];
}

function useOnResize(setHasRoomForGridControls, isFullScreen) {
  return (0, _react.useCallback)(function (_ref) {
    var width = _ref.width;
    setHasRoomForGridControls(width > MINIMUM_WIDTH_FOR_GRID_CONTROLS || isFullScreen);
  }, [setHasRoomForGridControls, isFullScreen]);
}

function useInMemoryValues(inMemory, rowCount) {
  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      inMemoryValues = _useState6[0],
      setInMemoryValues = _useState6[1];

  var onCellRender = (0, _react.useCallback)(function (rowIndex, column, value) {
    setInMemoryValues(function (inMemoryValues) {
      var nextInMemoryValues = _objectSpread({}, inMemoryValues);

      nextInMemoryValues[rowIndex] = nextInMemoryValues[rowIndex] || {};
      nextInMemoryValues[rowIndex][column.id] = value;
      return nextInMemoryValues;
    });
  }, [setInMemoryValues]); // if `inMemory.level` or `rowCount` changes reset the values

  var inMemoryLevel = inMemory && inMemory.level;
  (0, _react.useEffect)(function () {
    setInMemoryValues({});
  }, [inMemoryLevel, rowCount]);
  return [inMemoryValues, onCellRender];
}

function createKeyDownHandler(props, visibleColumns, focusedCell, headerIsInteractive, setFocusedCell, updateFocus) {
  return function (event) {
    var colCount = visibleColumns.length - 1;

    var _focusedCell = _slicedToArray(focusedCell, 2),
        x = _focusedCell[0],
        y = _focusedCell[1];

    var rowCount = computeVisibleRows(props);
    var keyCode = event.keyCode,
        ctrlKey = event.ctrlKey;

    if (keyCode === _services.keyCodes.DOWN) {
      event.preventDefault();

      if (y < rowCount - 1) {
        setFocusedCell([x, y + 1]);
      }
    } else if (keyCode === _services.keyCodes.LEFT) {
      event.preventDefault();

      if (x > 0) {
        setFocusedCell([x - 1, y]);
      }
    } else if (keyCode === _services.keyCodes.UP) {
      event.preventDefault();
      var minimumIndex = headerIsInteractive ? -1 : 0;

      if (y > minimumIndex) {
        setFocusedCell([x, y - 1]);
      }
    } else if (keyCode === _services.keyCodes.RIGHT) {
      event.preventDefault();

      if (x < colCount) {
        setFocusedCell([x + 1, y]);
      }
    } else if (keyCode === _services.keyCodes.PAGE_DOWN) {
      if (props.pagination) {
        event.preventDefault();
        var _rowCount = props.rowCount;
        var pageIndex = props.pagination.pageIndex;
        var pageSize = props.pagination.pageSize;
        var pageCount = Math.ceil(_rowCount / pageSize);

        if (pageIndex < pageCount - 1) {
          props.pagination.onChangePage(pageIndex + 1);
          var newPageRowCount = computeVisibleRows({
            rowCount: _rowCount,
            pagination: _objectSpread({}, props.pagination, {
              pageIndex: pageIndex + 1
            })
          });
          var rowIndex = focusedCell[1] < newPageRowCount ? focusedCell[1] : newPageRowCount - 1;
          setFocusedCell([focusedCell[0], rowIndex]);
          updateFocus();
        }
      }
    } else if (keyCode === _services.keyCodes.PAGE_UP) {
      if (props.pagination) {
        event.preventDefault();
        var _pageIndex = props.pagination.pageIndex;

        if (_pageIndex > 0) {
          props.pagination.onChangePage(_pageIndex - 1);
          updateFocus();
        }
      }
    } else if (keyCode === (ctrlKey && _services.keyCodes.END)) {
      event.preventDefault();
      setFocusedCell([colCount, rowCount - 1]);
    } else if (keyCode === (ctrlKey && _services.keyCodes.HOME)) {
      event.preventDefault();
      setFocusedCell([0, 0]);
    } else if (keyCode === _services.keyCodes.END) {
      event.preventDefault();
      setFocusedCell([colCount, y]);
    } else if (keyCode === _services.keyCodes.HOME) {
      event.preventDefault();
      setFocusedCell([0, y]);
    }
  };
}

function useAfterRender(fn) {
  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSubscribed = _useState8[0],
      setIsSubscribed = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      needsExecution = _useState10[0],
      setNeedsExecution = _useState10[1]; // first useEffect waits for the parent & children to render & flush to dom


  (0, _react.useEffect)(function () {
    if (isSubscribed) {
      setIsSubscribed(false);
      setNeedsExecution(true);
    }
  }, [isSubscribed, setIsSubscribed, setNeedsExecution]); // second useEffect allows for a new `fn` to have been created
  // with any state updates before being called

  (0, _react.useEffect)(function () {
    if (needsExecution) {
      setNeedsExecution(false);
      fn();
    }
  }, [needsExecution, setNeedsExecution, fn]);
  return function () {
    setIsSubscribed(true);
  };
}

var EuiDataGrid = function EuiDataGrid(props) {
  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isFullScreen = _useState12[0],
      setIsFullScreen = _useState12[1];

  var _useState13 = (0, _react.useState)(true),
      _useState14 = _slicedToArray(_useState13, 2),
      hasRoomForGridControls = _useState14[0],
      setHasRoomForGridControls = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      focusedCell = _useState16[0],
      setFocusedCell = _useState16[1];

  var _useState17 = (0, _react.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      containerRef = _useState18[0],
      setContainerRef = _useState18[1];

  var _useState19 = (0, _react.useState)((0, _services.htmlIdGenerator)()()),
      _useState20 = _slicedToArray(_useState19, 1),
      interactiveCellId = _useState20[0];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      headerIsInteractive = _useState22[0],
      setHeaderIsInteractive = _useState22[1];

  var handleHeaderChange = (0, _react.useCallback)(function (records) {
    var _records = _slicedToArray(records, 1),
        target = _records[0].target; // find the wrapping header div


    var headerRow = target.parentElement;

    while (headerRow && (headerRow.getAttribute('data-test-subj') || '').indexOf('dataGridHeader') === -1) {
      headerRow = headerRow.parentElement;
    }

    if (headerRow) {
      var tabbables = (0, _tabbable.default)(headerRow);
      var managed = headerRow.querySelectorAll('[data-euigrid-tab-managed]');
      var hasInteractives = tabbables.length > 0 || managed.length > 0;

      if (hasInteractives !== headerIsInteractive) {
        setHeaderIsInteractive(hasInteractives); // if the focus is on the header, and the header is no longer interactive
        // move the focus down to the first row

        if (hasInteractives === false && focusedCell && focusedCell[1] === -1) {
          setFocusedCell([focusedCell[0], 0]);
        }
      }
    }
  }, [headerIsInteractive, setHeaderIsInteractive, focusedCell, setFocusedCell]);

  var _useColumnWidths = useColumnWidths(),
      _useColumnWidths2 = _slicedToArray(_useColumnWidths, 2),
      columnWidths = _useColumnWidths2[0],
      setColumnWidth = _useColumnWidths2[1]; // enables/disables grid controls based on available width


  var onResize = useOnResize(function (nextHasRoomForGridControls) {
    if (nextHasRoomForGridControls !== hasRoomForGridControls) {
      setHasRoomForGridControls(nextHasRoomForGridControls);
    }
  }, isFullScreen);

  var handleGridKeyDown = function handleGridKeyDown(e) {
    switch (e.keyCode) {
      case _services.keyCodes.ESCAPE:
        if (isFullScreen) {
          e.preventDefault();
          setIsFullScreen(false);
        }

        break;
    }
  };

  var columns = props.columns,
      columnVisibility = props.columnVisibility,
      schemaDetectors = props.schemaDetectors,
      rowCount = props.rowCount,
      renderCellValue = props.renderCellValue,
      className = props.className,
      gridStyle = props.gridStyle,
      _props$toolbarVisibil = props.toolbarVisibility,
      toolbarVisibility = _props$toolbarVisibil === void 0 ? true : _props$toolbarVisibil,
      pagination = props.pagination,
      sorting = props.sorting,
      inMemory = props.inMemory,
      popoverContents = props.popoverContents,
      rest = _objectWithoutProperties(props, ["columns", "columnVisibility", "schemaDetectors", "rowCount", "renderCellValue", "className", "gridStyle", "toolbarVisibility", "pagination", "sorting", "inMemory", "popoverContents"]); // apply style props on top of defaults


  var gridStyleWithDefaults = _objectSpread({}, _style_selector.startingStyles, gridStyle);

  var _useInMemoryValues = useInMemoryValues(inMemory, rowCount),
      _useInMemoryValues2 = _slicedToArray(_useInMemoryValues, 2),
      inMemoryValues = _useInMemoryValues2[0],
      onCellRender = _useInMemoryValues2[1];

  var definedColumnSchemas = (0, _react.useMemo)(function () {
    return columns.reduce(function (definedColumnSchemas, _ref2) {
      var id = _ref2.id,
          schema = _ref2.schema;

      if (schema != null) {
        definedColumnSchemas[id] = schema;
      }

      return definedColumnSchemas;
    }, {});
  }, [columns]);
  var allSchemaDetectors = (0, _react.useMemo)(function () {
    return _toConsumableArray(_data_grid_schema.schemaDetectors).concat(_toConsumableArray(schemaDetectors || []));
  }, [schemaDetectors]);
  var detectedSchema = (0, _data_grid_schema.useDetectSchema)(inMemory, inMemoryValues, allSchemaDetectors, definedColumnSchemas, inMemory != null);
  var mergedSchema = (0, _data_grid_schema.useMergedSchema)(detectedSchema, columns);

  var _useColumnSelector = (0, _column_selector.useColumnSelector)(columns, columnVisibility),
      _useColumnSelector2 = _slicedToArray(_useColumnSelector, 2),
      columnSelector = _useColumnSelector2[0],
      orderedVisibleColumns = _useColumnSelector2[1];

  var columnSorting = (0, _column_sorting.useColumnSorting)(orderedVisibleColumns, sorting, mergedSchema, allSchemaDetectors);

  var _useStyleSelector = (0, _style_selector.useStyleSelector)(gridStyleWithDefaults),
      _useStyleSelector2 = _slicedToArray(_useStyleSelector, 2),
      styleSelector = _useStyleSelector2[0],
      gridStyles = _useStyleSelector2[1]; // compute the default column width from the container's clientWidth and count of visible columns


  var defaultColumnWidth = useDefaultColumnWidth(containerRef, orderedVisibleColumns);
  var classes = (0, _classnames.default)('euiDataGrid', fontSizesToClassMap[gridStyles.fontSize], bordersToClassMap[gridStyles.border], headerToClassMap[gridStyles.header], rowHoverToClassMap[gridStyles.rowHover], cellPaddingsToClassMap[gridStyles.cellPadding], {
    'euiDataGrid--stripes': gridStyles.stripes
  }, {
    'euiDataGrid--fullScreen': isFullScreen
  }, className);
  var controlBtnClasses = (0, _classnames.default)('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': isFullScreen
  }, className); // By default the toolbar appears

  var showToolbar = !!toolbarVisibility; // Typeguards to see if toolbarVisibility has a certain boolean property assigned
  // If not, just set it to true and assume it's OK to show

  function objectHasKey(object, key) {
    return object.hasOwnProperty(key);
  }

  function checkOrDefaultToolBarDiplayOptions(arg, option) {
    if (arg === undefined) {
      return true;
    } else if (typeof arg === 'boolean') {
      return arg;
    } else if (objectHasKey(arg, option)) {
      return arg[option];
    } else {
      return true;
    }
  } // These grid controls will only show when there is room. Check the resize observer callback
  // They can also be optionally turned off individually by using toolbarVisibility


  var gridControls = _react.default.createElement(_react.Fragment, null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showColumnSelector') ? columnSelector : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showStyleSelector') ? styleSelector : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showSortSelector') ? columnSorting : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'additionalControls') && typeof toolbarVisibility !== 'boolean' ? toolbarVisibility.additionalControls : null); // When data grid is full screen, we add a class to the body to remove the extra scrollbar


  if (isFullScreen) {
    document.body.classList.add('euiDataGrid__restrictBody');
  } else {
    document.body.classList.remove('euiDataGrid__restrictBody');
  } // extract aria-label and/or aria-labelledby from `rest`


  var gridAriaProps = {};

  if ('aria-label' in rest) {
    gridAriaProps['aria-label'] = rest['aria-label'];
    delete rest['aria-label'];
  }

  if ('aria-labelledby' in rest) {
    gridAriaProps['aria-labelledby'] = rest['aria-labelledby'];
    delete rest['aria-labelledby'];
  }

  var realizedFocusedCell = focusedCell || (headerIsInteractive ? [0, -1] : [0, 0]);

  var fullScreenSelector = _react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiDataGrid.fullScreenButton', 'euiDataGrid.fullScreenButtonActive'],
    defaults: ['Full screen', 'Exit full screen']
  }, function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        fullScreenButton = _ref4[0],
        fullScreenButtonActive = _ref4[1];

    return _react.default.createElement(_button.EuiButtonEmpty, {
      size: "xs",
      iconType: "fullScreen",
      color: "text",
      className: controlBtnClasses,
      "data-test-subj": "dataGridFullScrenButton",
      onClick: function onClick() {
        return setIsFullScreen(!isFullScreen);
      }
    }, isFullScreen ? fullScreenButtonActive : fullScreenButton);
  });

  var _useState23 = (0, _react.useState)(new Map()),
      _useState24 = _slicedToArray(_useState23, 2),
      cellsUpdateFocus = _useState24[0],
      setCellsUpdateFocus = _useState24[1];

  var focusAfterRender = useAfterRender(function () {
    if (focusedCell) {
      var _key = "".concat(focusedCell[0], "-").concat(focusedCell[1]);

      if (cellsUpdateFocus.has(_key)) {
        cellsUpdateFocus.get(_key)();
      }
    }
  });
  var datagridContext = {
    onFocusUpdate: function onFocusUpdate(cell, updateFocus) {
      if (pagination) {
        var _key2 = "".concat(cell[0], "-").concat(cell[1]);

        setCellsUpdateFocus(function (cellsUpdateFocus) {
          var nextCellsUpdateFocus = new Map(cellsUpdateFocus);
          nextCellsUpdateFocus.set(_key2, updateFocus);
          return nextCellsUpdateFocus;
        });
        return function () {
          setCellsUpdateFocus(function (cellsUpdateFocus) {
            var nextCellsUpdateFocus = new Map(cellsUpdateFocus);
            nextCellsUpdateFocus.delete(_key2);
            return nextCellsUpdateFocus;
          });
        };
      }
    }
  };
  return _react.default.createElement(_data_grid_context.DataGridContext.Provider, {
    value: datagridContext
  }, _react.default.createElement(_focus_trap.EuiFocusTrap, {
    disabled: !isFullScreen,
    style: {
      height: '100%'
    }
  }, _react.default.createElement("div", {
    className: classes,
    onKeyDown: handleGridKeyDown,
    ref: setContainerRef
  }, showToolbar ? _react.default.createElement("div", {
    className: "euiDataGrid__controls",
    "data-test-sub": "dataGridControls"
  }, hasRoomForGridControls ? gridControls : null, checkOrDefaultToolBarDiplayOptions(toolbarVisibility, 'showFullScreenSelector') ? fullScreenSelector : null) : null, _react.default.createElement(_resize_observer.EuiResizeObserver, {
    onResize: onResize
  }, function (resizeRef) {
    return _react.default.createElement("div", _extends({
      onKeyDown: createKeyDownHandler(props, orderedVisibleColumns, realizedFocusedCell, headerIsInteractive, setFocusedCell, focusAfterRender),
      className: "euiDataGrid__verticalScroll",
      ref: resizeRef
    }, rest), _react.default.createElement("div", {
      className: "euiDataGrid__overflow"
    }, inMemory ? _react.default.createElement(_data_grid_inmemory_renderer.EuiDataGridInMemoryRenderer, {
      inMemory: inMemory,
      renderCellValue: renderCellValue,
      columns: columns,
      rowCount: inMemory.level === 'enhancements' ? // if `inMemory.level === enhancements` then we can only be sure the pagination's pageSize is available in memory
      pagination && pagination.pageSize || rowCount : // otherwise, all of the data is present and usable
      rowCount,
      onCellRender: onCellRender
    }) : null, _react.default.createElement("div", _extends({
      className: "euiDataGrid__content",
      role: "grid"
    }, gridAriaProps), _react.default.createElement(_mutation_observer.EuiMutationObserver, {
      observerOptions: {
        subtree: true,
        childList: true
      },
      onMutation: handleHeaderChange
    }, function (ref) {
      return _react.default.createElement(_data_grid_header_row.EuiDataGridHeaderRow, {
        ref: ref,
        columns: orderedVisibleColumns,
        columnWidths: columnWidths,
        defaultColumnWidth: defaultColumnWidth,
        setColumnWidth: setColumnWidth,
        schema: mergedSchema,
        sorting: sorting,
        headerIsInteractive: headerIsInteractive,
        focusedCell: realizedFocusedCell,
        setFocusedCell: setFocusedCell
      });
    }), _react.default.createElement(_data_grid_body.EuiDataGridBody, {
      columnWidths: columnWidths,
      defaultColumnWidth: defaultColumnWidth,
      inMemoryValues: inMemoryValues,
      inMemory: inMemory,
      columns: orderedVisibleColumns,
      schema: mergedSchema,
      schemaDetectors: allSchemaDetectors,
      popoverContents: popoverContents,
      focusedCell: realizedFocusedCell,
      onCellFocus: setFocusedCell,
      pagination: pagination,
      sorting: sorting,
      renderCellValue: renderCellValue,
      rowCount: rowCount,
      interactiveCellId: interactiveCellId
    }))));
  }), renderPagination(props), _react.default.createElement("p", {
    id: interactiveCellId,
    hidden: true
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiDataGrid.screenReaderNotice",
    default: "Cell contains interactive content."
  })))));
};

exports.EuiDataGrid = EuiDataGrid;
EuiDataGrid.propTypes = {
  className: _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * An array of #EuiDataGridColumn objects. Lists the columns available and the schema and settings tied to it.
       */
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * The unique identifier for this column
       */
    id: _propTypes.default.string.isRequired,

    /**
       * A `ReactNode` used when rendering the column header. When providing complicated content, please make sure to utilize CSS to respect truncation as space allows. Check the docs example.
       */
    display: _propTypes.default.node,

    /**
       * A Schema to use for the column. Built-in values are ['boolean', 'currency', 'datetime', 'numeric', 'json'] but can be expanded by defining your own #EuiDataGrid `schemaDetectors` (for in-memory detection). In general, it is advised to pass in a value here when you are sure of the schema ahead of time, so that you don't need to rely on the automatic detection.
       */
    schema: _propTypes.default.string,

    /**
       * Defauls to true. Defines shether or not the column's cells can be expanded with a popup onClick / keydown.
       */
    isExpandable: _propTypes.default.bool
  }).isRequired).isRequired,

  /**
       * An array of #EuiDataGridColumnVisibility objects. Defines which columns are visible in the grid and the order they are displayed.
       */
  columnVisibility: _propTypes.default.shape({
    /**
       * An array of #EuiDataGridColumn `id`s dictating the order and visibility of columns.
       */
    visibleColumns: _propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired,

    /**
       * A callback for when a column's visibility or order is modified by the user.
       */
    setVisibleColumns: _propTypes.default.func.isRequired
  }).isRequired,

  /**
       * An array of custom #EuiDataGridSchemaDetector objects. You can inject custom schemas to the grid to define the classnames applied
       */
  schemaDetectors: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * The name of this data type, matches #EuiDataGridColumn / schema `schema`
       */
    type: _propTypes.default.string.isRequired,

    /**
       * The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type
       */
    detector: _propTypes.default.func.isRequired,

    /**
       * A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`
       */
    comparator: _propTypes.default.func,

    /**
       * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
       */
    icon: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired,

    /**
       * The color associated with this data type; it's used to color the icon
       */
    color: _propTypes.default.string.isRequired,

    /**
       * Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'
       */
    sortTextAsc: _propTypes.default.node.isRequired,

    /**
       * Text for how to represent a descending sort of this data type, e.g. 'Z -> A'
       */
    sortTextDesc: _propTypes.default.node.isRequired
  }).isRequired),

  /**
       * An object mapping #EuiDataGridColumn `schema`s to a custom popover formatting component which receives #EuiDataGridPopoverContent props
       */
  popoverContents: _propTypes.default.shape({}),

  /**
       * The total number of rows in the dataset (used by e.g. pagination to know how many pages to list)
       */
  rowCount: _propTypes.default.number.isRequired,

  /**
       * A function called to render a cell's value. Behind the scenes it is treated as a React component
       * allowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement
       * as its only argument.
       */
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,

  /**
       * Defines the look and feel for the grid. Accepts a partial #EuiDataGridStyle object. Settings provided may be overwritten or merged with user defined preferences if toolbarVisibility density controls are available.
       */
  gridStyle: _propTypes.default.shape({
    /**
       * Size of fonts used within the row and column cells
       */
    fontSize: _propTypes.default.oneOf(["s", "m", "l"]),

    /**
       * Border uses for the row and column cells
       */
    border: _propTypes.default.oneOf(["all", "horizontal", "none"]),

    /**
       * If set to true, rows will alternate zebra striping for clarity
       */
    stripes: _propTypes.default.bool,

    /**
       * Visual style for the column headers. Recommendation is to use the `underline` style in times when #EuiDataGrid `toolbarVisibility` is set to `false`.
       */
    header: _propTypes.default.oneOf(["shade", "underline"]),

    /**
       * Will define what visual style to show on row hover
       */
    rowHover: _propTypes.default.oneOf(["highlight", "none"]),

    /**
       * Defines the padding with the row and column cells
       */
    cellPadding: _propTypes.default.oneOf(["s", "m", "l"])
  }),

  /**
       * Accepts either a boolean or #EuiDataGridToolbarVisibilityOptions object. When used as a boolean, defines the display of the toolbar entire. WHen passed an object allows you to turn off individual controls within the toolbar as well as add additional buttons.
       */
  toolbarVisibility: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    /**
       * Allows the ability for the user to hide fields and sort columns
       */
    showColumnSelector: _propTypes.default.bool,

    /**
       * Allows the ability for the user to set the grid density. If on, this merges against what is provided in #EuiDataGridStyle
       */
    showStyleSelector: _propTypes.default.bool,

    /**
       * Allows the ability for the user to sort rows based upon column values
       */
    showSortSelector: _propTypes.default.bool,

    /**
       * Allows user to be able to full screen the data grid. If set to `false` make sure your grid fits within a large enough panel to still show the other controls.
       */
    showFullScreenSelector: _propTypes.default.bool,

    /**
       * Will place any passed node into the toolbar in front of the fullscreen button. Recommend using EuiButtonEmpty with the props shown in the examples.
       */
    additionalControls: _propTypes.default.node
  }).isRequired]),

  /**
       * A #EuiDataGridInMemory object to definite the level of high order schema-detection and sorting logic to use on your data. *Try to set when possible*. When ommited, disables all enhancements and assumes content is flat strings.
       */
  inMemory: _propTypes.default.shape({
    /**
        Given the data flow Sorting->Pagination:
        Each step can be performed by service calls or in-memory by the grid.
        However, we cannot allow any service calls after an in-memory operation.
        E.g. if Pagination requires a service call the grid cannot perform
        in-memory Sorting. This means a single value representing the
        service / in-memory boundary can be used. Thus there are four states for in-memory's level:
        * "enhancements" - no in-memory operations, but use the available data to enhance the grid
        * "pagination" - only pagination is performed in-memory
        * "sorting" - sorting & pagination is performed in-memory
     */
    level: _propTypes.default.oneOf(["enhancements", "pagination", "sorting"]).isRequired,

    /**
       * An array of column ids for the in-memory processing to skip
       */
    skipColumns: _propTypes.default.arrayOf(_propTypes.default.string.isRequired)
  }),

  /**
       * A #EuiDataGridPagination object. Omit to disable pagination completely.
       */
  pagination: _propTypes.default.shape({
    /**
       * The index of the current page, starts at 0 for the first page
       */
    pageIndex: _propTypes.default.number.isRequired,

    /**
       * How many rows should initially be shown per page
       */
    pageSize: _propTypes.default.number.isRequired,

    /**
       * An array of page sizes the user can select from
       */
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired).isRequired,

    /**
       * A callback for when the user changes the page size selection
       */
    onChangeItemsPerPage: _propTypes.default.func.isRequired,

    /**
       * A callback for when the current page index changes
       */
    onChangePage: _propTypes.default.func.isRequired
  }),

  /**
       * A #EuiDataGridSorting oject that provides the sorted columns along with their direction. Omit to disable, but you'll likely want to also turn off the user sorting controls through the `toolbarVisibility` prop.
       */
  sorting: _propTypes.default.shape({
    /**
       * A function that receives updated column sort details in response to user interactions in the toolbar controls
       */
    onSort: _propTypes.default.func.isRequired,

    /**
       * An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`
       */
    columns: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,
      direction: _propTypes.default.oneOf(["asc", "desc"]).isRequired
    }).isRequired).isRequired
  }),

  /**
           * must provide either aria-label OR aria-labelledby as a title for the grid
           */
  "aria-label": _propTypes.default.string,

  /**
           * must provide either aria-label OR aria-labelledby as a title for the grid
           */
  "aria-labelledby": _propTypes.default.string
};
EuiDataGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDataGrid",
  "props": {
    "className": {
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
    "columns": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "description": "The unique identifier for this column",
              "required": true
            },
            "display": {
              "name": "node",
              "description": "A `ReactNode` used when rendering the column header. When providing complicated content, please make sure to utilize CSS to respect truncation as space allows. Check the docs example.",
              "required": false
            },
            "schema": {
              "name": "string",
              "description": "A Schema to use for the column. Built-in values are ['boolean', 'currency', 'datetime', 'numeric', 'json'] but can be expanded by defining your own #EuiDataGrid `schemaDetectors` (for in-memory detection). In general, it is advised to pass in a value here when you are sure of the schema ahead of time, so that you don't need to rely on the automatic detection.",
              "required": false
            },
            "isExpandable": {
              "name": "bool",
              "description": "Defauls to true. Defines shether or not the column's cells can be expanded with a popup onClick / keydown.",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": "An array of #EuiDataGridColumn objects. Lists the columns available and the schema and settings tied to it."
    },
    "columnVisibility": {
      "type": {
        "name": "shape",
        "value": {
          "visibleColumns": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "description": "An array of #EuiDataGridColumn `id`s dictating the order and visibility of columns.",
            "required": true
          },
          "setVisibleColumns": {
            "name": "func",
            "description": "A callback for when a column's visibility or order is modified by the user.",
            "required": true
          }
        }
      },
      "required": true,
      "description": "An array of #EuiDataGridColumnVisibility objects. Defines which columns are visible in the grid and the order they are displayed."
    },
    "schemaDetectors": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "type": {
              "name": "string",
              "description": "The name of this data type, matches #EuiDataGridColumn / schema `schema`",
              "required": true
            },
            "detector": {
              "name": "func",
              "description": "The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type",
              "required": true
            },
            "comparator": {
              "name": "func",
              "description": "A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`",
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
                "name": "string"
              }, {
                "name": "element"
              }],
              "description": "The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.",
              "required": true
            },
            "color": {
              "name": "string",
              "description": "The color associated with this data type; it's used to color the icon",
              "required": true
            },
            "sortTextAsc": {
              "name": "node",
              "description": "Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'",
              "required": true
            },
            "sortTextDesc": {
              "name": "node",
              "description": "Text for how to represent a descending sort of this data type, e.g. 'Z -> A'",
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": "An array of custom #EuiDataGridSchemaDetector objects. You can inject custom schemas to the grid to define the classnames applied"
    },
    "popoverContents": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false,
      "description": "An object mapping #EuiDataGridColumn `schema`s to a custom popover formatting component which receives #EuiDataGridPopoverContent props"
    },
    "rowCount": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": "The total number of rows in the dataset (used by e.g. pagination to know how many pages to list)"
    },
    "renderCellValue": {
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "func"
        }]
      },
      "required": true,
      "description": "A function called to render a cell's value. Behind the scenes it is treated as a React component\nallowing hooks, context, and other React concepts to be used. The function receives a #CellValueElement\nas its only argument."
    },
    "gridStyle": {
      "type": {
        "name": "shape",
        "value": {
          "fontSize": {
            "name": "enum",
            "value": [{
              "value": "\"s\"",
              "computed": false
            }, {
              "value": "\"m\"",
              "computed": false
            }, {
              "value": "\"l\"",
              "computed": false
            }],
            "description": "Size of fonts used within the row and column cells",
            "required": false
          },
          "border": {
            "name": "enum",
            "value": [{
              "value": "\"all\"",
              "computed": false
            }, {
              "value": "\"horizontal\"",
              "computed": false
            }, {
              "value": "\"none\"",
              "computed": false
            }],
            "description": "Border uses for the row and column cells",
            "required": false
          },
          "stripes": {
            "name": "bool",
            "description": "If set to true, rows will alternate zebra striping for clarity",
            "required": false
          },
          "header": {
            "name": "enum",
            "value": [{
              "value": "\"shade\"",
              "computed": false
            }, {
              "value": "\"underline\"",
              "computed": false
            }],
            "description": "Visual style for the column headers. Recommendation is to use the `underline` style in times when #EuiDataGrid `toolbarVisibility` is set to `false`.",
            "required": false
          },
          "rowHover": {
            "name": "enum",
            "value": [{
              "value": "\"highlight\"",
              "computed": false
            }, {
              "value": "\"none\"",
              "computed": false
            }],
            "description": "Will define what visual style to show on row hover",
            "required": false
          },
          "cellPadding": {
            "name": "enum",
            "value": [{
              "value": "\"s\"",
              "computed": false
            }, {
              "value": "\"m\"",
              "computed": false
            }, {
              "value": "\"l\"",
              "computed": false
            }],
            "description": "Defines the padding with the row and column cells",
            "required": false
          }
        }
      },
      "required": false,
      "description": "Defines the look and feel for the grid. Accepts a partial #EuiDataGridStyle object. Settings provided may be overwritten or merged with user defined preferences if toolbarVisibility density controls are available."
    },
    "toolbarVisibility": {
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "shape",
          "value": {
            "showColumnSelector": {
              "name": "bool",
              "description": "Allows the ability for the user to hide fields and sort columns",
              "required": false
            },
            "showStyleSelector": {
              "name": "bool",
              "description": "Allows the ability for the user to set the grid density. If on, this merges against what is provided in #EuiDataGridStyle",
              "required": false
            },
            "showSortSelector": {
              "name": "bool",
              "description": "Allows the ability for the user to sort rows based upon column values",
              "required": false
            },
            "showFullScreenSelector": {
              "name": "bool",
              "description": "Allows user to be able to full screen the data grid. If set to `false` make sure your grid fits within a large enough panel to still show the other controls.",
              "required": false
            },
            "additionalControls": {
              "name": "node",
              "description": "Will place any passed node into the toolbar in front of the fullscreen button. Recommend using EuiButtonEmpty with the props shown in the examples.",
              "required": false
            }
          }
        }]
      },
      "required": false,
      "description": "Accepts either a boolean or #EuiDataGridToolbarVisibilityOptions object. When used as a boolean, defines the display of the toolbar entire. WHen passed an object allows you to turn off individual controls within the toolbar as well as add additional buttons."
    },
    "inMemory": {
      "type": {
        "name": "shape",
        "value": {
          "level": {
            "name": "enum",
            "value": [{
              "value": "\"enhancements\"",
              "computed": false
            }, {
              "value": "\"pagination\"",
              "computed": false
            }, {
              "value": "\"sorting\"",
              "computed": false
            }],
            "description": "Given the data flow Sorting->Pagination:\n        Each step can be performed by service calls or in-memory by the grid.\n        However, we cannot allow any service calls after an in-memory operation.\n        E.g. if Pagination requires a service call the grid cannot perform\n        in-memory Sorting. This means a single value representing the\n        service / in-memory boundary can be used. Thus there are four states for in-memory's level:\n\"enhancements\" - no in-memory operations, but use the available data to enhance the grid\n\"pagination\" - only pagination is performed in-memory\n\"sorting\" - sorting & pagination is performed in-memory",
            "required": true
          },
          "skipColumns": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "description": "An array of column ids for the in-memory processing to skip",
            "required": false
          }
        }
      },
      "required": false,
      "description": "A #EuiDataGridInMemory object to definite the level of high order schema-detection and sorting logic to use on your data. *Try to set when possible*. When ommited, disables all enhancements and assumes content is flat strings."
    },
    "pagination": {
      "type": {
        "name": "shape",
        "value": {
          "pageIndex": {
            "name": "number",
            "description": "The index of the current page, starts at 0 for the first page",
            "required": true
          },
          "pageSize": {
            "name": "number",
            "description": "How many rows should initially be shown per page",
            "required": true
          },
          "pageSizeOptions": {
            "name": "arrayOf",
            "value": {
              "name": "number"
            },
            "description": "An array of page sizes the user can select from",
            "required": true
          },
          "onChangeItemsPerPage": {
            "name": "func",
            "description": "A callback for when the user changes the page size selection",
            "required": true
          },
          "onChangePage": {
            "name": "func",
            "description": "A callback for when the current page index changes",
            "required": true
          }
        }
      },
      "required": false,
      "description": "A #EuiDataGridPagination object. Omit to disable pagination completely."
    },
    "sorting": {
      "type": {
        "name": "shape",
        "value": {
          "onSort": {
            "name": "func",
            "description": "A function that receives updated column sort details in response to user interactions in the toolbar controls",
            "required": true
          },
          "columns": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "id": {
                  "name": "string",
                  "required": true
                },
                "direction": {
                  "name": "enum",
                  "value": [{
                    "value": "\"asc\"",
                    "computed": false
                  }, {
                    "value": "\"desc\"",
                    "computed": false
                  }],
                  "required": true
                }
              }
            },
            "description": "An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`",
            "required": true
          }
        }
      },
      "required": false,
      "description": "A #EuiDataGridSorting oject that provides the sorted columns along with their direction. Omit to disable, but you'll likely want to also turn off the user sorting controls through the `toolbarVisibility` prop."
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "must provide either aria-label OR aria-labelledby as a title for the grid"
    },
    "aria-labelledby": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "must provide either aria-label OR aria-labelledby as a title for the grid"
    }
  }
};