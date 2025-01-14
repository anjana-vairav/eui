"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLink = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _i18n = require("../i18n");

var _common = require("../common");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorsToClassNameMap = {
  primary: 'euiLink--primary',
  subdued: 'euiLink--subdued',
  secondary: 'euiLink--secondary',
  accent: 'euiLink--accent',
  danger: 'euiLink--danger',
  warning: 'euiLink--warning',
  ghost: 'euiLink--ghost',
  text: 'euiLink--text'
};
var COLORS = (0, _common.keysOf)(colorsToClassNameMap);
exports.COLORS = COLORS;

var EuiLink = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      href = _ref.href,
      external = _ref.external,
      target = _ref.target,
      rel = _ref.rel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["children", "color", "className", "href", "external", "target", "rel", "type", "onClick", "disabled"]);

  var externalLinkIcon = external ? _react.default.createElement(_i18n.EuiI18n, {
    token: "euiLink.external.ariaLabel",
    default: "External link"
  }, function (ariaLabel) {
    return _react.default.createElement(_icon.EuiIcon, {
      "aria-label": ariaLabel,
      size: "s",
      className: "euiLink__externalIcon",
      type: "popout"
    });
  }) : undefined;

  if (href === undefined) {
    var buttonProps = _objectSpread({
      className: (0, _classnames.default)('euiLink', disabled ? 'euiLink-disabled' : colorsToClassNameMap[color], className),
      type: type,
      onClick: onClick,
      disabled: disabled
    }, rest);

    return _react.default.createElement("button", _extends({
      ref: ref
    }, buttonProps), children);
  }

  var secureRel = (0, _services.getSecureRelForTarget)({
    href: href,
    target: target,
    rel: rel
  });

  var anchorProps = _objectSpread({
    className: (0, _classnames.default)('euiLink', colorsToClassNameMap[color], className),
    href: href,
    target: target,
    rel: secureRel,
    onClick: onClick
  }, rest);

  return _react.default.createElement("a", _extends({
    ref: ref
  }, anchorProps), children, externalLinkIcon);
});

exports.EuiLink = EuiLink;
EuiLink.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  type: _propTypes.default.oneOf(["button", "reset", "submit"]),
  color: _propTypes.default.oneOf(["primary", "subdued", "secondary", "accent", "danger", "warning", "text", "ghost"]),
  onClick: _propTypes.default.func,

  /**
     * Set to true to show an icon indicating that it is an external link.
     */
  external: _propTypes.default.bool
};
EuiLink.displayName = 'EuiLink';
EuiLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiLink",
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
    "type": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"button\"",
          "computed": false
        }, {
          "value": "\"reset\"",
          "computed": false
        }, {
          "value": "\"submit\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "color": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"text\"",
          "computed": false
        }, {
          "value": "\"ghost\"",
          "computed": false
        }]
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
    },
    "external": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set to true to show an icon indicating that it is an external link."
    }
  }
};