function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EuiValidatableControl } from '../validatable_control';
var resizeToClassNameMap = {
  vertical: 'euiTextArea--resizeVertical',
  horizontal: 'euiTextArea--resizeHorizontal',
  both: 'euiTextArea--resizeBoth',
  none: 'euiTextArea--resizeNone'
};
export var RESIZE = Object.keys(resizeToClassNameMap);
export var EuiTextArea = function EuiTextArea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      compressed = _ref.compressed,
      fullWidth = _ref.fullWidth,
      id = _ref.id,
      inputRef = _ref.inputRef,
      isInvalid = _ref.isInvalid,
      name = _ref.name,
      placeholder = _ref.placeholder,
      resize = _ref.resize,
      rows = _ref.rows,
      rest = _objectWithoutProperties(_ref, ["children", "className", "compressed", "fullWidth", "id", "inputRef", "isInvalid", "name", "placeholder", "resize", "rows"]);

  var classes = classNames('euiTextArea', resizeToClassNameMap[resize], {
    'euiTextArea--fullWidth': fullWidth,
    'euiTextArea--compressed': compressed
  }, className);
  var definedRows;

  if (rows) {
    definedRows = rows;
  } else if (compressed) {
    definedRows = 3;
  } else {
    definedRows = 6;
  }

  return React.createElement(EuiValidatableControl, {
    isInvalid: isInvalid
  }, React.createElement("textarea", _extends({
    className: classes
  }, rest, {
    rows: definedRows,
    name: name,
    id: id,
    ref: inputRef,
    placeholder: placeholder
  }), children));
};
EuiTextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  compressed: PropTypes.bool,

  /**
   * Which direction, if at all, should the textarea resize
   */
  resize: PropTypes.oneOf(RESIZE)
};
EuiTextArea.defaultProps = {
  fullWidth: false,
  resize: 'vertical'
};
EuiTextArea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTextArea",
  "props": {
    "fullWidth": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "resize": {
      "defaultValue": {
        "value": "'vertical'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"vertical\"",
          "computed": false
        }, {
          "value": "\"horizontal\"",
          "computed": false
        }, {
          "value": "\"both\"",
          "computed": false
        }, {
          "value": "\"none\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Which direction, if at all, should the textarea resize"
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "placeholder": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "rows": {
      "type": {
        "name": "number"
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