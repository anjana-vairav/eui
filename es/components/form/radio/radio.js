function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiRadio = function EuiRadio(_ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      autoFocus = _ref.autoFocus,
      rest = _objectWithoutProperties(_ref, ["className", "id", "name", "checked", "label", "value", "onChange", "disabled", "compressed", "autoFocus"]);

  var classes = classNames('euiRadio', {
    'euiRadio--noLabel': !label,
    'euiRadio--compressed': compressed
  }, className);
  var optionalLabel;

  if (label) {
    optionalLabel = React.createElement("label", {
      className: "euiRadio__label",
      htmlFor: id
    }, label);
  }

  return React.createElement("div", _extends({
    className: classes
  }, rest), React.createElement("input", {
    className: "euiRadio__input",
    type: "radio",
    id: id,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    autoFocus: autoFocus
  }), React.createElement("div", {
    className: "euiRadio__circle"
  }), optionalLabel);
};
EuiRadio.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  autoFocus: PropTypes.bool,

  /**
     * When `true` creates a shorter height radio row
     */
  compressed: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.any.isRequired
};
EuiRadio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRadio",
  "props": {
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
    "autoFocus": {
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
      "description": "When `true` creates a shorter height radio row"
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "checked": {
      "type": {
        "name": "bool"
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
    "onChange": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    }
  }
};