"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFieldSearch = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _browser = require("../../../services/browser");

var _key_codes = require("../../../services/key_codes");

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  inputRef: _propTypes.default.func,

  /**
   * Called when the user presses [Enter] OR on change if the incremental prop is `true`.
   * If you don't need the on[Enter] functionality, prefer using onChange
   */
  onSearch: _propTypes.default.func,

  /**
   * When `true` the search will be executed (that is, the `onSearch` will be called) as the
   * user types.
   */
  incremental: _propTypes.default.bool,

  /**
   * when `true` creates a shorter height input
   */
  compressed: _propTypes.default.bool
};
var defaultProps = {
  fullWidth: false,
  isLoading: false,
  incremental: false,
  compressed: false
};

var EuiFieldSearch =
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

      if (onSearch && (incremental || event.keyCode === _key_codes.ENTER)) {
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

      if (_browser.Browser.isEventSupported('search', this.inputElement)) {
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

      var classes = (0, _classnames.default)('euiFieldSearch', {
        'euiFieldSearch--fullWidth': fullWidth,
        'euiFieldSearch--compressed': compressed,
        'euiFieldSearch-isLoading': isLoading
      }, className);
      return _react.default.createElement(_form_control_layout.EuiFormControlLayout, {
        icon: "search",
        fullWidth: fullWidth,
        isLoading: isLoading,
        compressed: compressed
      }, _react.default.createElement(_validatable_control.EuiValidatableControl, {
        isInvalid: isInvalid
      }, _react.default.createElement("input", _extends({
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
}(_react.Component);

exports.EuiFieldSearch = EuiFieldSearch;

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