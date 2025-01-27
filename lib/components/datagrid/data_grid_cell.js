"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGridCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _popover = require("../popover");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _button = require("../button");

var _services = require("../../services");

var _mutation_observer = require("../observer/mutation_observer");

var _data_grid_context = require("./data_grid_context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiDataGridCellContent = (0, _react.memo)(function (props) {
  var renderCellValue = props.renderCellValue,
      rest = _objectWithoutProperties(props, ["renderCellValue"]); // React is more permissible than the TS types indicate


  var CellElement = renderCellValue;
  return _react.default.createElement(CellElement, _extends({
    isDetails: false,
    "data-test-subj": "cell-content"
  }, rest));
});
EuiDataGridCellContent.propTypes = {
  rowIndex: _propTypes.default.number.isRequired,
  visibleRowIndex: _propTypes.default.number.isRequired,
  colIndex: _propTypes.default.number.isRequired,
  columnId: _propTypes.default.string.isRequired,
  columnType: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf([null])]),
  isExpandable: _propTypes.default.bool.isRequired,
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired,
  setCellProps: _propTypes.default.func.isRequired,
  isExpanded: _propTypes.default.bool.isRequired
};

var EuiDataGridCell =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDataGridCell, _Component);

  function EuiDataGridCell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiDataGridCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiDataGridCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cellRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cellContentsRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tabbingRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      cellProps: {},
      popoverIsOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unsubscribeCell", function () {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateFocus", function () {
      var cell = _this.cellRef.current;
      var isFocused = _this.props.isFocused;

      if (cell && isFocused) {
        cell.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCellProps", function (cellProps) {
      _this.setState({
        cellProps: cellProps
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTabbingRef", function (ref) {
      _this.tabbingRef = ref;

      _this.preventTabbing();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preventTabbing", function () {
      if (_this.tabbingRef) {
        var tabbables = (0, _tabbable.default)(_this.tabbingRef);

        for (var i = 0; i < tabbables.length; i++) {
          tabbables[i].setAttribute('tabIndex', '-1');
        }
      }
    });

    return _this;
  }

  _createClass(EuiDataGridCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribeCell = this.context.onFocusUpdate([this.props.colIndex, this.props.visibleRowIndex], this.updateFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeCell) {
        this.unsubscribeCell();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var didFocusChange = prevProps.isFocused !== this.props.isFocused;

      if (didFocusChange) {
        this.updateFocus();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.rowIndex !== this.props.rowIndex) return true;
      if (nextProps.visibleRowIndex !== this.props.visibleRowIndex) return true;
      if (nextProps.colIndex !== this.props.colIndex) return true;
      if (nextProps.columnId !== this.props.columnId) return true;
      if (nextProps.width !== this.props.width) return true;
      if (nextProps.renderCellValue !== this.props.renderCellValue) return true;
      if (nextProps.onCellFocus !== this.props.onCellFocus) return true;
      if (nextProps.isFocused !== this.props.isFocused) return true;
      if (nextProps.interactiveCellId !== this.props.interactiveCellId) return true;
      if (nextProps.popoverContent !== this.props.popoverContent) return true;
      if (nextState.cellProps !== this.state.cellProps) return true;
      if (nextState.popoverIsOpen !== this.state.popoverIsOpen) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          isFocused = _this$props.isFocused,
          isExpandable = _this$props.isExpandable,
          PopoverContent = _this$props.popoverContent,
          interactiveCellId = _this$props.interactiveCellId,
          columnType = _this$props.columnType,
          onCellFocus = _this$props.onCellFocus,
          rest = _objectWithoutProperties(_this$props, ["width", "isFocused", "isExpandable", "popoverContent", "interactiveCellId", "columnType", "onCellFocus"]);

      var colIndex = rest.colIndex,
          rowIndex = rest.rowIndex,
          visibleRowIndex = rest.visibleRowIndex;
      var className = (0, _classnames.default)('euiDataGridRowCell', _defineProperty({}, "euiDataGridRowCell--".concat(columnType), columnType));

      var cellProps = _objectSpread({}, this.state.cellProps, {
        'data-test-subj': (0, _classnames.default)('dataGridRowCell', this.state.cellProps['data-test-subj']),
        className: (0, _classnames.default)(className, this.state.cellProps.className)
      });

      var widthStyle = width != null ? {
        width: "".concat(width, "px")
      } : {};

      if (cellProps.hasOwnProperty('style')) {
        cellProps.style = _objectSpread({}, cellProps.style, widthStyle);
      } else {
        cellProps.style = widthStyle;
      }

      var handleCellKeyDown = function handleCellKeyDown(e) {
        if (isExpandable) {
          switch (e.keyCode) {
            case _services.keyCodes.ENTER:
              e.preventDefault();

              _this2.setState({
                popoverIsOpen: true
              });

              break;

            case _services.keyCodes.F2:
              e.preventDefault();

              _this2.setState({
                popoverIsOpen: true
              });

              break;
          }
        }
      };

      var cellContentProps = _objectSpread({}, rest, {
        setCellProps: this.setCellProps,
        columnType: columnType,
        isExpandable: isExpandable,
        isExpanded: this.state.popoverIsOpen,
        isDetails: false
      });

      var buttonIconClasses = (0, _classnames.default)('euiDataGridRowCell__expandButtonIcon', {
        'euiDataGridRowCell__expandButtonIcon-isActive': this.state.popoverIsOpen
      });
      var buttonClasses = (0, _classnames.default)('euiDataGridRowCell__expandButton', {
        'euiDataGridRowCell__expandButton-isActive': this.state.popoverIsOpen
      });

      var expandButton = _react.default.createElement(_i18n.EuiI18n, {
        token: "euiDataGridCell.expandButtonTitle",
        default: "Click or hit enter to interact with cell content"
      }, function (expandButtonTitle) {
        return _react.default.createElement(_button.EuiButtonIcon, {
          className: buttonIconClasses,
          color: "text",
          iconSize: "s",
          iconType: "expandMini",
          "aria-hidden": true,
          onClick: function onClick() {
            return _this2.setState(function (_ref) {
              var popoverIsOpen = _ref.popoverIsOpen;
              return {
                popoverIsOpen: !popoverIsOpen
              };
            });
          },
          title: expandButtonTitle
        });
      });

      var screenReaderPosition = _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
        tokens: ['euiDataGridCell.row', 'euiDataGridCell.column'],
        defaults: ['Row', 'Column']
      }, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            row = _ref3[0],
            column = _ref3[1];

        return _react.default.createElement("span", null, row, ": ", rowIndex + 1, ", ", column, ": ", colIndex + 1, ":");
      })));

      var anchorContent = _react.default.createElement("div", {
        className: "euiDataGridRowCell__expandFlex"
      }, _react.default.createElement(_mutation_observer.EuiMutationObserver, {
        observerOptions: {
          subtree: true,
          childList: true
        },
        onMutation: this.preventTabbing
      }, function (mutationRef) {
        var onRef = function onRef(ref) {
          mutationRef(ref);

          _this2.setTabbingRef(ref);
        };

        return _react.default.createElement("div", {
          ref: onRef,
          className: "euiDataGridRowCell__expandContent"
        }, screenReaderPosition, _react.default.createElement("div", {
          ref: _this2.cellContentsRef,
          className: "euiDataGridRowCell__truncate"
        }, _react.default.createElement(EuiDataGridCellContent, cellContentProps)));
      }));

      if (isExpandable) {
        anchorContent = _react.default.createElement("div", {
          className: "euiDataGridRowCell__expandFlex"
        }, _react.default.createElement(_mutation_observer.EuiMutationObserver, {
          observerOptions: {
            subtree: true,
            childList: true
          },
          onMutation: this.preventTabbing
        }, function (mutationRef) {
          var onRef = function onRef(ref) {
            mutationRef(ref);

            _this2.setTabbingRef(ref);
          };

          return _react.default.createElement("div", {
            ref: onRef,
            className: "euiDataGridRowCell__expandContent"
          }, screenReaderPosition, _react.default.createElement("div", {
            ref: _this2.cellContentsRef,
            className: "euiDataGridRowCell__truncate"
          }, _react.default.createElement(EuiDataGridCellContent, cellContentProps)));
        }), _react.default.createElement("div", {
          className: buttonClasses
        }, expandButton));
      }

      var innerContent = anchorContent;

      if (isExpandable) {
        var CellElement = rest.renderCellValue;

        var _popoverContent = _react.default.createElement(PopoverContent, {
          cellContentsElement: this.cellContentsRef.current
        }, _react.default.createElement(CellElement, _extends({}, cellContentProps, {
          isDetails: true
        })));

        innerContent = _react.default.createElement("div", {
          className: "euiDataGridRowCell__content"
        }, _react.default.createElement(_popover.EuiPopover, {
          anchorClassName: "euiDataGridRowCell__expand",
          button: anchorContent,
          isOpen: this.state.popoverIsOpen,
          ownFocus: true,
          panelClassName: "euiDataGridRowCell__popover",
          zIndex: 2000,
          display: "block",
          closePopover: function closePopover() {
            return _this2.setState({
              popoverIsOpen: false
            });
          },
          onTrapDeactivation: this.updateFocus
        }, _popoverContent));
      }

      return _react.default.createElement("div", _extends({
        role: "gridcell",
        tabIndex: isFocused ? 0 : -1,
        ref: this.cellRef
      }, cellProps, {
        "data-test-subj": "dataGridRowCell",
        onKeyDown: handleCellKeyDown,
        onFocus: function onFocus() {
          return onCellFocus([colIndex, visibleRowIndex]);
        }
      }), innerContent);
    }
  }]);

  return EuiDataGridCell;
}(_react.Component);

