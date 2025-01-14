"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlyout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _focus_trap = require("../focus_trap");

var _overlay_mask = require("../overlay_mask");

var _button = require("../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var sizeToClassNameMap = {
  s: 'euiFlyout--small',
  m: 'euiFlyout--medium',
  l: 'euiFlyout--large'
};

var EuiFlyout =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiFlyout, _Component);

  function EuiFlyout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiFlyout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiFlyout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.keyCode === _services.keyCodes.ESCAPE) {
        event.preventDefault();

        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(EuiFlyout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          hideCloseButton = _this$props.hideCloseButton,
          onClose = _this$props.onClose,
          ownFocus = _this$props.ownFocus,
          size = _this$props.size,
          closeButtonAriaLabel = _this$props.closeButtonAriaLabel,
          maxWidth = _this$props.maxWidth,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["className", "children", "hideCloseButton", "onClose", "ownFocus", "size", "closeButtonAriaLabel", "maxWidth", "style"]);

      var newStyle;
      var widthClassName;

      if (maxWidth === true) {
        widthClassName = 'euiFlyout--maxWidth-default';
      } else if (maxWidth !== false) {
        var value = typeof maxWidth === 'number' ? "".concat(maxWidth, "px") : maxWidth;
        newStyle = _objectSpread({}, style, {
          maxWidth: value
        });
      }

      var classes = (0, _classnames.default)('euiFlyout', sizeToClassNameMap[size], widthClassName, className);
      var closeButton;

      if (onClose && !hideCloseButton) {
        closeButton = _react.default.createElement(_button.EuiButtonIcon, {
          className: "euiFlyout__closeButton",
          iconType: "cross",
          color: "text",
          "aria-label": closeButtonAriaLabel,
          onClick: onClose,
          "data-test-subj": "euiFlyoutCloseButton"
        });
      }

      var flyoutContent = _react.default.createElement("div", _extends({
        role: "dialog",
        className: classes,
        tabIndex: 0,
        style: newStyle || style
      }, rest), closeButton, children); // If ownFocus is set, show an overlay behind the flyout and allow the user
      // to click it to close it.


      var optionalOverlay;

      if (ownFocus) {
        optionalOverlay = _react.default.createElement(_overlay_mask.EuiOverlayMask, {
          onClick: onClose
        });
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_services.EuiWindowEvent, {
        event: "keydown",
        handler: this.onKeyDown
      }), optionalOverlay, _react.default.createElement(_focus_trap.EuiFocusTrap, {
        clickOutsideDisables: true
      }, flyoutContent));
    }
  }]);

  return EuiFlyout;
}(_react.Component);

exports.EuiFlyout = EuiFlyout;

_defineProperty(EuiFlyout, "defaultProps", {
  size: 'm',
  hideCloseButton: false,
  ownFocus: false,
  closeButtonAriaLabel: 'Closes this dialog',
  maxWidth: false
});

EuiFlyout.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(["s", "m", "l"]),

  /**
     * Hides the default close button. You must provide another close button somewhere within the flyout.
     */
  hideCloseButton: _propTypes.default.bool,

  /**
     * Locks the mouse / keyboard focus to within the flyout
     */
  ownFocus: _propTypes.default.bool,

  /**
     * Specify an aria-label for the close button of the flyout.
     */
  closeButtonAriaLabel: _propTypes.default.string,

  /**
     * Sets the max-width of the page,
     * set to `true` to use the default size,
     * set to `false` to not restrict the width,
     * set to a number for a custom width in px,
     * set to a string for a custom width in custom measurement.
     */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiFlyout.__docgenInfo = {
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
  "displayName": "EuiFlyout",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "hideCloseButton": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Hides the default close button. You must provide another close button somewhere within the flyout."
    },
    "ownFocus": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Locks the mouse / keyboard focus to within the flyout"
    },
    "closeButtonAriaLabel": {
      "defaultValue": {
        "value": "'Closes this dialog'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Specify an aria-label for the close button of the flyout."
    },
    "maxWidth": {
      "defaultValue": {
        "value": "false",
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
      "description": "Sets the max-width of the page,\nset to `true` to use the default size,\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement."
    },
    "onClose": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "style": {
      "type": {
        "name": "any"
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
    }
  }
};