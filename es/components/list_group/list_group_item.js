function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiButtonIcon } from '../button';
import { EuiIcon } from '../icon';
import { EuiToolTip } from '../tool_tip';
import { useInnerText } from '../inner_text';
var sizeToClassNameMap = {
  xs: 'euiListGroupItem--xSmall',
  s: 'euiListGroupItem--small',
  m: 'euiListGroupItem--medium',
  l: 'euiListGroupItem--large'
};
export var SIZES = Object.keys(sizeToClassNameMap);
export var EuiListGroupItem = function EuiListGroupItem(_ref) {
  var label = _ref.label,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      href = _ref.href,
      className = _ref.className,
      iconType = _ref.iconType,
      icon = _ref.icon,
      extraAction = _ref.extraAction,
      onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$showToolTip = _ref.showToolTip,
      showToolTip = _ref$showToolTip === void 0 ? false : _ref$showToolTip,
      wrapText = _ref.wrapText,
      rest = _objectWithoutProperties(_ref, ["label", "isActive", "isDisabled", "href", "className", "iconType", "icon", "extraAction", "onClick", "size", "showToolTip", "wrapText"]);

  var classes = classNames('euiListGroupItem', sizeToClassNameMap[size], {
    'euiListGroupItem-isActive': isActive,
    'euiListGroupItem-isDisabled': isDisabled,
    'euiListGroupItem-isClickable': href || onClick,
    'euiListGroupItem-hasExtraAction': extraAction,
    'euiListGroupItem--wrapText': wrapText
  }, className);
  var iconNode;

  if (iconType) {
    iconNode = React.createElement(EuiIcon, {
      className: "euiListGroupItem__icon",
      type: iconType
    });

    if (icon) {
      console.warn('Both `iconType` and `icon` were passed to EuiListGroupItem but only one can exist. The `iconType` was used.');
    }
  } else if (icon) {
    iconNode = React.cloneElement(icon, {
      className: classNames('euiListGroupItem__icon', icon.props.className)
    });
  }

  var extraActionNode;

  if (extraAction) {
    var _iconType = extraAction.iconType,
        _alwaysShow = extraAction.alwaysShow,
        _className = extraAction.className,
        _rest = _objectWithoutProperties(extraAction, ["iconType", "alwaysShow", "className"]);

    var extraActionClasses = classNames('euiListGroupItem__extraAction', {
      'euiListGroupItem__extraAction-alwaysShow': _alwaysShow
    }, _className);
    extraActionNode = React.createElement(EuiButtonIcon, _extends({
      className: extraActionClasses,
      iconType: _iconType
    }, _rest, {
      disabled: isDisabled
    }));
  } // Only add the label as the title attribute if it's possibly truncated
  // Also ensure the value of the title attribute is a string


  var _useInnerText = useInnerText(),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  var shouldRenderTitle = !wrapText && !showToolTip;
  var labelContent = shouldRenderTitle ? React.createElement("span", {
    ref: ref,
    className: "euiListGroupItem__label",
    title: typeof label === 'string' ? label : innerText
  }, label) : React.createElement("span", {
    className: "euiListGroupItem__label"
  }, label); // Handle the variety of interaction behavior

  var itemContent;

  if (href && !isDisabled) {
    itemContent = React.createElement("a", _extends({
      href: href,
      onClick: onClick,
      className: "euiListGroupItem__button"
    }, rest), iconNode, labelContent);
  } else if (href && isDisabled || onClick) {
    itemContent = React.createElement("button", _extends({
      type: "button",
      className: "euiListGroupItem__button",
      disabled: isDisabled,
      onClick: onClick
    }, rest), iconNode, labelContent);
  } else {
    itemContent = React.createElement("span", _extends({
      className: "euiListGroupItem__text"
    }, rest), iconNode, labelContent);
  }

  if (showToolTip) {
    itemContent = React.createElement("li", {
      className: classes
    }, React.createElement(EuiToolTip, {
      anchorClassName: "euiListGroupItem__tooltip",
      content: label,
      position: "right",
      delay: "long"
    }, itemContent));
  } else {
    itemContent = React.createElement("li", {
      className: classes
    }, itemContent, extraActionNode);
  }

  return React.createElement(Fragment, null, itemContent);
};
EuiListGroupItem.propTypes = {
  className: PropTypes.string,
  "aria-label": PropTypes.string,
  "data-test-subj": PropTypes.string,

  /**
       * Size of the label text
       */
  size: PropTypes.oneOf(["xs", "s", "m", "l"]),

  /**
       * Content to be displayed in the list item
       */
  label: PropTypes.node.isRequired,

  /**
       * Apply styles indicating an item is active
       */
  isActive: PropTypes.bool,

  /**
       * Apply styles indicating an item is disabled
       */
  isDisabled: PropTypes.bool,

  /**
       * Make the list item label a link.
       * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
       */
  href: PropTypes.string,

  /**
       * Adds `EuiIcon` of `EuiIcon.type`
       */
  iconType: PropTypes.oneOfType([PropTypes.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, PropTypes.string.isRequired, PropTypes.element.isRequired]),

  /**
       * Custom node to pass as the icon. Cannot be used in conjunction
       * with `iconType`.
       */
  icon: PropTypes.element,

  /**
       * Display tooltip on list item
       */
  showToolTip: PropTypes.bool,

  /**
       * Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;
       * pass `alwaysShow` if you don't want the default behavior of only showing on hover
       */
  extraAction: PropTypes.shape({
    onClick: PropTypes.func,
    alwaysShow: PropTypes.bool
  }),

  /**
       * Make the list item label a button.
       * While permitted, `href` and `onClick` should not be used together in most cases and may create problems.
       */
  onClick: PropTypes.func,

  /**
       * Allow link text to wrap
       */
  wrapText: PropTypes.bool
};
EuiListGroupItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiListGroupItem",
  "props": {
    "isActive": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Apply styles indicating an item is active"
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Apply styles indicating an item is disabled"
    },
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
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
        }]
      },
      "required": false,
      "description": "Size of the label text"
    },
    "showToolTip": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Display tooltip on list item"
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
    "label": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": "Content to be displayed in the list item"
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Make the list item label a link.\nWhile permitted, `href` and `onClick` should not be used together in most cases and may create problems."
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
      "description": "Adds `EuiIcon` of `EuiIcon.type`"
    },
    "icon": {
      "type": {
        "name": "element"
      },
      "required": false,
      "description": "Custom node to pass as the icon. Cannot be used in conjunction\nwith `iconType`."
    },
    "extraAction": {
      "type": {
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
        }
      },
      "required": false,
      "description": "Adds an `EuiButtonIcon` to the right side of the item; `iconType` is required;\npass `alwaysShow` if you don't want the default behavior of only showing on hover"
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Make the list item label a button.\nWhile permitted, `href` and `onClick` should not be used together in most cases and may create problems."
    },
    "wrapText": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Allow link text to wrap"
    }
  }
};