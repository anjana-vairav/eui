"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDataGridColumnResizer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var MINIMUM_COLUMN_WIDTH = 40;

var EuiDataGridColumnResizer =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiDataGridColumnResizer, _Component);

  function EuiDataGridColumnResizer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiDataGridColumnResizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiDataGridColumnResizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      initialX: 0,
      offset: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseDown", function (e) {
      _this.setState({
        initialX: e.pageX
      });

      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('blur', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseUp", function () {
      var offset = _this.state.offset;
      var _this$props = _this.props,
          columnId = _this$props.columnId,
          columnWidth = _this$props.columnWidth,
          setColumnWidth = _this$props.setColumnWidth;
      setColumnWidth(columnId, Math.max(MINIMUM_COLUMN_WIDTH, columnWidth + offset));

      _this.setState({
        offset: 0
      });

      window.removeEventListener('mouseup', _this.onMouseUp);
      window.removeEventListener('blur', _this.onMouseUp);
      window.removeEventListener('mousemove', _this.onMouseMove);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseMove", function (e) {
      var columnWidth = _this.props.columnWidth;

      _this.setState(function (_ref) {
        var initialX = _ref.initialX;
        return {
          offset: Math.max(e.pageX - initialX, -(columnWidth - MINIMUM_COLUMN_WIDTH))
        };
      });
    });

    return _this;
  }

  _createClass(EuiDataGridColumnResizer, [{
    key: "render",
    value: function render() {
      var offset = this.state.offset;
      return _react.default.createElement("div", {
        className: "euiDataGridColumnResizer",
        "data-test-subj": "dataGridColumnResizer",
        style: {
          marginRight: "".concat(-offset, "px")
        },
        onMouseDown: this.onMouseDown
      });
    }
  }]);

  return EuiDataGridColumnResizer;
}(_react.Component);

exports.EuiDataGridColumnResizer = EuiDataGridColumnResizer;
EuiDataGridColumnResizer.propTypes = {
  columnId: _propTypes.default.string.isRequired,
  columnWidth: _propTypes.default.number.isRequired,
  setColumnWidth: _propTypes.default.func.isRequired
};
EuiDataGridColumnResizer.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onMouseDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onMouseUp",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMouseMove",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiDataGridColumnResizer",
  "props": {
    "columnId": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "columnWidth": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "setColumnWidth": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};