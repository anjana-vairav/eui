"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiInputPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _focus_trap = require("../focus_trap");

var _popover = require("./popover");

var _resize_observer = require("../observer/resize_observer");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiInputPopover = function EuiInputPopover(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disableFocusTrap = _ref.disableFocusTrap,
      disableFocusTrap = _ref$disableFocusTrap === void 0 ? false : _ref$disableFocusTrap,
      input = _ref.input,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      onPanelResize = _ref.onPanelResize,
      props = _objectWithoutProperties(_ref, ["children", "className", "disableFocusTrap", "input", "fullWidth", "onPanelResize"]);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      inputEl = _useState2[0],
      setInputEl = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      inputElWidth = _useState4[0],
      setInputElWidth = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      panelEl = _useState6[0],
      setPanelEl = _useState6[1];

  var inputRef = function inputRef(node) {
    return setInputEl(node);
  };

  var panelRef = function panelRef(node) {
    return setPanelEl(node);
  };

  var setPanelWidth = (0, _react.useCallback)(function (width) {
    if (panelEl && (!!inputElWidth || !!width)) {
      var newWidth = !!width ? width : inputElWidth;
      panelEl.style.width = "".concat(newWidth, "px");

      if (onPanelResize) {
        onPanelResize(newWidth);
      }
    }
  }, [panelEl, inputElWidth, onPanelResize]);
  var onResize = (0, _react.useCallback)(function () {
    if (inputEl) {
      var width = inputEl.getBoundingClientRect().width;
      setInputElWidth(width);
      setPanelWidth(width);
    }
  }, [inputEl, setPanelWidth]);
  (0, _react.useEffect)(function () {
    onResize();
  }, [onResize]);
  (0, _react.useEffect)(function () {
    setPanelWidth();
  }, [setPanelWidth]);

  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === _services.cascadingMenuKeyCodes.TAB) {
      var tabbableItems = (0, _tabbable.default)(panelEl).filter(function (el) {
        return Array.from(el.attributes).map(function (el) {
          return el.name;
        }).indexOf('data-focus-guard') < 0;
      });

      if (disableFocusTrap || tabbableItems.length && tabbableItems[tabbableItems.length - 1] === document.activeElement) {
        props.closePopover();
      }
    }
  };

  var classes = (0, _classnames.default)('euiInputPopover', {
    'euiInputPopover--fullWidth': fullWidth
  }, className);
  return _react.default.createElement(_popover.EuiPopover, _extends({
    ownFocus: false,
    button: _react.default.createElement(_resize_observer.EuiResizeObserver, {
      onResize: onResize
    }, function (resizeRef) {
      return _react.default.createElement("div", {
        ref: resizeRef
      }, input);
    }),
    buttonRef: inputRef,
    panelRef: panelRef,
    className: classes
  }, props), _react.default.createElement(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: true,
    disabled: disableFocusTrap
  }, _react.default.createElement("div", {
    onKeyDown: onKeyDown
  }, children)));
};

exports.EuiInputPopover = EuiInputPopover;
EuiInputPopover.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  disableFocusTrap: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  input: _propTypes.default.any.isRequired,
  inputRef: _propTypes.default.func,
  onPanelResize: _propTypes.default.func
};
EuiInputPopover.defaultProps = {
  anchorPosition: 'downLeft',
  attachToAnchor: true,
  display: 'block',
  panelPaddingSize: 's'
};
EuiInputPopover.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiInputPopover",
  "props": {
    "disableFocusTrap": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "anchorPosition": {
      "defaultValue": {
        "value": "'downLeft'",
        "computed": false
      },
      "required": false
    },
    "attachToAnchor": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "required": false
    },
    "display": {
      "defaultValue": {
        "value": "'block'",
        "computed": false
      },
      "required": false
    },
    "panelPaddingSize": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
      "required": false
    },
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
    "input": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onPanelResize": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};