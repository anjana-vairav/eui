"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckbox = exports.TYPES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

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

var typeToClassNameMap = {
  inList: 'euiCheckbox--inList'
};
var TYPES = (0, _common.keysOf)(typeToClassNameMap);
exports.TYPES = TYPES;

var EuiCheckbox =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiCheckbox, _Component);

  function EuiCheckbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", undefined);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInputRef", function (input) {
      _this.inputRef = input;

      if (_this.props.inputRef) {
        _this.props.inputRef(input);
      }

      _this.invalidateIndeterminate();
    });

    return _this;
  }

  _createClass(EuiCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.invalidateIndeterminate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.invalidateIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          checked = _this$props.checked,
          label = _this$props.label,
          onChange = _this$props.onChange,
          type = _this$props.type,
          disabled = _this$props.disabled,
          compressed = _this$props.compressed,
          rest = _objectWithoutProperties(_this$props, ["className", "id", "checked", "label", "onChange", "type", "disabled", "compressed"]);

      var indeterminate = rest.indeterminate,
          inputProps = _objectWithoutProperties(rest, ["indeterminate"]); // `indeterminate` is set dynamically later


      var classes = (0, _classnames.default)('euiCheckbox', type && typeToClassNameMap[type], {
        'euiCheckbox--noLabel': !label,
        'euiCheckbox--compressed': compressed
      }, className);
      var optionalLabel;

      if (label) {
        optionalLabel = _react.default.createElement("label", {
          className: "euiCheckbox__label",
          htmlFor: id
        }, label);
      }

      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement("input", _extends({
        className: "euiCheckbox__input",
        type: "checkbox",
        id: id,
        checked: checked,
        onChange: onChange,
        disabled: disabled,
        ref: this.setInputRef
      }, inputProps)), _react.default.createElement("div", {
        className: "euiCheckbox__square"
      }), optionalLabel);
    }
  }, {
    key: "invalidateIndeterminate",
    value: function invalidateIndeterminate() {
      if (this.inputRef) {
        this.inputRef.indeterminate = this.props.indeterminate;
      }
    }
  }]);

  return EuiCheckbox;
}(_react.Component);

exports.EuiCheckbox = EuiCheckbox;

_defineProperty(EuiCheckbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  compressed: false
});

EuiCheckbox.propTypes = {
  id: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.any.isRequired,
  // overriding to make it required
  inputRef: _propTypes.default.func,
  label: _propTypes.default.node,
  type: _propTypes.default.oneOf(["inList"]),
  disabled: _propTypes.default.bool,

  /**
     * when `true` creates a shorter height checkbox row
     */
  compressed: _propTypes.default.bool,
  indeterminate: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiCheckbox.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setInputRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "input",
      "type": null
    }],
    "returns": null
  }, {
    "name": "invalidateIndeterminate",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiCheckbox",
  "props": {
    "checked": {
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
    "disabled": {
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
    "indeterminate": {
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
    "compressed": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "when `true` creates a shorter height checkbox row"
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "inputRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "type": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"inList\"",
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