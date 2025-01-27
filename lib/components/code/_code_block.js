"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCodeBlockImpl = exports.PADDING_SIZES = exports.FONT_SIZES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _copy = require("../copy");

var _button = require("../button");

var _overlay_mask = require("../overlay_mask");

var _focus_trap = require("../focus_trap");

var _services = require("../../services");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var fontSizeToClassNameMap = {
  s: 'euiCodeBlock--fontSmall',
  m: 'euiCodeBlock--fontMedium',
  l: 'euiCodeBlock--fontLarge'
};
var FONT_SIZES = Object.keys(fontSizeToClassNameMap);
exports.FONT_SIZES = FONT_SIZES;
var paddingSizeToClassNameMap = {
  none: '',
  s: 'euiCodeBlock--paddingSmall',
  m: 'euiCodeBlock--paddingMedium',
  l: 'euiCodeBlock--paddingLarge'
};
var PADDING_SIZES = Object.keys(paddingSizeToClassNameMap);
/**
 * This is the base component extended by EuiCode and EuiCodeBlock. These components
 * share the same propTypes definition with EuiCodeBlockImpl.
 */

exports.PADDING_SIZES = PADDING_SIZES;

var EuiCodeBlockImpl =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiCodeBlockImpl, _Component);

  function EuiCodeBlockImpl(props) {
    var _this;

    _classCallCheck(this, EuiCodeBlockImpl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiCodeBlockImpl).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "highlight", function () {
      if (_this.props.language) {
        _highlight.default.highlightBlock(_this.code);

        if (_this.codeFullScreen) {
          _highlight.default.highlightBlock(_this.codeFullScreen);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.keyCode === _services.keyCodes.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();

        _this.closeFullScreen();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFullScreen", function () {
      _this.setState(function (prevState) {
        return {
          isFullScreen: !prevState.isFullScreen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeFullScreen", function () {
      _this.setState({
        isFullScreen: false
      });
    });

    _this.state = {
      isFullScreen: false
    };
    return _this;
  }

  _createClass(EuiCodeBlockImpl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          inline = _this$props.inline,
          children = _this$props.children,
          className = _this$props.className,
          fontSize = _this$props.fontSize,
          language = _this$props.language,
          overflowHeight = _this$props.overflowHeight,
          paddingSize = _this$props.paddingSize,
          transparentBackground = _this$props.transparentBackground,
          isCopyable = _this$props.isCopyable,
          otherProps = _objectWithoutProperties(_this$props, ["inline", "children", "className", "fontSize", "language", "overflowHeight", "paddingSize", "transparentBackground", "isCopyable"]); // To maintain backwards compatibility with incorrect datatypes being passed, this
      // logic is a bit expanded to support arrays of non-strings. In those cases two bugs are present:
      // * "copy" button does not have access to the correct string values to put on the clipboard
      // * dynamically changing the content fails to update the DOM
      //
      // When this is converted to typescript and children that do not meet `string | string[]`
      // invalid uses will fail at compile time and this can be removed for the much simpler
      // const childrenAsString = typeof children === 'string' ? children : children.join('');


      var childrenAsString = children;

      if (Array.isArray(children)) {
        var isArrayOfStrings = children.filter(function (item) {
          return typeof item !== 'string';
        }).length === 0;

        if (isArrayOfStrings === true) {
          childrenAsString = children.join('');
        }
      }

      var classes = (0, _classnames.default)('euiCodeBlock', fontSizeToClassNameMap[fontSize], paddingSizeToClassNameMap[paddingSize], {
        'euiCodeBlock--transparentBackground': transparentBackground,
        'euiCodeBlock--inline': inline,
        'euiCodeBlock--hasControls': isCopyable || overflowHeight
      }, className);
      var codeClasses = (0, _classnames.default)('euiCodeBlock__code', language);
      var optionalStyles = {};

      if (overflowHeight) {
        optionalStyles.maxHeight = overflowHeight;
      }

      var codeSnippet = _react.default.createElement("code", _extends({
        ref: function ref(_ref) {
          _this2.code = _ref;
        },
        className: codeClasses
      }, otherProps), childrenAsString);

      var wrapperProps = {
        className: classes,
        style: optionalStyles
      };

      if (inline) {
        return _react.default.createElement("span", wrapperProps, codeSnippet);
      }

      var copyButton;

      if (isCopyable) {
        copyButton = _react.default.createElement("div", {
          className: "euiCodeBlock__copyButton"
        }, _react.default.createElement(_i18n.EuiI18n, {
          token: "euiCodeBlock.copyButton",
          default: "Copy"
        }, function (copyButton) {
          return _react.default.createElement(_copy.EuiCopy, {
            textToCopy: childrenAsString
          }, function (copy) {
            return _react.default.createElement(_button.EuiButtonIcon, {
              size: "s",
              onClick: copy,
              iconType: "copy",
              color: "text",
              "aria-label": copyButton
            });
          });
        }));
      }

      var fullScreenButton;

      if (!inline && overflowHeight) {
        fullScreenButton = _react.default.createElement(_i18n.EuiI18n, {
          tokens: ['euiCodeBlock.fullscreenCollapse', 'euiCodeBlock.fullscreenExpand'],
          defaults: ['Collapse', 'Expand']
        }, function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              fullscreenCollapse = _ref3[0],
              fullscreenExpand = _ref3[1];

          return _react.default.createElement(_button.EuiButtonIcon, {
            className: "euiCodeBlock__fullScreenButton",
            size: "s",
            onClick: _this2.toggleFullScreen,
            iconType: _this2.state.isFullScreen ? 'cross' : 'fullScreen',
            color: "text",
            "aria-label": _this2.state.isFullScreen ? fullscreenCollapse : fullscreenExpand
          });
        });
      }

      var codeBlockControls;

      if (copyButton || fullScreenButton) {
        codeBlockControls = _react.default.createElement("div", {
          className: "euiCodeBlock__controls"
        }, fullScreenButton, copyButton);
      }

      var fullScreenDisplay;

      if (this.state.isFullScreen) {
        {
          /*
          Force fullscreen to use large font and padding.
          */
        }
        var fullScreenClasses = (0, _classnames.default)('euiCodeBlock', fontSizeToClassNameMap[fontSize], 'euiCodeBlock-paddingLarge', 'euiCodeBlock-isFullScreen', className);
        fullScreenDisplay = _react.default.createElement(_overlay_mask.EuiOverlayMask, null, _react.default.createElement(_focus_trap.EuiFocusTrap, {
          clickOutsideDisables: true
        }, _react.default.createElement("div", {
          className: fullScreenClasses
        }, _react.default.createElement("pre", {
          className: "euiCodeBlock__pre"
        }, _react.default.createElement("code", {
          ref: function ref(_ref4) {
            _this2.codeFullScreen = _ref4;
          },
          className: codeClasses,
          tabIndex: 0,
          onKeyDown: this.onKeyDown
        }, childrenAsString)), codeBlockControls)));
      }

      return _react.default.createElement("div", wrapperProps, _react.default.createElement("pre", {
        style: optionalStyles,
        className: "euiCodeBlock__pre"
      }, codeSnippet), codeBlockControls, fullScreenDisplay);
    }
  }]);

  return EuiCodeBlockImpl;
}(_react.Component);

