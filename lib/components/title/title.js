"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTitle = exports.TEXT_TRANSFORM = exports.TITLE_SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var titleSizeToClassNameMap = {
  xxxs: 'euiTitle--xxxsmall',
  xxs: 'euiTitle--xxsmall',
  xs: 'euiTitle--xsmall',
  s: 'euiTitle--small',
  m: 'euiTitle--medium',
  l: 'euiTitle--large'
};
var TITLE_SIZES = (0, _common.keysOf)(titleSizeToClassNameMap);
exports.TITLE_SIZES = TITLE_SIZES;
var textTransformToClassNameMap = {
  uppercase: 'euiTitle--uppercase'
};
var TEXT_TRANSFORM = (0, _common.keysOf)(textTransformToClassNameMap);
exports.TEXT_TRANSFORM = TEXT_TRANSFORM;

var EuiTitle = function EuiTitle(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      children = _ref.children,
      className = _ref.className,
      textTransform = _ref.textTransform,
      rest = _objectWithoutProperties(_ref, ["size", "children", "className", "textTransform"]);

  var classes = (0, _classnames.default)('euiTitle', titleSizeToClassNameMap[size], textTransform ? textTransformToClassNameMap[textTransform] : undefined, className);

  var props = _objectSpread({
    className: classes
  }, rest);

  return _react.default.cloneElement(children, props);
};

exports.EuiTitle = EuiTitle;
EuiTitle.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  children: _propTypes.default.element.isRequired,
  size: _propTypes.default.oneOf(["xxxs", "xxs", "xs", "s", "m", "l"]),
  textTransform: _propTypes.default.oneOf(["uppercase"]),
  id: _propTypes.default.string
};
EuiTitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTitle",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"xxxs\"",
          "computed": false
        }, {
          "value": "\"xxs\"",
          "computed": false
        }, {
          "value": "\"xs\"",
          "computed": false
        }, {
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
    "children": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": ""
    },
    "textTransform": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"uppercase\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};