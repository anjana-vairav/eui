function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiFlyoutHeader = function EuiFlyoutHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$hasBorder = _ref.hasBorder,
      hasBorder = _ref$hasBorder === void 0 ? false : _ref$hasBorder,
      rest = _objectWithoutProperties(_ref, ["children", "className", "hasBorder"]);

  var classes = classNames('euiFlyoutHeader', {
    'euiFlyoutHeader--hasBorder': hasBorder
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};
EuiFlyoutHeader.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  hasBorder: PropTypes.bool
};
EuiFlyoutHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFlyoutHeader",
  "props": {
    "hasBorder": {
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