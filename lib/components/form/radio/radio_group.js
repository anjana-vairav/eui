"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRadioGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radio = require("./radio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiRadioGroup = function EuiRadioGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      idSelected = _ref.idSelected,
      onChange = _ref.onChange,
      name = _ref.name,
      className = _ref.className,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["options", "idSelected", "onChange", "name", "className", "disabled", "compressed"]);

  return _react.default.createElement("div", _extends({
    className: className
  }, rest), options.map(function (option, index) {
    var isOptionDisabled = option.disabled,
        optionRest = _objectWithoutProperties(option, ["disabled"]);

    return _react.default.createElement(_radio.EuiRadio, _extends({
      className: "euiRadioGroup__item",
      key: index,
      name: name,
      checked: option.id === idSelected,
      disabled: disabled || isOptionDisabled,
      onChange: onChange.bind(null, option.id, option.value),
      compressed: compressed
    }, optionRest));
  }));
};

exports.EuiRadioGroup = EuiRadioGroup;
EuiRadioGroup.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /**
       * Tightens up the spacing between radio rows and sends down the
       * compressed prop to the radio itself
       */
  compressed: _propTypes.default.bool,
  name: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired
  }).isRequired).isRequired,
  idSelected: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired
};
EuiRadioGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRadioGroup",
  "props": {
    "options": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            }
          }
        }
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
      "description": "Tightens up the spacing between radio rows and sends down the\ncompressed prop to the radio itself"
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "idSelected": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};