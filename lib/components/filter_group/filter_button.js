"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFilterButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _notification_badge = require("../badge/notification_badge");

var _button_empty = require("../button/button_empty");

var _icon = require("../icon");

var _inner_text = require("../inner_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFilterButton = function EuiFilterButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconType = _ref.iconType,
      iconSide = _ref.iconSide,
      color = _ref.color,
      hasActiveFilters = _ref.hasActiveFilters,
      numFilters = _ref.numFilters,
      numActiveFilters = _ref.numActiveFilters,
      isDisabled = _ref.isDisabled,
      isSelected = _ref.isSelected,
      type = _ref.type,
      grow = _ref.grow,
      noDivider = _ref.noDivider,
      withNext = _ref.withNext,
      textProps = _ref.textProps,
      rest = _objectWithoutProperties(_ref, ["children", "className", "iconType", "iconSide", "color", "hasActiveFilters", "numFilters", "numActiveFilters", "isDisabled", "isSelected", "type", "grow", "noDivider", "withNext", "textProps"]);

  // != instead of !== to allow for null and undefined
  var numFiltersDefined = numFilters != null;
  var classes = (0, _classnames.default)('euiFilterButton', {
    'euiFilterButton-isSelected': isSelected,
    'euiFilterButton-hasActiveFilters': hasActiveFilters,
    'euiFilterButton-hasNotification': numFiltersDefined,
    'euiFilterButton--hasIcon': iconType,
    'euiFilterButton--noGrow': !grow,
    'euiFilterButton--withNext': noDivider || withNext
  }, className);
  var buttonTextClassNames = (0, _classnames.default)( // 'euiFilterButton__textShift',
  {
    'euiFilterButton__text-hasNotification': numFiltersDefined
  }, textProps && textProps.className);
  var dataText;

  if (typeof children === 'string') {
    dataText = children;
  }

  var _useInnerText = (0, _inner_text.useInnerText)(),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  var buttonContents = _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
    ref: ref,
    className: "euiFilterButton__textShift",
    "data-text": dataText || innerText,
    title: dataText || innerText
  }, children), numFiltersDefined && _react.default.createElement(_i18n.EuiI18n, {
    token: "euiFilterButton.filterBadge",
    values: {
      count: numActiveFilters || numFilters,
      hasActiveFilters: hasActiveFilters
    },
    default: function _default(_ref2) {
      var count = _ref2.count,
          hasActiveFilters = _ref2.hasActiveFilters;
      return "".concat(count, " ").concat(hasActiveFilters ? 'active' : 'available', " filters");
    }
  }, function (filterBadge) {
    return _react.default.createElement(_notification_badge.EuiNotificationBadge, {
      className: "euiFilterButton__notification",
      size: "m",
      "aria-label": filterBadge,
      color: isDisabled || !hasActiveFilters ? 'subdued' : 'accent'
    }, numActiveFilters || numFilters);
  }));

  return _react.default.createElement(_button_empty.EuiButtonEmpty, _extends({
    className: classes,
    color: color,
    isDisabled: isDisabled,
    iconSide: iconSide,
    iconType: iconType,
    type: type,
    textProps: _objectSpread({}, textProps, {
      className: buttonTextClassNames
    })
  }, rest), buttonContents);
};

exports.EuiFilterButton = EuiFilterButton;
EuiFilterButton.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,

  /**
   * Use any one of our icons
   */
  iconType: _icon.IconPropType,
  iconSide: _propTypes.default.oneOf(_button_empty.ICON_SIDES),
  color: _propTypes.default.oneOf(_button_empty.COLORS),

  /**
   * Bolds the button if true
   */
  hasActiveFilters: _propTypes.default.bool,

  /**
   * Pass the total number of filters available and it will
   * add a subdued notification badge showing the number
   */
  numFilters: _propTypes.default.number,

  /**
   * Pass the number of selected filters and it will
   * add a bright notification badge showing the number
   */
  numActiveFilters: _propTypes.default.number,

  /**
   * Applies a visual state to the button useful when using with a popover.
   */
  isSelected: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,

  /**
   * Defines html button input type
   */
  type: _propTypes.default.string,

  /**
   * Should the button grow to fill its container, best used for dropdown buttons
   */
  grow: _propTypes.default.bool,

  /**
   * Remove border after button, good for opposite filters
   */
  withNext: _propTypes.default.bool,

  /**
   * _DEPRECATED: use `withNext`_
   * Remove border after button, good for opposite filters
   */
  noDivider: _propTypes.default.bool
};
EuiFilterButton.defaultProps = {
  type: 'button',
  iconSide: 'right',
  color: 'text',
  grow: true
};
EuiFilterButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFilterButton",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Defines html button input type"
    },
    "iconSide": {
      "defaultValue": {
        "value": "'right'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "ICON_SIDES"
      },
      "required": false,
      "description": ""
    },
    "color": {
      "defaultValue": {
        "value": "'text'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "computed": true,
        "value": "COLORS"
      },
      "required": false,
      "description": ""
    },
    "grow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Should the button grow to fill its container, best used for dropdown buttons"
    },
    "children": {
      "type": {
        "name": "node"
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
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "iconType": {
      "type": {
        "name": "custom",
        "raw": "IconPropType"
      },
      "required": false,
      "description": "Use any one of our icons"
    },
    "hasActiveFilters": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Bolds the button if true"
    },
    "numFilters": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Pass the total number of filters available and it will\nadd a subdued notification badge showing the number"
    },
    "numActiveFilters": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Pass the number of selected filters and it will\nadd a bright notification badge showing the number"
    },
    "isSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Applies a visual state to the button useful when using with a popover."
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "withNext": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Remove border after button, good for opposite filters"
    },
    "noDivider": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "_DEPRECATED: use `withNext`_\nRemove border after button, good for opposite filters"
    }
  }
};