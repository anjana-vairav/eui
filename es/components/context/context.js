import React, { createContext } from 'react';
import PropTypes from "prop-types";
var I18nContext = createContext({});
var EuiI18nProvider = I18nContext.Provider,
    EuiI18nConsumer = I18nContext.Consumer;

var EuiContext = function EuiContext(_ref) {
  var _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
      children = _ref.children;
  return React.createElement(EuiI18nProvider, {
    value: i18n
  }, children);
};

EuiContext.propTypes = {
  i18n: PropTypes.shape({
    mapping: PropTypes.shape({}),
    mappingFunc: PropTypes.func,
    formatNumber: PropTypes.func,
    formatDateTime: PropTypes.func,
    locale: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired
};
export { EuiContext, EuiI18nConsumer };
EuiContext.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiContext",
  "props": {
    "i18n": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {
          "mapping": {
            "name": "shape",
            "value": {},
            "required": false
          },
          "mappingFunc": {
            "name": "func",
            "required": false
          },
          "formatNumber": {
            "name": "func",
            "required": false
          },
          "formatDateTime": {
            "name": "func",
            "required": false
          },
          "locale": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
    }
  }
};