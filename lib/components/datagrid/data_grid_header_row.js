"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGridHeaderRow = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _data_grid_column_resizer = require("./data_grid_column_resizer");

var _accessibility = require("../../services/accessibility");

var _accessibility2 = require("../accessibility");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiDataGridHeaderCell = function EuiDataGridHeaderCell(props) {
  var column = props.column,
      index = props.index,
      columnWidths = props.columnWidths,
      schema = props.schema,
      defaultColumnWidth = props.defaultColumnWidth,
      setColumnWidth = props.setColumnWidth,
      sorting = props.sorting,
      focusedCell = props.focusedCell,
      setFocusedCell = props.setFocusedCell,
      headerIsInteractive = props.headerIsInteractive;
  var id = column.id,
      display = column.display;
  var width = columnWidths[id] || defaultColumnWidth;
  var ariaProps = {};
  var screenReaderId;
  var sortString;

  if (sorting) {
    var sortedColumnIds = new Set(sorting.columns.map(function (_ref) {
      var id = _ref.id;
      return id;
    }));

    if (sorting.columns.length === 1 && sortedColumnIds.has(id)) {
      var sortDirection = sorting.columns[0].direction;
      var sortValue = 'other';

      if (sortDirection === 'asc') {
        sortValue = 'ascending';
      } else if (sortDirection === 'desc') {
        sortValue = 'descending';
      }

      ariaProps['aria-sort'] = sortValue;
    } else if (sorting.columns.length >= 2 && sortedColumnIds.has(id)) {
      sortString = sorting.columns.map(function (col) {
        return "Sorted by ".concat(col.id, " ").concat(col.direction);
      }).join(' then ');
      screenReaderId = (0, _accessibility.htmlIdGenerator)()();
      ariaProps['aria-describedby'] = screenReaderId;
    }
  }

  var columnType = schema[id] ? schema[id].columnType : null;
  var classes = (0, _classnames2.default)('euiDataGridHeaderCell', _defineProperty({}, "euiDataGridHeaderCell--".concat(columnType), columnType));
  var headerRef = (0, _react.useRef)(null);
  var isFocused = focusedCell[0] === index && focusedCell[1] === -1;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCellEntered = _useState2[0],
      setIsCellEntered = _useState2[1];

  (0, _react.useEffect)(function () {
    if (headerRef.current) {
      var enableInteractives = function enableInteractives() {
        var interactiveElements = headerRef.current.querySelectorAll('[data-euigrid-tab-managed]');

        for (var i = 0; i < interactiveElements.length; i++) {
          interactiveElements[i].setAttribute('tabIndex', '0');
        }
      };

      var disableInteractives = function disableInteractives() {
        var tababbles = (0, _tabbable.default)(headerRef.current);

        if (tababbles.length > 1) {
          console.warn("EuiDataGridHeaderCell expects at most 1 tabbable element, ".concat(tababbles.length, " found instead"));
        }

        for (var i = 0; i < tababbles.length; i++) {
          var element = tababbles[i];
          element.setAttribute('data-euigrid-tab-managed', 'true');
          element.setAttribute('tabIndex', '-1');
        }
      };

      if (isCellEntered) {
        enableInteractives();
        var tabbables = (0, _tabbable.default)(headerRef.current);

        if (tabbables.length > 0) {
          tabbables[0].focus();
        }
      } else {
        disableInteractives();
      }
    }
  }, [isCellEntered]);
  (0, _react.useEffect)(function () {
    if (headerRef.current) {
      // focusin bubbles while focus does not, and this needs to react to children gaining focus
      var onFocusIn = function onFocusIn(e) {
        if (headerIsInteractive === false) {
          // header is not interactive, avoid focusing
          requestAnimationFrame(function () {
            return headerRef.current.blur();
          });
          e.preventDefault();
          return false;
        } else {
          // take the focus
          setFocusedCell([index, -1]);
        }
      }; // focusout bubbles while blur does not, and this needs to react to the children losing focus


      var onFocusOut = function onFocusOut() {
        // wait for the next element to receive focus, then update interactives' state
        requestAnimationFrame(function () {
          if (headerRef.current) {
            if (headerRef.current.contains(document.activeElement) === false) {
              setIsCellEntered(false);
            }
          }
        });
      };

      var onKeyUp = function onKeyUp(e) {
        switch (e.keyCode) {
          case _services.keyCodes.ENTER:
            {
              e.preventDefault();
              setIsCellEntered(true);
              break;
            }

          case _services.keyCodes.ESCAPE:
            {
              e.preventDefault(); // move focus to cell

              setIsCellEntered(false);
              headerRef.current.focus();
              break;
            }

          case _services.keyCodes.F2:
            {
              e.preventDefault();

              if (document.activeElement === headerRef.current) {
                // move focus into cell's interactives
                setIsCellEntered(true);
              } else {
                // move focus to cell
                setIsCellEntered(false);
                headerRef.current.focus();
              }

              break;
            }
        }
      };

      if (isFocused) {
        var interactives = headerRef.current.querySelectorAll('[data-euigrid-tab-managed]');

        if (interactives.length === 1) {
          setIsCellEntered(true);
        } else {
          headerRef.current.focus();
        }
      } else {
        setIsCellEntered(false);
      }

      var headerNode = headerRef.current; // @ts-ignore-next line TS doesn't have focusin

      headerNode.addEventListener('focusin', onFocusIn);
      headerNode.addEventListener('focusout', onFocusOut);
      headerNode.addEventListener('keyup', onKeyUp);
      return function () {
        // @ts-ignore-next line TS doesn't have focusin
        headerNode.removeEventListener('focusin', onFocusIn);
        headerNode.removeEventListener('focusout', onFocusOut);
        headerNode.removeEventListener('keyup', onKeyUp);
      };
    }
  }, [headerIsInteractive, isFocused, setIsCellEntered, setFocusedCell, index]);
  return _react.default.createElement("div", _extends({
    role: "columnheader"
  }, ariaProps, {
    key: id,
    ref: headerRef,
    tabIndex: isFocused ? 0 : -1,
    className: classes,
    "data-test-subj": "dataGridHeaderCell-".concat(id),
    style: width != null ? {
      width: "".concat(width, "px")
    } : {}
  }), width ? _react.default.createElement(_data_grid_column_resizer.EuiDataGridColumnResizer, {
    columnId: id,
    columnWidth: width,
    setColumnWidth: setColumnWidth
  }) : null, _react.default.createElement("div", {
    className: "euiDataGridHeaderCell__content"
  }, display || id), sorting && sorting.columns.length >= 2 && _react.default.createElement(_accessibility2.EuiScreenReaderOnly, null, _react.default.createElement("div", {
    id: screenReaderId
  }, sortString)));
};

