"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingTableBody = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _table = require("../table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var LoadingTableBody =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingTableBody, _Component);

  function LoadingTableBody(props) {
    var _this;

    _classCallCheck(this, LoadingTableBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingTableBody).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cleanups", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tbody", void 0);

    _this.cleanups = [];
    _this.tbody = null;
    return _this;
  }

  _createClass(LoadingTableBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var listener = function listener(event) {
        event.stopPropagation();
        event.preventDefault();
      };

      ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'click', 'dblclick', 'keydown', 'keyup', 'keypress'].forEach(function (event) {
        _this2.tbody.addEventListener(event, listener, true);

        _this2.cleanups.push(function () {
          return _this2.tbody.removeEventListener(event, listener);
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanups.forEach(function (cleanup) {
        return cleanup();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_table.EuiTableBody, {
        bodyRef: function bodyRef(tbody) {
          _this3.tbody = tbody;
        }
      }, this.props.children);
    }
  }]);

  return LoadingTableBody;
}(_react.Component);

exports.LoadingTableBody = LoadingTableBody;
LoadingTableBody.propTypes = {};
LoadingTableBody.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LoadingTableBody"
};