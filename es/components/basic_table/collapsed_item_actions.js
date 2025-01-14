function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { EuiContextMenuItem, EuiContextMenuPanel } from '../context_menu';
import { EuiPopover } from '../popover';
import { EuiButtonIcon } from '../button';
import { EuiToolTip } from '../tool_tip';
import { EuiI18n } from '../i18n';

function actionIsCustomItemAction(action) {
  return action.hasOwnProperty('render');
}

export var CollapsedItemActions =
/*#__PURE__*/
function (_Component) {
  _inherits(CollapsedItemActions, _Component);

  function CollapsedItemActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CollapsedItemActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CollapsedItemActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popoverDiv", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      popoverOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePopover", function () {
      _this.setState(function (prevState) {
        return {
          popoverOpen: !prevState.popoverOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePopover", function () {
      _this.setState({
        popoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopoverBlur", function () {
      // you must be asking... WTF? I know... but this timeout is
      // required to make sure we process the onBlur events after the initial
      // event cycle. Reference:
      // https://medium.com/@jessebeach/dealing-with-focus-and-blur-in-a-composite-widget-in-react-90d3c3b49a9b
      window.requestAnimationFrame(function () {
        if (!_this.popoverDiv.contains(document.activeElement) && _this.props.onBlur) {
          _this.props.onBlur();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerPopoverDiv", function (popoverDiv) {
      if (!_this.popoverDiv) {
        _this.popoverDiv = popoverDiv;

        _this.popoverDiv.addEventListener('focusout', _this.onPopoverBlur);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickItem", function (onClickAction) {
      _this.closePopover();

      if (onClickAction) {
        onClickAction();
      }
    });

    return _this;
  }

  _createClass(CollapsedItemActions, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.popoverDiv) {
        this.popoverDiv.removeEventListener('focusout', this.onPopoverBlur);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          itemId = _this$props.itemId,
          item = _this$props.item,
          actionEnabled = _this$props.actionEnabled,
          onFocus = _this$props.onFocus,
          className = _this$props.className;
      var isOpen = this.state.popoverOpen;
      var allDisabled = true;
      var controls = actions.reduce(function (controls, action, index) {
        var key = "action_".concat(itemId, "_").concat(index);
        var available = action.available ? action.available(item) : true;

        if (!available) {
          return controls;
        }

        var enabled = actionEnabled(action);
        allDisabled = allDisabled && !enabled;

        if (actionIsCustomItemAction(action)) {
          var customAction = action;
          var actionControl = customAction.render(item, enabled);
          var actionControlOnClick = actionControl && actionControl.props && actionControl.props.onClick;
          controls.push(React.createElement(EuiContextMenuItem, {
            key: key,
            onClick: actionControlOnClick ? actionControlOnClick.bind(null, item) : function () {}
          }, actionControl));
        } else {
          var onClick = action.onClick,
              name = action.name,
              dataTestSubj = action['data-test-subj'];
          controls.push(React.createElement(EuiContextMenuItem, {
            key: key,
            disabled: !enabled,
            icon: action.icon,
            "data-test-subj": dataTestSubj,
            onClick: _this2.onClickItem.bind(null, onClick ? onClick.bind(null, item) : undefined)
          }, name));
        }

        return controls;
      }, []);
      var popoverButton = React.createElement(EuiI18n, {
        token: "euiCollapsedItemActions.allActions",
        default: "All actions"
      }, function (allActions) {
        return React.createElement(EuiButtonIcon, {
          className: className,
          "aria-label": allActions,
          iconType: "boxesHorizontal",
          color: "text",
          isDisabled: allDisabled,
          onClick: _this2.togglePopover.bind(_this2),
          onFocus: onFocus,
          "data-test-subj": "euiCollapsedItemActionsButton"
        });
      });
      var withTooltip = !allDisabled && React.createElement(EuiI18n, {
        token: "euiCollapsedItemActions.allActions",
        default: "All actions"
      }, function (allActions) {
        return React.createElement(EuiToolTip, {
          content: allActions,
          delay: "long"
        }, popoverButton);
      });
      return React.createElement(EuiPopover, {
        className: className,
        popoverRef: this.registerPopoverDiv,
        id: "".concat(itemId, "-actions"),
        isOpen: isOpen,
        button: withTooltip || popoverButton,
        closePopover: this.closePopover,
        panelPaddingSize: "none",
        anchorPosition: "leftCenter"
      }, React.createElement(EuiContextMenuPanel, {
        items: controls
      }));
    }
  }]);

  return CollapsedItemActions;
}(Component);
CollapsedItemActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    type: PropTypes.oneOfType([PropTypes.oneOf(["button"]), PropTypes.oneOf(["icon"]).isRequired]),
    color: PropTypes.oneOfType([PropTypes.oneOfType([PropTypes.oneOf(["primary", "danger", "disabled", "text", "ghost"]).isRequired, PropTypes.func.isRequired]), PropTypes.oneOfType([PropTypes.oneOf(["danger", "disabled", "ghost", "primary", "subdued", "success", "text", "warning"]).isRequired, PropTypes.func.isRequired])]),
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
    available: PropTypes.func,
    enabled: PropTypes.func,
    isPrimary: PropTypes.bool,
    "data-test-subj": PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, PropTypes.func.isRequired])
  }).isRequired, PropTypes.shape({
    render: PropTypes.func.isRequired,
    available: PropTypes.func,
    enabled: PropTypes.func,
    isPrimary: PropTypes.bool
  }).isRequired]).isRequired).isRequired,
  item: PropTypes.any.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]).isRequired,
  actionEnabled: PropTypes.func.isRequired,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
