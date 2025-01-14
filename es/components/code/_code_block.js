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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import hljs from 'highlight.js';
import { EuiCopy } from '../copy';
import { EuiButtonIcon } from '../button';
import { EuiOverlayMask } from '../overlay_mask';
import { EuiFocusTrap } from '../focus_trap';
import { keyCodes } from '../../services';
import { EuiI18n } from '../i18n';
var fontSizeToClassNameMap = {
  s: 'euiCodeBlock--fontSmall',
  m: 'euiCodeBlock--fontMedium',
  l: 'euiCodeBlock--fontLarge'
};
export var FONT_SIZES = Object.keys(fontSizeToClassNameMap);
var paddingSizeToClassNameMap = {
  none: '',
  s: 'euiCodeBlock--paddingSmall',
  m: 'euiCodeBlock--paddingMedium',
  l: 'euiCodeBlock--paddingLarge'
};
export var PADDING_SIZES = Object.keys(paddingSizeToClassNameMap);
/**
 * This is the base component extended by EuiCode and EuiCodeBlock. These components
 * share the same propTypes definition with EuiCodeBlockImpl.
 */

export var EuiCodeBlockImpl =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiCodeBlockImpl, _Component);

  function EuiCodeBlockImpl(props) {
    var _this;

    _classCallCheck(this, EuiCodeBlockImpl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiCodeBlockImpl).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "highlight", function () {
      if (_this.props.language) {
        hljs.highlightBlock(_this.code);

        if (_this.codeFullScreen) {
          hljs.highlightBlock(_this.codeFullScreen);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      if (event.keyCode === keyCodes.ESCAPE) {
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

      var classes = classNames('euiCodeBlock', fontSizeToClassNameMap[fontSize], paddingSizeToClassNameMap[paddingSize], {
        'euiCodeBlock--transparentBackground': transparentBackground,
        'euiCodeBlock--inline': inline,
        'euiCodeBlock--hasControls': isCopyable || overflowHeight
      }, className);
      var codeClasses = classNames('euiCodeBlock__code', language);
      var optionalStyles = {};

      if (overflowHeight) {
        optionalStyles.maxHeight = overflowHeight;
      }

      var codeSnippet = React.createElement("code", _extends({
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
        return React.createElement("span", wrapperProps, codeSnippet);
      }

      var copyButton;

      if (isCopyable) {
        copyButton = React.createElement("div", {
          className: "euiCodeBlock__copyButton"
        }, React.createElement(EuiI18n, {
          token: "euiCodeBlock.copyButton",
          default: "Copy"
        }, function (copyButton) {
          return React.createElement(EuiCopy, {
            textToCopy: childrenAsString
          }, function (copy) {
            return React.createElement(EuiButtonIcon, {
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
        fullScreenButton = React.createElement(EuiI18n, {
          tokens: ['euiCodeBlock.fullscreenCollapse', 'euiCodeBlock.fullscreenExpand'],
          defaults: ['Collapse', 'Expand']
        }, function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              fullscreenCollapse = _ref3[0],
              fullscreenExpand = _ref3[1];

          return React.createElement(EuiButtonIcon, {
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
        codeBlockControls = React.createElement("div", {
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
        var fullScreenClasses = classNames('euiCodeBlock', fontSizeToClassNameMap[fontSize], 'euiCodeBlock-paddingLarge', 'euiCodeBlock-isFullScreen', className);
        fullScreenDisplay = React.createElement(EuiOverlayMask, null, React.createElement(EuiFocusTrap, {
          clickOutsideDisables: true
        }, React.createElement("div", {
          className: fullScreenClasses
        }, React.createElement("pre", {
          className: "euiCodeBlock__pre"
        }, React.createElement("code", {
          ref: function ref(_ref4) {
            _this2.codeFullScreen = _ref4;
          },
          className: codeClasses,
          tabIndex: 0,
          onKeyDown: this.onKeyDown
        }, childrenAsString)), codeBlockControls)));
      }

      return React.createElement("div", wrapperProps, React.createElement("pre", {
        style: optionalStyles,
        className: "euiCodeBlock__pre"
      }, codeSnippet), codeBlockControls, fullScreenDisplay);
    }
  }]);

  return EuiCodeBlockImpl;
}(Component);
EuiCodeBlockImpl.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  className: PropTypes.string,
  paddingSize: PropTypes.oneOf(PADDING_SIZES),

  /**
   * Sets the syntax highlighting for a specific language
   */
  language: PropTypes.string,
  overflowHeight: PropTypes.number,
  fontSize: PropTypes.oneOf(FONT_SIZES),
  transparentBackground: PropTypes.bool,

  /**
   * Displays the passed code in an inline format. Also removes any margins set.
   */
  inline: PropTypes.bool,

  /**
   * Displays an icon button to copy the code snippet to the clipboard.
   */
  isCopyable: PropTypes.bool
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