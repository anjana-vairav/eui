function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Interactive elements must be able to receive focus.
 *
 * Ideally, this means using elements that are natively keyboard accessible (<a href="">,
 * <input type="button">, or <button>). Note that links should be used when navigating and buttons
 * should be used when performing an action on the page.
 *
 * If, however, you need to use elements that aren't natively keyboard accessible (for example, <div>,
 * <p>, or <a> without the href attribute), then you need to allow them to receive focus and to
 * respond to keyboard input. The workaround is to:
 *
 *   - Give the element tabindex="0" so that it can receive keyboard focus.
 *   - Add a JavaScript onkeyup event handler that triggers element functionality if the Enter key
 *     is pressed while the element is focused. This is necessary because some browsers do not trigger
 *    onclick events for such elements when activated via the keyboard.
 *   - If the item is meant to function as a button, the onkeyup event handler should also detect the
 *     Spacebar in addition to the Enter key, and the element should be given role="button".
 *
 * Wrap any such elements that aren't natively keyboard accessible in this component to automatically
 * apply the above workaround to them.
 */
import { Component, cloneElement } from 'react';
import PropTypes from "prop-types";
import { keyCodes } from '../../services';
export var EuiKeyboardAccessible =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiKeyboardAccessible, _Component);

  function EuiKeyboardAccessible() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiKeyboardAccessible);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiKeyboardAccessible)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      // Prevent a scroll from occurring if the user has hit space.
      if (e.keyCode === keyCodes.SPACE) {
        e.preventDefault();
      }

      if (_this.props.children.props.onKeyDown) {
        _this.props.children.props.onKeyDown(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyUp", function (e) {
      // Support keyboard accessibility by emulating mouse click on ENTER or SPACE keypress.
      if (e.keyCode === keyCodes.ENTER || e.keyCode === keyCodes.SPACE) {
        // Delegate to the click handler on the element.
        _this.props.children.props.onClick(e);
      }

      if (_this.props.children.props.onKeyUp) {
        _this.props.children.props.onKeyUp(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "applyKeyboardAccessibility", function (child) {
      // Add attributes required for accessibility unless they are already specified.
      var props = _objectSpread({
        tabIndex: '0',
        role: 'button'
      }, child.props, {
        onKeyDown: _this.onKeyDown,
        onKeyUp: _this.onKeyUp
      });

      return cloneElement(child, props);
    });

    return _this;
  }

  _createClass(EuiKeyboardAccessible, [{
    key: "render",
    value: function render() {
      return this.applyKeyboardAccessibility(this.props.children);
    }
  }]);

  return EuiKeyboardAccessible;
}(Component); // @ts-ignore defining this as a static on EuiKeyboardAccessible breaks the
// tests

EuiKeyboardAccessible.propTypes = {
  children: PropTypes.element.isRequired
};
EuiKeyboardAccessible.propTypes = {
  children: keyboardInaccessibleElement
};

function keyboardInaccessibleElement(props, propName, componentName) {
  var child = props.children;

  if (!child) {
    throw new Error("".concat(componentName, " needs to wrap an element with which the user interacts."));
  } // The whole point of this component is to hack in functionality that native buttons provide
  // by default.


  if (child.type === 'button') {
    throw new Error("".concat(componentName, " doesn't need to be used on a button."));
  }

  if (child.type === 'a' && child.props.href !== undefined) {
    throw new Error("".concat(componentName, " doesn't need to be used on a link if it has a href attribute."));
  } // We're emulating a click action, so we should already have a regular click handler defined.


  if (!child.props.onClick) {
    throw new Error("".concat(componentName, " needs to wrap an element which has an onClick prop assigned."));
  }

  if (typeof child.props.onClick !== 'function') {
    throw new Error("".concat(componentName, "'s child's onClick prop needs to be a function."));
  }
}

EuiKeyboardAccessible.__docgenInfo = {
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
    "name": "onKeyUp",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "applyKeyboardAccessibility",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "child",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiKeyboardAccessible",
  "props": {
    "children": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": ""
    }
  }
};