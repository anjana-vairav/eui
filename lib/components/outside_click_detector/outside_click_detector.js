"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiOutsideClickDetector = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _accessibility = require("../../services/accessibility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var EuiOutsideClickDetector =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiOutsideClickDetector, _Component);

  // We are working with the assumption that a click event is
  // equivalent to a sequential, compound press and release of
  // the pointing device (mouse, finger, stylus, etc.).
  // A click event's target can be imprecise, as the value will be
  // the closest common ancestor of the press (mousedown, touchstart)
  // and relase (mouseup, touchend) events (often <body />) if
  // the the target of each event differs.
  // We need the actual event targets to make the correct decisions
  // about user intention. So, consider the down/start and up/end
  // items below as the deconstruction of a click event.
  function EuiOutsideClickDetector(props) {
    var _this;

    _classCallCheck(this, EuiOutsideClickDetector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiOutsideClickDetector).call(this, props)); // the id is used to identify which EuiOutsideClickDetector
    // is the source of a click event; as the click event bubbles
    // up and reaches the click detector's child component the
    // id value is stamped on the event. This id is inspected
    // in the document's click handler, and if the id doesn't
    // exist or doesn't match this detector's id, then trigger
    // the outsideClick callback.
    //
    // Taking this approach instead of checking if the event's
    // target element exists in this component's DOM sub-tree is
    // necessary for handling clicks originating from children
    // rendered through React's portals (EuiPortal). The id tracking
    // works because React guarantees the event bubbles through the
    // virtual DOM and executes EuiClickDetector's onClick handler,
    // stamping the id even though the event originates outside
    // this component's reified DOM tree.

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "capturedDownIds", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickOutside", function (event) {
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          onOutsideClick = _this$props.onOutsideClick;

      if (isDisabled) {
        _this.capturedDownIds = [];
        return;
      }

      if (event.euiGeneratedBy && event.euiGeneratedBy.includes(_this.id) || _this.capturedDownIds.includes(_this.id)) {
        _this.capturedDownIds = [];
        return;
      }

      _this.capturedDownIds = [];
      return onOutsideClick(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChildClick", function (event, cb) {
      // to support nested click detectors, build an array
      // of detector ids that have been encountered
      if (event.nativeEvent.hasOwnProperty('euiGeneratedBy')) {
        event.nativeEvent.euiGeneratedBy.push(_this.id);
      } else {
        event.nativeEvent.euiGeneratedBy = [_this.id];
      }

      if (cb) cb(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChildMouseDown", function (event) {
      _this.onChildClick(event, function (e) {
        _this.capturedDownIds = e.nativeEvent.euiGeneratedBy;
        if (_this.props.onMouseDown) _this.props.onMouseDown(e);
        if (_this.props.onTouchStart) _this.props.onTouchStart(e);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChildMouseUp", function (event) {
      _this.onChildClick(event, function (e) {
        if (_this.props.onMouseUp) _this.props.onMouseUp(e);
        if (_this.props.onTouchEnd) _this.props.onTouchEnd(e);
      });
    });

    _this.id = (0, _accessibility.htmlIdGenerator)()();
    _this.capturedDownIds = [];
    return _this;
  }

  _createClass(EuiOutsideClickDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onClickOutside);
      document.addEventListener('touchend', this.onClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onClickOutside);
      document.removeEventListener('touchend', this.onClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var props = _objectSpread({}, this.props.children.props, {
        onMouseDown: this.onChildMouseDown,
        onTouchStart: this.onChildMouseDown,
        onMouseUp: this.onChildMouseUp,
        onTouchEnd: this.onChildMouseUp
      });

      var child = _react.Children.only(this.props.children);

      return (0, _react.cloneElement)(child, props);
    }
  }]);

  return EuiOutsideClickDetector;
}(_react.Component);

exports.EuiOutsideClickDetector = EuiOutsideClickDetector;
EuiOutsideClickDetector.propTypes = {
  children: _propTypes.default.element.isRequired,
  onOutsideClick: _propTypes.default.func.isRequired,
  isDisabled: _propTypes.default.bool,
  onMouseDown: _propTypes.default.func,
  onMouseUp: _propTypes.default.func,
  onTouchStart: _propTypes.default.func,
  onTouchEnd: _propTypes.default.func
};
EuiOutsideClickDetector.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onClickOutside",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChildClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }, {
      "name": "cb",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChildMouseDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChildMouseUp",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiOutsideClickDetector",
  "props": {
    "children": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": ""
    },
    "onOutsideClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onMouseDown": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseUp": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onTouchStart": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onTouchEnd": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};