"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderLinks = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../../icon");

var _popover = require("../../popover");

var _i18n = require("../../i18n");

var _header_section = require("../header_section");

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

var EuiHeaderLinks =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiHeaderLinks, _Component);

  function EuiHeaderLinks() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiHeaderLinks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiHeaderLinks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuButtonClick", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      _this.setState({
        isOpen: false
      });
    });

    return _this;
  }

  _createClass(EuiHeaderLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.closeMenu);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.closeMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["children", "className"]);

      var classes = (0, _classnames.default)('euiHeaderLinks', className);

      var button = _react.default.createElement(_header_section.EuiHeaderSectionItem, {
        border: "left"
      }, _react.default.createElement(_i18n.EuiI18n, {
        token: "euiHeaderLinks.openNavigationMenu",
        default: "Open navigation menu"
      }, function (openNavigationMenu) {
        return _react.default.createElement(_header_section.EuiHeaderSectionItemButton, {
          "aria-label": openNavigationMenu,
          onClick: _this2.onMenuButtonClick
        }, _react.default.createElement(_icon.EuiIcon, {
          type: "apps",
          size: "m"
        }));
      }));

      return _react.default.createElement(_i18n.EuiI18n, {
        token: "euiHeaderLinks.appNavigation",
        default: "App navigation"
      }, function (appNavigation) {
        return _react.default.createElement("nav", _extends({
          className: classes,
          "aria-label": appNavigation
        }, rest), _react.default.createElement("div", {
          className: "euiHeaderLinks__list",
          role: "navigation"
        }, children), _react.default.createElement(_popover.EuiPopover, {
          className: "euiHeaderLinks__mobile",
          ownFocus: true,
          button: button,
          isOpen: _this2.state.isOpen,
          anchorPosition: "downRight",
          closePopover: _this2.closeMenu,
          panelClassName: "euiHeaderLinks__mobileList",
          panelPaddingSize: "none"
        }, children));
      });
    }
  }]);

  return EuiHeaderLinks;
}(_react.Component);

exports.EuiHeaderLinks = EuiHeaderLinks;
EuiHeaderLinks.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiHeaderLinks.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onMenuButtonClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeMenu",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiHeaderLinks",
  "props": {
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