CollapsedItemActions.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "togglePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "closePopover",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onPopoverBlur",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "registerPopoverDiv",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "popoverDiv",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onClickItem",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "onClickAction",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CollapsedItemActions",
  "props": {
    "actions": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "union",
          "value": [{
            "name": "shape",
            "value": {
              "type": {
                "name": "union",
                "value": [{
                  "name": "enum",
                  "value": [{
                    "value": "\"button\"",
                    "computed": false
                  }]
                }, {
                  "name": "enum",
                  "value": [{
                    "value": "\"icon\"",
                    "computed": false
                  }]
                }],
                "required": false
              },
              "color": {
                "name": "union",
                "value": [{
                  "name": "union",
                  "value": [{
                    "name": "enum",
                    "value": [{
                      "value": "\"primary\"",
                      "computed": false
                    }, {
                      "value": "\"danger\"",
                      "computed": false
                    }, {
                      "value": "\"disabled\"",
                      "computed": false
                    }, {
                      "value": "\"text\"",
                      "computed": false
                    }, {
                      "value": "\"ghost\"",
                      "computed": false
                    }]
                  }, {
                    "name": "func"
                  }]
                }, {
                  "name": "union",
                  "value": [{
                    "name": "enum",
                    "value": [{
                      "value": "\"danger\"",
                      "computed": false
                    }, {
                      "value": "\"disabled\"",
                      "computed": false
                    }, {
                      "value": "\"ghost\"",
                      "computed": false
                    }, {
                      "value": "\"primary\"",
                      "computed": false
                    }, {
                      "value": "\"subdued\"",
                      "computed": false
                    }, {
                      "value": "\"success\"",
                      "computed": false
                    }, {
                      "value": "\"text\"",
                      "computed": false
                    }, {
                      "value": "\"warning\"",
                      "computed": false
                    }]
                  }, {
                    "name": "func"
                  }]
                }],
                "required": false
              },
              "name": {
                "name": "string",
                "required": true
              },
              "description": {
                "name": "string",
                "required": true
              },
              "onClick": {
                "name": "func",
                "required": false
              },
              "href": {
                "name": "string",
                "required": false
              },
              "target": {
                "name": "string",
                "required": false
              },
              "available": {
                "name": "func",
                "required": false
              },
              "enabled": {
                "name": "func",
                "required": false
              },
              "isPrimary": {
                "name": "bool",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
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
                  "name": "func"
                }],
                "required": false
              }
            }
          }, {
            "name": "shape",
            "value": {
              "render": {
                "name": "func",
                "required": true
              },
              "available": {
                "name": "func",
                "required": false
              },
              "enabled": {
                "name": "func",
                "required": false
              },
              "isPrimary": {
                "name": "bool",
                "required": false
              }
            }
          }]
        }
      },
      "required": true,
      "description": ""
    },
    "item": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "itemId": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": true,
      "description": ""
    },
    "actionEnabled": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onFocus": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onBlur": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};