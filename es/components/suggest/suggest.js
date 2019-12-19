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
import PropTypes from 'prop-types';
import { EuiSuggestItem } from './suggest_item';
import { EuiSuggestInput } from './suggest_input';
export var EuiSuggest =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSuggest, _Component);

  function EuiSuggest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiSuggest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiSuggest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      status: 'unsaved'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getValue", function (val) {
      _this.setState({
        value: val
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      _this.props.onInputChange(e.target.value);
    });

    return _this;
  }

  _createClass(EuiSuggest, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onItemClick = _this$props.onItemClick,
          onInputChange = _this$props.onInputChange,
          status = _this$props.status,
          append = _this$props.append,
          tooltipContent = _this$props.tooltipContent,
          suggestions = _this$props.suggestions,
          rest = _objectWithoutProperties(_this$props, ["onItemClick", "onInputChange", "status", "append", "tooltipContent", "suggestions"]);

      var suggestionList = suggestions.map(function (item, index) {
        return React.createElement(EuiSuggestItem, {
          type: item.type,
          key: index,
          label: item.label,
          onClick: onItemClick ? function () {
            return onItemClick(item);
          } : null,
          description: item.description
        });
      });
      var suggestInput = React.createElement(EuiSuggestInput, _extends({
        status: status,
        tooltipContent: tooltipContent,
        append: append,
        sendValue: this.getValue,
        suggestions: suggestionList
      }, rest));
      return React.createElement("div", {
        onChange: this.onChange
      }, suggestInput);
    }
  }]);

  return EuiSuggest;
}(Component);
EuiSuggest.propTypes = {
  className: PropTypes.string,

  /**
   * Status of the current query 'notYetSaved', 'saved', 'unchanged' or 'loading'.
   */
  status: PropTypes.oneOf(['unsaved', 'saved', 'unchanged', 'loading']),
  tooltipContent: PropTypes.string,

  /**
   * Element to be appended to the input bar (e.g. hashtag popover).
   */
  append: PropTypes.node,

  /**
   * List of suggestions to display using 'suggestItem'.
   */
  suggestions: PropTypes.array,

  /**
   * Handler for click on a suggestItem.
   */
  onItemClick: PropTypes.func,
  onInputChange: PropTypes.func
};
EuiSuggestInput.defaultProps = {
  status: 'unchanged'
};
EuiSuggest.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getValue",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "val",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSuggest",
  "props": {
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "status": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'unsaved'",
          "computed": false
        }, {
          "value": "'saved'",
          "computed": false
        }, {
          "value": "'unchanged'",
          "computed": false
        }, {
          "value": "'loading'",
          "computed": false
        }]
      },
      "required": false,
      "description": "Status of the current query 'notYetSaved', 'saved', 'unchanged' or 'loading'."
    },
    "tooltipContent": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "append": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Element to be appended to the input bar (e.g. hashtag popover)."
    },
    "suggestions": {
      "type": {
        "name": "array"
      },
      "required": false,
      "description": "List of suggestions to display using 'suggestItem'."
    },
    "onItemClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Handler for click on a suggestItem."
    },
    "onInputChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};