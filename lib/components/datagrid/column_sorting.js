"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColumnSorting = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popover = require("../popover");

var _i18n = require("../i18n");

var _text = require("../text");

var _button = require("../button");

var _flex = require("../flex");

var _drag_and_drop = require("../drag_and_drop");

var _icon = require("../icon");

var _column_sorting_draggable = require("./column_sorting_draggable");

var _data_grid_schema = require("./data_grid_schema");

var _eui_palettes = require("../../services/color/eui_palettes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useColumnSorting = function useColumnSorting(columns, sorting, schema, schemaDetectors) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      avilableColumnsisOpen = _useState4[0],
      setAvailableColumnsIsOpen = _useState4[1];

  var defaultSchemaColor = _eui_palettes.palettes.euiPaletteColorBlind.colors[4]; // prune any non-existant/hidden columns from sorting

  (0, _react.useEffect)(function () {
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
    var nextColumns = (0, _drag_and_drop.euiDragDropReorder)(sorting.columns, sourceIndex, destinationIndex);
    sorting.onSort(nextColumns);
  }

  var controlBtnClasses = (0, _classnames.default)('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': sorting.columns.length > 0
  });
  var numberOfSortedFields = sorting.columns.length;

  var columnSorting = _react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSortingPopover",
    button: _react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColumnSorting.button', 'euiColumnSorting.buttonActive'],
      defaults: ['Sort fields', 'fields sorted']
    }, function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          button = _ref5[0],
          buttonActive = _ref5[1];

      return _react.default.createElement(_button.EuiButtonEmpty, {
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
  }, sorting.columns.length > 0 ? _react.default.createElement("div", {
    role: "region",
    "aria-live": "assertive"
  }, _react.default.createElement(_drag_and_drop.EuiDragDropContext, {
    onDragEnd: onDragEnd
  }, _react.default.createElement(_drag_and_drop.EuiDroppable, {
    droppableId: "columnSorting",
    className: "euiDataGridColumnSorting"
  }, _react.default.createElement(_react.Fragment, null, sorting.columns.map(function (_ref6, index) {
    var id = _ref6.id,
        direction = _ref6.direction;
    return _react.default.createElement(_column_sorting_draggable.EuiDataGridColumnSortingDraggable, {
      key: id,
      id: id,
      direction: direction,
      index: index,
      sorting: sorting,
      schema: schema,
      schemaDetectors: schemaDetectors,
      defaultSchemaColor: defaultSchemaColor
    });
  }))))) : _react.default.createElement(_text.EuiText, {
    size: "s",
    color: "subdued"
  }, _react.default.createElement("p", {
    role: "alert"
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.emptySorting",
    default: "Currently no fields are sorted"
  }))), (inactiveColumns.length > 0 || sorting.columns.length > 0) && _react.default.createElement(_popover.EuiPopoverFooter, null, _react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "m",
    justifyContent: "spaceBetween",
    responsive: false
  }, _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, inactiveColumns.length > 0 && _react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopoverColumnSelection",
    isOpen: avilableColumnsisOpen,
    closePopover: function closePopover() {
      return setAvailableColumnsIsOpen(false);
    },
    anchorPosition: "downLeft",
    ownFocus: true,
    panelPaddingSize: "s",
    button: _react.default.createElement(_button.EuiButtonEmpty, {
      size: "xs",
      flush: "left",
      iconType: "arrowDown",
      iconSide: "right",
      onClick: function onClick() {
        return setAvailableColumnsIsOpen(!avilableColumnsisOpen);
      }
    }, _react.default.createElement(_i18n.EuiI18n, {
      token: "euiColumnSorting.pickFields",
      default: "Pick fields to sort by"
    }))
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.sortFieldAriaLabel",
    default: "Sort by: "
  }, function (sortFieldAriaLabel) {
    return _react.default.createElement("div", {
      className: "euiDataGridColumnSorting__fieldList",
      role: "listbox"
    }, inactiveColumns.map(function (_ref7) {
      var id = _ref7.id;
      return _react.default.createElement("button", {
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
      }, _react.default.createElement(_flex.EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        component: "span"
      }, _react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, _react.default.createElement(_icon.EuiIcon, {
        color: schema.hasOwnProperty(id) && schema[id].columnType != null ? (0, _data_grid_schema.getDetailsForSchema)(schemaDetectors, schema[id].columnType).color : defaultSchemaColor,
        type: schema.hasOwnProperty(id) && schema[id].columnType != null ? (0, _data_grid_schema.getDetailsForSchema)(schemaDetectors, schema[id].columnType).icon : 'string'
      })), _react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, _react.default.createElement(_text.EuiText, {
        size: "xs"
      }, _react.default.createElement("span", null, id)))));
    }));
  }))), sorting.columns.length > 0 ? _react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, _react.default.createElement(_button.EuiButtonEmpty, {
    size: "xs",
    flush: "right",
    onClick: function onClick() {
      return sorting.onSort([]);
    }
  }, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.clearAll",
    default: "Clear sorting"
  }))) : null)));

  return columnSorting;
};

exports.useColumnSorting = useColumnSorting;