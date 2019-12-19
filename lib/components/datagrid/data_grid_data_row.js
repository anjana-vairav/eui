"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGridDataRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _data_grid_cell = require("./data_grid_cell");

var _text = require("../text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DefaultColumnFormatter = function DefaultColumnFormatter(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_text.EuiText, null, children);
};

var EuiDataGridDataRow = function EuiDataGridDataRow(props) {
  var columns = props.columns,
      schema = props.schema,
      popoverContents = props.popoverContents,
      columnWidths = props.columnWidths,
      defaultColumnWidth = props.defaultColumnWidth,
      className = props.className,
      renderCellValue = props.renderCellValue,
      rowIndex = props.rowIndex,
      focusedCell = props.focusedCell,
      onCellFocus = props.onCellFocus,
      interactiveCellId = props.interactiveCellId,
      _dataTestSubj = props['data-test-subj'],
      visibleRowIndex = props.visibleRowIndex,
      rest = _objectWithoutProperties(props, ["columns", "schema", "popoverContents", "columnWidths", "defaultColumnWidth", "className", "renderCellValue", "rowIndex", "focusedCell", "onCellFocus", "interactiveCellId", "data-test-subj", "visibleRowIndex"]);

  var classes = (0, _classnames.default)('euiDataGridRow', className);
  var dataTestSubj = (0, _classnames.default)('dataGridRow', _dataTestSubj);
  return _react.default.createElement("div", _extends({
    role: "row",
    className: classes,
    "data-test-subj": dataTestSubj
  }, rest), columns.map(function (props, i) {
    var id = props.id;
    var columnType = schema[id] ? schema[id].columnType : null;
    var isExpandable = props.isExpandable !== undefined ? props.isExpandable : true;
    var popoverContent = popoverContents[columnType] || DefaultColumnFormatter;
    var width = columnWidths[id] || defaultColumnWidth;
    var isFocused = focusedCell[0] === i && focusedCell[1] === visibleRowIndex;
    return _react.default.createElement(_data_grid_cell.EuiDataGridCell, {
      key: "".concat(id, "-").concat(rowIndex),
      rowIndex: rowIndex,
      visibleRowIndex: visibleRowIndex,
      colIndex: i,
      columnId: id,
      columnType: columnType,
      popoverContent: popoverContent,
      width: width || undefined,
      renderCellValue: renderCellValue,
      onCellFocus: onCellFocus,
      isFocused: isFocused,
      interactiveCellId: interactiveCellId,
      isExpandable: isExpandable
    });
  }));
};

exports.EuiDataGridDataRow = EuiDataGridDataRow;
EuiDataGridDataRow.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  rowIndex: _propTypes.default.number.isRequired,
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
  schema: _propTypes.default.shape({}).isRequired,
  popoverContents: _propTypes.default.shape({}).isRequired,
  columnWidths: _propTypes.default.shape({}).isRequired,
  defaultColumnWidth: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.oneOf([null])]),
  focusedCell: _propTypes.default.any.isRequired,
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,
  onCellFocus: _propTypes.default.func.isRequired,
  interactiveCellId: _propTypes.default.string.isRequired,
  visibleRowIndex: _propTypes.default.number.isRequired
};
EuiDataGridDataRow.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDataGridDataRow",
  "props": {
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
    "rowIndex": {
      "type": {
        "name": "number"
      },
      "required": true,
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
      "description": ""
    },
    "schema": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": true,
      "description": ""
    },
    "popoverContents": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": true,
      "description": ""
    },
    "columnWidths": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": true,
      "description": ""
    },
    "defaultColumnWidth": {
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "enum",
          "value": [{
            "value": "null",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": ""
    },
    "focusedCell": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
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
      "description": ""
    },
    "onCellFocus": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "interactiveCellId": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "visibleRowIndex": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    }
  }
};