"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonToggle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toggle = require("../../toggle");

var _button = require("../button");

var _render_to_text = require("../../inner_text/render_to_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiButtonToggle = function EuiButtonToggle(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      isDisabled = _ref.isDisabled,
      isEmpty = _ref.isEmpty,
      isIconOnly = _ref.isIconOnly,
      isSelected = _ref.isSelected,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      toggleClassName = _ref.toggleClassName,
      type = _ref.type,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["className", "color", "isDisabled", "isEmpty", "isIconOnly", "isSelected", "label", "name", "onChange", "toggleClassName", "type", "value"]);

  var classes = (0, _classnames.default)('euiButtonToggle', {
    'euiButtonToggle--isIconOnly': isIconOnly,
    'euiButtonToggle--isEmpty': isEmpty
  }, className);
  var wrapperClasses = (0, _classnames.default)('euiButtonToggle__wrapper', {
    'euiButtonToggle--isDisabled': isDisabled
  }, toggleClassName);
  var buttonContent = isIconOnly ? '' : label;
  var labelText = (0, _render_to_text.useRenderToText)(label, typeof label === 'string' ? label : '');
  return _react.default.createElement(_toggle.EuiToggle, {
    className: wrapperClasses,
    inputClassName: "euiButtonToggle__input",
    checked: isSelected,
    isDisabled: isDisabled,
    label: labelText,
    name: name,
    onChange: onChange,
    type: type,
    title: labelText,
    value: value
  }, _react.default.createElement(_button.EuiButton, _extends({
    tabIndex: -1 // prevents double focus from input to button
    ,
    className: classes,
    color: color,
    disabled: isDisabled,
    size: isIconOnly ? 's' : undefined // only force small if it's the icon only version

  }, rest), buttonContent));
};

exports.EuiButtonToggle = EuiButtonToggle;
EuiButtonToggle.propTypes = {
  /**
     * Simulates a `EuiButtonEmpty`
     */

  /**
     * Simulates a `EuiButtonEmpty`
     */
  isEmpty: _propTypes.default.bool,

  /**
     * Hides the label from the button content and only displays the icon
     */

  /**
     * Hides the label from the button content and only displays the icon
     */
  isIconOnly: _propTypes.default.bool,

  /**
     * Initial state of the toggle
     */

  /**
     * Initial state of the toggle
     */
  isSelected: _propTypes.default.bool,

  /**
     * Button label, which is also passed to `EuiToggle` as the input's label
     */

  /**
     * Button label, which is also passed to `EuiToggle` as the input's label
     */
  label: _propTypes.default.node.isRequired,

  /**
     * Classnames to add to `EuiToggle` instead of the `EuiButton`
     */

  /**
     * Classnames to add to `EuiToggle` instead of the `EuiButton`
     */
  toggleClassName: _propTypes.default.string,

  /**
     * Is the button a single action or part of a group (multi)?
     * Used primarily for `EuiButtonGroup`
     */
  type: _propTypes.default.oneOf(["single", "multi"]),
  onChange: _propTypes.default.any,
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),
  iconSide: _propTypes.default.oneOf(["left", "right"]),
  fill: _propTypes.default.bool,
  color: _propTypes.default.oneOf(["primary", "secondary", "warning", "danger", "ghost", "text"]),
  size: _propTypes.default.oneOf(["s", "m"]),
  isLoading: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  contentProps: _propTypes.default.any,
  textProps: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  href: _propTypes.default.string,
  name: _propTypes.default.string,
  onClick: _propTypes.default.func,
  value: _propTypes.default.string
};
EuiButtonToggle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiButtonToggle",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'primary'",
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
    "isEmpty": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Simulates a `EuiButtonEmpty`"
    },
    "isIconOnly": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Hides the label from the button content and only displays the icon"
    },
    "isSelected": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Initial state of the toggle"
    },
    "label": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "Button label, which is also passed to `EuiToggle` as the input's label"
    },
    "toggleClassName": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Classnames to add to `EuiToggle` instead of the `EuiButton`"
    },
    "type": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOf([\"single\", \"multi\"])"
      },
      "required": false,
      "description": "Is the button a single action or part of a group (multi)?\nUsed primarily for `EuiButtonGroup`"
    },
    "onChange": {
      "type": {
        "name": "any"
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
    "iconSide": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "fill": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "size": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "isLoading": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "fullWidth": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "contentProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "textProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
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
    "href": {
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
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};