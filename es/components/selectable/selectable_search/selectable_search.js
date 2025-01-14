function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
// @ts-ignore
import { EuiFieldSearch } from '../../form/field_search';
import { getMatchingOptions } from '../matching_options';
export var EuiSelectableSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSelectableSearch, _Component);

  function EuiSelectableSearch(props) {
    var _this;

    _classCallCheck(this, EuiSelectableSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSelectableSearch).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchChange", function (value) {
      _this.setState({
        searchValue: value
      });

      var options = _this.props.options;
      var matchingOptions = getMatchingOptions(options, value);

      _this.passUpMatches(matchingOptions, value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "passUpMatches", function (matches, searchValue) {
      if (_this.props.onChange) {
        _this.props.onChange(matches, searchValue);
      }
    });

    _this.state = {
      searchValue: props.defaultValue
    };
    return _this;
  }

  _createClass(EuiSelectableSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;
      var searchValue = this.state.searchValue;
      var matchingOptions = getMatchingOptions(options, searchValue);
      this.passUpMatches(matchingOptions, searchValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onChange = _this$props.onChange,
          options = _this$props.options,
          defaultValue = _this$props.defaultValue,
          rest = _objectWithoutProperties(_this$props, ["className", "onChange", "options", "defaultValue"]);

      var classes = classNames('euiSelectableSearch', className);
      return React.createElement(EuiFieldSearch, _extends({
        className: classes,
        placeholder: "Filter options",
        onSearch: this.onSearchChange,
        incremental: true,
        defaultValue: defaultValue,
        fullWidth: true
      }, rest));
    }
  }]);

  return EuiSelectableSearch;
}(Component);

_defineProperty(EuiSelectableSearch, "defaultProps", {
  defaultValue: ''
});

EuiSelectableSearch.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Passes back (matchingOptions, searchValue)
       */
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Visible label of option. Must be unique across items if `key` is not supplied
       */
    label: PropTypes.string.isRequired,

    /**
       * Must be unique across items
       */
    key: PropTypes.string,

    /**
       * Leave off to indicate not selected,
       * 'on' to indicate inclusion and
       * 'off' to indicate exclusion
       */
    checked: PropTypes.oneOf(["on", "off", undefined]),
    disabled: PropTypes.bool,

    /**
       * Set to true to indicate object is just a grouping label, not a selectable item
       */
    isGroupLabel: PropTypes.bool,

    /**
       * Node to add between the selection icon and the label
       */
    prepend: PropTypes.node,

    /**
       * Node to add to the far right of the item
       */
    append: PropTypes.node,
    ref: PropTypes.func,
    className: PropTypes.string,
    "aria-label": PropTypes.string,
    "data-test-subj": PropTypes.string
  }).isRequired).isRequired,
  defaultValue: PropTypes.string.isRequired
};
EuiSelectableSearch.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onSearchChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "passUpMatches",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "matches",
      "type": null
    }, {
      "name": "searchValue",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSelectableSearch",
  "props": {
    "defaultValue": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "type": {
        "name": "string"
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
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Passes back (matchingOptions, searchValue)"
    },
    "options": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "label": {
              "name": "string",
              "description": "Visible label of option. Must be unique across items if `key` is not supplied",
              "required": true
            },
            "key": {
              "name": "string",
              "description": "Must be unique across items",
              "required": false
            },
            "checked": {
              "name": "enum",
              "value": [{
                "value": "\"on\"",
                "computed": false
              }, {
                "value": "\"off\"",
                "computed": false
              }, {
                "value": "undefined",
                "computed": true
              }],
              "description": "Leave off to indicate not selected,\n'on' to indicate inclusion and\n'off' to indicate exclusion",
              "required": false
            },
            "disabled": {
              "name": "bool",
              "required": false
            },
            "isGroupLabel": {
              "name": "bool",
              "description": "Set to true to indicate object is just a grouping label, not a selectable item",
              "required": false
            },
            "prepend": {
              "name": "node",
              "description": "Node to add between the selection icon and the label",
              "required": false
            },
            "append": {
              "name": "node",
              "description": "Node to add to the far right of the item",
              "required": false
            },
            "ref": {
              "name": "func",
              "required": false
            },
            "className": {
              "name": "string",
              "required": false
            },
            "aria-label": {
              "name": "string",
              "required": false
            },
            "data-test-subj": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": true,
      "description": ""
    }
  }
};