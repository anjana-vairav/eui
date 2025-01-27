import React from 'react';
import PropTypes from "prop-types";
import { EuiI18nConsumer } from '../context';
var defaultFormatter = new Intl.NumberFormat('en');

function defaultFormatNumber(value) {
  return defaultFormatter.format(value);
}

function hasValues(x) {
  return x.values != null;
}

var EuiI18nNumber = function EuiI18nNumber(props) {
  return React.createElement(EuiI18nConsumer, null, function (i18nConfig) {
    var formatNumber = i18nConfig.formatNumber || defaultFormatNumber;

    if (hasValues(props)) {
      return props.children(props.values.map(function (value) {
        return formatNumber(value);
      }));
    }

    var formattedValue = (formatNumber || defaultFormatNumber)(props.value);

    if (props.children) {
      return props.children(formattedValue);
    } else {
      return formattedValue;
    }
  });
};

EuiI18nNumber.propTypes = {
  value: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.func.isRequired]),
  values: PropTypes.arrayOf(PropTypes.number.isRequired)
};
export { EuiI18nNumber };
EuiI18nNumber.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiI18nNumber",
  "props": {
    "value": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "values": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false,
      "description": ""
    }
  }
};