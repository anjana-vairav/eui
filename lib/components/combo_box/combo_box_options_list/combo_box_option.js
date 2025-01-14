"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _key_codes = require("../../../services/key_codes");

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

var EuiComboBoxOption =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiComboBoxOption, _Component);

  function EuiComboBoxOption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiComboBoxOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiComboBoxOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          option = _this$props.option,
          disabled = _this$props.disabled;

      if (disabled) {
        return;
      }

      onClick(option);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      if (e.keyCode === _key_codes.ENTER || e.keyCode === _key_codes.SPACE) {
        e.preventDefault();
        e.stopPropagation();
        var _this$props2 = _this.props,
            onEnterKey = _this$props2.onEnterKey,
            option = _this$props2.option,
            disabled = _this$props2.disabled;

        if (disabled) {
          return;
        }

        onEnterKey(option);
      }
    });

    return _this;
  }

  _createClass(EuiComboBoxOption, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          optionRef = _this$props3.optionRef,
          option = _this$props3.option,
          onClick = _this$props3.onClick,
          onEnterKey = _this$props3.onEnterKey,
          disabled = _this$props3.disabled,
          isFocused = _this$props3.isFocused,
          rest = _objectWithoutProperties(_this$props3, ["children", "className", "optionRef", "option", "onClick", "onEnterKey", "disabled", "isFocused"]);

      var classes = (0, _classnames.default)('euiComboBoxOption', className, {
        'euiComboBoxOption-isDisabled': disabled,
        'euiComboBoxOption-isFocused': isFocused
      });
      var label = option.label;
      return _react.default.createElement("button", _extends({
        role: "option",
        type: "button",
        "aria-selected": isFocused,
        className: classes,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        ref: optionRef,
        "aria-disabled": disabled,
        title: label
      }, rest), children);
    }
  }]);

  return EuiComboBoxOption;
}(_react.Component);

exports.EuiComboBoxOption = EuiComboBoxOption;

_defineProperty(EuiComboBoxOption, "propTypes", {
  option: _propTypes.default.object.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  optionRef: _propTypes.default.func,
  onClick: _propTypes.default.func.isRequired,
  onEnterKey: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  isFocused: _propTypes.default.bool.isRequired
});

EuiComboBoxOption.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiComboBoxOption",
  "props": {
    "option": {
      "type": {
        "name": "object"
      },
      "required": true,
      "description": ""
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
    },
    "optionRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onEnterKey": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isFocused": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    }
  }
};