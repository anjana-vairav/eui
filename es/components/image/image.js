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
import { EuiOverlayMask } from '../overlay_mask';
import { EuiIcon } from '../icon';
import { EuiI18n } from '../i18n';
import { EuiFocusTrap } from '../focus_trap';
import { keyCodes } from '../../services';
var sizeToClassNameMap = {
  s: 'euiImage--small',
  m: 'euiImage--medium',
  l: 'euiImage--large',
  xl: 'euiImage--xlarge',
  fullWidth: 'euiImage--fullWidth',
  original: ''
};
export var SIZES = Object.keys(sizeToClassNameMap);
var fullScreenIconColorMap = {
  light: 'ghost',
  dark: 'default'
};
export var EuiImage =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiImage, _Component);

  function EuiImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isFullScreenActive: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.keyCode === keyCodes.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();

        _this.closeFullScreen();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeFullScreen", function () {
      _this.setState({
        isFullScreenActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openFullScreen", function () {
      _this.setState({
        isFullScreenActive: true
      });
    });

    return _this;
  }

  _createClass(EuiImage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          url = _this$props.url,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'original' : _this$props$size,
          caption = _this$props.caption,
          hasShadow = _this$props.hasShadow,
          allowFullScreen = _this$props.allowFullScreen,
          _this$props$fullScree = _this$props.fullScreenIconColor,
          fullScreenIconColor = _this$props$fullScree === void 0 ? 'light' : _this$props$fullScree,
          alt = _this$props.alt,
          rest = _objectWithoutProperties(_this$props, ["className", "url", "size", "caption", "hasShadow", "allowFullScreen", "fullScreenIconColor", "alt"]);

      var isFullScreenActive = this.state.isFullScreenActive;
      var classes = classNames('euiImage', sizeToClassNameMap[size], {
        'euiImage--hasShadow': hasShadow,
        'euiImage--allowFullScreen': allowFullScreen
      }, className);
      var optionalCaption;

      if (caption) {
        optionalCaption = React.createElement("figcaption", {
          className: "euiImage__caption"
        }, caption);
      }

      var allowFullScreenIcon = React.createElement(EuiIcon, {
        type: "fullScreen",
        color: fullScreenIconColorMap[fullScreenIconColor],
        className: "euiImage__icon"
      });
      var fullScreenDisplay = React.createElement(EuiOverlayMask, {
        onClick: this.closeFullScreen
      }, React.createElement(EuiFocusTrap, {
        clickOutsideDisables: true
      }, React.createElement("figure", {
        className: "euiImage euiImage-isFullScreen",
        role: "figure",
        "aria-label": caption
      }, React.createElement(EuiI18n, {
        token: "euiImage.closeImage",
        values: {
          alt: alt
        },
        default: "Close full screen {alt} image"
      }, function (closeImage) {
        return React.createElement("button", {
          type: "button",
          "aria-label": closeImage,
          className: "euiImage__button",
          onClick: _this2.closeFullScreen,
          onKeyDown: _this2.onKeyDown
        }, React.createElement("img", _extends({
          src: url,
          alt: alt,
          className: "euiImage-isFullScreen__img"
        }, rest)), React.createElement(EuiIcon, {
          type: "cross",
          color: fullScreenIconColorMap[fullScreenIconColor],
          className: "euiImage-isFullScreen__icon"
        }));
      }), optionalCaption)));

      if (allowFullScreen) {
        return React.createElement("figure", {
          className: classes,
          role: "figure",
          "aria-label": caption
        }, React.createElement(EuiI18n, {
          token: "euiImage.openImage",
          values: {
            alt: alt
          },
          default: "Open full screen {alt} image"
        }, function (openImage) {
          return React.createElement("button", {
            type: "button",
            "aria-label": openImage,
            className: "euiImage__button",
            onClick: _this2.openFullScreen
          }, React.createElement("img", _extends({
            src: url,
            alt: alt,
            className: "euiImage__img"
          }, rest)), allowFullScreenIcon, isFullScreenActive && fullScreenDisplay);
        }), optionalCaption);
      } else {
        return React.createElement("figure", {
          className: classes,
          role: "figure",
          "aria-label": caption
        }, React.createElement("img", _extends({
          src: url,
          className: "euiImage__img",
          alt: alt
        }, rest)), optionalCaption);
      }
    }
  }]);

  return EuiImage;
}(Component);
EuiImage.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["s", "m", "l", "xl", "fullWidth", "original"]),
  fullScreenIconColor: PropTypes.oneOf(["light", "dark"]),
  url: PropTypes.string.isRequired,
  caption: PropTypes.string,
  hasShadow: PropTypes.bool,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string
};
EuiImage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "closeFullScreen",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "openFullScreen",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiImage",
  "props": {
    "alt": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "size": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }, {
          "value": "\"fullWidth\"",
          "computed": false
        }, {
          "value": "\"original\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "fullScreenIconColor": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"light\"",
          "computed": false
        }, {
          "value": "\"dark\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "url": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "caption": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "hasShadow": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "allowFullScreen": {
      "type": {
        "name": "bool"
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