"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckboxGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkbox = require("./checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCheckboxGroup = function EuiCheckboxGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$idToSelectedMap = _ref.idToSelectedMap,
      idToSelectedMap = _ref$idToSelectedMap === void 0 ? {} : _ref$idToSelectedMap,
      onChange = _ref.onChange,
      className = _ref.className,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ["options", "idToSelectedMap", "onChange", "className", "disabled", "compressed"]);

  return _react.default.createElement("div", _extends({
    className: className
  }, rest), options.map(function (option, index) {
    return _react.default.createElement(_checkbox.EuiCheckbox, {
      className: "euiCheckboxGroup__item",
      key: index,
      id: option.id,
      checked: idToSelectedMap[option.id],
      label: option.label,
      disabled: disabled || option.disabled,
      onChange: onChange.bind(null, option.id),
      compressed: compressed
    });
  }));
};

exports.EuiCheckboxGroup = EuiCheckboxGroup;
EuiCheckboxGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.node,
    disabled: _propTypes.default.bool
  }).isRequired).isRequired,
  idToSelectedMap: _propTypes.default.shape({}).isRequired,
  onChange: _propTypes.default.func.isRequired,

  /**
     * Tightens up the spacing between checkbox rows and sends down the
     * compressed prop to the checkbox itself
     */
  compressed: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiCheckboxGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCheckboxGroup",
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
            },
            "label": {
              "name": "node",
              "required": false
            },
            "disabled": {
              "name": "bool",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": ""
    },
    "idToSelectedMap": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {}
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
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Tightens up the spacing between checkbox rows and sends down the\ncompressed prop to the checkbox itself"
    },
    "disabled": {
      "type": {
        "name": "bool"
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