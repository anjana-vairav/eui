function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { EuiFieldSearch } from '../form/field_search/field_search';
import PropTypes from 'prop-types';
export var SchemaType = PropTypes.shape({
  strict: PropTypes.bool,
  fields: PropTypes.object,
  flags: PropTypes.arrayOf(PropTypes.string)
});
export var SearchBoxConfigPropTypes = {
  placeholder: PropTypes.string,
  incremental: PropTypes.bool,
  schema: SchemaType
};
export var EuiSearchBox =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSearchBox, _Component);

  function EuiSearchBox(props) {
    _classCallCheck(this, EuiSearchBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiSearchBox).call(this, props));
  }

  _createClass(EuiSearchBox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.query !== this.props.query) {
        this.inputElement.value = this.props.query;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          query = _this$props.query,
          incremental = _this$props.incremental,
          _onSearch = _this$props.onSearch,
          isInvalid = _this$props.isInvalid,
          title = _this$props.title,
          rest = _objectWithoutProperties(_this$props, ["placeholder", "query", "incremental", "onSearch", "isInvalid", "title"]);

      var ariaLabel;

      if (incremental) {
        ariaLabel = 'This is a search bar. As you type, the results lower in the page will automatically filter.';
      } else {
        ariaLabel = 'This is a search bar. After typing your query, hit enter to filter the results lower in the page.';
      }

      return React.createElement(EuiFieldSearch, _extends({
        inputRef: function inputRef(input) {
          return _this.inputElement = input;
        },
        fullWidth: true,
        placeholder: placeholder,
        defaultValue: query,
        incremental: incremental,
        onSearch: function onSearch(query) {
          return _onSearch(query);
        },
        isInvalid: isInvalid,
        "aria-label": ariaLabel,
        title: title
      }, rest));
    }
  }]);

  return EuiSearchBox;
}(Component);

_defineProperty(EuiSearchBox, "propTypes", _objectSpread({
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  // (queryText) => void
  isInvalid: PropTypes.bool,
  title: PropTypes.string
}, SearchBoxConfigPropTypes));

_defineProperty(EuiSearchBox, "defaultProps", {
  placeholder: 'Search...',
  incremental: false
});

EuiSearchBox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSearchBox",
  "props": {
    "placeholder": {
      "defaultValue": {
        "value": "'Search...'",
        "computed": false
      },
      "type": {
        "name": "string"
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
      "description": ""
    },
    "query": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onSearch": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "schema": {
      "type": {
        "name": "custom",
        "raw": "SchemaType"
      },
      "required": false,
      "description": ""
    }
  }
};