"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiInMemoryTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _basic_table = require("./basic_table");

var _pagination_bar = require("./pagination_bar");

var _predicate = require("../../services/predicate");

var _sort2 = require("../../services/sort");

var _search_bar = require("../search_bar");

var _spacer = require("../spacer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isEuiSearchBarProps(x) {
  return typeof x !== 'boolean';
}

var getInitialQuery = function getInitialQuery(search) {
  if (!search) {
    return;
  }

  var query = search.defaultQuery || '';
  return (0, _predicate.isString)(query) ? _search_bar.EuiSearchBar.Query.parse(query) : query;
};

var getInitialPagination = function getInitialPagination(pagination) {
  if (!pagination) {
    return {
      pageIndex: undefined,
      pageSize: undefined
    };
  }

  var _ref = pagination,
      _ref$initialPageIndex = _ref.initialPageIndex,
      initialPageIndex = _ref$initialPageIndex === void 0 ? 0 : _ref$initialPageIndex,
      initialPageSize = _ref.initialPageSize,
      _ref$pageSizeOptions = _ref.pageSizeOptions,
      pageSizeOptions = _ref$pageSizeOptions === void 0 ? _pagination_bar.defaults.pageSizeOptions : _ref$pageSizeOptions,
      hidePerPageOptions = _ref.hidePerPageOptions;

  if (!hidePerPageOptions && initialPageSize && (!pageSizeOptions || !pageSizeOptions.includes(initialPageSize))) {
    throw new Error("EuiInMemoryTable received initialPageSize ".concat(initialPageSize, ", which wasn't provided within pageSizeOptions."));
  }

  var defaultPageSize = pageSizeOptions ? pageSizeOptions[0] : _pagination_bar.defaults.pageSizeOptions[0];
  return {
    pageIndex: initialPageIndex,
    pageSize: initialPageSize || defaultPageSize,
    pageSizeOptions: pageSizeOptions,
    hidePerPageOptions: hidePerPageOptions
  };
};

function findColumnByProp(columns, prop, value) {
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];

    if (column[prop] === value) {
      return column;
    }
  }
}

function getInitialSorting(columns, sorting) {
  if (!sorting || !sorting.sort) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var _sort = sorting.sort,
      sortable = _sort.field,
      sortDirection = _sort.direction; // sortable could be a column's `field` or its `name`
  // for backwards compatibility `field` must be checked first

  var sortColumn = findColumnByProp(columns, 'field', sortable);

  if (sortColumn == null) {
    sortColumn = findColumnByProp(columns, 'name', sortable);
  }

  if (sortColumn == null) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var sortName = sortColumn.name;
  return {
    sortName: sortName,
    sortDirection: sortDirection
  };
}

