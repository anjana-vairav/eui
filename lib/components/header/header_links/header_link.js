"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiHeaderLink = function EuiHeaderLink(_ref) {
  var isActive = _ref.isActive,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["isActive", "className"]);

  var classes = (0, _classnames.default)('euiHeaderLink', className);

  var props = _objectSpread({}, rest, {
    className: classes,
    color: isActive ? 'primary' : 'text'
  });

  return _react.default.createElement(_button.EuiButtonEmpty, props);
};

exports.EuiHeaderLink = EuiHeaderLink;
EuiHeaderLink.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),
  isActive: _propTypes.default.bool
};
EuiHeaderLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHeaderLink",
  "props": {
    "href": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.func"
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
    },
    "isActive": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};