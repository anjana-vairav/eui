"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSwitch = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _make_id = _interopRequireDefault(require("../../form/form_row/make_id"));

var _icon = require("../../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiSwitch = function EuiSwitch(_ref) {
  var label = _ref.label,
      id = _ref.id,
      checked = _ref.checked,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      onChange = _ref.onChange,
      className = _ref.className,
      _ref$showLabel = _ref.showLabel,
      showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["label", "id", "checked", "disabled", "compressed", "onChange", "className", "showLabel", "type"]);

  var _useState = (0, _react.useState)(id || (0, _make_id.default)()),
      _useState2 = _slicedToArray(_useState, 1),
      switchId = _useState2[0];

  var _useState3 = (0, _react.useState)((0, _make_id.default)()),
      _useState4 = _slicedToArray(_useState3, 1),
      labelId = _useState4[0];

  var onClick = (0, _react.useCallback)(function (e) {
    if (disabled) {
      return;
    }

    var event = e;
    event.target.checked = !checked;
    onChange(event);
  }, [checked, disabled, onChange]);
  var classes = (0, _classnames.default)('euiSwitch', {
    'euiSwitch--compressed': compressed
  }, className);

  if (showLabel === false && typeof label !== 'string') {
    console.warn('EuiSwitch `label` must be a string when `showLabel` is false.');
  }

  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("button", _extends({
    id: switchId,
    "aria-checked": checked,
    className: "euiSwitch__button",
    role: "switch",
    type: type,
    disabled: disabled,
    onClick: onClick,
    "aria-label": showLabel ? undefined : label,
    "aria-labelledby": showLabel ? labelId : undefined
  }, rest), _react.default.createElement("span", {
    className: "euiSwitch__body"
  }, _react.default.createElement("span", {
    className: "euiSwitch__thumb"
  }), _react.default.createElement("span", {
    className: "euiSwitch__track"
  }, !compressed && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icon.EuiIcon, {
    type: "cross",
    size: "m",
    className: "euiSwitch__icon"
  }), _react.default.createElement(_icon.EuiIcon, {
    type: "check",
    size: "m",
    className: "euiSwitch__icon euiSwitch__icon--checked"
  }))))), showLabel && // <button> + <label> has poor screen reader support.
  // Click handler added to simulate natural, secondary <label> interactivity.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  _react.default.createElement("span", {
    className: "euiSwitch__label",
    id: labelId,
    onClick: onClick
  }, label));
};

exports.EuiSwitch = EuiSwitch;
EuiSwitch.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Whether to render the render the text label
       */
  showLabel: _propTypes.default.bool,

  /**
       * Must be a string if `showLabel` prop is false
       */
  label: _propTypes.default.oneOfType([_propTypes.default.node.isRequired, _propTypes.default.string.isRequired]).isRequired,
  checked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  compressed: _propTypes.default.bool
};
EuiSwitch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSwitch",
  "props": {
    "showLabel": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Whether to render the render the text label"
    },
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "required": false
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
    "label": {
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "string"
        }]
      },
      "required": true,
      "description": "Must be a string if `showLabel` prop is false"
    },
    "checked": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};