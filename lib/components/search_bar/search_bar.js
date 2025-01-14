"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _query2.Query;
  }
});
Object.defineProperty(exports, "Ast", {
  enumerable: true,
  get: function get() {
    return _query2.AST;
  }
});
exports.EuiSearchBar = exports.SearchBarPropTypes = exports.QueryType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _predicate = require("../../services/predicate");

var _flex_group = require("../flex/flex_group");

var _search_box = require("./search_box");

var _search_filters = require("./search_filters");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _query2 = require("./query");

var _flex_item = require("../flex/flex_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryType = _propTypes.default.oneOfType([_propTypes.default.instanceOf(_query2.Query), _propTypes.default.string]);

exports.QueryType = QueryType;
var SearchBarPropTypes = {
  /**
   (query?: Query, queryText: string, error?: string) => void
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   The initial query the bar will hold when first mounted
   */
  defaultQuery: QueryType,

  /**
   If you wish to use the search bar as a controlled component, continuously pass the query
   via this prop
   */
  query: QueryType,

  /**
   Configures the search box. Set `placeholder` to change the placeholder text in the box and
   `incremental` to support incremental (as you type) search.
   */
  box: _propTypes.default.shape(_search_box.SearchBoxConfigPropTypes),

  /**
   An array of search filters.
   */
  filters: _search_filters.SearchFiltersFiltersType,

  /**
   * Tools which go to the left of the search bar.
   */
  toolsLeft: _propTypes.default.node,

  /**
   * Tools which go to the right of the search bar.
   */
  toolsRight: _propTypes.default.node,

  /**
   * Date formatter to use when parsing date values
   */
  dateFormat: _propTypes.default.object
};
exports.SearchBarPropTypes = SearchBarPropTypes;

var parseQuery = function parseQuery(query, props) {
  var schema = props.box ? props.box.schema : undefined;
  var dateFormat = props.dateFormat;
  var parseOptions = {
    schema: schema,
    dateFormat: dateFormat
  };

  if (!query) {
    return _query2.Query.parse('', parseOptions);
  }

  return (0, _predicate.isString)(query) ? _query2.Query.parse(query, parseOptions) : query;
};

var EuiSearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiSearchBar, _Component);

  function EuiSearchBar(props) {
    var _this;

    _classCallCheck(this, EuiSearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiSearchBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch", function (queryText) {
      try {
        var query = parseQuery(queryText, _this.props);

        _this.notifyControllingParent({
          query: query,
          queryText: queryText,
          error: null
        });

        _this.setState({
          query: query,
          queryText: queryText,
          error: null
        });
      } catch (e) {
        var error = {
          message: e.message
        };

        _this.notifyControllingParent({
          query: null,
          queryText: queryText,
          error: error
        });

        _this.setState({
          queryText: queryText,
          error: error
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFiltersChange", function (query) {
      _this.notifyControllingParent({
        query: query,
        queryText: query.text,
        error: null
      });

      _this.setState({
        query: query,
        queryText: query.text,
        error: null
      });
    });

    var _query = parseQuery(props.defaultQuery || props.query, props);

    _this.state = {
      query: _query,
      queryText: _query.text,
      error: null
    };
    return _this;
  }

  _createClass(EuiSearchBar, [{
    key: "notifyControllingParent",
    value: function notifyControllingParent(newState) {
      var oldState = this.state;
      var query = newState.query,
          queryText = newState.queryText,
          error = newState.error;
      var isQueryDifferent = oldState.queryText !== queryText;
      var oldError = oldState.error ? oldState.error.message : null;
      var newError = error ? error.message : null;
      var isErrorDifferent = oldError !== newError;

      if (isQueryDifferent || isErrorDifferent) {
        this.props.onChange({
          query: query,
          queryText: queryText,
          error: error
        });
      }
    }
  }, {
    key: "renderTools",
    value: function renderTools(tools) {
      if (!tools) {
        return undefined;
      }

      if (Array.isArray(tools)) {
        return tools.map(function (tool) {
          return _react.default.createElement(_flex_item.EuiFlexItem, {
            grow: false,
            key: tool.key
          }, tool);
        });
      }

      return _react.default.createElement(_flex_item.EuiFlexItem, {
        grow: false
      }, tools);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          query = _this$state.query,
          queryText = _this$state.queryText,
          error = _this$state.error;
      var _this$props = this.props,
          box = _this$props.box,
          filters = _this$props.filters,
          toolsLeft = _this$props.toolsLeft,
          toolsRight = _this$props.toolsRight;
      var toolsLeftEl = this.renderTools(toolsLeft);
      var filtersBar = !filters ? undefined : _react.default.createElement(_flex_item.EuiFlexItem, {
        className: "euiSearchBar__filtersHolder",
        grow: false
      }, _react.default.createElement(_search_filters.EuiSearchFilters, {
        filters: filters,
        query: query,
        onChange: this.onFiltersChange
      }));
      var toolsRightEl = this.renderTools(toolsRight);
      return _react.default.createElement(_flex_group.EuiFlexGroup, {
        gutterSize: "m",
        alignItems: "center",
        wrap: true
      }, toolsLeftEl, _react.default.createElement(_flex_item.EuiFlexItem, {
        className: "euiSearchBar__searchHolder",
        grow: true
      }, _react.default.createElement(_search_box.EuiSearchBox, _extends({}, box, {
        query: queryText,
        onSearch: this.onSearch,
        isInvalid: !!error,
        title: error ? error.message : undefined
      }))), filtersBar, toolsRightEl);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.query && (!prevState.query || nextProps.query.text !== prevState.query.text)) {
        var query = parseQuery(nextProps.query, nextProps);
        return {
          query: query,
          queryText: query.text,
          error: null
        };
      }

      return null;
    }
  }]);

  return EuiSearchBar;
}(_react.Component);

exports.EuiSearchBar = EuiSearchBar;

_defineProperty(EuiSearchBar, "propTypes", SearchBarPropTypes);

_defineProperty(EuiSearchBar, "Query", _query2.Query);

EuiSearchBar.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "notifyControllingParent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newState",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onSearch",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "queryText",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onFiltersChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "query",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTools",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tools",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiSearchBar",
  "props": {
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": "(query?: Query, queryText: string, error?: string) => void"
    },
    "defaultQuery": {
      "type": {
        "name": "custom",
        "raw": "QueryType"
      },
      "required": false,
      "description": "The initial query the bar will hold when first mounted"
    },
    "query": {
      "type": {
        "name": "custom",
        "raw": "QueryType"
      },
      "required": false,
      "description": "If you wish to use the search bar as a controlled component, continuously pass the query\n   via this prop"
    },
    "box": {
      "type": {
        "name": "shape",
        "value": "import { EuiSearchBox, SearchBoxConfigPropTypes } from './search_box';",
        "computed": true
      },
      "required": false,
      "description": "Configures the search box. Set `placeholder` to change the placeholder text in the box and\n   `incremental` to support incremental (as you type) search."
    },
    "filters": {
      "type": {
        "name": "custom",
        "raw": "SearchFiltersFiltersType"
      },
      "required": false,
      "description": "An array of search filters."
    },
    "toolsLeft": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Tools which go to the left of the search bar."
    },
    "toolsRight": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Tools which go to the right of the search bar."
    },
    "dateFormat": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": "Date formatter to use when parsing date values"
    }
  }
};