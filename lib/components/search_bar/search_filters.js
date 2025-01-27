"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSearchFilters = exports.SearchFiltersFiltersType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _filters = require("./filters");

var _query = require("./query");

var _filter_group = require("../../components/filter_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchFiltersFiltersType = _propTypes.default.arrayOf(_filters.FilterConfigType);

exports.SearchFiltersFiltersType = SearchFiltersFiltersType;

var EuiSearchFilters =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSearchFilters, _Component);

  function EuiSearchFilters(props) {
    _classCallCheck(this, EuiSearchFilters);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiSearchFilters).call(this, props));
  }

  _createClass(EuiSearchFilters, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$filters = _this$props.filters,
          filters = _this$props$filters === void 0 ? [] : _this$props$filters,
          query = _this$props.query,
          onChange = _this$props.onChange;
      var items = filters.reduce(function (controls, filterConfig, index) {
        if (filterConfig.available && !filterConfig.available()) {
          return controls;
        }

        var key = "filter_".concat(index);
        var control = (0, _filters.createFilter)(index, filterConfig, query, onChange);
        controls.push(_react.default.createElement(_react.Fragment, {
          key: key
        }, control));
        return controls;
      }, []);
      return _react.default.createElement(_filter_group.EuiFilterGroup, null, items);
    }
  }]);

  return EuiSearchFilters;
}(_react.Component);

exports.EuiSearchFilters = EuiSearchFilters;

_defineProperty(EuiSearchFilters, "propTypes", {
  query: _propTypes.default.instanceOf(_query.Query).isRequired,
  onChange: _propTypes.default.func.isRequired,
  filters: SearchFiltersFiltersType
});

_defineProperty(EuiSearchFilters, "defaultProps", {
  filters: []
});

EuiSearchFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiSearchFilters",
  "props": {
    "filters": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "custom",
        "raw": "SearchFiltersFiltersType"
      },
      "required": false,
      "description": ""
    },
    "query": {
      "type": {
        "name": "instanceOf",
        "value": "Query"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};