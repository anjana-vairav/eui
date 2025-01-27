"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiResizeObserver = void 0;

var _observer = require("../observer");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiResizeObserver =
/*#__PURE__*/
function (_EuiObserver) {
  _inherits(EuiResizeObserver, _EuiObserver);

  function EuiResizeObserver() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiResizeObserver)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", 'EuiResizeObserver');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasResizeObserver", typeof window.ResizeObserver !== 'undefined');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      if (_this.childNode != null) {
        // Eventually use `clientRect` on the `entries[]` returned natively
        var _this$childNode$getBo = _this.childNode.getBoundingClientRect(),
            height = _this$childNode$getBo.height,
            width = _this$childNode$getBo.width;

        _this.props.onResize({
          height: height,
          width: width
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "beginObserve", function () {
      var observerOptions;

      if (_this.hasResizeObserver) {
        _this.observer = new window.ResizeObserver(_this.onResize);
      } else {
        // MutationObserver fallback
        observerOptions = {
          // [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit)
          attributes: true,
          // Account for style changes from `className` or `style`
          characterData: true,
          // Account for text content size differences
          childList: true,
          // Account for adding/removing child nodes
          subtree: true // Account for deep child nodes

        };
        _this.observer = new MutationObserver(_this.onResize);
        requestAnimationFrame(_this.onResize); // Mimic ResizeObserver behavior of triggering a resize event on init
      } // The superclass checks that childNode is not null before invoking
      // beginObserve()


      _this.observer.observe(_this.childNode, observerOptions);
    });

    return _this;
  }

  return EuiResizeObserver;
}(_observer.EuiObserver);

exports.EuiResizeObserver = EuiResizeObserver;