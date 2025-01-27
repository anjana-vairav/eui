function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React, { Component } from 'react';
import PropTypes from "prop-types";
import FocusLock from 'react-focus-lock'; // eslint-disable-line import/named

import { EuiOutsideClickDetector } from '../outside_click_detector';

var OutsideEventDetector = function OutsideEventDetector(_ref) {
  var children = _ref.children,
      handleEvent = _ref.handleEvent,
      rest = _objectWithoutProperties(_ref, ["children", "handleEvent"]);

  return React.createElement("div", _extends({
    onMouseDown: handleEvent,
    onTouchStart: handleEvent
  }, rest), children);
};
/**
 * A DOM node, a selector string (which will be passed to
 * `document.querySelector()` to find the DOM node), or a function that
 * returns a DOM node.
 */


OutsideEventDetector.propTypes = {
  handleEvent: PropTypes.any.isRequired
};
export var EuiFocusTrap =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiFocusTrap, _Component);

  function EuiFocusTrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiFocusTrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiFocusTrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hasBeenDisabledByClick: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastInterceptedEvent", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preventFocusExit", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInitialFocus", function (initialFocus) {
      var node = initialFocus instanceof HTMLElement ? initialFocus : null;

      if (typeof initialFocus === 'string') {
        node = document.querySelector(initialFocus);
      } else if (typeof initialFocus === 'function') {
        node = initialFocus();
      }

      if (!node) return; // `data-autofocus` is part of the 'react-focus-lock' API

      node.setAttribute('data-autofocus', 'true');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDisabled", function () {
      var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.state.hasBeenDisabledByClick;

      _this.setState({
        hasBeenDisabledByClick: shouldDisable
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleExitPrevented", function () {
      var shouldPrevent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !_this.preventFocusExit;
      _this.preventFocusExit = shouldPrevent;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOutsideClick", function (event) {
      _this.toggleExitPrevented(false);

      if (_this.preventFocusExit && _this.lastInterceptedEvent && event.target === _this.lastInterceptedEvent.target) return;

      _this.toggleDisabled(true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBubbledEvent", function (e) {
      _this.lastInterceptedEvent = e.nativeEvent;

      _this.toggleExitPrevented(true);
    });

    return _this;
  }

  _createClass(EuiFocusTrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setInitialFocus(this.props.initialFocus);
    } // Programmatically sets focus on a nested DOM node; optional

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$clickOuts = _this$props.clickOutsideDisables,
          clickOutsideDisables = _this$props$clickOuts === void 0 ? false : _this$props$clickOuts,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$returnFoc = _this$props.returnFocus,
          returnFocus = _this$props$returnFoc === void 0 ? true : _this$props$returnFoc,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["children", "clickOutsideDisables", "disabled", "returnFocus", "style"]);

      var isDisabled = disabled || this.state.hasBeenDisabledByClick;

      var lockProps = _objectSpread({
        disabled: isDisabled,
        returnFocus: returnFocus
      }, rest);

      return clickOutsideDisables ? React.createElement(EuiOutsideClickDetector, {
        isDisabled: isDisabled,
        onOutsideClick: this.handleOutsideClick
      }, React.createElement(OutsideEventDetector, {
        handleEvent: this.handleBubbledEvent
      }, React.createElement(FocusLock, _extends({
        lockProps: {
          style: style
        }
      }, lockProps), children))) : React.createElement(FocusLock, _extends({
        lockProps: {
          style: style
        }
      }, lockProps), children);
    }
  }]);

  return EuiFocusTrap;
}(Component);
EuiFocusTrap.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  clickOutsideDisables: PropTypes.bool,
  initialFocus: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.string.isRequired, PropTypes.func.isRequired]),
  style: PropTypes.any
};
EuiFocusTrap.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setInitialFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "initialFocus",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleDisabled",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "shouldDisable",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleExitPrevented",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "shouldPrevent",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleOutsideClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleBubbledEvent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiFocusTrap",
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
    "clickOutsideDisables": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "initialFocus": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "style": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};