exports.EuiDataGridCell = EuiDataGridCell;

_defineProperty(EuiDataGridCell, "contextType", _data_grid_context.DataGridContext);

EuiDataGridCell.propTypes = {
  rowIndex: _propTypes.default.number.isRequired,
  visibleRowIndex: _propTypes.default.number.isRequired,
  colIndex: _propTypes.default.number.isRequired,
  columnId: _propTypes.default.string.isRequired,
  columnType: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf([null])]),
  width: _propTypes.default.number,
  isFocused: _propTypes.default.bool.isRequired,
  onCellFocus: _propTypes.default.func.isRequired,
  interactiveCellId: _propTypes.default.string.isRequired,
  isExpandable: _propTypes.default.bool.isRequired,
  popoverContent: _propTypes.default.any.isRequired,
  renderCellValue: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]).isRequired
};
EuiDataGridCell.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "unsubscribeCell",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "updateFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setCellProps",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "cellProps",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setTabbingRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }, {
    "name": "preventTabbing",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiDataGridCell",
  "props": {
    "rowIndex": {
      "type": {
        "name": "number"
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
    },
    "colIndex": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "columnId": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "columnType": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
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
    "width": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "isFocused": {
      "type": {
        "name": "bool"
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
    "isExpandable": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "popoverContent": {
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
    }
  }
};