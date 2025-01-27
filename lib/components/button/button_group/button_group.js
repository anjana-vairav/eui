"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../../accessibility");

var _button_toggle = require("../button_toggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiButtonGroup = function EuiButtonGroup(_ref) {
  var className = _ref.className,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? 's' : _ref$buttonSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text' : _ref$color,
      idSelected = _ref.idSelected,
      _ref$idToSelectedMap = _ref.idToSelectedMap,
      idToSelectedMap = _ref$idToSelectedMap === void 0 ? {} : _ref$idToSelectedMap,
      isDisabled = _ref.isDisabled,
      isFullWidth = _ref.isFullWidth,
      isIconOnly = _ref.isIconOnly,
      name = _ref.name,
      legend = _ref.legend,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'single' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["className", "buttonSize", "color", "idSelected", "idToSelectedMap", "isDisabled", "isFullWidth", "isIconOnly", "name", "legend", "onChange", "options", "type"]);

  var classes = (0, _classnames.default)('euiButtonGroup', ["euiButtonGroup--".concat(buttonSize)], {
    'euiButtonGroup--fullWidth': isFullWidth
  }, className);
  var fieldsetClasses = (0, _classnames.default)('euiButtonGroup__fieldset', {
    'euiButtonGroup__fieldset--fullWidth': isFullWidth
  });
  var legendNode;

  if (legend) {
    legendNode = _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("legend", null, legend));
  }

  return _react.default.createElement("fieldset", {
    className: fieldsetClasses
  }, legendNode, _react.default.createElement("div", _extends({
    className: classes
  }, rest), options.map(function (option, index) {
    var id = option.id,
        optionName = option.name,
        value = option.value,
        optionDisabled = option.isDisabled,
        className = option.className,
        rest = _objectWithoutProperties(option, ["id", "name", "value", "isDisabled", "className"]);

    var isSelectedState;

    if (type === 'multi') {
      isSelectedState = idToSelectedMap[id] || false;
    } else {
      isSelectedState = id === idSelected;
    }

    var fill;

    if (buttonSize !== 'compressed') {
      fill = isSelectedState;
    }

    var buttonClasses = (0, _classnames.default)('euiButtonGroup__button', {
      'euiButtonGroup__button--selected': isSelectedState
    }, className);
    return _react.default.createElement(_button_toggle.EuiButtonToggle, _extends({
      className: buttonClasses,
      toggleClassName: "euiButtonGroup__toggle",
      id: id,
      key: index,
      value: value,
      color: color,
      fill: fill,
      isDisabled: optionDisabled || isDisabled,
      isIconOnly: isIconOnly,
      isSelected: isSelectedState,
      name: optionName || name,
      onChange: function (_onChange) {
        function onChange() {
          return _onChange.apply(this, arguments);
        }

        onChange.toString = function () {
          return _onChange.toString();
        };

        return onChange;
      }(function () {
        return onChange(id, value);
      }),
      size: buttonSize === 'compressed' ? 's' : buttonSize,
      type: type
    }, rest));
  })));
};

exports.EuiButtonGroup = EuiButtonGroup;
EuiButtonGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.node.isRequired,
    name: _propTypes.default.string,
    isDisabled: _propTypes.default.bool,
    value: _propTypes.default.any,
    iconSide: _propTypes.default.oneOf(["left", "right"]),
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired),
  onChange: _propTypes.default.func.isRequired,

  /**
     * Typical sizing is `s`. Medium `m` size should be reserved for major features.
     * `compressed` is meant to be used alongside and within compressed forms.
     */
  buttonSize: _propTypes.default.oneOf(["s", "m", "compressed"]),
  isDisabled: _propTypes.default.bool,
  isFullWidth: _propTypes.default.bool,
  isIconOnly: _propTypes.default.bool,
  idSelected: _propTypes.default.string,
  legend: _propTypes.default.string,
  color: _propTypes.default.oneOf(["primary", "secondary", "warning", "danger", "ghost", "text"]),
  name: _propTypes.default.string,
  type: _propTypes.default.oneOf(["single", "multi"]),
  idToSelectedMap: _propTypes.default.shape({})
};
EuiButtonGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiButtonGroup",
  "props": {
    "buttonSize": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"compressed\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Typical sizing is `s`. Medium `m` size should be reserved for major features.\n`compressed` is meant to be used alongside and within compressed forms."
    },
    "color": {
      "defaultValue": {
        "value": "'text'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"ghost\"",
          "computed": false
        }, {
          "value": "\"text\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "idToSelectedMap": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false,
      "description": ""
    },
    "options": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "label": {
              "name": "node",
              "required": true
            },
            "name": {
              "name": "string",
              "required": false
            },
            "isDisabled": {
              "name": "bool",
              "required": false
            },
            "value": {
              "name": "any",
              "required": false
            },
            "iconSide": {
              "name": "enum",
              "value": [{
                "value": "\"left\"",
                "computed": false
              }, {
                "value": "\"right\"",
                "computed": false
              }],
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
        }
      },
      "required": false,
      "description": ""
    },
    "type": {
      "defaultValue": {
        "value": "'single'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"single\"",
          "computed": false
        }, {
          "value": "\"multi\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "onChange": {
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
    "isFullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isIconOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "idSelected": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "legend": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};