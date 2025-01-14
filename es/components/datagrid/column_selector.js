function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
// @ts-ignore-next-line
import { EuiPopover, EuiPopoverFooter, EuiPopoverTitle } from '../popover';
import { EuiI18n } from '../i18n'; // @ts-ignore-next-line

import { EuiButtonEmpty } from '../button';
import { EuiFlexGroup, EuiFlexItem } from '../flex'; // @ts-ignore-next-line

import { EuiSwitch, EuiFieldText } from '../form';
import { EuiDragDropContext, EuiDraggable, EuiDroppable, euiDragDropReorder } from '../drag_and_drop';
import { EuiIcon } from '../icon';
export var useColumnSelector = function useColumnSelector(availableColumns, columnVisibility) {
  var _useState = useState(function () {
    return availableColumns.map(function (_ref) {
      var id = _ref.id;
      return id;
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      sortedColumns = _useState2[0],
      setSortedColumns = _useState2[1];

  var visibleColumns = columnVisibility.visibleColumns,
      setVisibleColumns = columnVisibility.setVisibleColumns;
  var visibleColumnIds = new Set(visibleColumns);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  function onDragEnd(_ref2) {
    var sourceIndex = _ref2.source.index,
        destination = _ref2.destination;
    var destinationIndex = destination.index;
    var nextSortedColumns = euiDragDropReorder(sortedColumns, sourceIndex, destinationIndex);
    setSortedColumns(nextSortedColumns);
    var nextVisibleColumns = nextSortedColumns.filter(function (id) {
      return visibleColumnIds.has(id);
    });
    setVisibleColumns(nextVisibleColumns);
  }

  var numberOfHiddenFields = availableColumns.length - visibleColumns.length;

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      columnSearchText = _useState6[0],
      setColumnSearchText = _useState6[1];

  var controlBtnClasses = classNames('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': numberOfHiddenFields > 0
  });
  var filteredColumns = sortedColumns.filter(function (id) {
    return id.toLowerCase().indexOf(columnSearchText.toLowerCase()) !== -1;
  });
  var isDragEnabled = columnSearchText.length === 0; // only allow drag-and-drop when not filtering columns

  var columnSelector = React.createElement(EuiPopover, {
    "data-test-subj": "dataGridColumnSelectorPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSelectorPopover",
    button: React.createElement(EuiI18n, {
      tokens: ['euiColumnSelector.button', 'euiColumnSelector.buttonActive'],
      defaults: ['Hide fields', 'fields hidden']
    }, function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          button = _ref4[0],
          buttonActive = _ref4[1];

      return React.createElement(EuiButtonEmpty, {
        size: "xs",
        iconType: "eyeClosed",
        color: "text",
        className: controlBtnClasses,
        "data-test-subj": "dataGridColumnSelectorButton",
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      }, numberOfHiddenFields > 0 ? "".concat(numberOfHiddenFields, " ").concat(buttonActive) : button);
    })
  }, React.createElement("div", null, React.createElement(EuiPopoverTitle, null, React.createElement(EuiI18n, {
    tokens: ['euiColumnSelector.search', 'euiColumnSelector.searchcolumns'],
    defaults: ['Search', 'Search columns']
  }, function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        search = _ref6[0],
        searchcolumns = _ref6[1];

    return React.createElement(EuiFieldText, {
      compressed: true,
      placeholder: search,
      "aria-label": searchcolumns,
      value: columnSearchText,
      onChange: function onChange(e) {
        return setColumnSearchText(e.currentTarget.value);
      }
    });
  })), React.createElement(EuiDragDropContext, {
    onDragEnd: onDragEnd
  }, React.createElement(EuiDroppable, {
    droppableId: "columnOrder",
    isDropDisabled: !isDragEnabled,
    className: "euiDataGridColumnSelector"
  }, React.createElement(Fragment, null, filteredColumns.map(function (id, index) {
    return React.createElement(EuiDraggable, {
      key: id,
      draggableId: id,
      index: index,
      isDragDisabled: !isDragEnabled
    }, function (provided, state) {
      return React.createElement("div", {
        className: "euiDataGridColumnSelector__item ".concat(state.isDragging && 'euiDataGridColumnSelector__item-isDragging')
      }, React.createElement(EuiFlexGroup, {
        gutterSize: "m",
        alignItems: "center"
      }, React.createElement(EuiFlexItem, null, React.createElement(EuiSwitch, {
        name: id,
        label: id,
        checked: visibleColumnIds.has(id),
        compressed: true,
        className: "euiSwitch--mini",
        onChange: function onChange(_ref7) {
          var checked = _ref7.currentTarget.checked;
          var nextVisibleColumns = sortedColumns.filter(function (columnId) {
            return checked ? visibleColumnIds.has(columnId) || id === columnId : visibleColumnIds.has(columnId) && id !== columnId;
          });
          setVisibleColumns(nextVisibleColumns);
        }
      })), isDragEnabled && React.createElement(EuiFlexItem, {
        grow: false
      }, React.createElement(EuiIcon, {
        type: "grab",
        color: "subdued"
      }))));
    });
  }))))), React.createElement(EuiPopoverFooter, null, React.createElement(EuiFlexGroup, {
    gutterSize: "s",
    justifyContent: "spaceBetween"
  }, React.createElement(EuiFlexItem, null, React.createElement(EuiButtonEmpty, {
    size: "xs",
    flush: "left",
    onClick: function onClick() {
      return setVisibleColumns(sortedColumns);
    }
  }, React.createElement(EuiI18n, {
    token: "euiColumnSelector.selectAll",
    default: "Show all"
  }))), React.createElement(EuiFlexItem, null, React.createElement(EuiButtonEmpty, {
    size: "xs",
    flush: "right",
    onClick: function onClick() {
      return setVisibleColumns([]);
    }
  }, React.createElement(EuiI18n, {
    token: "euiColumnSelector.hideAll",
    default: "Hide all"
  }))))));
  var orderedVisibleColumns = visibleColumns.map(function (columnId) {
    return availableColumns.find(function (_ref8) {
      var id = _ref8.id;
      return id === columnId;
    });
  } // cast to avoid `undefined`, it filters those out next
  ).filter(function (column) {
    return column != null;
  });
  return [columnSelector, orderedVisibleColumns];
};