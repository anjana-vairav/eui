function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import PropTypes from "prop-types";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Component } from 'react';
import classNames from 'classnames';
import tabbable from 'tabbable';
import { EuiFocusTrap } from '../focus_trap';
// eslint-disable-line import/named
import { cascadingMenuKeyCodes, getTransitionTimings, getWaitDuration, performOnFrame, htmlIdGenerator } from '../../services';
import { EuiOutsideClickDetector } from '../outside_click_detector';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiPanel } from '../panel';
import { EuiPortal } from '../portal';
import { EuiMutationObserver } from '../observer/mutation_observer';
import { findPopoverPosition, getElementZIndex } from '../../services/popover';
import { EuiI18n } from '../i18n';
var generateId = htmlIdGenerator();
var anchorPositionToPopoverPositionMap = {
  up: 'top',
  right: 'right',
  down: 'bottom',
  left: 'left'
};
export function getPopoverPositionFromAnchorPosition(anchorPosition) {
  // maps the anchor position to the matching popover position
  // e.g. "upLeft" -> "top", "downRight" -> "bottom"
  // extract the first positional word from anchorPosition:
  // starts at the beginning (" ^ ") of anchorPosition and
  // captures all of the characters (" (.*?) ") until the
  var _ref = anchorPosition.match(/^(.*?)[A-Z]/),
      _ref2 = _slicedToArray(_ref, 2),
      primaryPosition = _ref2[1];

  return anchorPositionToPopoverPositionMap[primaryPosition];
}
export function getPopoverAlignFromAnchorPosition(anchorPosition) {
  // maps the gravity to the matching popover position
  // e.g. "upLeft" -> "left", "rightDown" -> "bottom"
  // extract the second positional word from anchorPosition:
  // starts a capture group at the first capital letter
  var _ref3 = anchorPosition.match(/([A-Z].*)/),
      _ref4 = _slicedToArray(_ref3, 2),
      align = _ref4[1]; // this performs two tasks:
  // 1. normalizes the align position by lowercasing it
  // 2. `center` doesn't exist in the lookup map which converts it to `undefined` meaning no align


  return anchorPositionToPopoverPositionMap[align.toLowerCase()];
}
var anchorPositionToClassNameMap = {
  upCenter: 'euiPopover--anchorUpCenter',
  upLeft: 'euiPopover--anchorUpLeft',
  upRight: 'euiPopover--anchorUpRight',
  downCenter: 'euiPopover--anchorDownCenter',
  downLeft: 'euiPopover--anchorDownLeft',
  downRight: 'euiPopover--anchorDownRight',
  leftCenter: 'euiPopover--anchorLeftCenter',
  leftUp: 'euiPopover--anchorLeftUp',
  leftDown: 'euiPopover--anchorLeftDown',
  rightCenter: 'euiPopover--anchorRightCenter',
  rightUp: 'euiPopover--anchorRightUp',
  rightDown: 'euiPopover--anchorRightDown'
};
export var ANCHOR_POSITIONS = Object.keys(anchorPositionToClassNameMap);
var displayToClassNameMap = {
  inlineBlock: undefined,
  block: 'euiPopover--displayBlock'
};
export var DISPLAY = Object.keys(displayToClassNameMap);
var DEFAULT_POPOVER_STYLES = {
  top: 50,
  left: 50
};

function getElementFromInitialFocus(initialFocus) {
  var initialFocusType = _typeof(initialFocus);

  if (initialFocusType === 'string') {
    return document.querySelector(initialFocus);
  }

  if (initialFocusType === 'function') {
    return initialFocus();
  }

  return initialFocus;
}

