function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiCallOut } from '../call_out';
import { EuiI18n } from '../i18n';
export var EuiForm = function EuiForm(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isInvalid = _ref.isInvalid,
      error = _ref.error,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isInvalid", "error"]);

  var classes = classNames('euiForm', className);
  var optionalErrors;

  if (error) {
    var errorTexts = Array.isArray(error) ? error : [error];
    optionalErrors = React.createElement("ul", null, errorTexts.map(function (error) {
      return React.createElement("li", {
        className: "euiForm__error",
        key: error
      }, error);
    }));
  }

  var optionalErrorAlert;

  if (isInvalid) {
    optionalErrorAlert = React.createElement(EuiI18n, {
      token: "euiForm.addressFormErrors",
      default: "Please address the errors in your form."
    }, function (addressFormErrors) {
      return React.createElement(EuiCallOut, {
        className: "euiForm__errors",
        title: addressFormErrors,
        color: "danger"
      }, optionalErrors);
    });
  }

  return React.createElement("div", _extends({
    className: classes
  }, rest), optionalErrorAlert, children);
};
EuiForm.propTypes = {
  isInvalid: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
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