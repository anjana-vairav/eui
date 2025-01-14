"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButton = exports.ICON_SIDES = exports.SIZES = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _loading = require("../loading");

var _services = require("../../services");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  primary: 'euiButton--primary',
  secondary: 'euiButton--secondary',
  warning: 'euiButton--warning',
  danger: 'euiButton--danger',
  ghost: 'euiButton--ghost',
  text: 'euiButton--text'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;
var sizeToClassNameMap = {
  s: 'euiButton--small',
  m: null
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;
var iconSideToClassNameMap = {
  left: null,
  right: 'euiButton--iconRight'
};
var ICON_SIDES = (0, _common.keysOf)(iconSideToClassNameMap);
exports.ICON_SIDES = ICON_SIDES;

var EuiButton = function EuiButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconType = _ref.iconType,
      _ref$iconSide = _ref.iconSide,
      iconSide = _ref$iconSide === void 0 ? 'left' : _ref$iconSide,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? false : _ref$fill,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      buttonRef = _ref.buttonRef,
      contentProps = _ref.contentProps,
      textProps = _ref.textProps,
      fullWidth = _ref.fullWidth,
      rest = _objectWithoutProperties(_ref, ["children", "className", "iconType", "iconSide", "color", "size", "fill", "isDisabled", "isLoading", "href", "target", "rel", "type", "buttonRef", "contentProps", "textProps", "fullWidth"]);

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;
  var classes = (0, _classnames.default)('euiButton', color ? colorToClassNameMap[color] : null, size ? sizeToClassNameMap[size] : null, iconSide ? iconSideToClassNameMap[iconSide] : null, className, {
    'euiButton--fill': fill,
    'euiButton--fullWidth': fullWidth
  });
  var contentClassNames = (0, _classnames.default)('euiButton__content', contentProps && contentProps.className);
  var textClassNames = (0, _classnames.default)('euiButton__text', textProps && textProps.className); // Add an icon to the button if one exists.

  var buttonIcon;

  if (isLoading) {
    buttonIcon = _react.default.createElement(_loading.EuiLoadingSpinner, {
      className: "euiButton__spinner",
      size: "m"
    });
  } else if (iconType) {
    buttonIcon = _react.default.createElement(_icon.EuiIcon, {
      className: "euiButton__icon",
      type: iconType,
      size: "m",
      "aria-hidden": "true"
    });
  }

  var innerNode = _react.default.createElement("span", _extends({}, contentProps, {
    className: contentClassNames
  }), buttonIcon, _react.default.createElement("span", _extends({}, textProps, {
    className: textClassNames
  }), children)); // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  // this is a button and piggyback off its disabled styles.


  if (href && !isDisabled) {
    var secureRel = (0, _services.getSecureRelForTarget)({
      href: href,
      target: target,
      rel: rel
    });
    return _react.default.createElement("a", _extends({
      className: classes,
      href: href,
      target: target,
      rel: secureRel,
      ref: buttonRef
    }, rest), innerNode);
  }

  return _react.default.createElement("button", _extends({
    disabled: isDisabled,
    className: classes,
    type: type,
    ref: buttonRef
  }, rest), innerNode);
};

exports.EuiButton = EuiButton;
EuiButton.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
EuiButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiButton",
  "props": {
    "iconSide": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'primary'",
        "computed": false
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "required": false
    },
    "fill": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "required": false
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};