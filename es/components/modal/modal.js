function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { keyCodes } from '../../services';
import { EuiButtonIcon } from '../button';
import { EuiFocusTrap } from '../focus_trap';
import { EuiI18n } from '../i18n';
export var EuiModal =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiModal, _Component);

  function EuiModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.keyCode === keyCodes.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();

        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(EuiModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          initialFocus = _this$props.initialFocus,
          onClose = _this$props.onClose,
          maxWidth = _this$props.maxWidth,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["className", "children", "initialFocus", "onClose", "maxWidth", "style"]);

      var newStyle;
      var widthClassName;

      if (maxWidth === true) {
        widthClassName = 'euiModal--maxWidth-default';
      } else if (maxWidth !== false) {
        var value = typeof maxWidth === 'number' ? "".concat(maxWidth, "px") : maxWidth;
        newStyle = _objectSpread({}, style, {
          maxWidth: value
        });
      }

      var classes = classnames('euiModal', widthClassName, className);
      return React.createElement(EuiFocusTrap, {
        initialFocus: initialFocus
      }, React.createElement("div", _extends({
        ref: function ref(node) {
          _this2.modal = node;
        },
        className: classes,
        onKeyDown: this.onKeyDown,
        tabIndex: 0,
        style: newStyle || style
      }, rest), React.createElement(EuiI18n, {
        token: "euiModal.closeModal",
        default: "Closes this modal window"
      }, function (closeModal) {
        return React.createElement(EuiButtonIcon, {
          iconType: "cross",
          onClick: onClose,
          className: "euiModal__closeIcon",
          color: "text",
          "aria-label": closeModal
        });
      }), React.createElement("div", {
        className: "euiModal__flex"
      }, children)));
    }
  }]);

  return EuiModal;
}(Component);
EuiModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,

  /**
   * Sets the max-width of the modal.
   * Set to `true` to use the default (`euiBreakpoints 'm'`),
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),

  /** specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node. */
  initialFocus: PropTypes.oneOfType([PropTypes.instanceOf(HTMLElement), PropTypes.func, PropTypes.string])
};
EuiModal.defaultProps = {
  maxWidth: true
};
EuiModal.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiModal",
  "props": {
    "maxWidth": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Sets the max-width of the modal.\nSet to `true` to use the default (`euiBreakpoints 'm'`),\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "onClose": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "initialFocus": {
      "type": {
        "name": "union",
        "value": [{
          "name": "instanceOf",
          "value": "HTMLElement"
        }, {
          "name": "func"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node."
    }
  }
};