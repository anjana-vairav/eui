function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import { EuiI18n } from '../i18n';
import { EuiDraggable } from '../drag_and_drop';
import { EuiScreenReaderOnly } from '../accessibility';
import { EuiFlexGroup, EuiFlexItem } from '../flex';
import { EuiButtonIcon, EuiButtonGroup } from '../button';
import { EuiIcon } from '../icon';
import { EuiText } from '../text';
import { getDetailsForSchema } from './data_grid_schema';
export var EuiDataGridColumnSortingDraggable = function EuiDataGridColumnSortingDraggable(_ref) {
  var id = _ref.id,
      direction = _ref.direction,
      index = _ref.index,
      sorting = _ref.sorting,
      schema = _ref.schema,
      schemaDetectors = _ref.schemaDetectors,
      defaultSchemaColor = _ref.defaultSchemaColor,
      rest = _objectWithoutProperties(_ref, ["id", "direction", "index", "sorting", "schema", "schemaDetectors", "defaultSchemaColor"]);

  var textSortAsc = schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).sortTextAsc : React.createElement(EuiI18n, {
    token: "euiColumnSortingDraggable.defaultSortAsc",
    default: "A-Z"
  });
  var textSortDesc = schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).sortTextDesc : React.createElement(EuiI18n, {
    token: "euiColumnSortingDraggable.defaultSortDesc",
    default: "Z-A"
  });
  var toggleOptions = [{
    id: "".concat(id, "Asc"),
    value: 'asc',
    label: textSortAsc,
    'data-test-subj': "euiDataGridColumnSorting-sortColumn-".concat(id, "-asc")
  }, {
    id: "".concat(id, "Desc"),
    value: 'desc',
    label: textSortDesc,
    'data-test-subj': "euiDataGridColumnSorting-sortColumn-".concat(id, "-desc")
  }];
  return React.createElement(EuiDraggable, _extends({
    draggableId: id,
    index: index
  }, rest), function (provided, state) {
    return React.createElement("div", {
      className: "euiDataGridColumnSorting__item ".concat(state.isDragging && 'euiDataGridColumnSorting__item-isDragging')
    }, React.createElement(EuiScreenReaderOnly, null, React.createElement("p", null, React.createElement(EuiI18n, {
      token: "euiColumnSortingDraggable.activeSortLabel",
      default: "is sorting this data grid"
    }, function (activeSortLabel) {
      return React.createElement("span", null, id, " ", activeSortLabel);
    }))), React.createElement(EuiFlexGroup, {
      gutterSize: "xs",
      alignItems: "center",
      responsive: false,
      "data-test-subj": "euiDataGridColumnSorting-sortColumn-".concat(id)
    }, React.createElement(EuiFlexItem, {
      grow: false
    }, React.createElement(EuiI18n, {
      token: "euiColumnSortingDraggable.removeSortLabel",
      default: "Remove from data grid sort:"
    }, function (removeSortLabel) {
      return React.createElement(EuiButtonIcon, {
        color: "text",
        size: "s",
        className: "euiDataGridColumnSorting__button",
        "aria-label": "".concat(removeSortLabel, " ").concat(id),
        iconType: "cross",
        onClick: function onClick() {
          var nextColumns = _toConsumableArray(sorting.columns);

          var columnIndex = nextColumns.map(function (_ref2) {
            var id = _ref2.id;
            return id;
          }).indexOf(id);
          nextColumns.splice(columnIndex, 1);
          sorting.onSort(nextColumns);
        }
      });
    })), React.createElement(EuiFlexItem, {
      grow: false
    }, React.createElement(EuiIcon, {
      color: schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).color : defaultSchemaColor,
      type: schema.hasOwnProperty(id) && schema[id].columnType != null ? getDetailsForSchema(schemaDetectors, schema[id].columnType).icon : 'string'
    })), React.createElement(EuiFlexItem, {
      "aria-hidden": true
    }, React.createElement(EuiText, {
      size: "xs"
    }, React.createElement("p", null, id))), React.createElement(EuiFlexItem, {
      className: "euiDataGridColumnSorting__orderButtons"
    }, React.createElement(EuiI18n, {
      token: "euiColumnSortingDraggable.toggleLegend",
      default: "Select sorting method for field: "
    }, function (toggleLegend) {
      return React.createElement(EuiButtonGroup, {
        legend: "".concat(toggleLegend, " ").concat(id),
        options: toggleOptions,
        "data-test-subj": "-".concat(direction),
        buttonSize: "compressed",
        className: "euiDataGridColumnSorting__order",
        idSelected: direction === 'asc' ? "".concat(id, "Asc") : "".concat(id, "Desc"),
        onChange: function onChange(_, direction) {
          var nextColumns = _toConsumableArray(sorting.columns);

          var columnIndex = nextColumns.map(function (_ref3) {
            var id = _ref3.id;
            return id;
          }).indexOf(id);
          nextColumns.splice(columnIndex, 1, {
            id: id,
            direction: direction
          });
          sorting.onSort(nextColumns);
        }
      });
    })), React.createElement(EuiFlexItem, _extends({
      grow: false
    }, provided.dragHandleProps), React.createElement("div", provided.dragHandleProps, React.createElement(EuiIcon, {
      type: "grab",
      color: "subdued"
    })))));
  });
};
EuiDataGridColumnSortingDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  sorting: PropTypes.shape({
    /**
       * A function that receives updated column sort details in response to user interactions in the toolbar controls
       */
    onSort: PropTypes.func.isRequired,

    /**
       * An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`
       */
    columns: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      direction: PropTypes.oneOf(["asc", "desc"]).isRequired
    }).isRequired).isRequired
  }).isRequired,
  schema: PropTypes.shape({}).isRequired,
  schemaDetectors: PropTypes.arrayOf(PropTypes.shape({
    /**
       * The name of this data type, matches #EuiDataGridColumn / schema `schema`
       */
    type: PropTypes.string.isRequired,

    /**
       * The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type
       */
    detector: PropTypes.func.isRequired,

    /**
       * A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`
       */
    comparator: PropTypes.func,

    /**
       * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
       */
    icon: PropTypes.oneOfType([PropTypes.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, PropTypes.string.isRequired, PropTypes.element.isRequired]).isRequired,

    /**
       * The color associated with this data type; it's used to color the icon
       */
    color: PropTypes.string.isRequired,

    /**
       * Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'
       */
    sortTextAsc: PropTypes.node.isRequired,

    /**
       * Text for how to represent a descending sort of this data type, e.g. 'Z -> A'
       */
    sortTextDesc: PropTypes.node.isRequired
  }).isRequired).isRequired,
  defaultSchemaColor: PropTypes.string.isRequired
};
EuiDataGridColumnSortingDraggable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiDataGridColumnSortingDraggable",
  "props": {
    "id": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "direction": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "index": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "sorting": {
      "type": {
        "name": "shape",
        "value": {
          "onSort": {
            "name": "func",
            "description": "A function that receives updated column sort details in response to user interactions in the toolbar controls",
            "required": true
          },
          "columns": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "id": {
                  "name": "string",
                  "required": true
                },
                "direction": {
                  "name": "enum",
                  "value": [{
                    "value": "\"asc\"",
                    "computed": false
                  }, {
                    "value": "\"desc\"",
                    "computed": false
                  }],
                  "required": true
                }
              }
            },
            "description": "An array of the column ids currently being sorted and their sort direction. The array order determines the sort order. `{ id: 'A'; direction: 'asc' }`",
            "required": true
          }
        }
      },
      "required": true,
      "description": ""
    },
    "schema": {
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": true,
      "description": ""
    },
    "schemaDetectors": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "type": {
              "name": "string",
              "description": "The name of this data type, matches #EuiDataGridColumn / schema `schema`",
              "required": true
            },
            "detector": {
              "name": "func",
              "description": "The function given the text value of a cell and returns a score of [0...1] of how well the value matches this data type",
              "required": true
            },
            "comparator": {
              "name": "func",
              "description": "A custom comparator function when performing in-memory sorting on this data type, takes `(a: string, b: string, direction: 'asc' | 'desc) => -1 | 0 | 1`",
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
                "name": "string"
              }, {
                "name": "element"
              }],
              "description": "The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.",
              "required": true
            },
            "color": {
              "name": "string",
              "description": "The color associated with this data type; it's used to color the icon",
              "required": true
            },
            "sortTextAsc": {
              "name": "node",
              "description": "Text for how to represent an ascending sort of this data type, e.g. 'A -> Z'",
              "required": true
            },
            "sortTextDesc": {
              "name": "node",
              "description": "Text for how to represent a descending sort of this data type, e.g. 'Z -> A'",
              "required": true
            }
          }
        }
      },
      "required": true,
      "description": ""
    },
    "defaultSchemaColor": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};