exports.EuiCodeBlockImpl = EuiCodeBlockImpl;
EuiCodeBlockImpl.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  className: _propTypes.default.string,
  paddingSize: _propTypes.default.oneOf(PADDING_SIZES),

  /**
   * Sets the syntax highlighting for a specific language
   */
  language: _propTypes.default.string,
  overflowHeight: _propTypes.default.number,
  fontSize: _propTypes.default.oneOf(FONT_SIZES),
  transparentBackground: _propTypes.default.bool,

  /**
   * Displays the passed code in an inline format. Also removes any margins set.
   */
  inline: _propTypes.default.bool,

  /**
   * Displays an icon button to copy the code snippet to the clipboard.
   */
  isCopyable: _propTypes.default.bool
};
EuiCodeBlockImpl.defaultProps = {
  transparentBackground: false,
  paddingSize: 'l',
  fontSize: 's',
  isCopyable: false
};
EuiCodeBlockImpl.__docgenInfo = {
  "description": "This is the base component extended by EuiCode and EuiCodeBlock. These components\nshare the same propTypes definition with EuiCodeBlockImpl.",
  "methods": [{
    "name": "highlight",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleFullScreen",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closeFullScreen",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiCodeBlockImpl",
  "props": {
    "transparentBackground": {
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
    "paddingSize": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
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
      "description": ""
    },
    "fontSize": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
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
        }]
      },
      "required": false,
      "description": ""
    },
    "isCopyable": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Displays an icon button to copy the code snippet to the clipboard."
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "string"
          }
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
    "language": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Sets the syntax highlighting for a specific language"
    },
    "overflowHeight": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "inline": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Displays the passed code in an inline format. Also removes any margins set."
    }
  }
};