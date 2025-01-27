"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckableCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radio = require("../../form/radio");

var _checkbox = require("../../form/checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCheckableCard = function EuiCheckableCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$checkableType = _ref.checkableType,
      checkableType = _ref$checkableType === void 0 ? 'radio' : _ref$checkableType,
      label = _ref.label,
      checked = _ref.checked,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["children", "className", "checkableType", "label", "checked", "disabled"]);

  var id = rest.id;
  var classes = (0, _classnames.default)('euiCheckableCard', {
    'euiCheckableCard-isChecked': checked,
    'euiCheckableCard-isDisabled': disabled
  }, className);
  var checkableElement;

  if (checkableType === 'radio') {
    checkableElement = _react.default.createElement(_radio.EuiRadio, _extends({
      checked: checked,
      disabled: disabled
    }, rest));
  } else {
    checkableElement = _react.default.createElement(_checkbox.EuiCheckbox, _extends({
      checked: checked,
      disabled: disabled
    }, rest));
  }

  var labelClasses = (0, _classnames.default)('euiCheckableCard__label', {
    'euiCheckableCard__label-isDisabled': disabled
  });
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "euiCheckableCard__row"
  }, _react.default.createElement("div", {
    className: "euiCheckableCard__control"
  }, checkableElement), _react.default.createElement("label", {
    className: labelClasses,
    htmlFor: id,
    "aria-describedby": children ? "".concat(id, "-details") : undefined
  }, label)), children && _react.default.createElement("div", {
    className: "euiCheckableCard__row"
  }, _react.default.createElement("div", {
    className: "euiCheckableCard__control"
  }), _react.default.createElement("div", {
    id: "".concat(id, "-details"),
    className: "euiCheckableCard__children"
  }, children)));
};

exports.EuiCheckableCard = EuiCheckableCard;
EuiCheckableCard.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.node.isRequired,

  /**
     * Whether the control is a radio button or checkbox
     */
  checkableType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["checkbox"]), _propTypes.default.oneOf(["radio"])])
};
EuiCheckableCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCheckableCard",
  "props": {
    "checkableType": {
      "defaultValue": {
        "value": "'radio'",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "\"checkbox\"",
            "computed": false
          }]
        }, {
          "name": "enum",
          "value": [{
            "value": "\"radio\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Whether the control is a radio button or checkbox"
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    }
  }
};