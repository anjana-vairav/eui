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
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { EuiModal } from './modal';
import { EuiModalFooter } from './modal_footer';
import { EuiModalHeader } from './modal_header';
import { EuiModalHeaderTitle } from './modal_header_title';
import { EuiModalBody } from './modal_body';
import { EuiButton, EuiButtonEmpty } from '../button';
import { EuiText } from '../text';
export var CONFIRM_BUTTON = 'confirm';
export var CANCEL_BUTTON = 'cancel';
var CONFIRM_MODAL_BUTTONS = [CONFIRM_BUTTON, CANCEL_BUTTON];
export var EuiConfirmModal =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiConfirmModal, _Component);

  function EuiConfirmModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiConfirmModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiConfirmModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "confirmRef", function (node) {
      return _this.confirmButton = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelRef", function (node) {
      return _this.cancelButton = node;
    });

    return _this;
  }

  _createClass(EuiConfirmModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // We have to do this instead of using `autoFocus` because React's polyfill for auto-focusing
      // elements conflicts with the focus-trap logic we have on EuiModal.
      var defaultFocusedButton = this.props.defaultFocusedButton; // Wait a beat for the focus-trap to complete, and then set focus to the right button. Check that
      // the buttons exist first, because it's possible the modal has been closed already.

      requestAnimationFrame(function () {
        if (defaultFocusedButton === CANCEL_BUTTON && _this2.cancelButton) {
          _this2.cancelButton.focus();
        } else if (defaultFocusedButton === CONFIRM_BUTTON && _this2.confirmButton) {
          _this2.confirmButton.focus();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          onCancel = _this$props.onCancel,
          onConfirm = _this$props.onConfirm,
          cancelButtonText = _this$props.cancelButtonText,
          confirmButtonText = _this$props.confirmButtonText,
          confirmButtonDisabled = _this$props.confirmButtonDisabled,
          className = _this$props.className,
          buttonColor = _this$props.buttonColor,
          defaultFocusedButton = _this$props.defaultFocusedButton,
          rest = _objectWithoutProperties(_this$props, ["children", "title", "onCancel", "onConfirm", "cancelButtonText", "confirmButtonText", "confirmButtonDisabled", "className", "buttonColor", "defaultFocusedButton"]);

      var classes = classnames('euiModal--confirmation', className);
      var modalTitle;

      if (title) {
        modalTitle = React.createElement(EuiModalHeader, null, React.createElement(EuiModalHeaderTitle, {
          "data-test-subj": "confirmModalTitleText"
        }, title));
      }

      var message;

      if (typeof children === 'string' && children.length > 0) {
        message = React.createElement("p", null, children);
      } else {
        message = children;
      }

      return React.createElement(EuiModal, _extends({
        className: classes,
        onClose: onCancel
      }, rest), modalTitle, message && React.createElement(EuiModalBody, null, React.createElement(EuiText, {
        "data-test-subj": "confirmModalBodyText"
      }, message)), React.createElement(EuiModalFooter, null, React.createElement(EuiButtonEmpty, {
        "data-test-subj": "confirmModalCancelButton",
        onClick: onCancel,
        buttonRef: this.cancelRef
      }, cancelButtonText), React.createElement(EuiButton, {
        "data-test-subj": "confirmModalConfirmButton",
        onClick: onConfirm,
        fill: true,
        buttonRef: this.confirmRef,
        color: buttonColor,
        isDisabled: confirmButtonDisabled
      }, confirmButtonText)));
    }
  }]);

  return EuiConfirmModal;
}(Component);
EuiConfirmModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  cancelButtonText: PropTypes.node,
  confirmButtonText: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  confirmButtonDisabled: PropTypes.bool,
  className: PropTypes.string,
  defaultFocusedButton: PropTypes.oneOf(CONFIRM_MODAL_BUTTONS),
  buttonColor: PropTypes.string,
  // For docs only, will get passed with ...rest

  /**
   * Sets the max-width of the modal.
   * Set to `true` to use the default (`euiBreakpoints 'm'`),
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
};
EuiConfirmModal.defaultProps = {
  buttonColor: 'primary'
};
EuiConfirmModal.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "confirmRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "cancelRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiConfirmModal",
  "props": {
    "buttonColor": {
      "defaultValue": {
        "value": "'primary'",
        "computed": false
      },
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
    "title": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "cancelButtonText": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "confirmButtonText": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "onCancel": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onConfirm": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "confirmButtonDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "defaultFocusedButton": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'confirm'",
          "computed": false
        }, {
          "value": "'cancel'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "maxWidth": {
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
    }
  }
};