function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { forwardRef, useRef, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';
import tabbable from 'tabbable';
import { EuiDataGridColumnResizer } from './data_grid_column_resizer';
import { htmlIdGenerator } from '../../services/accessibility';
import { EuiScreenReaderOnly } from '../accessibility';
import { keyCodes } from '../../services';

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
      screenReaderId = htmlIdGenerator()();
      ariaProps['aria-describedby'] = screenReaderId;
    }
  }

  var columnType = schema[id] ? schema[id].columnType : null;
  var classes = classnames('euiDataGridHeaderCell', _defineProperty({}, "euiDataGridHeaderCell--".concat(columnType), columnType));
  var headerRef = useRef(null);
  var isFocused = focusedCell[0] === index && focusedCell[1] === -1;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCellEntered = _useState2[0],
      setIsCellEntered = _useState2[1];

  useEffect(function () {
    if (headerRef.current) {
      var enableInteractives = function enableInteractives() {
        var interactiveElements = headerRef.current.querySelectorAll('[data-euigrid-tab-managed]');

        for (var i = 0; i < interactiveElements.length; i++) {
          interactiveElements[i].setAttribute('tabIndex', '0');
        }
      };

      var disableInteractives = function disableInteractives() {
        var tababbles = tabbable(headerRef.current);

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
        var tabbables = tabbable(headerRef.current);

        if (tabbables.length > 0) {
          tabbables[0].focus();
        }
      } else {
        disableInteractives();
      }
    }
  }, [isCellEntered]);
  useEffect(function () {
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
          case keyCodes.ENTER:
            {
              e.preventDefault();
              setIsCellEntered(true);
              break;
            }

          case keyCodes.ESCAPE:
            {
              e.preventDefault(); // move focus to cell

              setIsCellEntered(false);
              headerRef.current.focus();
              break;
            }

          case keyCodes.F2:
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
  return React.createElement("div", _extends({
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
  }), width ? React.createElement(EuiDataGridColumnResizer, {
    columnId: id,
    columnWidth: width,
    setColumnWidth: setColumnWidth
  }) : null, React.createElement("div", {
    className: "euiDataGridHeaderCell__content"
  }, display || id), sorting && sorting.columns.length >= 2 && React.createElement(EuiScreenReaderOnly, null, React.createElement("div", {
    id: screenReaderId
  }, sortString)));
};

EuiDataGridHeaderCell.propTypes = {
  column: PropTypes.shape({
    /**
       * The unique identifier for this column
       */
    id: PropTypes.string.isRequired,

    /**
       * A `ReactNode` used when rendering the column header. When providing complicated content, please make sure to utilize CSS to respect truncation as space allows. Check the docs example.
       */
    display: PropTypes.node,

    /**
       * A Schema to use for the column. Built-in values are ['boolean', 'currency', 'datetime', 'numeric', 'json'] but can be expanded by defining your own #EuiDataGrid `schemaDetectors` (for in-memory detection). In general, it is advised to pass in a value here when you are sure of the schema ahead of time, so that you don't need to rely on the automatic detection.
       */
    schema: PropTypes.string,

    /**
       * Defauls to true. Defines shether or not the column's cells can be expanded with a popup onClick / keydown.
       */
    isExpandable: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired
};
var EuiDataGridHeaderRow = forwardRef(function (props, ref) {
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

  var classes = classnames('euiDataGridHeader', className);
  var dataTestSubj = classnames('dataGridHeader', _dataTestSubj);
  return React.createElement("div", _extends({
    role: "row",
    ref: ref,
    className: classes,
    "data-test-subj": dataTestSubj
  }, rest), columns.map(function (column, index) {
    return React.createElement(EuiDataGridHeaderCell, {
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
EuiDataGridHeaderRow.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    display: PropTypes.node,
    schema: PropTypes.string,
    isExpandable: PropTypes.bool
  }).isRequired).isRequired,
  columnWidths: PropTypes.shape({}).isRequired,
  schema: PropTypes.shape({}).isRequired,
  defaultColumnWidth: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.oneOf([null])]),
  setColumnWidth: PropTypes.func.isRequired,
  sorting: PropTypes.shape({
    /**
       * A function that receives updated column sort details in response to user interactions in the toolbar controls
       */
    onSort: PropTypes.func.isRequired,

    /**
       * An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`
       */
    columns: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      direction: PropTypes.oneOf(["asc", "desc"]).isRequired
    }).isRequired).isRequired
  }),
  focusedCell: PropTypes.any.isRequired,
  setFocusedCell: PropTypes.func.isRequired,
  headerIsInteractive: PropTypes.bool.isRequired
};
export { EuiDataGridHeaderRow };