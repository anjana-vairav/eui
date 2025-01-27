"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiToolTip = exports.DELAY = exports.POSITIONS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _portal = require("../portal");

var _tool_tip_popover = require("./tool_tip_popover");

var _services = require("../../services");

var _make_id = _interopRequireDefault(require("../form/form_row/make_id"));

var _resize_observer = require("../observer/resize_observer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var positionsToClassNameMap = {
  top: 'euiToolTip--top',
  right: 'euiToolTip--right',
  bottom: 'euiToolTip--bottom',
  left: 'euiToolTip--left'
};
var POSITIONS = (0, _common.keysOf)(positionsToClassNameMap);
exports.POSITIONS = POSITIONS;
var delayToClassNameMap = {
  regular: null,
  long: 'euiToolTip--delayLong'
};
var DELAY = (0, _common.keysOf)(delayToClassNameMap);
exports.DELAY = DELAY;
var DEFAULT_TOOLTIP_STYLES = {
  // position the tooltip content near the top-left
  // corner of the window so it can't create scrollbars
  // 50,50 because who knows what negative margins, padding, etc
  top: 50,
  left: 50,
  // just in case, avoid any potential flicker by hiding
  // the tooltip before it is positioned
  opacity: 0
};

var EuiToolTip =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiToolTip, _Component);

  function EuiToolTip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiToolTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiToolTip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "anchor", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popover", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false,
      hasFocus: false,
      calculatedPosition: _this.props.position,
      toolTipStyles: DEFAULT_TOOLTIP_STYLES,
      arrowStyles: undefined,
      id: _this.props.id || (0, _make_id.default)()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "testAnchor", function () {
      // when the tooltip is visible, this checks if the anchor is still part of document
      // this fixes when the react root is removed from the dom without unmounting
      // https://github.com/elastic/eui/issues/1105
      if (document.body.contains(_this.anchor) === false) {
        // the anchor is no longer part of `document`
        _this.hideToolTip();
      } else {
        if (_this.state.visible) {
          // if still visible, keep checking
          requestAnimationFrame(_this.testAnchor);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopoverRef", function (ref) {
      _this.popover = ref; // if the popover has been unmounted, clear
      // any previous knowledge about its size

      if (ref == null) {
        _this.setState({
          toolTipStyles: DEFAULT_TOOLTIP_STYLES,
          arrowStyles: undefined
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showToolTip", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "positionToolTip", function () {
      var requestedPosition = _this.props.position;

      if (!_this.anchor || !_this.popover) {
        return;
      }

      var _findPopoverPosition = (0, _services.findPopoverPosition)({
        anchor: _this.anchor,
        popover: _this.popover,
        position: requestedPosition,
        offset: 16,
        // offset popover 16px from the anchor
        arrowConfig: {
          arrowWidth: 12,
          arrowBuffer: 4
        }
      }),
          position = _findPopoverPosition.position,
          left = _findPopoverPosition.left,
          top = _findPopoverPosition.top,
          arrow = _findPopoverPosition.arrow; // If encroaching the right edge of the window:
      // When `props.content` changes and is longer than `prevProps.content`, the tooltip width remains and
      // the resizeObserver callback will fire twice (once for vertical resize caused by text line wrapping,
      // once for a subsequent position correction) and cause a flash rerender and reposition.
      // To prevent this, we can orient from the right so that text line wrapping does not occur, negating
      // the second resizeObserver callback call.


      var windowWidth = document.documentElement.clientWidth || window.innerWidth;
      var useRightValue = windowWidth / 2 < left;
      var toolTipStyles = {
        top: top,
        left: useRightValue ? 'auto' : left,
        right: useRightValue ? windowWidth - left - _this.popover.offsetWidth : 'auto'
      };

      _this.setState({
        visible: true,
        calculatedPosition: position,
        toolTipStyles: toolTipStyles,
        arrowStyles: arrow
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideToolTip", function () {
      if (_this._isMounted) {
        _this.setState({
          visible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        hasFocus: true
      });

      _this.showToolTip();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      _this.setState({
        hasFocus: false
      });

      _this.hideToolTip();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function (e) {
      // Prevent mousing over children from hiding the tooltip by testing for whether the mouse has
      // left the anchor for a non-child.
      if (_this.anchor === e.relatedTarget || _this.anchor != null && !_this.anchor.contains(e.relatedTarget)) {
        if (!_this.state.hasFocus) {
          _this.hideToolTip();
        }
      }

      if (_this.props.onMouseOut) {
        _this.props.onMouseOut(e);
      }
    });

    return _this;
  }

  _createClass(EuiToolTip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.visible === false && this.state.visible === true) {
        requestAnimationFrame(this.testAnchor);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          anchorClassName = _this$props.anchorClassName,
          content = _this$props.content,
          title = _this$props.title,
          delay = _this$props.delay,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "anchorClassName", "content", "title", "delay"]);

      var _this$state = this.state,
          arrowStyles = _this$state.arrowStyles,
          id = _this$state.id,
          toolTipStyles = _this$state.toolTipStyles,
          visible = _this$state.visible;
      var classes = (0, _classnames.default)('euiToolTip', positionsToClassNameMap[this.state.calculatedPosition], delayToClassNameMap[delay], className);
      var anchorClasses = (0, _classnames.default)('euiToolTipAnchor', anchorClassName);
      var tooltip;

      if (visible && (content || title)) {
        tooltip = _react.default.createElement(_portal.EuiPortal, null, _react.default.createElement(_tool_tip_popover.EuiToolTipPopover, _extends({
          className: classes,
          style: toolTipStyles,
          positionToolTip: this.positionToolTip,
          popoverRef: this.setPopoverRef,
          title: title,
          id: id,
          role: "tooltip"
        }, rest), _react.default.createElement("div", {
          style: arrowStyles,
          className: "euiToolTip__arrow"
        }), _react.default.createElement(_resize_observer.EuiResizeObserver, {
          onResize: this.positionToolTip
        }, function (resizeRef) {
          return _react.default.createElement("div", {
            ref: resizeRef
          }, content);
        })));
      }

      var anchor = // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      _react.default.createElement("span", {
        ref: function ref(anchor) {
          return _this2.anchor = anchor;
        },
        className: anchorClasses,
        onMouseOver: this.showToolTip,
        onMouseOut: this.onMouseOut
      }, (0, _react.cloneElement)(children, _objectSpread({
        onFocus: this.showToolTip,
        onBlur: this.hideToolTip
      }, visible && {
        'aria-describedby': this.state.id
      })));

      return _react.default.createElement(_react.Fragment, null, anchor, tooltip);
    }
  }]);

  return EuiToolTip;
}(_react.Component);

