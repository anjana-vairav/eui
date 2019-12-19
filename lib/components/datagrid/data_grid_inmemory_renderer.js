"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGridInMemoryRenderer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _react2 = require("../../services/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {}

function getElementText(element) {
  return 'innerText' in element ? element.innerText : // TS thinks element.innerText always exists, however it doesn't in jest/jsdom enviornment
  // @ts-ignore-next-line
  element.textContent || undefined;
}

var ObservedCell = function ObservedCell(_ref) {
  var renderCellValue = _ref.renderCellValue,
      i = _ref.i,
      column = _ref.column,
      onCellRender = _ref.onCellRender,
      isExpandable = _ref.isExpandable;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      ref = _useState2[0],
      setRef = _useState2[1];

  (0, _react.useEffect)(function () {
    if (ref) {
      // this is part of React's component lifecycle, onCellRender->setState are automatically batched
      onCellRender(i, column, getElementText(ref));
      var observer = new MutationObserver(function () {
        // onMutation callbacks aren't in the component lifecycle, intentionally batch any effects
        (0, _react2.enqueueStateChange)(onCellRender.bind(null, i, column, getElementText(ref)));
      });
      observer.observe(ref, {
        characterData: true,
        subtree: true,
        attributes: true,
        childList: true
      });
      return function () {
        observer.disconnect();
      };
    }
  }, [column, i, onCellRender, ref]);
  var CellElement = renderCellValue;
  return _react.default.createElement("div", {
    ref: setRef
  }, _react.default.createElement(CellElement, {
    rowIndex: i,
    columnId: column.id,
    setCellProps: noop,
    isExpandable: isExpandable,
    isExpanded: false,
    isDetails: false
  }));
};

ObservedCell.propTypes = {
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,
  onCellRender: _propTypes.default.func.isRequired,
  i: _propTypes.default.number.isRequired,
  column: _propTypes.default.shape({
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
  }).isRequired,
  isExpandable: _propTypes.default.bool.isRequired
};

var EuiDataGridInMemoryRenderer = function EuiDataGridInMemoryRenderer(_ref2) {
  var inMemory = _ref2.inMemory,
      columns = _ref2.columns,
      rowCount = _ref2.rowCount,
      renderCellValue = _ref2.renderCellValue,
      onCellRender = _ref2.onCellRender;

  var _useState3 = (0, _react.useState)(function () {
    return document.createDocumentFragment();
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      documentFragment = _useState4[0];

  var rows = (0, _react.useMemo)(function () {
    var rows = [];

    var _loop = function _loop(_i2) {
      rows.push(_react.default.createElement(_react.Fragment, {
        key: _i2
      }, columns.map(function (column) {
        var skipThisColumn = inMemory.skipColumns && inMemory.skipColumns.indexOf(column.id) !== -1;

        if (skipThisColumn) {
          return null;
        }

        var isExpandable = column.isExpandable !== undefined ? column.isExpandable : true;
        return _react.default.createElement(ObservedCell, {
          key: column.id,
          i: _i2,
          renderCellValue: renderCellValue,
          column: column,
          onCellRender: onCellRender,
          isExpandable: isExpandable
        });
      }).filter(function (cell) {
        return cell != null;
      })));
    };

    for (var _i2 = 0; _i2 < rowCount; _i2++) {
      _loop(_i2);
    }

    return rows;
  }, [rowCount, columns, inMemory.skipColumns, renderCellValue, onCellRender]);
  return (0, _reactDom.createPortal)(_react.default.createElement(_react.Fragment, null, rows), documentFragment);
};

exports.EuiDataGridInMemoryRenderer = EuiDataGridInMemoryRenderer;
EuiDataGridInMemoryRenderer.propTypes = {
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
  }).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    display: _propTypes.default.node,
    schema: _propTypes.default.string,
    isExpandable: _propTypes.default.bool
  }).isRequired).isRequired,
  rowCount: _propTypes.default.number.isRequired,
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,
  onCellRender: _propTypes.default.func.isRequired
};