export var EuiPopover =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiPopover, _Component);

  _createClass(EuiPopover, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevProps.isOpen && !nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          },
          isClosing: true,
          isOpening: false
        };
      }

      if (prevState.prevProps.isOpen !== nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          }
        };
      }

      return null;
    }
  }]);

  function EuiPopover(props) {
    var _this;

    _classCallCheck(this, EuiPopover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiPopover).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "respositionTimeout", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closingTransitionTimeout", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closingTransitionAnimationFrame", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateFocusAnimationFrame", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "button", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "panel", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      if (e.keyCode === cascadingMenuKeyCodes.ESCAPE) {
        if (_this.state.isOpenStable || _this.state.isOpening) {
          e.preventDefault();
          e.stopPropagation();

          _this.props.closePopover();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMutation", function (records) {
      var waitDuration = getWaitDuration(records);

      _this.positionPopoverFixed();

      performOnFrame(waitDuration, _this.positionPopoverFixed);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "positionPopover", function (allowEnforcePosition) {
      if (_this.button == null || _this.panel == null) return;
      var _ref5 = _this.props,
          anchorPosition = _ref5.anchorPosition;
      var position = getPopoverPositionFromAnchorPosition(anchorPosition);
      var forcePosition = undefined;

      if (allowEnforcePosition && _this.state.isOpenStable && _this.state.openPosition != null) {
        position = _this.state.openPosition;
        forcePosition = true;
      }

      var _findPopoverPosition = findPopoverPosition({
        container: _this.props.container,
        position: position,
        forcePosition: forcePosition,
        align: getPopoverAlignFromAnchorPosition(anchorPosition),
        anchor: _this.button,
        popover: _this.panel,
        offset: !_this.props.attachToAnchor && _this.props.hasArrow ? 16 : 8,
        arrowConfig: {
          arrowWidth: 24,
          arrowBuffer: 10
        },
        returnBoundingBox: _this.props.attachToAnchor
      }),
          top = _findPopoverPosition.top,
          left = _findPopoverPosition.left,
          foundPosition = _findPopoverPosition.position,
          arrow = _findPopoverPosition.arrow,
          anchorBoundingBox = _findPopoverPosition.anchorBoundingBox; // the popover's z-index must inherit from the button
      // this keeps a button's popover under a flyout that would cover the button
      // but a popover triggered inside a flyout will appear over that flyout


      var zIndexProp = _this.props.zIndex;
      var zIndex = zIndexProp == null ? getElementZIndex(_this.button, _this.panel) + 2000 : zIndexProp;
      var popoverStyles = {
        top: top,
        left: _this.props.attachToAnchor && anchorBoundingBox ? anchorBoundingBox.left : left,
        zIndex: zIndex
      };
      var willRenderArrow = !_this.props.attachToAnchor && _this.props.hasArrow;
      var arrowStyles = willRenderArrow ? arrow : undefined;
      var arrowPosition = foundPosition;

      _this.setState({
        popoverStyles: popoverStyles,
        arrowStyles: arrowStyles,
        arrowPosition: arrowPosition,
        openPosition: foundPosition
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "positionPopoverFixed", function () {
      _this.positionPopover(true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "positionPopoverFluid", function () {
      _this.positionPopover(false);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "panelRef", function (node) {
      _this.panel = node;
      _this.props.panelRef && _this.props.panelRef(node);

      if (node == null) {
        // panel has unmounted, restore the state defaults
        _this.setState({
          popoverStyles: DEFAULT_POPOVER_STYLES,
          arrowStyles: {},
          arrowPosition: null,
          openPosition: null,
          isOpenStable: false
        });

        window.removeEventListener('resize', _this.positionPopoverFluid);
      } else {
        // panel is coming into existence
        _this.positionPopoverFluid();

        window.addEventListener('resize', _this.positionPopoverFluid);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buttonRef", function (node) {
      _this.button = node;
      _this.props.buttonRef && _this.props.buttonRef(node);
    });

    _this.state = {
      prevProps: {
        isOpen: props.isOpen
      },
      suppressingPopover: _this.props.isOpen,
      // only suppress if created with isOpen=true
      isClosing: false,
      isOpening: false,
      popoverStyles: DEFAULT_POPOVER_STYLES,
      arrowStyles: {},
      arrowPosition: null,
      openPosition: null,
      // once a stable position has been found, keep the contents on that side
      isOpenStable: false // wait for any initial opening transitions to finish before marking as stable

    };
    return _this;
  }

  _createClass(EuiPopover, [{
    key: "updateFocus",
    value: function updateFocus() {
      var _this2 = this;

      // Wait for the DOM to update.
      this.updateFocusAnimationFrame = window.requestAnimationFrame(function () {
        if (!_this2.props.ownFocus || !_this2.panel) {
          return;
        } // If we've already focused on something inside the panel, everything's fine.


        if (_this2.panel.contains(document.activeElement)) {
          return;
        } // Otherwise let's focus the first tabbable item and expedite input from the user.


        var focusTarget;

        if (_this2.props.initialFocus != null) {
          focusTarget = getElementFromInitialFocus(_this2.props.initialFocus);
        } else {
          var tabbableItems = tabbable(_this2.panel);

          if (tabbableItems.length) {
            focusTarget = tabbableItems[0];
          }
        } // there's a race condition between the popover content becoming visible and this function call
        // if the element isn't visible yet (due to css styling) then it can't accept focus
        // so wait for another render and try again


        if (focusTarget == null) {
          // there isn't a focus target, one of two reasons:
          // #1 is the whole panel hidden? If so, schedule another check
          // #2 panel is visible but no tabbables exist, move focus to the panel
          var panelVisibility = window.getComputedStyle(_this2.panel).visibility;

          if (panelVisibility === 'hidden') {
            // #1
            _this2.updateFocus();
          } else {
            // #2
            focusTarget = _this2.panel;
          }
        } else {
          // found an element to focus, but is it visible?
          var visibility = window.getComputedStyle(focusTarget).visibility;

          if (visibility === 'hidden') {
            // not visible, check again next render frame
            _this2.updateFocus();
          }
        }

        if (focusTarget != null) focusTarget.focus();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.suppressingPopover) {
        // component was created with isOpen=true; now that it's mounted
        // stop suppressing and start opening
        this.setState({
          suppressingPopover: false,
          isOpening: true
        }); // eslint-disable-line react/no-did-mount-set-state
      }

      if (this.props.repositionOnScroll) {
        window.addEventListener('scroll', this.positionPopoverFixed);
      }

      this.updateFocus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      // The popover is being opened.
      if (!prevProps.isOpen && this.props.isOpen) {
        clearTimeout(this.closingTransitionTimeout); // We need to set this state a beat after the render takes place, so that the CSS
        // transition can take effect.

        this.closingTransitionAnimationFrame = window.requestAnimationFrame(function () {
          _this3.setState({
            isOpening: true
          });
        }); // for each child element of `this.panel`, find any transition duration we should wait for before stabilizing

        var _Array$prototype$slic = Array.prototype.slice.call(this.panel ? this.panel.children : []).reduce(function (_ref6, element) {
          var durationMatch = _ref6.durationMatch,
              delayMatch = _ref6.delayMatch;
          var transitionTimings = getTransitionTimings(element);
          return {
            durationMatch: Math.max(durationMatch, transitionTimings.durationMatch),
            delayMatch: Math.max(delayMatch, transitionTimings.delayMatch)
          };
        }, {
          durationMatch: 0,
          delayMatch: 0
        }),
            durationMatch = _Array$prototype$slic.durationMatch,
            delayMatch = _Array$prototype$slic.delayMatch;

        this.respositionTimeout = window.setTimeout(function () {
          _this3.setState({
            isOpenStable: true
          }, function () {
            _this3.positionPopoverFixed();

            _this3.updateFocus();
          });
        }, durationMatch + delayMatch);
      } // update scroll listener


      if (prevProps.repositionOnScroll !== this.props.repositionOnScroll) {
        if (this.props.repositionOnScroll) {
          window.addEventListener('scroll', this.positionPopoverFixed);
        } else {
          window.removeEventListener('scroll', this.positionPopoverFixed);
        }
      } // The popover is being closed.


      if (prevProps.isOpen && !this.props.isOpen) {
        // If the user has just closed the popover, queue up the removal of the content after the
        // transition is complete.
        this.closingTransitionTimeout = window.setTimeout(function () {
          _this3.setState({
            isClosing: false
          });
        }, 250);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.positionPopoverFixed);
      clearTimeout(this.respositionTimeout);
      clearTimeout(this.closingTransitionTimeout);
      cancelAnimationFrame(this.closingTransitionAnimationFrame);
      cancelAnimationFrame(this.updateFocusAnimationFrame);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          anchorClassName = _this$props.anchorClassName,
          anchorPosition = _this$props.anchorPosition,
          button = _this$props.button,
          buttonRef = _this$props.buttonRef,
          insert = _this$props.insert,
          isOpen = _this$props.isOpen,
          ownFocus = _this$props.ownFocus,
          withTitle = _this$props.withTitle,
          children = _this$props.children,
          className = _this$props.className,
          closePopover = _this$props.closePopover,
          panelClassName = _this$props.panelClassName,
          panelPaddingSize = _this$props.panelPaddingSize,
          panelRef = _this$props.panelRef,
          popoverRef = _this$props.popoverRef,
          hasArrow = _this$props.hasArrow,
          repositionOnScroll = _this$props.repositionOnScroll,
          zIndex = _this$props.zIndex,
          initialFocus = _this$props.initialFocus,
          attachToAnchor = _this$props.attachToAnchor,
          display = _this$props.display,
          onTrapDeactivation = _this$props.onTrapDeactivation,
          rest = _objectWithoutProperties(_this$props, ["anchorClassName", "anchorPosition", "button", "buttonRef", "insert", "isOpen", "ownFocus", "withTitle", "children", "className", "closePopover", "panelClassName", "panelPaddingSize", "panelRef", "popoverRef", "hasArrow", "repositionOnScroll", "zIndex", "initialFocus", "attachToAnchor", "display", "onTrapDeactivation"]);

      var descriptionId = generateId();
      var classes = classNames('euiPopover', anchorPosition ? anchorPositionToClassNameMap[anchorPosition] : null, display ? displayToClassNameMap[display] : null, {
        'euiPopover-isOpen': this.state.isOpening,
        'euiPopover--withTitle': withTitle
      }, className);
      var anchorClasses = classNames('euiPopover__anchor', anchorClassName);
      var panelClasses = classNames('euiPopover__panel', "euiPopover__panel--".concat(this.state.arrowPosition), {
        'euiPopover__panel-isOpen': this.state.isOpening
      }, {
        'euiPopover__panel-withTitle': withTitle
      }, {
        'euiPopover__panel-noArrow': !hasArrow || attachToAnchor
      }, {
        'euiPopover__panel-isAttached': attachToAnchor
      }, panelClassName);
      var panel;

      if (!this.state.suppressingPopover && (isOpen || this.state.isClosing)) {
        var tabIndex;

        var _initialFocus;

        var ariaLive;

        if (ownFocus) {
          tabIndex = 0;
          ariaLive = 'off';

          _initialFocus = function _initialFocus() {
            return _this4.panel;
          };
        } else {
          ariaLive = 'assertive';
        }

        var focusTrapScreenReaderText;

        if (ownFocus) {
          focusTrapScreenReaderText = React.createElement(EuiScreenReaderOnly, null, React.createElement("p", {
            id: descriptionId
          }, React.createElement(EuiI18n, {
            token: "euiPopover.screenReaderAnnouncement",
            default: "You are in a dialog. To close this dialog, hit escape."
          })));
        }

        var arrowClassNames = classNames('euiPopover__panelArrow', "euiPopover__panelArrow--".concat(this.state.arrowPosition));
        panel = React.createElement(EuiPortal, {
          insert: insert
        }, React.createElement(EuiFocusTrap, {
          returnFocus: !this.state.isOpening // Ignore temporary state of indecisive focus
          ,
          clickOutsideDisables: true,
          initialFocus: _initialFocus,
          onDeactivation: onTrapDeactivation,
          disabled: !ownFocus
        }, React.createElement(EuiPanel, {
          panelRef: this.panelRef,
          className: panelClasses,
          paddingSize: panelPaddingSize,
          tabIndex: tabIndex,
          "aria-live": ariaLive,
          role: "dialog",
          "aria-modal": "true",
          "aria-describedby": descriptionId,
          style: this.state.popoverStyles
        }, React.createElement("div", {
          className: arrowClassNames,
          style: this.state.arrowStyles
        }), focusTrapScreenReaderText, React.createElement(EuiMutationObserver, {
          observerOptions: {
            attributes: true,
            // element attribute changes
            childList: true,
            // added/removed elements
            characterData: true,
            // text changes
            subtree: true // watch all child elements

          },
          onMutation: this.onMutation
        }, function (mutationRef) {
          return React.createElement("div", {
            ref: mutationRef
          }, children);
        }))));
      }

      return React.createElement(EuiOutsideClickDetector, {
        isDisabled: !isOpen,
        onOutsideClick: closePopover
      }, React.createElement("div", _extends({
        className: classes,
        onKeyDown: this.onKeyDown,
        ref: popoverRef
      }, rest), React.createElement("div", {
        className: anchorClasses,
        ref: this.buttonRef
      }, button instanceof HTMLElement ? null : button), panel));
    }
  }]);

  return EuiPopover;
}(Component);

_defineProperty(EuiPopover, "defaultProps", {
  isOpen: false,
  ownFocus: false,
  anchorPosition: 'downCenter',
  panelPaddingSize: 'm',
  hasArrow: true,
  display: 'inlineBlock'
});

EuiPopover.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,
  anchorClassName: PropTypes.string,
  anchorPosition: PropTypes.oneOf(["upCenter", "upLeft", "upRight", "downCenter", "downLeft", "downRight", "leftCenter", "leftUp", "leftDown", "rightCenter", "rightUp", "rightDown"]),

  /** Style and position alteration for arrow-less, left-aligned
     * attachment. Intended for use with inputs as anchors, à la
     * EuiColorPicker */
  attachToAnchor: PropTypes.bool,
  button: PropTypes.any.isRequired,
  buttonRef: PropTypes.func,
  closePopover: PropTypes.func.isRequired,
  container: PropTypes.any,

  /** CSS display type for both the popover and anchor */
  display: PropTypes.oneOf(["inlineBlock", "block"]),
  hasArrow: PropTypes.bool,

  /** specifies what element should initially have focus; Can be a DOM
     * node, or a selector string (which will be passed to
     * document.querySelector() to find the DOM node), or a function that
     * returns a DOM node. */
  initialFocus: PropTypes.oneOfType([PropTypes.any.isRequired, PropTypes.string.isRequired, PropTypes.func.isRequired]),

  /** Passed directly to EuiPortal for DOM positioning. Both properties are
     * required if prop is specified **/
  insert: PropTypes.shape({
    sibling: PropTypes.any.isRequired,
    position: PropTypes.oneOf(["before", "after"]).isRequired
  }),
  isOpen: PropTypes.bool,
  ownFocus: PropTypes.bool,
  panelClassName: PropTypes.string,
  panelPaddingSize: PropTypes.oneOf(["none", "s", "m", "l"]),
  panelRef: PropTypes.func,
  popoverRef: PropTypes.any,

  /** When `true`, the popover's position is re-calculated when the user
     * scrolls, this supports having fixed-position popover anchors. */
  repositionOnScroll: PropTypes.bool,
  withTitle: PropTypes.bool,

  /** By default, popover content inherits the z-index of the anchor
     * component; pass zIndex to override */
  zIndex: PropTypes.number,

  /**
     * Function callback for when the focus trap is deactivated
     */
  onTrapDeactivation: PropTypes.any
};
EuiPopover.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateFocus",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMutation",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "records",
      "type": null
    }],
    "returns": null
  }, {
    "name": "positionPopover",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "allowEnforcePosition",
      "type": null
    }],
    "returns": null
  }, {
    "name": "positionPopoverFixed",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "positionPopoverFluid",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "panelRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }, {
    "name": "buttonRef",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "node",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiPopover",
  "props": {
    "isOpen": {
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
    "ownFocus": {
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
    "anchorPosition": {
      "defaultValue": {
        "value": "'downCenter'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"upCenter\"",
          "computed": false
        }, {
          "value": "\"upLeft\"",
          "computed": false
        }, {
          "value": "\"upRight\"",
          "computed": false
        }, {
          "value": "\"downCenter\"",
          "computed": false
        }, {
          "value": "\"downLeft\"",
          "computed": false
        }, {
          "value": "\"downRight\"",
          "computed": false
        }, {
          "value": "\"leftCenter\"",
          "computed": false
        }, {
          "value": "\"leftUp\"",
          "computed": false
        }, {
          "value": "\"leftDown\"",
          "computed": false
        }, {
          "value": "\"rightCenter\"",
          "computed": false
        }, {
          "value": "\"rightUp\"",
          "computed": false
        }, {
          "value": "\"rightDown\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "panelPaddingSize": {
      "defaultValue": {
        "value": "'m'",
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
    "hasArrow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "display": {
      "defaultValue": {
        "value": "'inlineBlock'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"inlineBlock\"",
          "computed": false
        }, {
          "value": "\"block\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "CSS display type for both the popover and anchor"
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
    "anchorClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "attachToAnchor": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Style and position alteration for arrow-less, left-aligned\nattachment. Intended for use with inputs as anchors, \xE0 la\nEuiColorPicker"
    },
    "button": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "buttonRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "closePopover": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "container": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "initialFocus": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": "specifies what element should initially have focus; Can be a DOM\nnode, or a selector string (which will be passed to\ndocument.querySelector() to find the DOM node), or a function that\nreturns a DOM node."
    },
    "insert": {
      "type": {
        "name": "shape",
        "value": {
          "sibling": {
            "name": "any",
            "required": true
          },
          "position": {
            "name": "enum",
            "value": [{
              "value": "\"before\"",
              "computed": false
            }, {
              "value": "\"after\"",
              "computed": false
            }],
            "required": true
          }
        }
      },
      "required": false,
      "description": "Passed directly to EuiPortal for DOM positioning. Both properties are\nrequired if prop is specified *"
    },
    "panelClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "panelRef": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "popoverRef": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "repositionOnScroll": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "When `true`, the popover's position is re-calculated when the user\nscrolls, this supports having fixed-position popover anchors."
    },
    "withTitle": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "zIndex": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "By default, popover content inherits the z-index of the anchor\ncomponent; pass zIndex to override"
    },
    "onTrapDeactivation": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Function callback for when the focus trap is deactivated"
    }
  }
};