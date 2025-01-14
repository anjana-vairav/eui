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
import classNames from 'classnames';
import { Browser } from '../../../services/browser';
import { ENTER } from '../../../services/key_codes';
import { EuiFormControlLayout } from '../form_control_layout';
import { EuiValidatableControl } from '../validatable_control';
var propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  inputRef: PropTypes.func,

  /**
   * Called when the user presses [Enter] OR on change if the incremental prop is `true`.
   * If you don't need the on[Enter] functionality, prefer using onChange
   */
  onSearch: PropTypes.func,

  /**
   * When `true` the search will be executed (that is, the `onSearch` will be called) as the
   * user types.
   */
  incremental: PropTypes.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool
};
var defaultProps = {
  fullWidth: false,
  isLoading: false,
  incremental: false,
  compressed: false
};
export var EuiFieldSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiFieldSearch, _Component);

  function EuiFieldSearch(props) {
    var _this;

    _classCallCheck(this, EuiFieldSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiFieldSearch).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRef", function (inputElement) {
      _this.inputElement = inputElement;

      if (_this.props.inputRef) {
        _this.props.inputRef(inputElement);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyUp", function (incremental, onSearch, event) {
      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);

        if (event.defaultPrevented) {
          return;
        }
      }

      if (onSearch && (incremental || event.keyCode === ENTER)) {
        onSearch(event.target.value);
      }
    });

    _this.cleanups = [];
    return _this;
  }

  _createClass(EuiFieldSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (Browser.isEventSupported('search', this.inputElement)) {
        var onSearch = function onSearch(event) {
          if (_this2.props.onSearch) {
            _this2.props.onSearch(event.target.value);
          }
        };

        this.inputElement.addEventListener('search', onSearch);
        this.cleanups.push(function () {
          return _this2.inputElement.removeEventListener('search', onSearch);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanups.forEach(function (cleanup) {
        return cleanup();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          isInvalid = _this$props.isInvalid,
          fullWidth = _this$props.fullWidth,
          isLoading = _this$props.isLoading,
          inputRef = _this$props.inputRef,
          incremental = _this$props.incremental,
          compressed = _this$props.compressed,
          onSearch = _this$props.onSearch,
          rest = _objectWithoutProperties(_this$props, ["className", "id", "name", "placeholder", "value", "isInvalid", "fullWidth", "isLoading", "inputRef", "incremental", "compressed", "onSearch"]);

      var classes = classNames('euiFieldSearch', {
        'euiFieldSearch--fullWidth': fullWidth,
        'euiFieldSearch--compressed': compressed,
        'euiFieldSearch-isLoading': isLoading
      }, className);
      return React.createElement(EuiFormControlLayout, {
        icon: "search",
        fullWidth: fullWidth,
        isLoading: isLoading,
        compressed: compressed
      }, React.createElement(EuiValidatableControl, {
        isInvalid: isInvalid
      }, React.createElement("input", _extends({
        type: "search",
        id: id,
        name: name,
        placeholder: placeholder,
        className: classes,
        value: value,
        onKeyUp: this.onKeyUp.bind(this, incremental, onSearch),
        ref: this.setRef
      }, rest))));
    }
  }]);

  return EuiFieldSearch;
}(Component);

_defineProperty(EuiFieldSearch, "propTypes", propTypes);

_defineProperty(EuiFieldSearch, "defaultProps", defaultProps);

EuiFieldSearch.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "inputElement",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onKeyUp",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "incremental",
      "type": null
    }, {
      "name": "onSearch",
      "type": null
    }, {
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiFieldSearch",
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
    "isLoading": {
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
    "incremental": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "When `true` the search will be executed (that is, the `onSearch` will be called) as the\nuser types."
    },
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "when `true` creates a shorter height input"
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
    "value": {
      "type": {
        "name": "string"
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
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onSearch": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Called when the user presses [Enter] OR on change if the incremental prop is `true`.\nIf you don't need the on[Enter] functionality, prefer using onChange"
    }
  }
};