exports.EuiToolTip = EuiToolTip;

_defineProperty(EuiToolTip, "defaultProps", {
  position: 'top',
  delay: 'regular'
});

EuiToolTip.propTypes = {
  /**
     * Passes onto the the trigger.
     */
  anchorClassName: _propTypes.default.string,

  /**
     * The in-view trigger for your tooltip.
     */
  children: _propTypes.default.element.isRequired,

  /**
     * Passes onto the tooltip itself, not the trigger.
     */
  className: _propTypes.default.string,

  /**
     * The main content of your tooltip.
     */
  content: _propTypes.default.node,

  /**
     * Delay before showing tooltip. Good for repeatable items.
     */
  delay: _propTypes.default.oneOf(["regular", "long"]).isRequired,

  /**
     * An optional title for your tooltip.
     */
  title: _propTypes.default.node,

  /**
     * Unless you provide one, this will be randomly generated.
     */
  id: _propTypes.default.string,

  /**
     * Suggested position. If there is not enough room for it this will be changed.
     */
  position: _propTypes.default.oneOf(["top", "right", "bottom", "left"]).isRequired,

  /**
     * If supplied, called when mouse movement causes the tool tip to be
     * hidden.
     */
  onMouseOut: _propTypes.default.func
};
EuiToolTip.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "testAnchor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "setPopoverRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }, {
    "name": "showToolTip",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "positionToolTip",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "hideToolTip",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
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
    "name": "onMouseOut",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiToolTip",
  "props": {
    "position": {
      "defaultValue": {
        "value": "'top'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"top\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }, {
          "value": "\"bottom\"",
          "computed": false
        }, {
          "value": "\"left\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Suggested position. If there is not enough room for it this will be changed."
    },
    "delay": {
      "defaultValue": {
        "value": "'regular'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"regular\"",
          "computed": false
        }, {
          "value": "\"long\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Delay before showing tooltip. Good for repeatable items."
    },
    "anchorClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Passes onto the the trigger."
    },
    "children": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": "The in-view trigger for your tooltip."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Passes onto the tooltip itself, not the trigger."
    },
    "content": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "The main content of your tooltip."
    },
    "title": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "An optional title for your tooltip."
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Unless you provide one, this will be randomly generated."
    },
    "onMouseOut": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "If supplied, called when mouse movement causes the tool tip to be\nhidden."
    }
  }
};