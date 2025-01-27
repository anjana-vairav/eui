"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBadge = exports.ICON_SIDES = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _color = require("../../services/color");

var _inner_text = require("../inner_text");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  default: 'euiBadge--default',
  primary: 'euiBadge--primary',
  secondary: 'euiBadge--secondary',
  accent: 'euiBadge--accent',
  warning: 'euiBadge--warning',
  danger: 'euiBadge--danger',
  hollow: 'euiBadge--hollow'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;
var iconSideToClassNameMap = {
  left: 'euiBadge--iconLeft',
  right: 'euiBadge--iconRight'
};
var ICON_SIDES = (0, _common.keysOf)(iconSideToClassNameMap);
exports.ICON_SIDES = ICON_SIDES;

var EuiBadge = function EuiBadge(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      iconType = _ref.iconType,
      _ref$iconSide = _ref.iconSide,
      iconSide = _ref$iconSide === void 0 ? 'left' : _ref$iconSide,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      onClick = _ref.onClick,
      iconOnClick = _ref.iconOnClick,
      onClickAriaLabel = _ref.onClickAriaLabel,
      iconOnClickAriaLabel = _ref.iconOnClickAriaLabel,
      closeButtonProps = _ref.closeButtonProps,
      rest = _objectWithoutProperties(_ref, ["children", "color", "iconType", "iconSide", "className", "isDisabled", "onClick", "iconOnClick", "onClickAriaLabel", "iconOnClickAriaLabel", "closeButtonProps"]);

  checkValidColor(color);
  var optionalColorClass = null;
  var optionalCustomStyles = undefined;
  var textColor = null;

  if (COLORS.indexOf(color) > -1) {
    optionalColorClass = colorToClassNameMap[color];
  } else {
    if (_color.isColorDark.apply(void 0, _toConsumableArray((0, _color.hexToRgb)(color)))) {
      textColor = '#FFFFFF';
    } else {
      textColor = '#000000';
    }

    optionalCustomStyles = {
      backgroundColor: color,
      color: textColor
    };
  }

  var classes = (0, _classnames.default)('euiBadge', {
    'euiBadge-isClickable': onClick && !iconOnClick,
    'euiBadge-isDisabled': isDisabled
  }, iconSideToClassNameMap[iconSide], optionalColorClass, className);
  var closeClassNames = (0, _classnames.default)('euiBadge__icon', closeButtonProps && closeButtonProps.className);
  var optionalIcon = null;

  if (iconType) {
    if (iconOnClick) {
      if (!iconOnClickAriaLabel) {
        console.warn('When passing the iconOnClick props to EuiBadge, you must also provide iconOnClickAriaLabel');
      }

      optionalIcon = _react.default.createElement("button", {
        className: "euiBadge__iconButton",
        "aria-label": iconOnClickAriaLabel,
        disabled: isDisabled,
        title: iconOnClickAriaLabel,
        onClick: iconOnClick
      }, _react.default.createElement(_icon.EuiIcon, _extends({
        type: iconType,
        size: "s"
      }, closeButtonProps, {
        className: closeClassNames
      })));
    } else {
      optionalIcon = _react.default.createElement(_icon.EuiIcon, {
        type: iconType,
        size: "s",
        className: "euiBadge__icon"
      });
    }
  }

  if (onClick && !onClickAriaLabel) {
    console.warn('When passing onClick to EuiBadge, you must also provide onClickAriaLabel');
  }

  if (onClick && iconOnClick) {
    return _react.default.createElement("span", {
      className: classes,
      style: optionalCustomStyles
    }, _react.default.createElement("span", {
      className: "euiBadge__content"
    }, _react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return _react.default.createElement("button", _extends({
        className: "euiBadge__childButton",
        disabled: isDisabled,
        "aria-label": onClickAriaLabel,
        onClick: onClick,
        ref: ref,
        title: innerText
      }, rest), children);
    }), optionalIcon));
  } else if (onClick) {
    return _react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return _react.default.createElement("button", _extends({
        disabled: isDisabled,
        "aria-label": onClickAriaLabel,
        className: classes,
        onClick: onClick,
        style: optionalCustomStyles,
        ref: ref,
        title: innerText
      }, rest), _react.default.createElement("span", {
        className: "euiBadge__content"
      }, _react.default.createElement("span", {
        className: "euiBadge__text"
      }, children), optionalIcon));
    });
  } else {
    return _react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return _react.default.createElement("span", _extends({
        className: classes,
        style: optionalCustomStyles,
        ref: ref,
        title: innerText
      }, rest), _react.default.createElement("span", {
        className: "euiBadge__content"
      }, _react.default.createElement("span", {
        className: "euiBadge__text"
      }, children), optionalIcon));
    });
  }
};

exports.EuiBadge = EuiBadge;
EuiBadge.propTypes = {
  /**
     * Accepts any string from our icon library
     */
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),

  /**
     * The side of the badge the icon should sit
     */
  iconSide: _propTypes.default.oneOf(["left", "right"]),

  /**
     * Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`.
     */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

  /**
     * Will override any color passed through the `color` prop.
     */
  isDisabled: _propTypes.default.bool,

  /**
     * Props passed to the close button.
     */
  closeButtonProps: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Will apply an onclick to icon within the badge
     */
  iconOnClick: _propTypes.default.func,

  /**
     * Aria label applied to the iconOnClick button
     */
  iconOnClickAriaLabel: _propTypes.default.string,

  /**
     * Will apply an onclick to the badge itself
     */
  onClick: _propTypes.default.func,

  /**
     * Aria label applied to the iconOnClick button
     */
  onClickAriaLabel: _propTypes.default.string
};

function checkValidColor(color) {
  var validHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

  if (color != null && !validHex.test(color) && !COLORS.includes(color)) {
    console.warn('EuiBadge expects a valid color. This can either be a three ' + "or six character hex value or one of the following: ".concat(COLORS));
  }
}

EuiBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiBadge",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "enum",
          "value": [{
            "value": "\"default\"",
            "computed": false
          }, {
            "value": "\"primary\"",
            "computed": false
          }, {
            "value": "\"secondary\"",
            "computed": false
          }, {
            "value": "\"success\"",
            "computed": false
          }, {
            "value": "\"accent\"",
            "computed": false
          }, {
            "value": "\"warning\"",
            "computed": false
          }, {
            "value": "\"danger\"",
            "computed": false
          }, {
            "value": "\"text\"",
            "computed": false
          }, {
            "value": "\"subdued\"",
            "computed": false
          }, {
            "value": "\"ghost\"",
            "computed": false
          }]
        }]
      },
      "required": false,
      "description": "Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`."
    },
    "iconSide": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
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
      "description": "The side of the badge the icon should sit"
    },
    "iconType": {
      "type": {
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
        }]
      },
      "required": false,
      "description": "Accepts any string from our icon library"
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Will override any color passed through the `color` prop."
    },
    "closeButtonProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Props passed to the close button."
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
    "iconOnClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Will apply an onclick to icon within the badge"
    },
    "iconOnClickAriaLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Aria label applied to the iconOnClick button"
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Will apply an onclick to the badge itself"
    },
    "onClickAriaLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Aria label applied to the iconOnClick button"
    }
  }
};