EuiDataGridHeaderCell.propTypes = {
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
  index: _propTypes.default.number.isRequired
};
var EuiDataGridHeaderRow = (0, _react.forwardRef)(function (props, ref) {
  var columns = props.columns,
      schema = props.schema,
      columnWidths = props.columnWidths,
      defaultColumnWidth = props.defaultColumnWidth,
      className = props.className,
      setColumnWidth = props.setColumnWidth,
      sorting = props.sorting,
      focusedCell = props.focusedCell,
      setFocusedCell = props.setFocusedCell,
      headerIsInteractive = props.headerIsInteractive,
      _dataTestSubj = props['data-test-subj'],
      rest = _objectWithoutProperties(props, ["columns", "schema", "columnWidths", "defaultColumnWidth", "className", "setColumnWidth", "sorting", "focusedCell", "setFocusedCell", "headerIsInteractive", "data-test-subj"]);

  var classes = (0, _classnames2.default)('euiDataGridHeader', className);
  var dataTestSubj = (0, _classnames2.default)('dataGridHeader', _dataTestSubj);
  return _react.default.createElement("div", _extends({
    role: "row",
    ref: ref,
    className: classes,
    "data-test-subj": dataTestSubj
  }, rest), columns.map(function (column, index) {
    return _react.default.createElement(EuiDataGridHeaderCell, {
      key: column.id,
      column: column,
      index: index,
      columnWidths: columnWidths,
      focusedCell: focusedCell,
      setFocusedCell: setFocusedCell,
      schema: schema,
      setColumnWidth: setColumnWidth,
      defaultColumnWidth: defaultColumnWidth,
      sorting: sorting,
      headerIsInteractive: headerIsInteractive
    });
  }));
});
exports.EuiDataGridHeaderRow = EuiDataGridHeaderRow;
EuiDataGridHeaderRow.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    display: _propTypes.default.node,
    schema: _propTypes.default.string,
    isExpandable: _propTypes.default.bool
  }).isRequired).isRequired,
  columnWidths: _propTypes.default.shape({}).isRequired,
  schema: _propTypes.default.shape({}).isRequired,
  defaultColumnWidth: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.oneOf([null])]),
  setColumnWidth: _propTypes.default.func.isRequired,
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
  focusedCell: _propTypes.default.any.isRequired,
  setFocusedCell: _propTypes.default.func.isRequired,
  headerIsInteractive: _propTypes.default.bool.isRequired
};