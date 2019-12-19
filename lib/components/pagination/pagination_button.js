"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPaginationButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiPaginationButton = function EuiPaginationButton(_ref) {
  var className = _ref.className,
      isActive = _ref.isActive,
      isPlaceholder = _ref.isPlaceholder,
      hideOnMobile = _ref.hideOnMobile,
      rest = _objectWithoutProperties(_ref, ["className", "isActive", "isPlaceholder", "hideOnMobile"]);

  var classes = (0, _classnames.default)('euiPaginationButton', className, {
    'euiPaginationButton-isActive': isActive,
    'euiPaginationButton-isPlaceholder': isPlaceholder,
    'euiPaginationButton--hideOnMobile': hideOnMobile
  });

  var props = _objectSpread({
    className: classes,
    size: 'xs',
    color: 'text',
    isDisabled: isPlaceholder
  }, rest);

  return _react.default.createElement(_button.EuiButtonEmpty, props);
};

exports.EuiPaginationButton = EuiPaginationButton;
EuiPaginationButton.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
EuiPaginationButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPaginationButton",
  "props": {
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