var EuiInMemoryTable =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiInMemoryTable, _Component);

  _createClass(EuiInMemoryTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.items !== prevState.prevProps.items) {
        // We have new items because an external search has completed, so reset pagination state.
        return {
          prevProps: _objectSpread({}, prevState.prevProps, {
            items: nextProps.items
          }),
          pageIndex: 0
        };
      }

      var _getInitialSorting = getInitialSorting(nextProps.columns, nextProps.sorting),
          sortName = _getInitialSorting.sortName,
          sortDirection = _getInitialSorting.sortDirection;

      if (sortName !== prevState.prevProps.sortName || sortDirection !== prevState.prevProps.sortDirection) {
        return {
          sortName: sortName,
          sortDirection: sortDirection
        };
      }

      return null;
    }
  }]);

  function EuiInMemoryTable(props) {
    var _this;

    _classCallCheck(this, EuiInMemoryTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EuiInMemoryTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTableChange", function (_ref2) {
      var page = _ref2.page,
          sort = _ref2.sort;

      var _ref3 = page || {},
          pageIndex = _ref3.index,
          pageSize = _ref3.size;

      var _ref4 = sort || {},
          sortName = _ref4.field,
          sortDirection = _ref4.direction; // To keep backwards compatibility reportedSortName needs to be tracked separately
      // from sortName; sortName gets stored internally while reportedSortName is sent to the callback


      var reportedSortName = sortName; // EuiBasicTable returns the column's `field` if it exists instead of `name`,
      // map back to `name` if this is the case

      for (var i = 0; i < _this.props.columns.length; i++) {
        var column = _this.props.columns[i];

        if (column.field === sortName) {
          sortName = column.name;
          break;
        }
      } // Allow going back to 'neutral' sorting


      if (_this.state.allowNeutralSort && _this.state.sortName === sortName && _this.state.sortDirection === 'desc' && sortDirection === 'asc') {
        sortName = '';
        reportedSortName = '';
        sortDirection = 'asc'; // Default sort direction.
      }

      if (_this.props.onTableChange) {
        _this.props.onTableChange({
          // @ts-ignore complex relationship between pagination's existance and criteria, the code logic ensures this is correctly maintained
          page: page,
          sort: {
            field: reportedSortName,
            direction: sortDirection
          }
        });
      }

      _this.setState({
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortName: sortName,
        sortDirection: sortDirection
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onQueryChange", function (_ref5) {
      var query = _ref5.query,
          queryText = _ref5.queryText,
          error = _ref5.error;

      if (isEuiSearchBarProps(_this.props.search)) {
        var _search2 = _this.props.search;

        if (_search2.onChange) {
          var shouldQueryInMemory = _search2.onChange({
            query: query,
            queryText: queryText,
            error: error
          });

          if (!shouldQueryInMemory) {
            return;
          }
        }
      } // Reset pagination state.


      _this.setState({
        query: query,
        pageIndex: 0
      });
    });

    var columns = props.columns,
        _search = props.search,
        pagination = props.pagination,
        sorting = props.sorting,
        allowNeutralSort = props.allowNeutralSort;

    var _getInitialPagination = getInitialPagination(pagination),
        _pageIndex = _getInitialPagination.pageIndex,
        _pageSize = _getInitialPagination.pageSize,
        pageSizeOptions = _getInitialPagination.pageSizeOptions,
        hidePerPageOptions = _getInitialPagination.hidePerPageOptions;

    var _getInitialSorting2 = getInitialSorting(columns, sorting),
        _sortName = _getInitialSorting2.sortName,
        _sortDirection = _getInitialSorting2.sortDirection;

    _this.state = {
      prevProps: {
        items: props.items,
        sortName: _sortName,
        sortDirection: _sortDirection
      },
      query: getInitialQuery(_search),
      pageIndex: _pageIndex || 0,
      pageSize: _pageSize,
      pageSizeOptions: pageSizeOptions,
      sortName: _sortName,
      sortDirection: _sortDirection,
      allowNeutralSort: allowNeutralSort === false ? false : true,
      hidePerPageOptions: hidePerPageOptions
    };
    return _this;
  }

  _createClass(EuiInMemoryTable, [{
    key: "renderSearchBar",
    value: function renderSearchBar() {
      var search = this.props.search;

      if (search) {
        var searchBarProps = {};

        if (isEuiSearchBarProps(search)) {
          var _onChange = search.onChange,
              _searchBarProps = _objectWithoutProperties(search, ["onChange"]);

          searchBarProps = _searchBarProps;

          if (searchBarProps.box && searchBarProps.box.schema === true) {
            searchBarProps.box.schema = this.resolveSearchSchema();
          }
        }

        return _react.default.createElement(_search_bar.EuiSearchBar, _extends({
          onChange: this.onQueryChange
        }, searchBarProps));
      }
    }
  }, {
    key: "resolveSearchSchema",
    value: function resolveSearchSchema() {
      var columns = this.props.columns;
      return columns.reduce(function (schema, column) {
        var _ref6 = column,
            field = _ref6.field,
            dataType = _ref6.dataType;

        if (field) {
          var _type = dataType || 'string';

          schema.fields[field] = {
            type: _type
          };
        }

        return schema;
      }, {
        strict: true,
        fields: {}
      });
    }
  }, {
    key: "getItemSorter",
    value: function getItemSorter() {
      var _this$state = this.state,
          sortName = _this$state.sortName,
          sortDirection = _this$state.sortDirection;
      var columns = this.props.columns;
      var sortColumn = columns.find(function (_ref7) {
        var name = _ref7.name;
        return name === sortName;
      });

      if (sortColumn == null) {
        // can't return a non-function so return a function that says everything is the same
        return function () {
          return function () {
            return 0;
          };
        };
      }

      var sortable = sortColumn.sortable;

      if (typeof sortable === 'function') {
        return _sort2.Comparators.value(sortable, _sort2.Comparators.default(sortDirection));
      }

      return _sort2.Comparators.property(sortColumn.field, _sort2.Comparators.default(sortDirection));
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var executeQueryOptions = this.props.executeQueryOptions;
      var items = this.state.prevProps.items;

      if (!items.length) {
        return {
          items: [],
          totalItemCount: 0
        };
      }

      var _this$state2 = this.state,
          query = _this$state2.query,
          sortName = _this$state2.sortName,
          pageIndex = _this$state2.pageIndex,
          pageSize = _this$state2.pageSize;
      var matchingItems = query ? _search_bar.EuiSearchBar.Query.execute(query, items, executeQueryOptions) : items;
      var sortedItems = sortName ? matchingItems.slice(0) // avoid mutating the source array
      .sort(this.getItemSorter()) // sort, causes mutation
      : matchingItems;
      var visibleItems = pageSize ? function () {
        var startIndex = pageIndex * pageSize;
        return sortedItems.slice(startIndex, Math.min(startIndex + pageSize, sortedItems.length));
      }() : sortedItems;
      return {
        items: visibleItems,
        totalItemCount: matchingItems.length
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          loading = _this$props.loading,
          message = _this$props.message,
          error = _this$props.error,
          selection = _this$props.selection,
          isSelectable = _this$props.isSelectable,
          hasActions = _this$props.hasActions,
          compressed = _this$props.compressed,
          hasPagination = _this$props.pagination,
          hasSorting = _this$props.sorting,
          itemIdToExpandedRowMap = _this$props.itemIdToExpandedRowMap,
          itemId = _this$props.itemId,
          rowProps = _this$props.rowProps,
          cellProps = _this$props.cellProps,
          _unuseditems = _this$props.items,
          search = _this$props.search,
          onTableChange = _this$props.onTableChange,
          executeQueryOptions = _this$props.executeQueryOptions,
          allowNeutralSort = _this$props.allowNeutralSort,
          rest = _objectWithoutProperties(_this$props, ["columns", "loading", "message", "error", "selection", "isSelectable", "hasActions", "compressed", "pagination", "sorting", "itemIdToExpandedRowMap", "itemId", "rowProps", "cellProps", "items", "search", "onTableChange", "executeQueryOptions", "allowNeutralSort"]);

      var _this$state3 = this.state,
          pageIndex = _this$state3.pageIndex,
          pageSize = _this$state3.pageSize,
          pageSizeOptions = _this$state3.pageSizeOptions,
          sortName = _this$state3.sortName,
          sortDirection = _this$state3.sortDirection,
          hidePerPageOptions = _this$state3.hidePerPageOptions;

      var _this$getItems = this.getItems(),
          items = _this$getItems.items,
          totalItemCount = _this$getItems.totalItemCount;

      var pagination = !hasPagination ? undefined : {
        pageIndex: pageIndex,
        pageSize: pageSize || 1,
        pageSizeOptions: pageSizeOptions,
        totalItemCount: totalItemCount,
        hidePerPageOptions: hidePerPageOptions
      }; // Data loaded from a server can have a default sort order which is meaningful to the
      // user, but can't be reproduced with client-side sort logic. So we allow the table to display
      // rows in the order in which they're initially loaded by providing an undefined sorting prop.

      var sorting = !hasSorting ? undefined : {
        sort: !sortName && !sortDirection ? undefined : {
          field: sortName,
          direction: sortDirection
        },
        allowNeutralSort: this.state.allowNeutralSort
      };
      var searchBar = this.renderSearchBar();

      var table = // @ts-ignore complex relationship between pagination's existance and criteria, the code logic ensures this is correctly maintained
      _react.default.createElement(_basic_table.EuiBasicTable, _extends({
        items: items,
        itemId: itemId,
        rowProps: rowProps,
        cellProps: cellProps,
        columns: columns,
        pagination: pagination,
        sorting: sorting,
        selection: selection,
        isSelectable: isSelectable,
        hasActions: hasActions,
        onChange: this.onTableChange,
        error: error,
        loading: loading,
        noItemsMessage: message,
        compressed: compressed,
        itemIdToExpandedRowMap: itemIdToExpandedRowMap
      }, rest));

      if (!searchBar) {
        return table;
      }

      return _react.default.createElement("div", null, searchBar, _react.default.createElement(_spacer.EuiSpacer, {
        size: "l"
      }), table);
    }
  }]);

  return EuiInMemoryTable;
}(_react.Component);

exports.EuiInMemoryTable = EuiInMemoryTable;

_defineProperty(EuiInMemoryTable, "defaultProps", {
  responsive: true
});

EuiInMemoryTable.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "aria-label": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  itemId: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.func.isRequired]),
  itemIdToExpandedRowMap: _propTypes.default.shape({}),
  items: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),
  cellProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),
  columns: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
    field: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]).isRequired,
    // supports outer.inner key paths
    name: _propTypes.default.node.isRequired,
    description: _propTypes.default.string,
    dataType: _propTypes.default.oneOf(["auto", "string", "number", "boolean", "date"]),
    width: _propTypes.default.string,
    sortable: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.func.isRequired]),
    isExpander: _propTypes.default.bool,
    textOnly: _propTypes.default.bool,
    align: _propTypes.default.oneOf(["left", "right", "center"]),
    truncateText: _propTypes.default.bool,
    isMobileHeader: _propTypes.default.bool,
    mobileOptions: _propTypes.default.shape({
      show: _propTypes.default.bool,
      only: _propTypes.default.bool,
      render: _propTypes.default.func,
      header: _propTypes.default.bool
    }),
    hideForMobile: _propTypes.default.bool,
    render: _propTypes.default.func,
    footer: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired, _propTypes.default.func.isRequired]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    render: _propTypes.default.func.isRequired,
    name: _propTypes.default.node,
    description: _propTypes.default.string,
    sortable: _propTypes.default.func,
    width: _propTypes.default.string,
    truncateText: _propTypes.default.bool,
    isExpander: _propTypes.default.bool,
    align: _propTypes.default.oneOf(["left", "right", "center"]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    actions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["button"]), _propTypes.default.oneOf(["icon"]).isRequired]),
      color: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["primary", "danger", "disabled", "text", "ghost"]).isRequired, _propTypes.default.func.isRequired]), _propTypes.default.oneOfType([_propTypes.default.oneOf(["danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]).isRequired, _propTypes.default.func.isRequired])]),
      name: _propTypes.default.string.isRequired,
      description: _propTypes.default.string.isRequired,
      onClick: _propTypes.default.func,
      href: _propTypes.default.string,
      target: _propTypes.default.string,
      available: _propTypes.default.func,
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool,
      "data-test-subj": _propTypes.default.string,
      icon: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.func.isRequired])
    }).isRequired, _propTypes.default.shape({
      render: _propTypes.default.func.isRequired,
      available: _propTypes.default.func,
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool
    }).isRequired]).isRequired).isRequired,
    name: _propTypes.default.node,
    description: _propTypes.default.string,
    width: _propTypes.default.string
  }).isRequired]).isRequired),
  compressed: _propTypes.default.bool,
  error: _propTypes.default.string,
  hasActions: _propTypes.default.bool,
  isExpandable: _propTypes.default.bool,
  isSelectable: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  responsive: _propTypes.default.bool,
  rowProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),
  selection: _propTypes.default.shape({
    onSelectionChange: _propTypes.default.func,
    selectable: _propTypes.default.func,
    selectableMessage: _propTypes.default.func
  }),
  message: _propTypes.default.node,
  search: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    /**
       The initial query the bar will hold when first mounted
       */
    defaultQuery: _propTypes.default.any,

    /**
       If you wish to use the search bar as a controlled component, continuously pass the query
       via this prop
       */
    query: _propTypes.default.any,

    /**
       Configures the search box. Set `placeholder` to change the placeholder text in the box and
       `incremental` to support incremental (as you type) search.
       */
    box: _propTypes.default.shape({
      schema: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
        strict: _propTypes.default.bool,
        fields: _propTypes.default.any,
        flags: _propTypes.default.arrayOf(_propTypes.default.string.isRequired)
      }).isRequired])
    }),

    /**
       An array of search filters.
       */
    filters: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      type: _propTypes.default.oneOf(["is"]).isRequired,
      field: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_selection"]).isRequired,
      field: _propTypes.default.string,
      autoClose: _propTypes.default.bool,
      name: _propTypes.default.string.isRequired,
      options: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
        field: _propTypes.default.string,
        value: _propTypes.default.any.isRequired,
        name: _propTypes.default.string,
        view: _propTypes.default.node
      }).isRequired).isRequired, _propTypes.default.func.isRequired]).isRequired,
      filterWith: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.oneOf(["prefix", "includes"])]),
      cache: _propTypes.default.number,
      multiSelect: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.oneOf(["and", "or"])]),
      loadingMessage: _propTypes.default.string,
      noOptionsMessage: _propTypes.default.string,
      searchThreshold: _propTypes.default.number,
      available: _propTypes.default.func
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle"]).isRequired,
      field: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired]).isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func,
      operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle_group"]).isRequired,
      field: _propTypes.default.string.isRequired,
      items: _propTypes.default.arrayOf(_propTypes.default.shape({
        value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired]).isRequired,
        name: _propTypes.default.string.isRequired,
        negatedName: _propTypes.default.string,
        operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
      }).isRequired).isRequired,
      available: _propTypes.default.func
    }).isRequired]).isRequired),

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
    dateFormat: _propTypes.default.any,
    onChange: _propTypes.default.func
  }).isRequired]),
  pagination: _propTypes.default.oneOfType([_propTypes.default.oneOf([undefined]), _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    initialPageIndex: _propTypes.default.number,
    initialPageSize: _propTypes.default.number,
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired),
    hidePerPageOptions: _propTypes.default.bool
  }).isRequired])]),
  sorting: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    sort: _propTypes.default.shape({
      field: _propTypes.default.string.isRequired,
      direction: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]).isRequired
    }).isRequired
  }).isRequired]),

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */
  allowNeutralSort: _propTypes.default.bool,
  onTableChange: _propTypes.default.func,
  executeQueryOptions: _propTypes.default.shape({
    defaultFields: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
    isClauseMatcher: _propTypes.default.func,
    explain: _propTypes.default.bool
  })
};
EuiInMemoryTable.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onTableChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{\n  page,\n  sort\n}",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onQueryChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{\n  query,\n  queryText,\n  error\n}",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderSearchBar",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "resolveSearchSchema",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getItemSorter",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getItems",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EuiInMemoryTable",
  "props": {
    "responsive": {
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
    "className": {
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "string"
          }, {
            "name": "string"
          }]
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "string"
          }, {
            "name": "string"
          }]
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "string"
          }, {
            "name": "string"
          }]
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": ""
    },
    "itemId": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.func.isRequired])"
      },
      "required": false,
      "description": ""
    },
    "itemIdToExpandedRowMap": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false,
      "description": ""
    },
    "items": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": false,
      "description": ""
    },
    "cellProps": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "columns": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "union",
          "value": [{
            "name": "shape",
            "value": {
              "field": {
                "name": "union",
                "value": [{
                  "name": "any"
                }, {
                  "name": "string"
                }],
                "required": true
              },
              "name": {
                "name": "node",
                "required": true
              },
              "description": {
                "name": "string",
                "required": false
              },
              "dataType": {
                "name": "enum",
                "value": [{
                  "value": "\"auto\"",
                  "computed": false
                }, {
                  "value": "\"string\"",
                  "computed": false
                }, {
                  "value": "\"number\"",
                  "computed": false
                }, {
                  "value": "\"boolean\"",
                  "computed": false
                }, {
                  "value": "\"date\"",
                  "computed": false
                }],
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              },
              "sortable": {
                "name": "union",
                "value": [{
                  "name": "bool"
                }, {
                  "name": "func"
                }],
                "required": false
              },
              "isExpander": {
                "name": "bool",
                "required": false
              },
              "textOnly": {
                "name": "bool",
                "required": false
              },
              "align": {
                "name": "enum",
                "value": [{
                  "value": "\"left\"",
                  "computed": false
                }, {
                  "value": "\"right\"",
                  "computed": false
                }, {
                  "value": "\"center\"",
                  "computed": false
                }],
                "required": false
              },
              "truncateText": {
                "name": "bool",
                "required": false
              },
              "isMobileHeader": {
                "name": "bool",
                "required": false
              },
              "mobileOptions": {
                "name": "shape",
                "value": {
                  "show": {
                    "name": "bool",
                    "required": false
                  },
                  "only": {
                    "name": "bool",
                    "required": false
                  },
                  "render": {
                    "name": "func",
                    "required": false
                  },
                  "header": {
                    "name": "bool",
                    "required": false
                  }
                },
                "required": false
              },
              "hideForMobile": {
                "name": "bool",
                "required": false
              },
              "render": {
                "name": "func",
                "required": false
              },
              "footer": {
                "name": "union",
                "value": [{
                  "name": "string"
                }, {
                  "name": "element"
                }, {
                  "name": "func"
                }],
                "required": false
              },
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              }
            }
          }, {
            "name": "shape",
            "value": {
              "render": {
                "name": "func",
                "required": true
              },
              "name": {
                "name": "node",
                "required": false
              },
              "description": {
                "name": "string",
                "required": false
              },
              "sortable": {
                "name": "func",
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              },
              "truncateText": {
                "name": "bool",
                "required": false
              },
              "isExpander": {
                "name": "bool",
                "required": false
              },
              "align": {
                "name": "enum",
                "value": [{
                  "value": "\"left\"",
                  "computed": false
                }, {
                  "value": "\"right\"",
                  "computed": false
                }, {
                  "value": "\"center\"",
                  "computed": false
                }],
                "required": false
              },
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              }
            }
          }, {
            "name": "shape",
            "value": {
              "actions": {
                "name": "arrayOf",
                "value": {
                  "name": "union",
                  "value": [{
                    "name": "shape",
                    "value": {
                      "type": {
                        "name": "union",
                        "value": [{
                          "name": "enum",
                          "value": [{
                            "value": "\"button\"",
                            "computed": false
                          }]
                        }, {
                          "name": "enum",
                          "value": [{
                            "value": "\"icon\"",
                            "computed": false
                          }]
                        }],
                        "required": false
                      },
                      "color": {
                        "name": "union",
                        "value": [{
                          "name": "union",
                          "value": [{
                            "name": "enum",
                            "value": [{
                              "value": "\"primary\"",
                              "computed": false
                            }, {
                              "value": "\"danger\"",
                              "computed": false
                            }, {
                              "value": "\"disabled\"",
                              "computed": false
                            }, {
                              "value": "\"text\"",
                              "computed": false
                            }, {
                              "value": "\"ghost\"",
                              "computed": false
                            }]
                          }, {
                            "name": "func"
                          }]
                        }, {
                          "name": "union",
                          "value": [{
                            "name": "enum",
                            "value": [{
                              "value": "\"danger\"",
                              "computed": false
                            }, {
                              "value": "\"disabled\"",
                              "computed": false
                            }, {
                              "value": "\"ghost\"",
                              "computed": false
                            }, {
                              "value": "\"primary\"",
                              "computed": false
                            }, {
                              "value": "\"subdued\"",
                              "computed": false
                            }, {
                              "value": "\"success\"",
                              "computed": false
                            }, {
                              "value": "\"text\"",
                              "computed": false
                            }, {
                              "value": "\"warning\"",
                              "computed": false
                            }]
                          }, {
                            "name": "func"
                          }]
                        }],
                        "required": false
                      },
                      "name": {
                        "name": "string",
                        "required": true
                      },
                      "description": {
                        "name": "string",
                        "required": true
                      },
                      "onClick": {
                        "name": "func",
                        "required": false
                      },
                      "href": {
                        "name": "string",
                        "required": false
                      },
                      "target": {
                        "name": "string",
                        "required": false
                      },
                      "available": {
                        "name": "func",
                        "required": false
                      },
                      "enabled": {
                        "name": "func",
                        "required": false
                      },
                      "isPrimary": {
                        "name": "bool",
                        "required": false
                      },
                      "data-test-subj": {
                        "name": "string",
                        "required": false
                      },
                      "icon": {
                        "name": "union",
                        "value": [{
                          "name": "enum",
                          "value": [{
                            "value": "\"accessibility\"",
                            "computed": false
                          }, {
                            "value": "\"addDataApp\"",
                            "computed": false
                          }, {
                            "value": "\"advancedSettingsApp\"",
                            "computed": false
                          }, {
                            "value": "\"alert\"",
                            "computed": false
                          }, {
                            "value": "\"apmApp\"",
                            "computed": false
                          }, {
                            "value": "\"apmTrace\"",
                            "computed": false
                          }, {
                            "value": "\"apps\"",
                            "computed": false
                          }, {
                            "value": "\"arrowDown\"",
                            "computed": false
                          }, {
                            "value": "\"arrowLeft\"",
                            "computed": false
                          }, {
                            "value": "\"arrowRight\"",
                            "computed": false
                          }, {
                            "value": "\"arrowUp\"",
                            "computed": false
                          }, {
                            "value": "\"asterisk\"",
                            "computed": false
                          }, {
                            "value": "\"auditbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"beaker\"",
                            "computed": false
                          }, {
                            "value": "\"bell\"",
                            "computed": false
                          }, {
                            "value": "\"bolt\"",
                            "computed": false
                          }, {
                            "value": "\"boxesHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"boxesVertical\"",
                            "computed": false
                          }, {
                            "value": "\"branch\"",
                            "computed": false
                          }, {
                            "value": "\"broom\"",
                            "computed": false
                          }, {
                            "value": "\"brush\"",
                            "computed": false
                          }, {
                            "value": "\"bug\"",
                            "computed": false
                          }, {
                            "value": "\"bullseye\"",
                            "computed": false
                          }, {
                            "value": "\"calendar\"",
                            "computed": false
                          }, {
                            "value": "\"canvasApp\"",
                            "computed": false
                          }, {
                            "value": "\"codeApp\"",
                            "computed": false
                          }, {
                            "value": "\"check\"",
                            "computed": false
                          }, {
                            "value": "\"checkInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"clock\"",
                            "computed": false
                          }, {
                            "value": "\"cloudDrizzle\"",
                            "computed": false
                          }, {
                            "value": "\"cloudStormy\"",
                            "computed": false
                          }, {
                            "value": "\"cloudSunny\"",
                            "computed": false
                          }, {
                            "value": "\"compute\"",
                            "computed": false
                          }, {
                            "value": "\"console\"",
                            "computed": false
                          }, {
                            "value": "\"consoleApp\"",
                            "computed": false
                          }, {
                            "value": "\"controlsHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"controlsVertical\"",
                            "computed": false
                          }, {
                            "value": "\"copy\"",
                            "computed": false
                          }, {
                            "value": "\"copyClipboard\"",
                            "computed": false
                          }, {
                            "value": "\"createAdvancedJob\"",
                            "computed": false
                          }, {
                            "value": "\"createMultiMetricJob\"",
                            "computed": false
                          }, {
                            "value": "\"createPopulationJob\"",
                            "computed": false
                          }, {
                            "value": "\"createSingleMetricJob\"",
                            "computed": false
                          }, {
                            "value": "\"cross\"",
                            "computed": false
                          }, {
                            "value": "\"crossClusterReplicationApp\"",
                            "computed": false
                          }, {
                            "value": "\"crosshairs\"",
                            "computed": false
                          }, {
                            "value": "\"crossInACircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"currency\"",
                            "computed": false
                          }, {
                            "value": "\"cut\"",
                            "computed": false
                          }, {
                            "value": "\"dashboardApp\"",
                            "computed": false
                          }, {
                            "value": "\"database\"",
                            "computed": false
                          }, {
                            "value": "\"dataVisualizer\"",
                            "computed": false
                          }, {
                            "value": "\"devToolsApp\"",
                            "computed": false
                          }, {
                            "value": "\"discoverApp\"",
                            "computed": false
                          }, {
                            "value": "\"document\"",
                            "computed": false
                          }, {
                            "value": "\"documentEdit\"",
                            "computed": false
                          }, {
                            "value": "\"documents\"",
                            "computed": false
                          }, {
                            "value": "\"dot\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignCenter\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorAlignRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorBold\"",
                            "computed": false
                          }, {
                            "value": "\"editorCodeBlock\"",
                            "computed": false
                          }, {
                            "value": "\"editorComment\"",
                            "computed": false
                          }, {
                            "value": "\"editorDistributeHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"editorDistributeVertical\"",
                            "computed": false
                          }, {
                            "value": "\"editorHeading\"",
                            "computed": false
                          }, {
                            "value": "\"editorItalic\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignBottom\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignCenter\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignMiddle\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorItemAlignTop\"",
                            "computed": false
                          }, {
                            "value": "\"editorLink\"",
                            "computed": false
                          }, {
                            "value": "\"editorOrderedList\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionBottomLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionBottomRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionTopLeft\"",
                            "computed": false
                          }, {
                            "value": "\"editorPositionTopRight\"",
                            "computed": false
                          }, {
                            "value": "\"editorRedo\"",
                            "computed": false
                          }, {
                            "value": "\"editorStrike\"",
                            "computed": false
                          }, {
                            "value": "\"editorTable\"",
                            "computed": false
                          }, {
                            "value": "\"editorUnderline\"",
                            "computed": false
                          }, {
                            "value": "\"editorUndo\"",
                            "computed": false
                          }, {
                            "value": "\"editorUnorderedList\"",
                            "computed": false
                          }, {
                            "value": "\"email\"",
                            "computed": false
                          }, {
                            "value": "\"empty\"",
                            "computed": false
                          }, {
                            "value": "\"emsApp\"",
                            "computed": false
                          }, {
                            "value": "\"exit\"",
                            "computed": false
                          }, {
                            "value": "\"expand\"",
                            "computed": false
                          }, {
                            "value": "\"expandMini\"",
                            "computed": false
                          }, {
                            "value": "\"exportAction\"",
                            "computed": false
                          }, {
                            "value": "\"eye\"",
                            "computed": false
                          }, {
                            "value": "\"eyeClosed\"",
                            "computed": false
                          }, {
                            "value": "\"faceHappy\"",
                            "computed": false
                          }, {
                            "value": "\"faceNeutral\"",
                            "computed": false
                          }, {
                            "value": "\"faceSad\"",
                            "computed": false
                          }, {
                            "value": "\"filebeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"filter\"",
                            "computed": false
                          }, {
                            "value": "\"flag\"",
                            "computed": false
                          }, {
                            "value": "\"folderClosed\"",
                            "computed": false
                          }, {
                            "value": "\"folderOpen\"",
                            "computed": false
                          }, {
                            "value": "\"fullScreen\"",
                            "computed": false
                          }, {
                            "value": "\"gear\"",
                            "computed": false
                          }, {
                            "value": "\"gisApp\"",
                            "computed": false
                          }, {
                            "value": "\"glasses\"",
                            "computed": false
                          }, {
                            "value": "\"globe\"",
                            "computed": false
                          }, {
                            "value": "\"grab\"",
                            "computed": false
                          }, {
                            "value": "\"grabHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"graphApp\"",
                            "computed": false
                          }, {
                            "value": "\"grid\"",
                            "computed": false
                          }, {
                            "value": "\"grokApp\"",
                            "computed": false
                          }, {
                            "value": "\"heart\"",
                            "computed": false
                          }, {
                            "value": "\"heartbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"heatmap\"",
                            "computed": false
                          }, {
                            "value": "\"help\"",
                            "computed": false
                          }, {
                            "value": "\"iInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"importAction\"",
                            "computed": false
                          }, {
                            "value": "\"indexClose\"",
                            "computed": false
                          }, {
                            "value": "\"indexEdit\"",
                            "computed": false
                          }, {
                            "value": "\"indexFlush\"",
                            "computed": false
                          }, {
                            "value": "\"indexManagementApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexMapping\"",
                            "computed": false
                          }, {
                            "value": "\"indexOpen\"",
                            "computed": false
                          }, {
                            "value": "\"indexPatternApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexRollupApp\"",
                            "computed": false
                          }, {
                            "value": "\"indexSettings\"",
                            "computed": false
                          }, {
                            "value": "\"metricsApp\"",
                            "computed": false
                          }, {
                            "value": "\"inputOutput\"",
                            "computed": false
                          }, {
                            "value": "\"inspect\"",
                            "computed": false
                          }, {
                            "value": "\"invert\"",
                            "computed": false
                          }, {
                            "value": "\"ip\"",
                            "computed": false
                          }, {
                            "value": "\"keyboardShortcut\"",
                            "computed": false
                          }, {
                            "value": "\"kqlField\"",
                            "computed": false
                          }, {
                            "value": "\"kqlFunction\"",
                            "computed": false
                          }, {
                            "value": "\"kqlOperand\"",
                            "computed": false
                          }, {
                            "value": "\"kqlSelector\"",
                            "computed": false
                          }, {
                            "value": "\"kqlValue\"",
                            "computed": false
                          }, {
                            "value": "\"lensApp\"",
                            "computed": false
                          }, {
                            "value": "\"link\"",
                            "computed": false
                          }, {
                            "value": "\"list\"",
                            "computed": false
                          }, {
                            "value": "\"listAdd\"",
                            "computed": false
                          }, {
                            "value": "\"lock\"",
                            "computed": false
                          }, {
                            "value": "\"lockOpen\"",
                            "computed": false
                          }, {
                            "value": "\"logsApp\"",
                            "computed": false
                          }, {
                            "value": "\"logoAerospike\"",
                            "computed": false
                          }, {
                            "value": "\"logoApache\"",
                            "computed": false
                          }, {
                            "value": "\"logoAPM\"",
                            "computed": false
                          }, {
                            "value": "\"logoAppSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoAWS\"",
                            "computed": false
                          }, {
                            "value": "\"logoAWSMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoAzure\"",
                            "computed": false
                          }, {
                            "value": "\"logoAzureMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoBeats\"",
                            "computed": false
                          }, {
                            "value": "\"logoBusinessAnalytics\"",
                            "computed": false
                          }, {
                            "value": "\"logoCeph\"",
                            "computed": false
                          }, {
                            "value": "\"logoCloud\"",
                            "computed": false
                          }, {
                            "value": "\"logoCloudEnterprise\"",
                            "computed": false
                          }, {
                            "value": "\"logoCode\"",
                            "computed": false
                          }, {
                            "value": "\"logoCodesandbox\"",
                            "computed": false
                          }, {
                            "value": "\"logoCouchbase\"",
                            "computed": false
                          }, {
                            "value": "\"logoDocker\"",
                            "computed": false
                          }, {
                            "value": "\"logoDropwizard\"",
                            "computed": false
                          }, {
                            "value": "\"logoElastic\"",
                            "computed": false
                          }, {
                            "value": "\"logoElasticsearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoElasticStack\"",
                            "computed": false
                          }, {
                            "value": "\"logoEnterpriseSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoEtcd\"",
                            "computed": false
                          }, {
                            "value": "\"logoGCP\"",
                            "computed": false
                          }, {
                            "value": "\"logoGCPMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoGithub\"",
                            "computed": false
                          }, {
                            "value": "\"logoGmail\"",
                            "computed": false
                          }, {
                            "value": "\"logoGolang\"",
                            "computed": false
                          }, {
                            "value": "\"logoHAproxy\"",
                            "computed": false
                          }, {
                            "value": "\"logoIBM\"",
                            "computed": false
                          }, {
                            "value": "\"logoIBMMono\"",
                            "computed": false
                          }, {
                            "value": "\"logoKafka\"",
                            "computed": false
                          }, {
                            "value": "\"logoKibana\"",
                            "computed": false
                          }, {
                            "value": "\"logoKubernetes\"",
                            "computed": false
                          }, {
                            "value": "\"logoLogging\"",
                            "computed": false
                          }, {
                            "value": "\"logoLogstash\"",
                            "computed": false
                          }, {
                            "value": "\"logoMaps\"",
                            "computed": false
                          }, {
                            "value": "\"logoMemcached\"",
                            "computed": false
                          }, {
                            "value": "\"logoMetrics\"",
                            "computed": false
                          }, {
                            "value": "\"logoMongodb\"",
                            "computed": false
                          }, {
                            "value": "\"logoMySQL\"",
                            "computed": false
                          }, {
                            "value": "\"logoNginx\"",
                            "computed": false
                          }, {
                            "value": "\"logoOsquery\"",
                            "computed": false
                          }, {
                            "value": "\"logoPhp\"",
                            "computed": false
                          }, {
                            "value": "\"logoPostgres\"",
                            "computed": false
                          }, {
                            "value": "\"logoPrometheus\"",
                            "computed": false
                          }, {
                            "value": "\"logoRabbitmq\"",
                            "computed": false
                          }, {
                            "value": "\"logoRedis\"",
                            "computed": false
                          }, {
                            "value": "\"logoSecurity\"",
                            "computed": false
                          }, {
                            "value": "\"logoSiteSearch\"",
                            "computed": false
                          }, {
                            "value": "\"logoSketch\"",
                            "computed": false
                          }, {
                            "value": "\"logoSlack\"",
                            "computed": false
                          }, {
                            "value": "\"logoUptime\"",
                            "computed": false
                          }, {
                            "value": "\"logoWebhook\"",
                            "computed": false
                          }, {
                            "value": "\"logoWindows\"",
                            "computed": false
                          }, {
                            "value": "\"logstashFilter\"",
                            "computed": false
                          }, {
                            "value": "\"logstashIf\"",
                            "computed": false
                          }, {
                            "value": "\"logstashInput\"",
                            "computed": false
                          }, {
                            "value": "\"logstashOutput\"",
                            "computed": false
                          }, {
                            "value": "\"logstashQueue\"",
                            "computed": false
                          }, {
                            "value": "\"machineLearningApp\"",
                            "computed": false
                          }, {
                            "value": "\"magnet\"",
                            "computed": false
                          }, {
                            "value": "\"magnifyWithMinus\"",
                            "computed": false
                          }, {
                            "value": "\"magnifyWithPlus\"",
                            "computed": false
                          }, {
                            "value": "\"managementApp\"",
                            "computed": false
                          }, {
                            "value": "\"mapMarker\"",
                            "computed": false
                          }, {
                            "value": "\"memory\"",
                            "computed": false
                          }, {
                            "value": "\"menuLeft\"",
                            "computed": false
                          }, {
                            "value": "\"menuRight\"",
                            "computed": false
                          }, {
                            "value": "\"merge\"",
                            "computed": false
                          }, {
                            "value": "\"metricbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"minimize\"",
                            "computed": false
                          }, {
                            "value": "\"minusInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"minusInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"monitoringApp\"",
                            "computed": false
                          }, {
                            "value": "\"moon\"",
                            "computed": false
                          }, {
                            "value": "\"node\"",
                            "computed": false
                          }, {
                            "value": "\"notebookApp\"",
                            "computed": false
                          }, {
                            "value": "\"number\"",
                            "computed": false
                          }, {
                            "value": "\"offline\"",
                            "computed": false
                          }, {
                            "value": "\"online\"",
                            "computed": false
                          }, {
                            "value": "\"package\"",
                            "computed": false
                          }, {
                            "value": "\"packetbeatApp\"",
                            "computed": false
                          }, {
                            "value": "\"partial\"",
                            "computed": false
                          }, {
                            "value": "\"pause\"",
                            "computed": false
                          }, {
                            "value": "\"pencil\"",
                            "computed": false
                          }, {
                            "value": "\"pin\"",
                            "computed": false
                          }, {
                            "value": "\"pinFilled\"",
                            "computed": false
                          }, {
                            "value": "\"pipelineApp\"",
                            "computed": false
                          }, {
                            "value": "\"play\"",
                            "computed": false
                          }, {
                            "value": "\"plusInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"plusInCircleFilled\"",
                            "computed": false
                          }, {
                            "value": "\"popout\"",
                            "computed": false
                          }, {
                            "value": "\"questionInCircle\"",
                            "computed": false
                          }, {
                            "value": "\"refresh\"",
                            "computed": false
                          }, {
                            "value": "\"reportingApp\"",
                            "computed": false
                          }, {
                            "value": "\"save\"",
                            "computed": false
                          }, {
                            "value": "\"savedObjectsApp\"",
                            "computed": false
                          }, {
                            "value": "\"scale\"",
                            "computed": false
                          }, {
                            "value": "\"search\"",
                            "computed": false
                          }, {
                            "value": "\"searchProfilerApp\"",
                            "computed": false
                          }, {
                            "value": "\"securityAnalyticsApp\"",
                            "computed": false
                          }, {
                            "value": "\"securityApp\"",
                            "computed": false
                          }, {
                            "value": "\"shard\"",
                            "computed": false
                          }, {
                            "value": "\"share\"",
                            "computed": false
                          }, {
                            "value": "\"snowflake\"",
                            "computed": false
                          }, {
                            "value": "\"sortable\"",
                            "computed": false
                          }, {
                            "value": "\"sortDown\"",
                            "computed": false
                          }, {
                            "value": "\"sortLeft\"",
                            "computed": false
                          }, {
                            "value": "\"sortRight\"",
                            "computed": false
                          }, {
                            "value": "\"sortUp\"",
                            "computed": false
                          }, {
                            "value": "\"spacesApp\"",
                            "computed": false
                          }, {
                            "value": "\"sqlApp\"",
                            "computed": false
                          }, {
                            "value": "\"starEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starEmptySpace\"",
                            "computed": false
                          }, {
                            "value": "\"starFilled\"",
                            "computed": false
                          }, {
                            "value": "\"starFilledSpace\"",
                            "computed": false
                          }, {
                            "value": "\"starMinusEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starMinusFilled\"",
                            "computed": false
                          }, {
                            "value": "\"starPlusEmpty\"",
                            "computed": false
                          }, {
                            "value": "\"starPlusFilled\"",
                            "computed": false
                          }, {
                            "value": "\"stats\"",
                            "computed": false
                          }, {
                            "value": "\"stop\"",
                            "computed": false
                          }, {
                            "value": "\"stopFilled\"",
                            "computed": false
                          }, {
                            "value": "\"stopSlash\"",
                            "computed": false
                          }, {
                            "value": "\"storage\"",
                            "computed": false
                          }, {
                            "value": "\"string\"",
                            "computed": false
                          }, {
                            "value": "\"submodule\"",
                            "computed": false
                          }, {
                            "value": "\"swatchInput\"",
                            "computed": false
                          }, {
                            "value": "\"symlink\"",
                            "computed": false
                          }, {
                            "value": "\"tableOfContents\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityExpanded\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityCompact\"",
                            "computed": false
                          }, {
                            "value": "\"tableDensityNormal\"",
                            "computed": false
                          }, {
                            "value": "\"tag\"",
                            "computed": false
                          }, {
                            "value": "\"tear\"",
                            "computed": false
                          }, {
                            "value": "\"temperature\"",
                            "computed": false
                          }, {
                            "value": "\"timelionApp\"",
                            "computed": false
                          }, {
                            "value": "\"training\"",
                            "computed": false
                          }, {
                            "value": "\"trash\"",
                            "computed": false
                          }, {
                            "value": "\"upgradeAssistantApp\"",
                            "computed": false
                          }, {
                            "value": "\"uptimeApp\"",
                            "computed": false
                          }, {
                            "value": "\"user\"",
                            "computed": false
                          }, {
                            "value": "\"usersRolesApp\"",
                            "computed": false
                          }, {
                            "value": "\"vector\"",
                            "computed": false
                          }, {
                            "value": "\"videoPlayer\"",
                            "computed": false
                          }, {
                            "value": "\"visArea\"",
                            "computed": false
                          }, {
                            "value": "\"visAreaStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visBarHorizontal\"",
                            "computed": false
                          }, {
                            "value": "\"visBarHorizontalStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visBarVertical\"",
                            "computed": false
                          }, {
                            "value": "\"visBarVerticalStacked\"",
                            "computed": false
                          }, {
                            "value": "\"visControls\"",
                            "computed": false
                          }, {
                            "value": "\"visGauge\"",
                            "computed": false
                          }, {
                            "value": "\"visGoal\"",
                            "computed": false
                          }, {
                            "value": "\"visHeatmap\"",
                            "computed": false
                          }, {
                            "value": "\"visLine\"",
                            "computed": false
                          }, {
                            "value": "\"visMapCoordinate\"",
                            "computed": false
                          }, {
                            "value": "\"visMapRegion\"",
                            "computed": false
                          }, {
                            "value": "\"visMetric\"",
                            "computed": false
                          }, {
                            "value": "\"visPie\"",
                            "computed": false
                          }, {
                            "value": "\"visTable\"",
                            "computed": false
                          }, {
                            "value": "\"visTagCloud\"",
                            "computed": false
                          }, {
                            "value": "\"visText\"",
                            "computed": false
                          }, {
                            "value": "\"visTimelion\"",
                            "computed": false
                          }, {
                            "value": "\"visualizeApp\"",
                            "computed": false
                          }, {
                            "value": "\"visVega\"",
                            "computed": false
                          }, {
                            "value": "\"visVisualBuilder\"",
                            "computed": false
                          }, {
                            "value": "\"watchesApp\"",
                            "computed": false
                          }, {
                            "value": "\"wrench\"",
                            "computed": false
                          }, {
                            "value": "\"tokenClass\"",
                            "computed": false
                          }, {
                            "value": "\"tokenProperty\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEnum\"",
                            "computed": false
                          }, {
                            "value": "\"tokenVariable\"",
                            "computed": false
                          }, {
                            "value": "\"tokenMethod\"",
                            "computed": false
                          }, {
                            "value": "\"tokenAnnotation\"",
                            "computed": false
                          }, {
                            "value": "\"tokenException\"",
                            "computed": false
                          }, {
                            "value": "\"tokenInterface\"",
                            "computed": false
                          }, {
                            "value": "\"tokenParameter\"",
                            "computed": false
                          }, {
                            "value": "\"tokenField\"",
                            "computed": false
                          }, {
                            "value": "\"tokenElement\"",
                            "computed": false
                          }, {
                            "value": "\"tokenFunction\"",
                            "computed": false
                          }, {
                            "value": "\"tokenBoolean\"",
                            "computed": false
                          }, {
                            "value": "\"tokenString\"",
                            "computed": false
                          }, {
                            "value": "\"tokenArray\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNumber\"",
                            "computed": false
                          }, {
                            "value": "\"tokenConstant\"",
                            "computed": false
                          }, {
                            "value": "\"tokenObject\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEvent\"",
                            "computed": false
                          }, {
                            "value": "\"tokenKey\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNull\"",
                            "computed": false
                          }, {
                            "value": "\"tokenStruct\"",
                            "computed": false
                          }, {
                            "value": "\"tokenPackage\"",
                            "computed": false
                          }, {
                            "value": "\"tokenOperator\"",
                            "computed": false
                          }, {
                            "value": "\"tokenEnumMember\"",
                            "computed": false
                          }, {
                            "value": "\"tokenRepo\"",
                            "computed": false
                          }, {
                            "value": "\"tokenSymbol\"",
                            "computed": false
                          }, {
                            "value": "\"tokenFile\"",
                            "computed": false
                          }, {
                            "value": "\"tokenModule\"",
                            "computed": false
                          }, {
                            "value": "\"tokenNamespace\"",
                            "computed": false
                          }]
                        }, {
                          "name": "func"
                        }],
                        "required": false
                      }
                    }
                  }, {
                    "name": "shape",
                    "value": {
                      "render": {
                        "name": "func",
                        "required": true
                      },
                      "available": {
                        "name": "func",
                        "required": false
                      },
                      "enabled": {
                        "name": "func",
                        "required": false
                      },
                      "isPrimary": {
                        "name": "bool",
                        "required": false
                      }
                    }
                  }]
                },
                "required": true
              },
              "name": {
                "name": "node",
                "required": false
              },
              "description": {
                "name": "string",
                "required": false
              },
              "width": {
                "name": "string",
                "required": false
              }
            }
          }]
        }
      },
      "required": false,
      "description": ""
    },
    "compressed": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "error": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "hasActions": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isExpandable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isSelectable": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "loading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "rowProps": {
      "type": {
        "name": "union",
        "value": [{
          "name": "any"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": ""
    },
    "selection": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.shape({\n  onSelectionChange: _propTypes.default.func,\n  selectable: _propTypes.default.func,\n  selectableMessage: _propTypes.default.func\n})"
      },
      "required": false,
      "description": ""
    },
    "message": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "search": {
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "shape",
          "value": {
            "defaultQuery": {
              "name": "any",
              "description": "The initial query the bar will hold when first mounted",
              "required": false
            },
            "query": {
              "name": "any",
              "description": "If you wish to use the search bar as a controlled component, continuously pass the query\n       via this prop",
              "required": false
            },
            "box": {
              "name": "shape",
              "value": {
                "schema": {
                  "name": "union",
                  "value": [{
                    "name": "bool"
                  }, {
                    "name": "shape",
                    "value": {
                      "strict": {
                        "name": "bool",
                        "required": false
                      },
                      "fields": {
                        "name": "any",
                        "required": false
                      },
                      "flags": {
                        "name": "arrayOf",
                        "value": {
                          "name": "string"
                        },
                        "required": false
                      }
                    }
                  }],
                  "required": false
                }
              },
              "description": "Configures the search box. Set `placeholder` to change the placeholder text in the box and\n       `incremental` to support incremental (as you type) search.",
              "required": false
            },
            "filters": {
              "name": "arrayOf",
              "value": {
                "name": "union",
                "value": [{
                  "name": "shape",
                  "value": {
                    "type": {
                      "name": "enum",
                      "value": [{
                        "value": "\"is\"",
                        "computed": false
                      }],
                      "required": true
                    },
                    "field": {
                      "name": "string",
                      "required": true
                    },
                    "name": {
                      "name": "string",
                      "required": true
                    },
                    "negatedName": {
                      "name": "string",
                      "required": false
                    },
                    "available": {
                      "name": "func",
                      "required": false
                    }
                  }
                }, {
                  "name": "shape",
                  "value": {
                    "type": {
                      "name": "enum",
                      "value": [{
                        "value": "\"field_value_selection\"",
                        "computed": false
                      }],
                      "required": true
                    },
                    "field": {
                      "name": "string",
                      "required": false
                    },
                    "autoClose": {
                      "name": "bool",
                      "required": false
                    },
                    "name": {
                      "name": "string",
                      "required": true
                    },
                    "options": {
                      "name": "union",
                      "value": [{
                        "name": "arrayOf",
                        "value": {
                          "name": "shape",
                          "value": {
                            "field": {
                              "name": "string",
                              "required": false
                            },
                            "value": {
                              "name": "any",
                              "required": true
                            },
                            "name": {
                              "name": "string",
                              "required": false
                            },
                            "view": {
                              "name": "node",
                              "required": false
                            }
                          }
                        }
                      }, {
                        "name": "func"
                      }],
                      "required": true
                    },
                    "filterWith": {
                      "name": "union",
                      "value": [{
                        "name": "func"
                      }, {
                        "name": "enum",
                        "value": [{
                          "value": "\"prefix\"",
                          "computed": false
                        }, {
                          "value": "\"includes\"",
                          "computed": false
                        }]
                      }],
                      "required": false
                    },
                    "cache": {
                      "name": "number",
                      "required": false
                    },
                    "multiSelect": {
                      "name": "union",
                      "value": [{
                        "name": "bool"
                      }, {
                        "name": "enum",
                        "value": [{
                          "value": "\"and\"",
                          "computed": false
                        }, {
                          "value": "\"or\"",
                          "computed": false
                        }]
                      }],
                      "required": false
                    },
                    "loadingMessage": {
                      "name": "string",
                      "required": false
                    },
                    "noOptionsMessage": {
                      "name": "string",
                      "required": false
                    },
                    "searchThreshold": {
                      "name": "number",
                      "required": false
                    },
                    "available": {
                      "name": "func",
                      "required": false
                    }
                  }
                }, {
                  "name": "shape",
                  "value": {
                    "type": {
                      "name": "enum",
                      "value": [{
                        "value": "\"field_value_toggle\"",
                        "computed": false
                      }],
                      "required": true
                    },
                    "field": {
                      "name": "string",
                      "required": true
                    },
                    "value": {
                      "name": "union",
                      "value": [{
                        "name": "string"
                      }, {
                        "name": "number"
                      }, {
                        "name": "bool"
                      }],
                      "required": true
                    },
                    "name": {
                      "name": "string",
                      "required": true
                    },
                    "negatedName": {
                      "name": "string",
                      "required": false
                    },
                    "available": {
                      "name": "func",
                      "required": false
                    },
                    "operator": {
                      "name": "enum",
                      "value": [{
                        "value": "\"eq\"",
                        "computed": false
                      }, {
                        "value": "\"exact\"",
                        "computed": false
                      }, {
                        "value": "\"gt\"",
                        "computed": false
                      }, {
                        "value": "\"gte\"",
                        "computed": false
                      }, {
                        "value": "\"lt\"",
                        "computed": false
                      }, {
                        "value": "\"lte\"",
                        "computed": false
                      }],
                      "required": false
                    }
                  }
                }, {
                  "name": "shape",
                  "value": {
                    "type": {
                      "name": "enum",
                      "value": [{
                        "value": "\"field_value_toggle_group\"",
                        "computed": false
                      }],
                      "required": true
                    },
                    "field": {
                      "name": "string",
                      "required": true
                    },
                    "items": {
                      "name": "arrayOf",
                      "value": {
                        "name": "shape",
                        "value": {
                          "value": {
                            "name": "union",
                            "value": [{
                              "name": "string"
                            }, {
                              "name": "number"
                            }, {
                              "name": "bool"
                            }],
                            "required": true
                          },
                          "name": {
                            "name": "string",
                            "required": true
                          },
                          "negatedName": {
                            "name": "string",
                            "required": false
                          },
                          "operator": {
                            "name": "enum",
                            "value": [{
                              "value": "\"eq\"",
                              "computed": false
                            }, {
                              "value": "\"exact\"",
                              "computed": false
                            }, {
                              "value": "\"gt\"",
                              "computed": false
                            }, {
                              "value": "\"gte\"",
                              "computed": false
                            }, {
                              "value": "\"lt\"",
                              "computed": false
                            }, {
                              "value": "\"lte\"",
                              "computed": false
                            }],
                            "required": false
                          }
                        }
                      },
                      "required": true
                    },
                    "available": {
                      "name": "func",
                      "required": false
                    }
                  }
                }]
              },
              "description": "An array of search filters.",
              "required": false
            },
            "toolsLeft": {
              "name": "node",
              "description": "Tools which go to the left of the search bar.",
              "required": false
            },
            "toolsRight": {
              "name": "node",
              "description": "Tools which go to the right of the search bar.",
              "required": false
            },
            "dateFormat": {
              "name": "any",
              "description": "Date formatter to use when parsing date values",
              "required": false
            },
            "onChange": {
              "name": "func",
              "required": false
            }
          }
        }]
      },
      "required": false,
      "description": ""
    },
    "pagination": {
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "value": [{
            "value": "undefined",
            "computed": true
          }]
        }, {
          "name": "union",
          "value": [{
            "name": "bool"
          }, {
            "name": "shape",
            "value": {
              "initialPageIndex": {
                "name": "number",
                "required": false
              },
              "initialPageSize": {
                "name": "number",
                "required": false
              },
              "pageSizeOptions": {
                "name": "arrayOf",
                "value": {
                  "name": "number"
                },
                "required": false
              },
              "hidePerPageOptions": {
                "name": "bool",
                "required": false
              }
            }
          }]
        }]
      },
      "required": false,
      "description": ""
    },
    "sorting": {
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "shape",
          "value": {
            "sort": {
              "name": "shape",
              "value": {
                "field": {
                  "name": "string",
                  "required": true
                },
                "direction": {
                  "name": "union",
                  "value": [{
                    "name": "any"
                  }, {
                    "name": "any"
                  }],
                  "required": true
                }
              },
              "required": true
            }
          }
        }]
      },
      "required": false,
      "description": ""
    },
    "allowNeutralSort": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Set `allowNeutralSort` to false to force column sorting. Defaults to true."
    },
    "onTableChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "executeQueryOptions": {
      "type": {
        "name": "shape",
        "value": {
          "defaultFields": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "isClauseMatcher": {
            "name": "func",
            "required": false
          },
          "explain": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};