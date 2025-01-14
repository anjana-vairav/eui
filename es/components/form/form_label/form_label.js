function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiFormLabel = function EuiFormLabel(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'label' : _ref$type,
      isFocused = _ref.isFocused,
      isInvalid = _ref.isInvalid,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["type", "isFocused", "isInvalid", "children", "className"]);

  var classes = classNames('euiFormLabel', className, {
    'euiFormLabel-isFocused': isFocused,
    'euiFormLabel-isInvalid': isInvalid
  });

  if (type === 'legend') {
    return React.createElement("legend", _extends({
      className: classes
    }, rest), children);
  } else {
    return React.createElement("label", _extends({
      className: classes
    }, rest), children);
  }
};
EuiFormLabel.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
     * Default type is a `label` but can be changed to a `legend`
     * if using inside a `fieldset`.
     */

  /**
     * Default type is a `label` but can be changed to a `legend`
     * if using inside a `fieldset`.
     */
  type: PropTypes.oneOfType([PropTypes.oneOfType([PropTypes.oneOf(["label"]), PropTypes.oneOf(["label", "legend"])]), PropTypes.oneOfType([PropTypes.oneOf(["legend"]).isRequired, PropTypes.oneOf(["label", "legend"])])]),
  isFocused: PropTypes.bool,
  isInvalid: PropTypes.bool
};
EuiFormLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFormLabel",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'label'",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }]
          }, {
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }, {
              "value": "\"legend\"",
              "computed": false
            }]
          }]
        }, {
          "name": "union",
          "value": [{
            "name": "enum",
            "value": [{
              "value": "\"legend\"",
              "computed": false
            }]
          }, {
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }, {
              "value": "\"legend\"",
              "computed": false
            }]
          }]
        }]
      },
      "required": false,
      "description": "Default type is a `label` but can be changed to a `legend`\nif using inside a `fieldset`."
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
    "isFocused": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};