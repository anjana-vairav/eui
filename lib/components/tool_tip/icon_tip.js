"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiIconTip = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = require("../icon");

var _tool_tip = require("./tool_tip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiIconTip = function EuiIconTip(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'questionInCircle' : _ref$type,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? 'Info' : _ref$ariaLabel,
      color = _ref.color,
      size = _ref.size,
      iconProps = _ref.iconProps,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 'regular' : _ref$delay,
      rest = _objectWithoutProperties(_ref, ["type", "aria-label", "color", "size", "iconProps", "position", "delay"]);

  return _react.default.createElement(_tool_tip.EuiToolTip, _extends({
    position: position,
    delay: delay
  }, rest), _react.default.createElement(_icon.EuiIcon, _extends({
    tabIndex: 0,
    type: type,
    color: color,
    size: size,
    "aria-label": ariaLabel
  }, iconProps)));
};

exports.EuiIconTip = EuiIconTip;
EuiIconTip.propTypes = {
  /**
     * The icon color.
     */
  color: _propTypes.default.string,

  /**
     * The icon type.
     */
  type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),

  /**
     * The icon size.
     */
  size: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
     * Explain what this icon means for screen readers.
     */
  "aria-label": _propTypes.default.string,

  /**
     * Pass certain props down to `EuiIcon`
     */
  // EuiIconTip's `type` is passed to EuiIcon, so we want to exclude `type` from
  // iconProps; however, due to TS's bivariant function arguments `type` could be
  // passed without any error/feedback so we explicitly set it to `never` type
  iconProps: _propTypes.default.shape({
    type: _propTypes.default.any
  }),
  // This are copied from EuiToolTipProps, but made optional. Defaults
  // are applied below.
  delay: _propTypes.default.any,
  position: _propTypes.default.any
};
EuiIconTip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTip",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'questionInCircle'",
        "computed": false
      },
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOfType([_propTypes.default.oneOf([\"accessibility\", \"addDataApp\", \"advancedSettingsApp\", \"alert\", \"apmApp\", \"apmTrace\", \"apps\", \"arrowDown\", \"arrowLeft\", \"arrowRight\", \"arrowUp\", \"asterisk\", \"auditbeatApp\", \"beaker\", \"bell\", \"bolt\", \"boxesHorizontal\", \"boxesVertical\", \"branch\", \"broom\", \"brush\", \"bug\", \"bullseye\", \"calendar\", \"canvasApp\", \"codeApp\", \"check\", \"checkInCircleFilled\", \"clock\", \"cloudDrizzle\", \"cloudStormy\", \"cloudSunny\", \"compute\", \"console\", \"consoleApp\", \"controlsHorizontal\", \"controlsVertical\", \"copy\", \"copyClipboard\", \"createAdvancedJob\", \"createMultiMetricJob\", \"createPopulationJob\", \"createSingleMetricJob\", \"cross\", \"crossClusterReplicationApp\", \"crosshairs\", \"crossInACircleFilled\", \"currency\", \"cut\", \"dashboardApp\", \"database\", \"dataVisualizer\", \"devToolsApp\", \"discoverApp\", \"document\", \"documentEdit\", \"documents\", \"dot\", \"editorAlignCenter\", \"editorAlignLeft\", \"editorAlignRight\", \"editorBold\", \"editorCodeBlock\", \"editorComment\", \"editorDistributeHorizontal\", \"editorDistributeVertical\", \"editorHeading\", \"editorItalic\", \"editorItemAlignLeft\", \"editorItemAlignBottom\", \"editorItemAlignCenter\", \"editorItemAlignMiddle\", \"editorItemAlignRight\", \"editorItemAlignTop\", \"editorLink\", \"editorOrderedList\", \"editorPositionBottomLeft\", \"editorPositionBottomRight\", \"editorPositionTopLeft\", \"editorPositionTopRight\", \"editorRedo\", \"editorStrike\", \"editorTable\", \"editorUnderline\", \"editorUndo\", \"editorUnorderedList\", \"email\", \"empty\", \"emsApp\", \"exit\", \"expand\", \"expandMini\", \"exportAction\", \"eye\", \"eyeClosed\", \"faceHappy\", \"faceNeutral\", \"faceSad\", \"filebeatApp\", \"filter\", \"flag\", \"folderClosed\", \"folderOpen\", \"fullScreen\", \"gear\", \"gisApp\", \"glasses\", \"globe\", \"grab\", \"grabHorizontal\", \"graphApp\", \"grid\", \"grokApp\", \"heart\", \"heartbeatApp\", \"heatmap\", \"help\", \"iInCircle\", \"importAction\", \"indexClose\", \"indexEdit\", \"indexFlush\", \"indexManagementApp\", \"indexMapping\", \"indexOpen\", \"indexPatternApp\", \"indexRollupApp\", \"indexSettings\", \"metricsApp\", \"inputOutput\", \"inspect\", \"invert\", \"ip\", \"keyboardShortcut\", \"kqlField\", \"kqlFunction\", \"kqlOperand\", \"kqlSelector\", \"kqlValue\", \"lensApp\", \"link\", \"list\", \"listAdd\", \"lock\", \"lockOpen\", \"logsApp\", \"logoAerospike\", \"logoApache\", \"logoAPM\", \"logoAppSearch\", \"logoAWS\", \"logoAWSMono\", \"logoAzure\", \"logoAzureMono\", \"logoBeats\", \"logoBusinessAnalytics\", \"logoCeph\", \"logoCloud\", \"logoCloudEnterprise\", \"logoCode\", \"logoCodesandbox\", \"logoCouchbase\", \"logoDocker\", \"logoDropwizard\", \"logoElastic\", \"logoElasticsearch\", \"logoElasticStack\", \"logoEnterpriseSearch\", \"logoEtcd\", \"logoGCP\", \"logoGCPMono\", \"logoGithub\", \"logoGmail\", \"logoGolang\", \"logoHAproxy\", \"logoIBM\", \"logoIBMMono\", \"logoKafka\", \"logoKibana\", \"logoKubernetes\", \"logoLogging\", \"logoLogstash\", \"logoMaps\", \"logoMemcached\", \"logoMetrics\", \"logoMongodb\", \"logoMySQL\", \"logoNginx\", \"logoOsquery\", \"logoPhp\", \"logoPostgres\", \"logoPrometheus\", \"logoRabbitmq\", \"logoRedis\", \"logoSecurity\", \"logoSiteSearch\", \"logoSketch\", \"logoSlack\", \"logoUptime\", \"logoWebhook\", \"logoWindows\", \"logstashFilter\", \"logstashIf\", \"logstashInput\", \"logstashOutput\", \"logstashQueue\", \"machineLearningApp\", \"magnet\", \"magnifyWithMinus\", \"magnifyWithPlus\", \"managementApp\", \"mapMarker\", \"memory\", \"menuLeft\", \"menuRight\", \"merge\", \"metricbeatApp\", \"minimize\", \"minusInCircle\", \"minusInCircleFilled\", \"monitoringApp\", \"moon\", \"node\", \"notebookApp\", \"number\", \"offline\", \"online\", \"package\", \"packetbeatApp\", \"partial\", \"pause\", \"pencil\", \"pin\", \"pinFilled\", \"pipelineApp\", \"play\", \"plusInCircle\", \"plusInCircleFilled\", \"popout\", \"questionInCircle\", \"refresh\", \"reportingApp\", \"save\", \"savedObjectsApp\", \"scale\", \"search\", \"searchProfilerApp\", \"securityAnalyticsApp\", \"securityApp\", \"shard\", \"share\", \"snowflake\", \"sortable\", \"sortDown\", \"sortLeft\", \"sortRight\", \"sortUp\", \"spacesApp\", \"sqlApp\", \"starEmpty\", \"starEmptySpace\", \"starFilled\", \"starFilledSpace\", \"starMinusEmpty\", \"starMinusFilled\", \"starPlusEmpty\", \"starPlusFilled\", \"stats\", \"stop\", \"stopFilled\", \"stopSlash\", \"storage\", \"string\", \"submodule\", \"swatchInput\", \"symlink\", \"tableOfContents\", \"tableDensityExpanded\", \"tableDensityCompact\", \"tableDensityNormal\", \"tag\", \"tear\", \"temperature\", \"timelionApp\", \"training\", \"trash\", \"upgradeAssistantApp\", \"uptimeApp\", \"user\", \"usersRolesApp\", \"vector\", \"videoPlayer\", \"visArea\", \"visAreaStacked\", \"visBarHorizontal\", \"visBarHorizontalStacked\", \"visBarVertical\", \"visBarVerticalStacked\", \"visControls\", \"visGauge\", \"visGoal\", \"visHeatmap\", \"visLine\", \"visMapCoordinate\", \"visMapRegion\", \"visMetric\", \"visPie\", \"visTable\", \"visTagCloud\", \"visText\", \"visTimelion\", \"visualizeApp\", \"visVega\", \"visVisualBuilder\", \"watchesApp\", \"wrench\", \"tokenClass\", \"tokenProperty\", \"tokenEnum\", \"tokenVariable\", \"tokenMethod\", \"tokenAnnotation\", \"tokenException\", \"tokenInterface\", \"tokenParameter\", \"tokenField\", \"tokenElement\", \"tokenFunction\", \"tokenBoolean\", \"tokenString\", \"tokenArray\", \"tokenNumber\", \"tokenConstant\", \"tokenObject\", \"tokenEvent\", \"tokenKey\", \"tokenNull\", \"tokenStruct\", \"tokenPackage\", \"tokenOperator\", \"tokenEnumMember\", \"tokenRepo\", \"tokenSymbol\", \"tokenFile\", \"tokenModule\", \"tokenNamespace\"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired])"
      },
      "required": false,
      "description": "The icon type."
    },
    "aria-label": {
      "defaultValue": {
        "value": "'Info'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Explain what this icon means for screen readers."
    },
    "position": {
      "defaultValue": {
        "value": "'top'",
        "computed": false
      },
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "delay": {
      "defaultValue": {
        "value": "'regular'",
        "computed": false
      },
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "color": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "The icon color."
    },
    "size": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"original\"",
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
        }, {
          "value": "\"xl\"",
          "computed": false
        }, {
          "value": "\"xxl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "The icon size."
    },
    "iconProps": {
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "any",
            "required": false
          }
        }
      },
      "required": false,
      "description": "Pass certain props down to `EuiIcon`"
    }
  }
};