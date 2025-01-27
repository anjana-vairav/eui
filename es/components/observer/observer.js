function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Component } from 'react';
export var EuiObserver =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiObserver, _Component);

  function EuiObserver() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiObserver)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", 'EuiObserver');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "childNode", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "observer", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateChildNode", function (ref) {
      if (_this.childNode === ref) return; // node hasn't changed
      // if there's an existing observer disconnect it

      if (_this.observer != null) {
        _this.observer.disconnect();

        _this.observer = null;
      }

      _this.childNode = ref;

      if (_this.childNode != null) {
        _this.beginObserve();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "beginObserve", function () {
      throw new Error('EuiObserver has no default observation method');
    });

    return _this;
  }

  _createClass(EuiObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.childNode == null) {
        throw new Error("".concat(this.name, " did not receive a ref"));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.observer != null) {
        this.observer.disconnect();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.updateChildNode);
    }
  }]);

  return EuiObserver;
}(Component);
EuiObserver.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "updateChildNode",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }, {
    "name": "beginObserve",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiObserver"
};