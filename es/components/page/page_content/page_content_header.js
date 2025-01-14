function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var EuiPageContentHeader = function EuiPageContentHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      responsive = _ref.responsive,
      rest = _objectWithoutProperties(_ref, ["children", "className", "responsive"]);

  var classes = classNames('euiPageContentHeader', {
    'euiPageContentHeader--responsive': responsive
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};
EuiPageContentHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Set to false if you don't want the children to stack
   * at small screen sizes.
   */
  responsive: PropTypes.bool
};
EuiPageContentHeader.defaultProps = {
  responsive: true
};
EuiPageContentHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiPageContentHeader",
  "props": {
    "responsive": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set to false if you don't want the children to stack\nat small screen sizes."
    },
    "children": {
      "type": {
        "name": "node"
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
    }
  }
};