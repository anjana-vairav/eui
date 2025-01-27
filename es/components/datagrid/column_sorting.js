function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames';
import { EuiPopover, EuiPopoverFooter } from '../popover';
import { EuiI18n } from '../i18n';
import { EuiText } from '../text';
import { EuiButtonEmpty } from '../button';
import { EuiFlexGroup, EuiFlexItem } from '../flex';
import { EuiDragDropContext, EuiDroppable, euiDragDropReorder } from '../drag_and_drop';
import { EuiIcon } from '../icon';
import { EuiDataGridColumnSortingDraggable } from './column_sorting_draggable';
import { getDetailsForSchema } from './data_grid_schema';
import { palettes } from '../../services/color/eui_palettes';
export var useColumnSorting = function useColumnSorting(columns, sorting, schema, schemaDetectors) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      avilableColumnsisOpen = _useState4[0],
      setAvailableColumnsIsOpen = _useState4[1];

  var defaultSchemaColor = palettes.euiPaletteColorBlind.colors[4]; // prune any non-existant/hidden columns from sorting

  useEffect(function () {
    if (sorting) {
      var nextSortingColumns = [];
      var availableColumnIds = new Set(columns.map(function (_ref) {
        var id = _ref.id;
        return id;
      }));

      for (var i = 0; i < sorting.columns.length; i++) {
        var column = sorting.columns[i];

        if (availableColumnIds.has(column.id)) {
          nextSortingColumns.push(column);
        }
      } // if the column array lengths differ then the sorting columns have been pruned


      if (nextSortingColumns.length !== sorting.columns.length) {
        sorting.onSort(nextSortingColumns);
      }
    }
  }, [columns, sorting]);
  if (sorting == null) return [null];
  var activeColumnIds = new Set(sorting.columns.map(function (_ref2) {
    var id = _ref2.id;
    return id;
  }));

  var _columns$reduce = columns.reduce(function (acc, column) {
    if (activeColumnIds.has(column.id)) {
      acc.activeColumns.push(column);
    } else {
      acc.inactiveColumns.push(column);
    }

    return acc;
  }, {
    activeColumns: [],
    inactiveColumns: []
  }),
      inactiveColumns = _columns$reduce.inactiveColumns;

  function onDragEnd(_ref3) {
    var sourceIndex = _ref3.source.index,
        destination = _ref3.destination;
    var destinationIndex = destination.index;
    var nextColumns = euiDragDropReorder(sorting.columns, sourceIndex, destinationIndex);
    sorting.onSort(nextColumns);
  }

  var controlBtnClasses = classNames('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': sorting.columns.length > 0
  });
  var numberOfSortedFields = sorting.columns.length;
  var columnSorting = React.createElement(EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSortingPopover",
    button: React.createElement(EuiI18n, {
      tokens: ['euiColumnSorting.button', 'euiColumnSorting.buttonActive'],
      defaults: ['Sort fields', 'fields sorted']
    }, function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          button = _ref5[0],
          buttonActive = _ref5[1];

      return React.createElement(EuiButtonEmpty, {
        size: "xs",
        iconType: "sortable",
        color: "text",
        className: controlBtnClasses,
        "data-test-subj": "dataGridColumnSortingButton",
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      }, numberOfSortedFields > 0 ? "".concat(numberOfSortedFields, " ").concat(buttonActive) : button);
    })
  }, sorting.columns.length > 0 ? React.createElement("div", {
    role: "region",
    "aria-live": "assertive"
  }, React.createElement(EuiDragDropContext, {
    onDragEnd: onDragEnd
  }, React.createElement(EuiDroppable, {
    droppableId: "columnSorting",
    className: "euiDataGridColumnSorting"
  }, React.createElement(Fragment, null, sorting.columns.map(function (_ref6, index) {
    var id = _ref6.id,
        direction = _ref6.direction;
    return React.createElement(EuiDataGridColumnSortingDraggable, {
      key: id,
      id: id,
      direction: direction,
      index: index,
      sorting: sorting,
      schema: schema,
      schemaDetectors: schemaDetectors,
      defaultSchemaColor: defaultSchemaColor
    });
  }))))) : React.createElement(EuiText, {
    size: "s",
    color: "subdued"
  }, React.createElement("p", {
    role: "alert"
  }, React.createElement(EuiI18n, {
    token: "euiColumnSorting.emptySorting",
    default: "Currently no fields are sorted"
  }))), (inactiveColumns.length > 0 || sorting.columns.length > 0) && React.createElement(EuiPopoverFooter, null, React.createElement(EuiFlexGroup, {
    gutterSize: "m",
    justifyContent: "spaceBetween",
    responsive: false
  }, React.createElement(EuiFlexItem, {
    grow: false
  }, inactiveColumns.length > 0 && React.createElement(EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopoverColumnSelection",
    isOpen: avilableColumnsisOpen,
    closePopover: function closePopover() {
      return setAvailableColumnsIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    button: React.createElement(EuiButtonEmpty, {
      size: "xs",
      flush: "left",
      iconType: "arrowDown",
      iconSide: "right",
      onClick: function onClick() {
        return setAvailableColumnsIsOpen(!avilableColumnsisOpen);
      }
    }, React.createElement(EuiI18n, {
      token: "euiColumnSorting.pickFields",
      default: "Pick fields to sort by"
    }))
  }, React.createElement(EuiI18n, {
    token: "euiColumnSorting.sortFieldAriaLabel",
    default: "Sort by: "
  }, function (sortFieldAriaLabel) {
    return React.createElement("div", {
      className: "euiDataGridColumnSorting__fieldList",
      role: "listbox"
    }, inactiveColumns.map(function (_ref7) {
      var id = _ref7.id;
      return React.createElement("button", {
        key: id,
        className: "euiDataGridColumnSorting__field",
        "aria-label": "".concat(sortFieldAriaLabel, " ").concat(id),
        role: "option",
        "aria-selected": "false",
        "data-test-subj": "dataGridColumnSortingPopoverColumnSelection-".concat(id),
        onClick: function onClick() {
          var nextColumns = _toConsumableArray(sorting.columns);

          nextColumns.push({
            id: id,
            direction: 'asc'
          });
          sorting.onSort(nextColumns);
        }
      }, React.createElement(EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        component: "span"
      }, React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiIcon, {
        color: schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).color : defaultSchemaColor,
        type: schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).icon : 'string'
      })), React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiText, {
        size: "xs"
      }, React.createElement("span", null, id)))));
    }));
  }))), sorting.columns.length > 0 ? React.createElement(EuiFlexItem, {
    grow: false
  }, React.createElement(EuiButtonEmpty, {
    size: "xs",
    flush: "right",
    onClick: function onClick() {
      return sorting.onSort([]);
    }
  }, React.createElement(EuiI18n, {
    token: "euiColumnSorting.clearAll",
    default: "Clear sorting"
  }))) : null)));
  return columnSorting;
};