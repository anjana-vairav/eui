function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
export var EuiLoadingContent = function EuiLoadingContent(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 3 : _ref$lines,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["lines", "className"]);

  var classes = classNames('euiLoadingContent', className);
  var lineElements = [];

  for (var i = 0; i < lines; i++) {
    lineElements.push(React.createElement("span", {
      key: i,
      className: "euiLoadingContent__singleLine"
    }, React.createElement("span", {
      className: "euiLoadingContent__singleLineBackground"
    })));
  }

  return React.createElement("span", _extends({
    className: classes
  }, rest), lineElements);
};
EuiLoadingContent.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  lines: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
};
EuiLoadingContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiLoadingContent",
  "props": {
    "lines": {
      "defaultValue": {
        "value": "3",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "1",
          "computed": false
        }, {
          "value": "2",
          "computed": false
        }, {
          "value": "3",
          "computed": false
        }, {
          "value": "4",
          "computed": false
        }, {
          "value": "5",
          "computed": false
        }, {
          "value": "6",
          "computed": false
        }, {
          "value": "7",
          "computed": false
        }, {
          "value": "8",
          "computed": false
        }, {
          "value": "9",
          "computed": false
        }, {
          "value": "10",
          "computed": false
        }]
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