"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomItemAction = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomItemAction =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomItemAction, _Component);

  function CustomItemAction(props) {
    var _this;

    _classCallCheck(this, CustomItemAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomItemAction).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mounted", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      if (_this.mounted) {
        _this.setState({
          hasFocus: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      if (_this.mounted) {
        _this.setState({
          hasFocus: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasFocus", function () {
      return _this.state.hasFocus;
    });

    _this.state = {
      hasFocus: false
    }; // while generally considered an anti-pattern, here we require
    // to do that as the onFocus/onBlur events of the action controls
    // may trigger while this component is unmounted. An alternative
    // (at least the workarounds suggested by react is to unregister
    // the onFocus/onBlur listeners from the action controls... this
    // unfortunately will lead to unecessarily complex code... so we'll
    // stick to this approach for now)

    _this.mounted = false;
    return _this;
  }

  _createClass(CustomItemAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          enabled = _this$props.enabled,
          item = _this$props.item,
          className = _this$props.className;
      var tool = action.render(item, enabled);
      var clonedTool = (0, _react.cloneElement)(tool, {
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });
      var style = this.hasFocus() ? {
        opacity: 1
      } : undefined;
      return _react.default.createElement("div", {
        style: style,
        className: className
      }, clonedTool);
    }
  }]);

  return CustomItemAction;
}(_react.Component);

exports.CustomItemAction = CustomItemAction;
CustomItemAction.propTypes = {
  action: _propTypes.default.any.isRequired,
  enabled: _propTypes.default.bool.isRequired,
  item: _propTypes.default.any.isRequired,
  className: _propTypes.default.string.isRequired,
  index: _propTypes.default.number
};
CustomItemAction.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onBlur",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "hasFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CustomItemAction",
  "props": {
    "action": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "enabled": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "item": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "index": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    }
  }
};