"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ = require("./");

var _test = require("../../test");

var _services = require("../../services");

var _testUtils = require("react-dom/test-utils");

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

jest.mock('../../services/accessibility/html_id_generator', function () {
  return {
    htmlIdGenerator: function htmlIdGenerator() {
      return function () {
        return 'htmlId';
      };
    }
  };
});

function getFocusableCell(component) {
  return (0, _test.findTestSubject)(component, 'dataGridRowCell').find('[tabIndex=0]');
}

function extractGridData(datagrid) {
  var rows = [];
  var headerCells = (0, _test.findTestSubject)(datagrid, 'dataGridHeaderCell', '|=');
  var headerRow = [];
  headerCells.forEach(function (cell) {
    return headerRow.push(cell.find('[className="euiDataGridHeaderCell__content"]').text());
  });
  rows.push(headerRow);
  var gridRows = (0, _test.findTestSubject)(datagrid, 'dataGridRow');
  gridRows.forEach(function (row) {
    var rowContent = [];
    var cells = (0, _test.findTestSubject)(row, 'dataGridRowCell');
    cells.forEach(function (cell) {
      return rowContent.push(cell.find('[data-test-subj="cell-content"]').text());
    });
    rows.push(rowContent);
  });
  return rows;
}

function extractColumnWidths(datagrid) {
  return (0, _test.findTestSubject)(datagrid, 'dataGridHeaderCell', '|=').reduce(function (widths, cell) {
    var _cell$props$dataTest = cell.props()['data-test-subj'].match(/dataGridHeaderCell-(.*)/),
        _cell$props$dataTest2 = _slicedToArray(_cell$props$dataTest, 2),
        columnId = _cell$props$dataTest2[1];

    widths[columnId] = parseFloat(cell.props().style.width);
    return widths;
  }, {});
}

function resizeColumn(datagrid, columnId, columnWidth) {
  var widths = extractColumnWidths(datagrid);
  var originalWidth = widths[columnId];
  var firstResizer = datagrid.find("EuiDataGridColumnResizer[columnId=\"".concat(columnId, "\"]")).instance();
  firstResizer.onMouseDown({
    pageX: originalWidth
  });
  firstResizer.onMouseMove({
    pageX: columnWidth
  });
  (0, _testUtils.act)(function () {
    return firstResizer.onMouseUp();
  });
  datagrid.update();
}

function getColumnSortDirection(datagrid, columnId) {
  // get the button that sorts by this column
  var columnSorter = datagrid.find("div[data-test-subj=\"euiDataGridColumnSorting-sortColumn-".concat(columnId, "\"]"));

  if (columnSorter.length === 0) {
    // need to enable this column
    // open the column selection popover
    var columnSelectionPopover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopoverColumnSelection"]');
    expect(columnSelectionPopover).not.euiPopoverToBeOpen();
    var popoverButton = columnSelectionPopover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

    (0, _testUtils.act)(function () {
      return popoverButton.props().onClick();
    });
    datagrid.update();
    columnSelectionPopover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopoverColumnSelection"]');
    expect(columnSelectionPopover).euiPopoverToBeOpen(); // find button to enable this column and click it

    var selectColumnButton = datagrid.find("[data-test-subj=\"dataGridColumnSortingPopoverColumnSelection-".concat(columnId, "\"]"));
    expect(selectColumnButton.length).toBe(1); // @ts-ignore-next-line

    (0, _testUtils.act)(function () {
      return selectColumnButton.props().onClick();
    }); // close column selection popover

    columnSelectionPopover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopoverColumnSelection"]'); // popover will go away if all of the columns are selected

    if (columnSelectionPopover.length > 0) {
      expect(columnSelectionPopover).euiPopoverToBeOpen();
      popoverButton = columnSelectionPopover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

      (0, _testUtils.act)(function () {
        return popoverButton.props().onClick();
      });
      datagrid.update();
      columnSelectionPopover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopoverColumnSelection"]');
      expect(columnSelectionPopover).not.euiPopoverToBeOpen();
    } // find the column sorter


    columnSelectionPopover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopover"]');
    columnSorter = columnSelectionPopover.find("div[data-test-subj=\"euiDataGridColumnSorting-sortColumn-".concat(columnId, "\"]"));
  }

  expect(columnSorter.length).toBe(1);
  var activeSort = columnSorter.find('button[className*="euiButtonGroup__button--selected"]');
  var sortDirection = activeSort.props()['data-test-subj'].match(/(?<direction>[^-]+)$/).groups.direction;
  return [columnSorter, sortDirection];
}

function sortByColumn(datagrid, columnId, direction) {
  // open datagrid sorting options
  var popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
  var popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopover"]');
  expect(popover).euiPopoverToBeOpen();

  var _getColumnSortDirecti = getColumnSortDirection(datagrid, columnId),
      _getColumnSortDirecti2 = _slicedToArray(_getColumnSortDirecti, 2),
      columnSorter = _getColumnSortDirecti2[0],
      currentSortDirection = _getColumnSortDirecti2[1]; // if this column isn't being sorted, enable it


  if (currentSortDirection === 'off') {
    (0, _testUtils.act)(function () {
      // @ts-ignore-next-line
      columnSorter.find('EuiSwitch').props().onChange();
    });
    datagrid.update(); // inspect the column's new sort details

    var _getColumnSortDirecti3 = getColumnSortDirection(datagrid, columnId);

    var _getColumnSortDirecti4 = _slicedToArray(_getColumnSortDirecti3, 2);

    columnSorter = _getColumnSortDirecti4[0];
    currentSortDirection = _getColumnSortDirecti4[1];
  }

  if (currentSortDirection !== direction) {
    var sortButton = columnSorter.find("button[data-test-subj=\"euiDataGridColumnSorting-sortColumn-".concat(columnId, "-").concat(direction, "\"]"));
    expect(sortButton.length).toBe(1);
    (0, _testUtils.act)(function () {
      return sortButton.parents('EuiButtonGroup').props().onChange(undefined, // @ts-ignore TS wants to use react's onChange definition instead of the EuiButtonGroup one
      direction);
    });
  } // close popover


  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopover"]');
  expect(popover).euiPopoverToBeOpen();
  popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSortingPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
}

