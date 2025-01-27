"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDatePickerRange = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../text");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiDatePickerRange = function EuiDatePickerRange(_ref) {
  var children = _ref.children,
      className = _ref.className,
      startDateControl = _ref.startDateControl,
      endDateControl = _ref.endDateControl,
      iconType = _ref.iconType,
      fullWidth = _ref.fullWidth,
      isCustom = _ref.isCustom,
      readOnly = _ref.readOnly,
      rest = _objectWithoutProperties(_ref, ["children", "className", "startDateControl", "endDateControl", "iconType", "fullWidth", "isCustom", "readOnly"]);

  var classes = (0, _classnames.default)('euiDatePickerRange', {
    'euiDatePickerRange--fullWidth': fullWidth,
    'euiDatePickerRange--readOnly': readOnly
  }, className); // Set the icon for the entire group instead of per control

  var optionalIcon;

  if (iconType) {
    var icon = typeof iconType === 'string' ? iconType : 'calendar';
    optionalIcon = _react.default.createElement("span", {
      className: "euiDatePickerRange__icon"
    }, _react.default.createElement(_icon.EuiIcon, {
      type: icon
    }));
  } else {
    optionalIcon = null;
  }

  var startControl = startDateControl;
  var endControl = endDateControl;

  if (!isCustom) {
    startControl = (0, _react.cloneElement)(startDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly
    });
    endControl = (0, _react.cloneElement)(endDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly
    });
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), children ? children : _react.default.createElement(_react.Fragment, null, optionalIcon, startControl, _react.default.createElement(_text.EuiText, {
    className: "euiDatePickerRange__delimeter",
    size: "s",
    color: "subdued"
  }, "\u2192"), endControl));
};

exports.EuiDatePickerRange = EuiDatePickerRange;
EuiDatePickerRange.propTypes = {
  /**
   * The start date `EuiDatePicker` element
   */
  startDateControl: _propTypes.default.node.isRequired,

  /**
   * The end date `EuiDatePicker` element
   */
  endDateControl: _propTypes.default.node.isRequired,

  /**
   * Pass either an icon type or set to `false` to remove icon entirely
   */
  iconType: _propTypes.default.oneOfType([_propTypes.default.bool, _icon.IconPropType]),
  fullWidth: _propTypes.default.bool,

  /**
   * Won't apply any additional props to start and end date components
   */
  isCustom: _propTypes.default.bool,

  /**
   * Including any children will replace all innerds with the provided children
   */
  children: _propTypes.default.node
};
EuiDatePickerRange.defaultProps = {
  iconType: true
};
EuiDatePickerRange.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDatePickerRange",
  "props": {
    "iconType": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "custom",
          "raw": "IconPropType"
        }]
      },
      "required": false,
      "description": "Pass either an icon type or set to `false` to remove icon entirely"
    },
    "startDateControl": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "The start date `EuiDatePicker` element"
    },
    "endDateControl": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "The end date `EuiDatePicker` element"
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isCustom": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Won't apply any additional props to start and end date components"
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Including any children will replace all innerds with the provided children"
    }
  }
};