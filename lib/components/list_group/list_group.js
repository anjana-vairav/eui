"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiListGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _list_group_item = require("./list_group_item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiListGroup = function EuiListGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      listItems = _ref.listItems,
      style = _ref.style,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? false : _ref$bordered,
      _ref$wrapText = _ref.wrapText,
      wrapText = _ref$wrapText === void 0 ? false : _ref$wrapText,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? true : _ref$maxWidth,
      _ref$showToolTips = _ref.showToolTips,
      showToolTips = _ref$showToolTips === void 0 ? false : _ref$showToolTips,
      rest = _objectWithoutProperties(_ref, ["children", "className", "listItems", "style", "flush", "bordered", "wrapText", "maxWidth", "showToolTips"]);

  var newStyle;
  var widthClassName;

  if (maxWidth !== true) {
    var value;

    if (typeof maxWidth === 'number') {
      value = "".concat(maxWidth, "px");
    } else {
      value = typeof maxWidth === 'string' ? maxWidth : undefined;
    }

    newStyle = _objectSpread({}, style, {
      maxWidth: value
    });
  } else if (maxWidth === true) {
    widthClassName = 'euiListGroup-maxWidthDefault';
  }

  var classes = (0, _classnames.default)('euiListGroup', {
    'euiListGroup-flush': flush,
    'euiListGroup-bordered': bordered
  }, widthClassName, className);
  var childrenOrListItems = null;

  if (listItems) {
    childrenOrListItems = listItems.map(function (item, index) {
      return [_react.default.createElement(_list_group_item.EuiListGroupItem, _extends({
        key: "title-".concat(index),
        showToolTip: showToolTips,
        wrapText: wrapText
      }, item))];
    });
  } else {
    if (showToolTips) {
      childrenOrListItems = _react.default.Children.map(children, function (child) {
        if (_react.default.isValidElement(child)) {
          return _react.default.cloneElement(child, {
            showToolTip: true
          });
        }
      });
    } else {
      childrenOrListItems = children;
    }
  }

  return _react.default.createElement("ul", _extends({
    className: classes,
    style: newStyle || style
  }, rest), childrenOrListItems);
};

exports.EuiListGroup = EuiListGroup;
EuiListGroup.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Add a border to the list container
       */
  bordered: _propTypes.default.bool,

  /**
       * Remove container padding, stretching list items to the edges
       */
  flush: _propTypes.default.bool,

  /**
       * Items to display in this group
       */
  listItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,

    /**
         * Size of the label text
         */
    size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),

    /**
         * Content to be displayed in the list item
         */
    label: _propTypes.default.node.isRequired,

    /**
         * Apply styles indicating an item is active
         */
    isActive: _propTypes.default.bool,

    /**
         * Apply styles indicating an item is disabled
         */
    isDisabled: _propTypes.default.bool,

    /**
         * Make the list item label a link.
         * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
         */
    href: _propTypes.default.string,

    /**
         * Adds `EuiIcon` of `EuiIcon.type`
         */
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),

    /**
         * Custom node to pass as the icon. Cannot be used in conjunction
         * with `iconType`.
         */
    icon: _propTypes.default.element,

    /**
         * Display tooltip on list item
         */
    showToolTip: _propTypes.default.bool,

    /**
         * Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;
         * pass `alwaysShow` if you don't want the default behavior of only showing on hover
         */
    extraAction: _propTypes.default.shape({
      onClick: _propTypes.default.func,
      alwaysShow: _propTypes.default.bool
    }),

    /**
         * Make the list item label a button.
         * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
         */
    onClick: _propTypes.default.func,

    /**
         * Allow link text to wrap
         */
    wrapText: _propTypes.default.bool
  }).isRequired),

  /**
       * Sets the max-width of the page,
       * set to `true` to use the default size,
       * set to `false` to not restrict the width,
       * set to a number for a custom width in px,
       * set to a string for a custom width in custom measurement.
       */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
       * Display tooltips on all list items
       */
  showToolTips: _propTypes.default.bool,

  /**
       * Allow link text to wrap
       */
  wrapText: _propTypes.default.bool
};
EuiListGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiListGroup",
  "props": {
    "flush": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Remove container padding, stretching list items to the edges"
    },
    "bordered": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Add a border to the list container"
    },
    "wrapText": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allow link text to wrap"
    },
    "maxWidth": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": "Sets the max-width of the page,\nset to `true` to use the default size,\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement."
    },
    "showToolTips": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Display tooltips on all list items"
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "listItems": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
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
            },
            "size": {
              "name": "enum",
              "value": [{
                "value": "\"xs\"",
                "computed": false
              }, {
                "value": "\"s\"",
                "computed": false
              }, {
                "value": "\"m\"",
                "computed": false
              }, {
                "value": "\"l\"",
                "computed": false
              }],
              "description": "Size of the label text",
              "required": false
            },
            "label": {
              "name": "node",
              "description": "Content to be displayed in the list item",
              "required": true
            },
            "isActive": {
              "name": "bool",
              "description": "Apply styles indicating an item is active",
              "required": false
            },
            "isDisabled": {
              "name": "bool",
              "description": "Apply styles indicating an item is disabled",
              "required": false
            },
            "href": {
              "name": "string",
              "description": "Make the list item label a link.\nWhile permitted, `href` and `onClick` should not be used together in most cases and may create problems.",
              "required": false
            },
            "iconType": {
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
                "name": "string"
              }, {
                "name": "element"
              }],
              "description": "Adds `EuiIcon` of `EuiIcon.type`",
              "required": false
            },
            "icon": {
              "name": "element",
              "description": "Custom node to pass as the icon. Cannot be used in conjunction\nwith `iconType`.",
              "required": false
            },
            "showToolTip": {
              "name": "bool",
              "description": "Display tooltip on list item",
              "required": false
            },
            "extraAction": {
              "name": "shape",
              "value": {
                "onClick": {
                  "name": "func",
                  "required": false
                },
                "alwaysShow": {
                  "name": "bool",
                  "required": false
                }
              },
              "description": "Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;\npass `alwaysShow` if you don't want the default behavior of only showing on hover",
              "required": false
            },
            "onClick": {
              "name": "func",
              "description": "Make the list item label a button.\nWhile permitted, `href` and `onClick` should not be used together in most cases and may create problems.",
              "required": false
            },
            "wrapText": {
              "name": "bool",
              "description": "Allow link text to wrap",
              "required": false
            }
          }
        }
      },
      "required": false,
      "description": "Items to display in this group"
    }
  }
};