expect.extend({
  toBeEuiPopover: function toBeEuiPopover(received) {
    var pass = received.name() === 'EuiPopover';

    if (pass) {
      return {
        pass: true,
        message: function message() {
          return "expected component \"".concat(received.name, "\" to not be EuiPopover");
        }
      };
    } else {
      return {
        pass: false,
        message: function message() {
          return "expected component \"".concat(received.name, "\" to be EuiPopover");
        }
      };
    }
  },
  euiPopoverToBeOpen: function euiPopoverToBeOpen(received) {
    expect(received).toBeEuiPopover();

    var _received$props = received.props(),
        isOpen = _received$props.isOpen;

    var pass = isOpen === true;

    if (pass) {
      return {
        pass: true,
        message: function message() {
          return 'expected EuiPopover to be closed';
        }
      };
    } else {
      return {
        pass: false,
        message: function message() {
          return 'expected EuiPopover to be open';
        }
      };
    }
  }
});

function setColumnVisibility(datagrid, columnId, isVisible) {
  // open datagrid column options
  var popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
  var popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).euiPopoverToBeOpen(); // toggle column's visibility switch

  var portal = popover.find('EuiPortal');
  var columnSwitch = portal.find("EuiSwitch[name=\"".concat(columnId, "\"]"));
  var switchInput = columnSwitch.find('button');
  switchInput.getDOMNode().setAttribute('aria-checked', "".concat(isVisible));
  switchInput.simulate('click'); // close popover

  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).euiPopoverToBeOpen();
  popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
}

function moveColumnToIndex(datagrid, columnId, nextIndex) {
  // open datagrid column options
  var popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
  var popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).euiPopoverToBeOpen();

  var _extractGridData = extractGridData(datagrid),
      _extractGridData2 = _slicedToArray(_extractGridData, 1),
      initialColumnOrder = _extractGridData2[0];

  var initialColumnIndex = initialColumnOrder.indexOf(columnId); // "drag" column into new location

  var portal = popover.find('EuiPortal');
  (0, _testUtils.act)(function () {
    return portal.find('EuiDragDropContext').props().onDragEnd({
      // @ts-ignore-next-line - only `index` is used from `source`, don't need to mock rest of the event
      source: {
        index: initialColumnIndex
      },
      destination: {
        index: nextIndex
      }
    });
  });
  datagrid.update(); // close popover

  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).euiPopoverToBeOpen();
  popoverButton = popover.find('div[className="euiPopover__anchor"]').find('[onClick]').first(); // @ts-ignore-next-line

  (0, _testUtils.act)(function () {
    return popoverButton.props().onClick();
  });
  datagrid.update();
  popover = datagrid.find('EuiPopover[data-test-subj="dataGridColumnSelectorPopover"]');
  expect(popover).not.euiPopoverToBeOpen();
}

