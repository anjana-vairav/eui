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
import { EuiPortal } from '../portal';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiI18n } from '../i18n';
// Exported for testing
export var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiBottomBar--paddingSmall',
  m: 'euiBottomBar--paddingMedium',
  l: 'euiBottomBar--paddingLarge'
};
export var EuiBottomBar =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiBottomBar, _Component);

  function EuiBottomBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiBottomBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiBottomBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bar", null);

    return _this;
  }

  _createClass(EuiBottomBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = this.bar ? this.bar.clientHeight : -1;
      document.body.style.paddingBottom = "".concat(height, "px");

      if (this.props.bodyClassName) {
        document.body.classList.add(this.props.bodyClassName);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.paddingBottom = null;

      if (this.props.bodyClassName) {
        document.body.classList.remove(this.props.bodyClassName);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          _this$props$paddingSi = _this$props.paddingSize,
          paddingSize = _this$props$paddingSi === void 0 ? 'm' : _this$props$paddingSi,
          bodyClassName = _this$props.bodyClassName,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "paddingSize", "bodyClassName"]);

      var classes = classNames('euiBottomBar', paddingSizeToClassNameMap[paddingSize], className);
      return React.createElement(EuiPortal, null, React.createElement(EuiScreenReaderOnly, null, React.createElement("p", {
        "aria-live": "assertive"
      }, React.createElement(EuiI18n, {
        token: "euiBottomBar.screenReaderAnnouncement",
        default: "There is a new menu opening with page level controls at the end of the document."
      }))), React.createElement("div", _extends({
        className: classes,
        ref: function ref(node) {
          _this2.bar = node;
        }
      }, rest), children));
    }
  }]);

  return EuiBottomBar;
}(Component);
EuiBottomBar.propTypes = {
  /**
     * Optional class applied to the body class
     */
  bodyClassName: PropTypes.string,

  /**
     * Padding applied to the bar
     */
  paddingSize: PropTypes.oneOf(["none", "s", "m", "l"]),
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiBottomBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiBottomBar",
  "props": {
    "bodyClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Optional class applied to the body class"
    },
    "paddingSize": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Padding applied to the bar"
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