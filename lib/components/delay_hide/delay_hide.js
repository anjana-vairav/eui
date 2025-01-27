"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDelayHide = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function isComponentBecomingVisible() {
  var prevHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var nextHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return prevHide === true && nextHide === false;
}

var EuiDelayHide =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDelayHide, _Component);

  function EuiDelayHide() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiDelayHide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiDelayHide)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hide: _this.props.hide,
      countdownExpired: _this.props.hide
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timeoutId", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startCountdown", function () {
      // only start the countdown if there is not one in progress
      if (_this.timeoutId == null) {
        _this.timeoutId = setTimeout(_this.finishCountdown, // even though `minimumDuration` cannot be undefined, passing a strict number type to setTimeout makes TS interpret
        // it as a NodeJS.Timer instead of a number. The DOM lib defines the setTimeout call as taking `number | undefined`
        // so we cast minimumDuration to this type instead to force TS's cooperation
        _this.props.minimumDuration);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "finishCountdown", function () {
      _this.timeoutId = undefined;

      _this.setState({
        countdownExpired: true
      });
    });

    return _this;
  }

  _createClass(EuiDelayHide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if the component begins visible start counting
      if (this.props.hide === false) {
        this.startCountdown();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isBecomingVisible = isComponentBecomingVisible(prevProps.hide, this.props.hide);

      if (isBecomingVisible) {
        this.startCountdown();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var shouldHideContent = this.props.hide === true && this.state.countdownExpired;
      return shouldHideContent ? null : this.props.render();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isBecomingVisible = isComponentBecomingVisible(prevState.hide, nextProps.hide);
      return {
        hide: nextProps.hide,
        countdownExpired: isBecomingVisible ? false : prevState.countdownExpired
      };
    }
  }]);

  return EuiDelayHide;
}(_react.Component);

exports.EuiDelayHide = EuiDelayHide;

_defineProperty(EuiDelayHide, "defaultProps", {
  hide: false,
  minimumDuration: 1000
});

EuiDelayHide.propTypes = {
  hide: _propTypes.default.bool.isRequired,
  minimumDuration: _propTypes.default.number.isRequired,
  render: _propTypes.default.func.isRequired
};
EuiDelayHide.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "startCountdown",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "finishCountdown",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiDelayHide",
  "props": {
    "hide": {
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
    "minimumDuration": {
      "defaultValue": {
        "value": "1000",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "render": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};