describe('EuiDataGrid', function () {
  describe('rendering', function () {
    it('renders with common and div attributes', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue(_ref) {
          var rowIndex = _ref.rowIndex,
              columnId = _ref.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        }
      })));
      expect(component).toMatchSnapshot();
    });
    it('renders custom column headers', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A',
          display: 'Column A'
        }, {
          id: 'B',
          display: _react.default.createElement("div", null, "More Elements")
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue(_ref2) {
          var rowIndex = _ref2.rowIndex,
              columnId = _ref2.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        }
      })));
      expect(component).toMatchSnapshot();
    });
    it('renders with appropriate role structure', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue(_ref3) {
          var rowIndex = _ref3.rowIndex,
              columnId = _ref3.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        }
      }))); // purposefully not using data-test-subj attrs to test role semantics

      var grid = component.find('[role="grid"]');
      var rows = grid.children('[role="row"]'); // technically, this test should also allow role=rowgroup but we don't currently use rowgroups

      expect(rows.length).not.toBe(0);
      expect(grid.children().length).toBe(rows.length);
      rows.each(function (i, element) {
        var $element = (0, _cheerio.default)(element);
        var allCells = $element.children('[role="columnheader"], [role="rowheader"], [role="gridcell"]');
        expect($element.children().length).toBe(allCells.length);
      });
    });
    it('renders and applies custom props', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 2,
        renderCellValue: function renderCellValue(_ref4) {
          var rowIndex = _ref4.rowIndex,
              columnId = _ref4.columnId,
              setCellProps = _ref4.setCellProps;
          (0, _react.useEffect)(function () {
            setCellProps({
              className: 'customClass',
              'data-test-subj': "cell-".concat(rowIndex, "-").concat(columnId),
              style: {
                color: columnId === 'A' ? 'red' : 'blue'
              }
            });
          }, [columnId, rowIndex, setCellProps]);
          return "".concat(rowIndex, ", ").concat(columnId);
        }
      })));
      expect(component.find('.euiDataGridRowCell').map(function (cell) {
        var props = cell.props();
        delete props.children;
        return props;
      })).toMatchInlineSnapshot("\nArray [\n  Object {\n    \"className\": \"euiDataGridRowCell customClass\",\n    \"data-test-subj\": \"dataGridRowCell\",\n    \"onFocus\": [Function],\n    \"onKeyDown\": [Function],\n    \"role\": \"gridcell\",\n    \"style\": Object {\n      \"color\": \"red\",\n      \"width\": \"100px\",\n    },\n    \"tabIndex\": 0,\n  },\n  Object {\n    \"className\": \"euiDataGridRowCell customClass\",\n    \"data-test-subj\": \"dataGridRowCell\",\n    \"onFocus\": [Function],\n    \"onKeyDown\": [Function],\n    \"role\": \"gridcell\",\n    \"style\": Object {\n      \"color\": \"blue\",\n      \"width\": \"100px\",\n    },\n    \"tabIndex\": -1,\n  },\n  Object {\n    \"className\": \"euiDataGridRowCell customClass\",\n    \"data-test-subj\": \"dataGridRowCell\",\n    \"onFocus\": [Function],\n    \"onKeyDown\": [Function],\n    \"role\": \"gridcell\",\n    \"style\": Object {\n      \"color\": \"red\",\n      \"width\": \"100px\",\n    },\n    \"tabIndex\": -1,\n  },\n  Object {\n    \"className\": \"euiDataGridRowCell customClass\",\n    \"data-test-subj\": \"dataGridRowCell\",\n    \"onFocus\": [Function],\n    \"onKeyDown\": [Function],\n    \"role\": \"gridcell\",\n    \"style\": Object {\n      \"color\": \"blue\",\n      \"width\": \"100px\",\n    },\n    \"tabIndex\": -1,\n  },\n]\n");
    });
    it('renders correct aria attributes on column headers', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 1,
        renderCellValue: function renderCellValue() {
          return 'value';
        }
      }))); // no columns are sorted, expect no aria-sort or aria-describedby attributes

      expect(component.find('[role="columnheader"][aria-sort]').length).toBe(0);
      expect(component.find('[role="columnheader"][aria-describedby]').length).toBe(0); // sort on one column

      component.setProps({
        sorting: {
          columns: [{
            id: 'A',
            direction: 'asc'
          }],
          onSort: function onSort() {}
        }
      }); // expect A column to have aria-sort, expect no aria-describedby

      expect(component.find('[role="columnheader"][aria-sort]').length).toBe(1);
      expect(component.find('[role="columnheader"][aria-sort="ascending"][data-test-subj="dataGridHeaderCell-A"]').length).toBe(1);
      expect(component.find('[role="columnheader"][aria-describedby]').length).toBe(0); // sort on both columns

      component.setProps({
        sorting: {
          columns: [{
            id: 'A',
            direction: 'asc'
          }, {
            id: 'B',
            direction: 'desc'
          }],
          onSort: function onSort() {}
        }
      }); // expect no aria-sort, both columns have aria-describedby

      expect(component.find('[role="columnheader"][aria-sort]').length).toBe(0);
      expect(component.find('[role="columnheader"][aria-describedby]').length).toBe(2);
      expect(component.find('[role="columnheader"][aria-describedby="htmlId"]').length).toBe(2);
    });
    it('renders additional toolbar controls', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue(_ref5) {
          var rowIndex = _ref5.rowIndex,
              columnId = _ref5.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        },
        toolbarVisibility: {
          additionalControls: _react.default.createElement("button", null, "Button")
        }
      })));
      expect(component).toMatchSnapshot();
    });
    it('can hide the toolbar', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        toolbarVisibility: false,
        rowCount: 1,
        renderCellValue: function renderCellValue() {
          return 'value';
        }
      }))); // The toolbar should not show

      expect((0, _test.findTestSubject)(component, 'dataGridControls').length).toBe(0); // Check for false / true and unset values

      component.setProps({
        toolbarVisibility: {
          showFullScreenSelector: false,
          showSortSelector: false,
          showStyleSelector: true
        }
      }); // fullscreen selector

      expect((0, _test.findTestSubject)(component, 'dataGridFullScrenButton').length).toBe(0); // sort selector

      expect((0, _test.findTestSubject)(component, 'dataGridColumnSortingButton').length).toBe(0); // style selector

      expect((0, _test.findTestSubject)(component, 'dataGridStyleSelectorButton').length).toBe(1); // column selector

      expect((0, _test.findTestSubject)(component, 'dataGridColumnSelectorButton').length).toBe(1);
    });
    describe('schema schema classnames', function () {
      it('applies classnames from explicit schemas', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
          columns: [{
            id: 'A',
            schema: 'numeric'
          }, {
            id: 'B',
            schema: 'customFormatName'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 3,
          renderCellValue: function renderCellValue(_ref6) {
            var rowIndex = _ref6.rowIndex,
                columnId = _ref6.columnId;
            return "".concat(rowIndex, ", ").concat(columnId);
          }
        })));
        var gridCellClassNames = component.find('[className*="euiDataGridRowCell--"]').map(function (x) {
          return x.props().className;
        });
        expect(gridCellClassNames).toMatchInlineSnapshot("\nArray [\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--customFormatName\",\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--customFormatName\",\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--customFormatName\",\n]\n");
      });
      it('automatically detects column types and applies classnames', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
          columns: [{
            id: 'A'
          }, {
            id: 'B'
          }, {
            id: 'C'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B', 'C'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          inMemory: {
            level: 'pagination'
          },
          rowCount: 2,
          renderCellValue: function renderCellValue(_ref7) {
            var columnId = _ref7.columnId;

            if (columnId === 'A') {
              return 5.5;
            } else if (columnId === 'B') {
              return 'true';
            } else {
              return 'asdf';
            }
          }
        })));
        var gridCellClassNames = component.find('[className~="euiDataGridRowCell"]').map(function (x) {
          return x.props().className;
        });
        expect(gridCellClassNames).toMatchInlineSnapshot("\nArray [\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--boolean\",\n  \"euiDataGridRowCell\",\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--boolean\",\n  \"euiDataGridRowCell\",\n]\n");
      });
      it('overrides automatically detected column types with supplied schema', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
          columns: [{
            id: 'A'
          }, {
            id: 'B',
            schema: 'alphanumeric'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          inMemory: {
            level: 'pagination'
          },
          rowCount: 2,
          renderCellValue: function renderCellValue(_ref8) {
            var columnId = _ref8.columnId;
            return columnId === 'A' ? 5.5 : 'true';
          }
        })));
        var gridCellClassNames = component.find('[className~="euiDataGridRowCell"]').map(function (x) {
          return x.props().className;
        });
        expect(gridCellClassNames).toMatchInlineSnapshot("\nArray [\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--alphanumeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--alphanumeric\",\n]\n");
      });
      it('detects all of the supported types', function () {
        var values = {
          A: '-5.80',
          B: 'false',
          C: '$-5.80',
          E: '2019-09-18T12:31:28',
          F: '2019-09-18T12:31:28Z',
          G: '2019-09-18T12:31:28.234',
          H: '2019-09-18T12:31:28.234+0300'
        };
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
          columns: Object.keys(values).map(function (id) {
            return {
              id: id
            };
          }),
          columnVisibility: {
            visibleColumns: Object.keys(values),
            setVisibleColumns: function setVisibleColumns() {}
          },
          inMemory: {
            level: 'pagination'
          },
          rowCount: 1,
          renderCellValue: function renderCellValue(_ref9) {
            var columnId = _ref9.columnId;
            return values[columnId];
          }
        })));
        var gridCellClassNames = component.find('[className~="euiDataGridRowCell"]').map(function (x) {
          return x.props().className;
        });
        expect(gridCellClassNames).toMatchInlineSnapshot("\nArray [\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--boolean\",\n  \"euiDataGridRowCell euiDataGridRowCell--currency\",\n  \"euiDataGridRowCell euiDataGridRowCell--datetime\",\n  \"euiDataGridRowCell euiDataGridRowCell--datetime\",\n  \"euiDataGridRowCell euiDataGridRowCell--datetime\",\n  \"euiDataGridRowCell euiDataGridRowCell--datetime\",\n]\n");
      });
      it('accepts extra detectors', function () {
        var values = {
          A: '-5.80',
          B: '127.0.0.1'
        };
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
          columns: Object.keys(values).map(function (id) {
            return {
              id: id
            };
          }),
          columnVisibility: {
            visibleColumns: Object.keys(values),
            setVisibleColumns: function setVisibleColumns() {}
          },
          schemaDetectors: [{
            type: 'ipaddress',
            detector: function detector(value) {
              return value.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ? 1 : 0;
            },
            icon: 'alert',
            color: 'primary',
            sortTextAsc: 'a-z',
            sortTextDesc: 'z-a'
          }],
          inMemory: {
            level: 'pagination'
          },
          rowCount: 1,
          renderCellValue: function renderCellValue(_ref10) {
            var columnId = _ref10.columnId;
            return values[columnId];
          }
        })));
        var gridCellClassNames = component.find('[className~="euiDataGridRowCell"]').map(function (x) {
          return x.props().className;
        });
        expect(gridCellClassNames).toMatchInlineSnapshot("\nArray [\n  \"euiDataGridRowCell euiDataGridRowCell--numeric\",\n  \"euiDataGridRowCell euiDataGridRowCell--ipaddress\",\n]\n");
      });
    });
  });
  describe('cell rendering', function () {
    it('supports hooks', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-label": "test",
        columns: [{
          id: 'Column 1'
        }, {
          id: 'Column 2'
        }],
        columnVisibility: {
          visibleColumns: ['Column 1', 'Column 2'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 2,
        renderCellValue: function renderCellValue(_ref11) {
          var rowIndex = _ref11.rowIndex,
              columnId = _ref11.columnId;

          var _useState = (0, _react.useState)("Hello, Row ".concat(rowIndex, "-").concat(columnId, "!")),
              _useState2 = _slicedToArray(_useState, 1),
              value = _useState2[0];

          return _react.default.createElement("span", null, value);
        }
      }));
      expect(extractGridData(component)).toMatchInlineSnapshot("\nArray [\n  Array [\n    \"Column 1\",\n    \"Column 2\",\n  ],\n  Array [\n    \"Hello, Row 0-Column 1!\",\n    \"Hello, Row 0-Column 2!\",\n  ],\n  Array [\n    \"Hello, Row 1-Column 1!\",\n    \"Hello, Row 1-Column 2!\",\n  ],\n]\n");
    });
  });
  describe('pagination', function () {
    it('renders', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-label": "test grid",
        columns: [{
          id: 'Column'
        }],
        columnVisibility: {
          visibleColumns: ['Column'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 10,
        renderCellValue: function renderCellValue(_ref12) {
          var rowIndex = _ref12.rowIndex;
          return rowIndex;
        },
        pagination: {
          pageIndex: 1,
          pageSize: 6,
          pageSizeOptions: [3, 6, 10],
          onChangePage: function onChangePage() {},
          onChangeItemsPerPage: function onChangeItemsPerPage() {}
        }
      }));
      expect((0, _test.takeMountedSnapshot)(component.find('EuiTablePagination'))).toMatchSnapshot();
    });
    describe('page navigation', function () {
      it('next button pages through content', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-label": "test grid",
          columns: [{
            id: 'Column'
          }],
          columnVisibility: {
            visibleColumns: ['Column'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 8,
          renderCellValue: function renderCellValue(_ref13) {
            var rowIndex = _ref13.rowIndex;
            return rowIndex;
          },
          pagination: {
            pageIndex: 0,
            pageSize: 3,
            pageSizeOptions: [3, 6, 10],
            onChangePage: jest.fn(function (pageIndex) {
              var pagination = component.props().pagination;
              component.setProps({
                pagination: _objectSpread({}, pagination, {
                  pageIndex: pageIndex
                })
              });
            }),
            onChangeItemsPerPage: jest.fn()
          }
        }));
        expect(extractGridData(component)).toEqual([['Column'], ['0'], ['1'], ['2']]);
        (0, _test.findTestSubject)(component, 'pagination-button-next').simulate('click');
        expect(component.props().pagination.onChangePage).toHaveBeenCalledTimes(1);
        var firstCallPageIndex = component.props().pagination.onChangePage.mock.calls[0][0];
        expect(firstCallPageIndex).toBe(1);
        expect(extractGridData(component)).toEqual([['Column'], ['3'], ['4'], ['5']]);
        (0, _test.findTestSubject)(component, 'pagination-button-next').simulate('click');
        expect(component.props().pagination.onChangePage).toHaveBeenCalledTimes(2);
        var secondCallPageIndex = component.props().pagination.onChangePage.mock.calls[1][0];
        expect(secondCallPageIndex).toBe(2);
        expect(extractGridData(component)).toEqual([['Column'], ['6'], ['7']]);
      });
      it('pages are navigable through page links', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-label": "test grid",
          columns: [{
            id: 'Column'
          }],
          columnVisibility: {
            visibleColumns: ['Column'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 8,
          renderCellValue: function renderCellValue(_ref14) {
            var rowIndex = _ref14.rowIndex;
            return rowIndex;
          },
          pagination: {
            pageIndex: 0,
            pageSize: 3,
            pageSizeOptions: [3, 6, 10],
            onChangePage: jest.fn(function (pageIndex) {
              var pagination = component.props().pagination;
              component.setProps({
                pagination: _objectSpread({}, pagination, {
                  pageIndex: pageIndex
                })
              });
            }),
            onChangeItemsPerPage: jest.fn()
          }
        }));
        expect(extractGridData(component)).toEqual([['Column'], ['0'], ['1'], ['2']]); // goto page 3

        (0, _test.findTestSubject)(component, 'pagination-button-2').simulate('click');
        expect(component.props().pagination.onChangePage).toHaveBeenCalledTimes(1);
        var firstCallPageIndex = component.props().pagination.onChangePage.mock.calls[0][0];
        expect(firstCallPageIndex).toBe(2);
        expect(extractGridData(component)).toEqual([['Column'], ['6'], ['7']]); // goto page 2

        (0, _test.findTestSubject)(component, 'pagination-button-1').simulate('click');
        expect(component.props().pagination.onChangePage).toHaveBeenCalledTimes(2);
        var secondCallPageIndex = component.props().pagination.onChangePage.mock.calls[1][0];
        expect(secondCallPageIndex).toBe(1);
        expect(extractGridData(component)).toEqual([['Column'], ['3'], ['4'], ['5']]);
      });
    });
    it('changes the page size', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-label": "test grid",
        columns: [{
          id: 'Column'
        }],
        columnVisibility: {
          visibleColumns: ['Column'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 8,
        renderCellValue: function renderCellValue(_ref15) {
          var rowIndex = _ref15.rowIndex;
          return rowIndex;
        },
        pagination: {
          pageIndex: 0,
          pageSize: 3,
          pageSizeOptions: [3, 6, 10],
          onChangePage: jest.fn(),
          onChangeItemsPerPage: jest.fn(function (pageSize) {
            var pagination = component.props().pagination;
            component.setProps({
              pagination: _objectSpread({}, pagination, {
                pageSize: pageSize
              })
            });
          })
        }
      }));
      expect(extractGridData(component)).toEqual([['Column'], ['0'], ['1'], ['2']]);
      (0, _test.findTestSubject)(component, 'tablePaginationPopoverButton').simulate('click');
      var rowButtons = document.body.querySelectorAll('.euiContextMenuItem');
      expect(Array.prototype.map.call(rowButtons, function (button) {
        return button.textContent || '';
      })).toEqual(['3 rows', '6 rows', '10 rows']);
      rowButtons[1].click();
      expect(component.props().pagination.onChangeItemsPerPage).toHaveBeenCalledTimes(1);
      var firstCallPageIndex = component.props().pagination.onChangeItemsPerPage.mock.calls[0][0];
      expect(firstCallPageIndex).toBe(6);
      expect(extractGridData(component)).toEqual([['Column'], ['0'], ['1'], ['2'], ['3'], ['4'], ['5']]);
    });
  });
  describe('column resizing', function () {
    it('resizes a column by grab handles', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-labelledby": "#test",
        columns: [{
          id: 'Column 1'
        }, {
          id: 'Column 2'
        }],
        columnVisibility: {
          visibleColumns: ['Column 1', 'Column 2'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue() {
          return 'value';
        }
      }));
      var originalCellWidths = extractColumnWidths(component);
      expect(originalCellWidths).toEqual({
        'Column 1': 100,
        'Column 2': 100
      });
      resizeColumn(component, 'Column 1', 150);
      var updatedCellWidths = extractColumnWidths(component);
      expect(updatedCellWidths).toEqual({
        'Column 1': 150,
        'Column 2': 100
      });
    });
    it('does not trigger value re-renders', function () {
      var renderCellValue = jest.fn(function () {
        return 'value';
      });
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-labelledby": "#test",
        columns: [{
          id: 'ColumnA'
        }],
        columnVisibility: {
          visibleColumns: ['ColumnA'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: renderCellValue
      }));
      expect(renderCellValue).toHaveBeenCalledTimes(3);
      renderCellValue.mockClear();
      resizeColumn(component, 'ColumnA', 200);
      expect(extractColumnWidths(component)).toEqual({
        ColumnA: 200
      });
      expect(renderCellValue).toHaveBeenCalledTimes(0);
    });
  });
  describe('column options', function () {
    it('column visibility can be toggled', function () {
      var columnVisibility = {
        visibleColumns: ['ColumnA', 'ColumnB'],
        setVisibleColumns: function setVisibleColumns(visibleColumns) {
          columnVisibility.visibleColumns = visibleColumns;
          component.setProps({
            columnVisibility: columnVisibility
          });
        }
      };
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-labelledby": "#test",
        columns: [{
          id: 'ColumnA'
        }, {
          id: 'ColumnB'
        }],
        columnVisibility: columnVisibility,
        rowCount: 2,
        renderCellValue: function renderCellValue(_ref16) {
          var rowIndex = _ref16.rowIndex,
              columnId = _ref16.columnId;
          return "".concat(rowIndex, "-").concat(columnId);
        }
      }));
      expect(extractGridData(component)).toEqual([['ColumnA', 'ColumnB'], ['0-ColumnA', '0-ColumnB'], ['1-ColumnA', '1-ColumnB']]);
      setColumnVisibility(component, 'ColumnA', false);
      expect(extractGridData(component)).toEqual([['ColumnB'], ['0-ColumnB'], ['1-ColumnB']]);
      setColumnVisibility(component, 'ColumnA', true);
      expect(extractGridData(component)).toEqual([['ColumnA', 'ColumnB'], ['0-ColumnA', '0-ColumnB'], ['1-ColumnA', '1-ColumnB']]);
    });
    it('column order can be changed', function () {
      var columnVisibility = {
        visibleColumns: ['ColumnA', 'ColumnB'],
        setVisibleColumns: function setVisibleColumns(visibleColumns) {
          columnVisibility.visibleColumns = visibleColumns;
          component.setProps({
            columnVisibility: columnVisibility
          });
        }
      };
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-labelledby": "#test",
        columns: [{
          id: 'ColumnA'
        }, {
          id: 'ColumnB'
        }],
        columnVisibility: columnVisibility,
        rowCount: 2,
        renderCellValue: function renderCellValue(_ref17) {
          var rowIndex = _ref17.rowIndex,
              columnId = _ref17.columnId;
          return "".concat(rowIndex, "-").concat(columnId);
        }
      }));
      expect(extractGridData(component)).toEqual([['ColumnA', 'ColumnB'], ['0-ColumnA', '0-ColumnB'], ['1-ColumnA', '1-ColumnB']]);
      moveColumnToIndex(component, 'ColumnB', 0);
      expect(extractGridData(component)).toEqual([['ColumnB', 'ColumnA'], ['0-ColumnB', '0-ColumnA'], ['1-ColumnB', '1-ColumnA']]);
    });
  });
  describe('column sorting', function () {
    it('calls the onSort callback', function () {
      var onSort = jest.fn(function (columns) {
        component.setProps({
          sorting: {
            columns: columns,
            onSort: onSort
          }
        });
        component.update();
      });
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-labelledby": "#test",
        columns: [{
          id: 'ColumnA'
        }],
        columnVisibility: {
          visibleColumns: ['ColumnA'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 1,
        sorting: {
          columns: [],
          onSort: onSort
        },
        renderCellValue: function renderCellValue() {
          return 'hello';
        }
      }));
      sortByColumn(component, 'ColumnA', 'desc');
      expect(onSort).toHaveBeenCalledTimes(2);
      expect(onSort).toHaveBeenCalledWith([{
        id: 'ColumnA',
        direction: 'asc'
      }]);
      expect(onSort).toHaveBeenCalledWith([{
        id: 'ColumnA',
        direction: 'desc'
      }]);

      var _getColumnSortDirecti5 = getColumnSortDirection(component, 'ColumnA'),
          _getColumnSortDirecti6 = _slicedToArray(_getColumnSortDirecti5, 2),
          sortDirection = _getColumnSortDirecti6[1];

      expect(sortDirection).toBe('desc');
    });
    describe('in-memory sorting', function () {
      it('sorts on initial render', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-label": "test",
          columns: [{
            id: 'A'
          }, {
            id: 'B'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 5,
          renderCellValue: function renderCellValue(_ref18) {
            var rowIndex = _ref18.rowIndex,
                columnId = _ref18.columnId;
            return (// render A 0->4 and B 9->5
              columnId === 'A' ? rowIndex : 9 - rowIndex
            );
          },
          inMemory: {
            level: 'sorting'
          },
          sorting: {
            columns: [{
              id: 'A',
              direction: 'desc'
            }],
            onSort: function onSort() {}
          }
        }));
        expect(extractGridData(component)).toEqual([['A', 'B'], ['4', '5'], ['3', '6'], ['2', '7'], ['1', '8'], ['0', '9']]);
      });
      it('sorts on multiple columns', function () {
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-label": "test",
          columns: [{
            id: 'A'
          }, {
            id: 'B'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 5,
          renderCellValue: function renderCellValue(_ref19) {
            var rowIndex = _ref19.rowIndex,
                columnId = _ref19.columnId;
            return (// render A as 0, 1, 0, 1, 0 and B as 9->5
              columnId === 'A' ? rowIndex % 2 : 9 - rowIndex
            );
          },
          inMemory: {
            level: 'sorting'
          },
          sorting: {
            columns: [{
              id: 'A',
              direction: 'desc'
            }, {
              id: 'B',
              direction: 'asc'
            }],
            onSort: function onSort() {}
          }
        }));
        expect(extractGridData(component)).toEqual([['A', 'B'], ['1', '6'], ['1', '8'], ['0', '5'], ['0', '7'], ['0', '9']]);
      });
      it('sorts in response to user interaction', function () {
        var onSort = jest.fn(function (columns) {
          component.setProps({
            sorting: {
              columns: columns,
              onSort: onSort
            }
          });
          component.update();
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-labelledby": "#test",
          columns: [{
            id: 'A'
          }, {
            id: 'B'
          }],
          columnVisibility: {
            visibleColumns: ['A', 'B'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 5,
          renderCellValue: function renderCellValue(_ref20) {
            var rowIndex = _ref20.rowIndex,
                columnId = _ref20.columnId;
            return (// render A as 0, 1, 0, 1, 0 and B as 9->5
              columnId === 'A' ? rowIndex % 2 : 9 - rowIndex
            );
          },
          inMemory: {
            level: 'sorting'
          },
          sorting: {
            columns: [],
            onSort: onSort
          }
        }));
        expect(extractGridData(component)).toEqual([['A', 'B'], ['0', '9'], ['1', '8'], ['0', '7'], ['1', '6'], ['0', '5']]);
        sortByColumn(component, 'A', 'desc');
        expect(extractGridData(component)).toEqual([['A', 'B'], ['1', '8'], ['1', '6'], ['0', '9'], ['0', '7'], ['0', '5']]);
        sortByColumn(component, 'B', 'asc');
        expect(extractGridData(component)).toEqual([['A', 'B'], ['1', '6'], ['1', '8'], ['0', '5'], ['0', '7'], ['0', '9']]);
      });
      it('sorts with all digit groups in numerical-like', function () {
        var onSort = jest.fn(function (columns) {
          component.setProps({
            sorting: {
              columns: columns,
              onSort: onSort
            }
          });
          component.update();
        });
        var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
          "aria-label": "test",
          columns: [{
            id: 'version'
          }],
          columnVisibility: {
            visibleColumns: ['version'],
            setVisibleColumns: function setVisibleColumns() {}
          },
          rowCount: 5,
          renderCellValue: function renderCellValue(_ref21) {
            var rowIndex = _ref21.rowIndex;
            return "1.0.".concat(rowIndex % 3 + rowIndex);
          } // computes as 0,2,4,3,5
          ,
          inMemory: {
            level: 'sorting'
          },
          sorting: {
            columns: [],
            onSort: onSort
          }
        })); // verify rows are unordered

        expect(extractGridData(component)).toEqual([['version'], ['1.0.0'], ['1.0.2'], ['1.0.4'], ['1.0.3'], ['1.0.5']]);
        sortByColumn(component, 'version', 'asc');
        expect(extractGridData(component)).toEqual([['version'], ['1.0.0'], ['1.0.2'], ['1.0.3'], ['1.0.4'], ['1.0.5']]);
      });
    });
    it('uses schema information to sort', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, {
        "aria-label": "test",
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 5,
        renderCellValue: function renderCellValue(_ref22) {
          var rowIndex = _ref22.rowIndex,
              columnId = _ref22.columnId;
          return (// render A 0->4 and B 12->8
            columnId === 'A' ? rowIndex : 12 - rowIndex
          );
        },
        inMemory: {
          level: 'sorting'
        },
        sorting: {
          columns: [{
            id: 'B',
            direction: 'asc'
          }],
          onSort: function onSort() {}
        }
      }));
      expect(extractGridData(component)).toEqual([['A', 'B'], ['4', '8'], ['3', '9'], ['2', '10'], ['1', '11'], ['0', '12']]);
    });
  });
  describe('keyboard controls', function () {
    it('supports simple arrow navigation', function () {
      var pagination = {
        pageIndex: 0,
        pageSize: 3,
        pageSizeOptions: [3, 6, 10],
        onChangePage: function onChangePage(pageIndex) {
          pagination = _objectSpread({}, pagination, {
            pageIndex: pageIndex
          });
          component.setProps({
            pagination: pagination
          });
        },
        onChangeItemsPerPage: function onChangeItemsPerPage() {}
      };
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }, {
          id: 'C'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B', 'C'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 8,
        renderCellValue: function renderCellValue(_ref23) {
          var rowIndex = _ref23.rowIndex,
              columnId = _ref23.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        },
        pagination: pagination
      })));
      var focusableCell = getFocusableCell(component); // focus should begin at the first cell

      expect(focusableCell.length).toEqual(1);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // focus should not move when up against the left edge

      focusableCell.simulate('focus').simulate('keydown', {
        keyCode: _services.keyCodes.LEFT
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // focus should not move when up against the top edge

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.UP
      });
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // move down

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.DOWN
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('1, A'); // move right

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.RIGHT
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('1, B'); // move up

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.UP
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, B'); // move left

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.LEFT
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // move down and to the end of the row

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.DOWN
      }).simulate('keydown', {
        keyCode: _services.keyCodes.END
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('1, C'); // move up and to the beginning of the row

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.UP
      }).simulate('keydown', {
        keyCode: _services.keyCodes.HOME
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // jump to the last cell

      focusableCell.simulate('keydown', {
        ctrlKey: true,
        keyCode: _services.keyCodes.END
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('2, C'); // jump to the first cell

      focusableCell.simulate('keydown', {
        ctrlKey: true,
        keyCode: _services.keyCodes.HOME
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // page should not change when moving before the first entry

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_UP
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // advance to the next page

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_DOWN
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('3, A'); // move over one column and advance one more page

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.RIGHT
      }) // 3, B
      .simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_DOWN
      }); // 6, B

      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('6, B'); // does not advance beyond the last page

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_DOWN
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('6, B'); // move left one column, return to the previous page

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.LEFT
      }) // 6, A
      .simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_UP
      }); // 3, A

      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('3, A'); // return to the previous (first) page

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_UP
      });
      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A'); // move to the last cell of the page then advance one page

      focusableCell.simulate('keydown', {
        ctrlKey: true,
        keyCode: _services.keyCodes.END
      }) // 2, C (last cell of the first page)
      .simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_DOWN
      }); // 5, C (last cell of the second page, same cell position as previous page)

      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('5, C'); // advance to the final page, but there is 1 row less on page 3 so focus should retreat a row but retain the column

      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.PAGE_DOWN
      }); // 7, C

      focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('7, C');
    });
    it('does not break arrow key focus control behavior when also using a mouse', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 3,
        renderCellValue: function renderCellValue(_ref24) {
          var rowIndex = _ref24.rowIndex,
              columnId = _ref24.columnId;
          return "".concat(rowIndex, ", ").concat(columnId);
        }
      })));
      var focusableCell = getFocusableCell(component);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('0, A');
      (0, _test.findTestSubject)(component, 'dataGridRowCell').at(3).simulate('focus');
      focusableCell = getFocusableCell(component);
      expect(focusableCell.length).toEqual(1);
      expect(focusableCell.find('[data-test-subj="cell-content"]').text()).toEqual('1, B');
    });
    it.skip('supports arrow navigation through grids with different interactive cells', function () {
      var component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
        columns: [{
          id: 'A'
        }, {
          id: 'B'
        }, {
          id: 'C'
        }, {
          id: 'D'
        }],
        columnVisibility: {
          visibleColumns: ['A', 'B', 'C', 'D'],
          setVisibleColumns: function setVisibleColumns() {}
        },
        rowCount: 2,
        renderCellValue: function renderCellValue(_ref25) {
          var rowIndex = _ref25.rowIndex,
              columnId = _ref25.columnId;

          if (columnId === 'A') {
            return "".concat(rowIndex, ", A");
          }

          if (columnId === 'B') {
            return _react.default.createElement("button", null, rowIndex, ", B");
          }

          if (columnId === 'C') {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", null, rowIndex), ", ", _react.default.createElement("button", null, "C"));
          }

          if (columnId === 'D') {
            return _react.default.createElement("div", null, rowIndex, ", ", _react.default.createElement("button", null, "D"));
          }

          return 'error';
        }
      })));
      /**
       * Make sure we start from a happy state
       */

      var focusableCell = getFocusableCell(component);
      expect(focusableCell.length).toEqual(1);
      expect(focusableCell.text()).toEqual('0, A');
      focusableCell.simulate('focus').simulate('keydown', {
        keyCode: _services.keyCodes.DOWN
      });
      /**
       * On text only cells, the cell receives focus
       */

      focusableCell = getFocusableCell(component);
      expect(focusableCell.text()).toEqual('1, A'); // make sure we're on the right cell

      expect(focusableCell.getDOMNode()).toBe(document.activeElement);
      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.RIGHT
      });
      /**
       * On cells with 1 interactive item, the interactive item receives focus
       */

      focusableCell = getFocusableCell(component);
      expect(focusableCell.text()).toEqual('1, B');
      expect(focusableCell.find('button').getDOMNode()).toBe(document.activeElement);
      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.RIGHT
      });
      /**
       * On cells with multiple interactive items, the cell receives focus
       */

      focusableCell = getFocusableCell(component);
      expect(focusableCell.text()).toEqual('1, C');
      expect(focusableCell.getDOMNode()).toBe(document.activeElement);
      focusableCell.simulate('keydown', {
        keyCode: _services.keyCodes.RIGHT
      });
      /**
       * On cells with 1 interactive item and non-interactive item(s), the cell receives focus
       */

      focusableCell = getFocusableCell(component);
      expect(focusableCell.text()).toEqual('1, D');
      expect(focusableCell.getDOMNode()).toBe(document.activeElement);
    });
    it.skip('allows user to enter and exit grid navigation',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var component, focusableCell, buttons;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              component = (0, _enzyme.mount)(_react.default.createElement(_.EuiDataGrid, _extends({}, _test.requiredProps, {
                columns: [{
                  id: 'A'
                }, {
                  id: 'B'
                }],
                columnVisibility: {
                  visibleColumns: ['A', 'B'],
                  setVisibleColumns: function setVisibleColumns() {}
                },
                rowCount: 3,
                renderCellValue: function renderCellValue(_ref27) {
                  var rowIndex = _ref27.rowIndex,
                      columnId = _ref27.columnId;
                  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", null, rowIndex), ", ", _react.default.createElement("button", null, columnId));
                }
              })));
              /**
               * Make sure we start from a happy state
               */

              focusableCell = getFocusableCell(component);
              expect(focusableCell.length).toEqual(1);
              expect(focusableCell.text()).toEqual('0, A');
              focusableCell.simulate('focus').simulate('keydown', {
                keyCode: _services.keyCodes.DOWN
              });
              focusableCell = getFocusableCell(component);
              /**
               * Confirm initial state is with grid navigation turn on
               */

              expect(focusableCell.text()).toEqual('1, A');
              expect(focusableCell.getDOMNode()).toBe(document.activeElement);
              expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot();
              /**
               * Disable grid navigation using ENTER
               */

              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.ENTER
              }).simulate('keydown', {
                keyCode: _services.keyCodes.DOWN
              });
              buttons = focusableCell.find('button'); // grid navigation is disabled, location should not move

              expect(buttons.at(0).text()).toEqual('1');
              expect(buttons.at(1).text()).toEqual('A');
              expect(buttons.at(0).getDOMNode()).toBe(document.activeElement); // focus should move to first button

              expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot(); // should prove focus lock is on

              /**
               * Enable grid navigation ESCAPE
               */

              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.ESCAPE
              });
              focusableCell = getFocusableCell(component);
              expect(focusableCell.getDOMNode()).toBe(document.activeElement); // focus should move back to cell

              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.RIGHT
              });
              focusableCell = getFocusableCell(component);
              expect(focusableCell.text()).toEqual('1, B'); // grid navigation is enabled again, check that we can move

              expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot();
              /**
               * Disable grid navigation using F2
               */

              focusableCell = getFocusableCell(component);
              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.F2
              }).simulate('keydown', {
                keyCode: _services.keyCodes.UP
              });
              buttons = focusableCell.find('button'); // grid navigation is disabled, location should not move

              expect(buttons.at(0).text()).toEqual('1');
              expect(buttons.at(1).text()).toEqual('B');
              expect(buttons.at(0).getDOMNode()).toBe(document.activeElement); // focus should move to first button

              expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot(); // should prove focus lock is on

              /**
               * Enable grid navigation using F2
               */

              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.F2
              });
              focusableCell = getFocusableCell(component);
              expect(focusableCell.getDOMNode()).toBe(document.activeElement); // focus should move back to cell

              focusableCell.simulate('keydown', {
                keyCode: _services.keyCodes.UP
              });
              focusableCell = getFocusableCell(component);
              expect(focusableCell.text()).toEqual('0, B'); // grid navigation is enabled again, check that we can move

              expect((0, _test.takeMountedSnapshot)(component)).toMatchSnapshot();

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  });
});