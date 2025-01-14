"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _call_out = require("../call_out");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiForm = function EuiForm(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isInvalid = _ref.isInvalid,
      error = _ref.error,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isInvalid", "error"]);

  var classes = (0, _classnames.default)('euiForm', className);
  var optionalErrors;

  if (error) {
    var errorTexts = Array.isArray(error) ? error : [error];
    optionalErrors = _react.default.createElement("ul", null, errorTexts.map(function (error) {
      return _react.default.createElement("li", {
        className: "euiForm__error",
        key: error
      }, error);
    }));
  }

  var optionalErrorAlert;

  if (isInvalid) {
    optionalErrorAlert = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiForm.addressFormErrors",
      default: "Please address the errors in your form."
    }, function (addressFormErrors) {
      return _react.default.createElement(_call_out.EuiCallOut, {
        className: "euiForm__errors",
        title: addressFormErrors,
        color: "danger"
      }, optionalErrors);
    });
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), optionalErrorAlert, children);
};

exports.EuiForm = EuiForm;
EuiForm.propTypes = {
  isInvalid: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)])
};
EuiForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiForm",
  "props": {
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "error": {
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "node"
          }
        }]
      },
      "required": false,
      "description": ""
    }
  }
};