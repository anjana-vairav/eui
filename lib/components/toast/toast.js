"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiToast = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _icon = require("../icon");

var _text = require("../text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  primary: 'euiToast--primary',
  success: 'euiToast--success',
  warning: 'euiToast--warning',
  danger: 'euiToast--danger'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;

var EuiToast = function EuiToast(_ref) {
  var title = _ref.title,
      color = _ref.color,
      iconType = _ref.iconType,
      onClose = _ref.onClose,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["title", "color", "iconType", "onClose", "children", "className"]);

  var classes = (0, _classnames.default)('euiToast', color ? colorToClassNameMap[color] : null, className);
  var headerClasses = (0, _classnames.default)('euiToastHeader', {
    'euiToastHeader--withBody': children
  });
  var headerIcon;

  if (iconType) {
    headerIcon = _react.default.createElement(_icon.EuiIcon, {
      className: "euiToastHeader__icon",
      type: iconType,
      size: "m",
      "aria-hidden": "true"
    });
  }

  var closeButton;

  if (onClose) {
    closeButton = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiToast.dismissToast",
      default: "Dismiss toast"
    }, function (dismissToast) {
      return _react.default.createElement("button", {
        type: "button",
        className: "euiToast__closeButton",
        "aria-label": dismissToast,
        onClick: onClose,
        "data-test-subj": "toastCloseButton"
      }, _react.default.createElement(_icon.EuiIcon, {
        type: "cross",
        size: "m",
        "aria-hidden": "true"
      }));
    });
  }

  var optionalBody;

  if (children) {
    optionalBody = _react.default.createElement(_text.EuiText, {
      size: "s",
      className: "euiToastBody"
    }, children);
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), _react.default.createElement(_accessibility.EuiScreenReaderOnly, null, _react.default.createElement("p", null, _react.default.createElement(_i18n.EuiI18n, {
    token: "euiToast.newNotification",
    default: "A new notification appears"
  }))), _react.default.createElement(_i18n.EuiI18n, {
    token: "euiToast.notification",
    default: "Notification"
  }, function (notification) {
    return _react.default.createElement("div", {
      className: headerClasses,
      "aria-label": notification,
      "data-test-subj": "euiToastHeader"
    }, headerIcon, _react.default.createElement("span", {
      className: "euiToastHeader__title"
    }, title));
  }), closeButton, optionalBody);
};

exports.EuiToast = EuiToast;
EuiToast.propTypes = {
  title: _propTypes.default.node,
  color: _propTypes.default.oneOf(["primary", "success", "warning", "danger"]),
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),
  onClose: _propTypes.default.func,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiToast.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiToast",
  "props": {
    "title": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "color": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"success\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }]
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
    "onClose": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    }
  }
};