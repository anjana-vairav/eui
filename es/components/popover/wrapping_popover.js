function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { EuiPopover } from './popover';
import { EuiPortal } from '../portal';

/**
 * Injects the EuiPopover next to the button via EuiPortal
 * then the button element is moved into the popover dom.
 * On unmount, the button is moved back to its original location.
 */
export var EuiWrappingPopover =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiWrappingPopover, _Component);

  function EuiWrappingPopover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiWrappingPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiWrappingPopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "portal", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "anchor", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPortalRef", function (node) {
      _this.portal = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAnchorRef", function (node) {
      _this.anchor = node;
    });

    return _this;
  }

  _createClass(EuiWrappingPopover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.anchor) {
        this.anchor.insertAdjacentElement('beforebegin', this.props.button);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.button.parentNode) {
        if (this.portal) {
          this.portal.insertAdjacentElement('beforebegin', this.props.button);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          button = _this$props.button,
          rest = _objectWithoutProperties(_this$props, ["button"]);

      return React.createElement(EuiPortal, {
        portalRef: this.setPortalRef,
        insert: {
          sibling: this.props.button,
          position: 'after'
        }
      }, React.createElement(EuiPopover, _extends({}, rest, {
        button: React.createElement("div", {
          ref: this.setAnchorRef,
          className: "euiWrappingPopover__anchor"
        })
      })));
    }
  }]);

  return EuiWrappingPopover;
}(Component);
EuiWrappingPopover.propTypes = {
  button: PropTypes.any.isRequired
};
EuiWrappingPopover.__docgenInfo = {
  "description": "Injects the EuiPopover next to the button via EuiPortal\nthen the button element is moved into the popover dom.\nOn unmount, the button is moved back to its original location.",
  "methods": [{
    "name": "setPortalRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setAnchorRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiWrappingPopover",
  "props": {
    "button": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    }
  }
};