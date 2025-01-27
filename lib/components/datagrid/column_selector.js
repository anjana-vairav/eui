"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColumnSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popover = require("../popover");

var _i18n = require("../i18n");

var _button = require("../button");

var _flex = require("../flex");

var _form = require("../form");

var _drag_and_drop = require("../drag_and_drop");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useColumnSelector = function useColumnSelector(availableColumns, columnVisibility) {
  var _useState = (0, _react.useState)(function () {
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

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  function onDragEnd(_ref2) {
    var sourceIndex = _ref2.source.index,
        destination = _ref2.destination;
    var destinationIndex = destination.index;
    var nextSortedColumns = (0, _drag_and_drop.euiDragDropReorder)(sortedColumns, sourceIndex, destinationIndex);
    setSortedColumns(nextSortedColumns);
    var nextVisibleColumns = nextSortedColumns.filter(function (id) {
      return visibleColumnIds.has(id);
    });
    setVisibleColumns(nextVisibleColumns);
  }

  var numberOfHiddenFields = availableColumns.length - visibleColumns.length;

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      columnSearchText = _useState6[0],
      setColumnSearchText = _useState6[1];

  var controlBtnClasses = (0, _classnames.default)('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': numberOfHiddenFields > 0
  });
  var filteredColumns = sortedColumns.filter(function (id) {
    return id.toLowerCase().indexOf(columnSearchText.toLowerCase()) !== -1;
  });
  var isDragEnabled = columnSearchText.length === 0; // only allow drag-and-drop when not filtering columns

  var columnSelector = _react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridColumnSelectorPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSelectorPopover",
    button: _react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColumnSelector.button', 'euiColumnSelector.buttonActive'],
      defaults: ['Hide fields', 'fields hidden']
    }, function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          button = _ref4[0],
          buttonActive = _ref4[1];

      return _react.default.createElement(_button.EuiButtonEmpty, {
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
  }, _react.default.createElement("div", null, _react.default.createElement(_popover.EuiPopoverTitle, null, _react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiColumnSelector.search', 'euiColumnSelector.searchcolumns'],
    defaults: ['Search', 'Search columns']
  }, function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        search = _ref6[0],
        searchcolumns = _ref6[1];

    return _react.default.createElement(_form.EuiFieldText, {
      compressed: true,
      placeholder: search,
      "aria-label": searchcolumns,
      value: columnSearchText,
      onChange: function onChange(e) {
        return setColumnSearchText(e.currentTarget.value);
      }
    });
  })), _react.default.createElement(_drag_and_drop.EuiDragDropContext, {
    onDragEnd: onDragEnd
  }, _react.default.createElement(_drag_and_drop.EuiDroppable, {
    droppableId: "columnOrder",
    isDropDisabled: !isDragEnabled,
    className: "euiDataGridColumnSelector"
  }, _react.default.createElement(_react.Fragment, null, filteredColumns.map(function (id, index) {
    return _react.default.createElement(_drag_and_drop.EuiDraggable, {
      key: id,
      draggableId: id,
      index: index,
      isDragDisabled: !isDragEnabled
    }, function (provided, state) {
      return _react.default.createElement("div", {
        className: "euiDataGridColumnSelector__item ".concat(state.isDragging && 'euiDataGridColumnSelector__item-isDragging')
      }, _react.default.createElement(_flex.EuiFlexGroup, {
        gutterSize: "m",
        alignItems: "center"
      }, _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_form.EuiSwitch, {
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
      })), isDragEnabled && _react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, _react.default.createElement(_icon.EuiIcon, {
        type: "grab",
        color: "subdued"
      }))));
    });
  }))))), _react.default.createElement(_popover.EuiPopoverFooter, null, _react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "s",
    justifyContent: "spaceBetween"
  }, _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_button.EuiButtonEmpty, {
    size: "xs",
    flush: "left",
    onClick: function onClick() {
      return setVisibleColumns(sortedColumns);
    }
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSelector.selectAll",
    default: "Show all"
  }))), _react.default.createElement(_flex.EuiFlexItem, null, _react.default.createElement(_button.EuiButtonEmpty, {
    size: "xs",
    flush: "right",
    onClick: function onClick() {
      return setVisibleColumns([]);
    }
  }, _react.default.createElement(_i18n.EuiI18n, {
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

exports.useColumnSelector = useColumnSelector;