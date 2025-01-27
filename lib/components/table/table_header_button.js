"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableHeaderButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableHeaderButton = function EuiTableHeaderButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconType = _ref.iconType,
      rest = _objectWithoutProperties(_ref, ["children", "className", "iconType"]);

  var classes = (0, _classnames.default)('euiTableHeaderButton', className); // Add an icon to the button if one exists.

  var buttonIcon;

  if (iconType) {
    buttonIcon = _react.default.createElement(_icon.EuiIcon, {
      className: "euiTableHeaderButton__icon",
      type: iconType,
      size: "m",
      "aria-hidden": "true"
    });
  }

  return _react.default.createElement("button", _extends({
    type: "button",
    className: classes
  }, rest), _react.default.createElement("span", null, children), buttonIcon);
};

exports.EuiTableHeaderButton = EuiTableHeaderButton;
EuiTableHeaderButton.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired])
};
EuiTableHeaderButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableHeaderButton",
  "props": {
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
    "iconType": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOfType([_propTypes.default.oneOf([\"accessibility\", \"addDataApp\", \"advancedSettingsApp\", \"alert\", \"apmApp\", \"apmTrace\", \"apps\", \"arrowDown\", \"arrowLeft\", \"arrowRight\", \"arrowUp\", \"asterisk\", \"auditbeatApp\", \"beaker\", \"bell\", \"bolt\", \"boxesHorizontal\", \"boxesVertical\", \"branch\", \"broom\", \"brush\", \"bug\", \"bullseye\", \"calendar\", \"canvasApp\", \"codeApp\", \"check\", \"checkInCircleFilled\", \"clock\", \"cloudDrizzle\", \"cloudStormy\", \"cloudSunny\", \"compute\", \"console\", \"consoleApp\", \"controlsHorizontal\", \"controlsVertical\", \"copy\", \"copyClipboard\", \"createAdvancedJob\", \"createMultiMetricJob\", \"createPopulationJob\", \"createSingleMetricJob\", \"cross\", \"crossClusterReplicationApp\", \"crosshairs\", \"crossInACircleFilled\", \"currency\", \"cut\", \"dashboardApp\", \"database\", \"dataVisualizer\", \"devToolsApp\", \"discoverApp\", \"document\", \"documentEdit\", \"documents\", \"dot\", \"editorAlignCenter\", \"editorAlignLeft\", \"editorAlignRight\", \"editorBold\", \"editorCodeBlock\", \"editorComment\", \"editorDistributeHorizontal\", \"editorDistributeVertical\", \"editorHeading\", \"editorItalic\", \"editorItemAlignLeft\", \"editorItemAlignBottom\", \"editorItemAlignCenter\", \"editorItemAlignMiddle\", \"editorItemAlignRight\", \"editorItemAlignTop\", \"editorLink\", \"editorOrderedList\", \"editorPositionBottomLeft\", \"editorPositionBottomRight\", \"editorPositionTopLeft\", \"editorPositionTopRight\", \"editorRedo\", \"editorStrike\", \"editorTable\", \"editorUnderline\", \"editorUndo\", \"editorUnorderedList\", \"email\", \"empty\", \"emsApp\", \"exit\", \"expand\", \"expandMini\", \"exportAction\", \"eye\", \"eyeClosed\", \"faceHappy\", \"faceNeutral\", \"faceSad\", \"filebeatApp\", \"filter\", \"flag\", \"folderClosed\", \"folderOpen\", \"fullScreen\", \"gear\", \"gisApp\", \"glasses\", \"globe\", \"grab\", \"grabHorizontal\", \"graphApp\", \"grid\", \"grokApp\", \"heart\", \"heartbeatApp\", \"heatmap\", \"help\", \"iInCircle\", \"importAction\", \"indexClose\", \"indexEdit\", \"indexFlush\", \"indexManagementApp\", \"indexMapping\", \"indexOpen\", \"indexPatternApp\", \"indexRollupApp\", \"indexSettings\", \"metricsApp\", \"inputOutput\", \"inspect\", \"invert\", \"ip\", \"keyboardShortcut\", \"kqlField\", \"kqlFunction\", \"kqlOperand\", \"kqlSelector\", \"kqlValue\", \"lensApp\", \"link\", \"list\", \"listAdd\", \"lock\", \"lockOpen\", \"logsApp\", \"logoAerospike\", \"logoApache\", \"logoAPM\", \"logoAppSearch\", \"logoAWS\", \"logoAWSMono\", \"logoAzure\", \"logoAzureMono\", \"logoBeats\", \"logoBusinessAnalytics\", \"logoCeph\", \"logoCloud\", \"logoCloudEnterprise\", \"logoCode\", \"logoCodesandbox\", \"logoCouchbase\", \"logoDocker\", \"logoDropwizard\", \"logoElastic\", \"logoElasticsearch\", \"logoElasticStack\", \"logoEnterpriseSearch\", \"logoEtcd\", \"logoGCP\", \"logoGCPMono\", \"logoGithub\", \"logoGmail\", \"logoGolang\", \"logoHAproxy\", \"logoIBM\", \"logoIBMMono\", \"logoKafka\", \"logoKibana\", \"logoKubernetes\", \"logoLogging\", \"logoLogstash\", \"logoMaps\", \"logoMemcached\", \"logoMetrics\", \"logoMongodb\", \"logoMySQL\", \"logoNginx\", \"logoOsquery\", \"logoPhp\", \"logoPostgres\", \"logoPrometheus\", \"logoRabbitmq\", \"logoRedis\", \"logoSecurity\", \"logoSiteSearch\", \"logoSketch\", \"logoSlack\", \"logoUptime\", \"logoWebhook\", \"logoWindows\", \"logstashFilter\", \"logstashIf\", \"logstashInput\", \"logstashOutput\", \"logstashQueue\", \"machineLearningApp\", \"magnet\", \"magnifyWithMinus\", \"magnifyWithPlus\", \"managementApp\", \"mapMarker\", \"memory\", \"menuLeft\", \"menuRight\", \"merge\", \"metricbeatApp\", \"minimize\", \"minusInCircle\", \"minusInCircleFilled\", \"monitoringApp\", \"moon\", \"node\", \"notebookApp\", \"number\", \"offline\", \"online\", \"package\", \"packetbeatApp\", \"partial\", \"pause\", \"pencil\", \"pin\", \"pinFilled\", \"pipelineApp\", \"play\", \"plusInCircle\", \"plusInCircleFilled\", \"popout\", \"questionInCircle\", \"refresh\", \"reportingApp\", \"save\", \"savedObjectsApp\", \"scale\", \"search\", \"searchProfilerApp\", \"securityAnalyticsApp\", \"securityApp\", \"shard\", \"share\", \"snowflake\", \"sortable\", \"sortDown\", \"sortLeft\", \"sortRight\", \"sortUp\", \"spacesApp\", \"sqlApp\", \"starEmpty\", \"starEmptySpace\", \"starFilled\", \"starFilledSpace\", \"starMinusEmpty\", \"starMinusFilled\", \"starPlusEmpty\", \"starPlusFilled\", \"stats\", \"stop\", \"stopFilled\", \"stopSlash\", \"storage\", \"string\", \"submodule\", \"swatchInput\", \"symlink\", \"tableOfContents\", \"tableDensityExpanded\", \"tableDensityCompact\", \"tableDensityNormal\", \"tag\", \"tear\", \"temperature\", \"timelionApp\", \"training\", \"trash\", \"upgradeAssistantApp\", \"uptimeApp\", \"user\", \"usersRolesApp\", \"vector\", \"videoPlayer\", \"visArea\", \"visAreaStacked\", \"visBarHorizontal\", \"visBarHorizontalStacked\", \"visBarVertical\", \"visBarVerticalStacked\", \"visControls\", \"visGauge\", \"visGoal\", \"visHeatmap\", \"visLine\", \"visMapCoordinate\", \"visMapRegion\", \"visMetric\", \"visPie\", \"visTable\", \"visTagCloud\", \"visText\", \"visTimelion\", \"visualizeApp\", \"visVega\", \"visVisualBuilder\", \"watchesApp\", \"wrench\", \"tokenClass\", \"tokenProperty\", \"tokenEnum\", \"tokenVariable\", \"tokenMethod\", \"tokenAnnotation\", \"tokenException\", \"tokenInterface\", \"tokenParameter\", \"tokenField\", \"tokenElement\", \"tokenFunction\", \"tokenBoolean\", \"tokenString\", \"tokenArray\", \"tokenNumber\", \"tokenConstant\", \"tokenObject\", \"tokenEvent\", \"tokenKey\", \"tokenNull\", \"tokenStruct\", \"tokenPackage\", \"tokenOperator\", \"tokenEnumMember\", \"tokenRepo\", \"tokenSymbol\", \"tokenFile\", \"tokenModule\", \"tokenNamespace\"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired])"
      },
      "required": false,
      "description": ""
    }
  }
};