"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSelectableListItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon2 = require("../../icon");

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function resolveIconAndColor(checked) {
  if (!checked) {
    return {
      icon: 'empty'
    };
  }

  return checked === 'on' ? {
    icon: 'check',
    color: 'text'
  } : {
    icon: 'cross',
    color: 'text'
  };
}

// eslint-disable-next-line react/prefer-stateless-function
var EuiSelectableListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSelectableListItem, _Component);

  function EuiSelectableListItem(props) {
    _classCallCheck(this, EuiSelectableListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiSelectableListItem).call(this, props));
  }

  _createClass(EuiSelectableListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          checked = _this$props.checked,
          isFocused = _this$props.isFocused,
          showIcons = _this$props.showIcons,
          prepend = _this$props.prepend,
          append = _this$props.append,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "checked", "isFocused", "showIcons", "prepend", "append"]);

      var classes = (0, _classnames.default)('euiSelectableListItem', {
        'euiSelectableListItem-isFocused': isFocused
      }, className);
      var buttonIcon;

      if (showIcons) {
        var _resolveIconAndColor = resolveIconAndColor(checked),
            _icon = _resolveIconAndColor.icon,
            _color = _resolveIconAndColor.color;

        buttonIcon = _react.default.createElement(_icon2.EuiIcon, {
          className: "euiSelectableListItem__icon",
          color: _color,
          type: _icon
        });
      }

      var prependNode;

      if (prepend) {
        prependNode = _react.default.createElement("span", {
          className: "euiSelectableListItem__prepend"
        }, prepend);
      }

      var appendNode;

      if (append) {
        appendNode = _react.default.createElement("span", {
          className: "euiSelectableListItem__append"
        }, append);
      }

      return _react.default.createElement("button", _extends({
        role: "option",
        type: "button",
        "aria-selected": isFocused,
        className: classes,
        disabled: disabled,
        "aria-disabled": disabled
      }, rest), _react.default.createElement("span", {
        className: "euiSelectableListItem__content"
      }, buttonIcon, prependNode, _react.default.createElement("span", {
        className: "euiSelectableListItem__text"
      }, children), appendNode));
    }
  }]);

  return EuiSelectableListItem;
}(_react.Component);

exports.EuiSelectableListItem = EuiSelectableListItem;

_defineProperty(EuiSelectableListItem, "defaultProps", {
  showIcons: true
});

EuiSelectableListItem.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  children: _propTypes.default.node,

  /**
       * Applies an icon and visual styling to activated items
       */
  checked: _propTypes.default.oneOf(["on", "off", undefined]),

  /**
       * Shows icons based on `checked` type
       */
  showIcons: _propTypes.default.bool.isRequired,

  /**
       * Highlights the item for pseudo focus
       */
  isFocused: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  prepend: _propTypes.default.node,
  append: _propTypes.default.node
};
EuiSelectableListItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSelectableListItem",
  "props": {
    "showIcons": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Shows icons based on `checked` type"
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
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "checked": {
      "type": {
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
        }]
      },
      "required": false,
      "description": "Applies an icon and visual styling to activated items"
    },
    "isFocused": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Highlights the item for pseudo focus"
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "prepend": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "append": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    }
  }
};