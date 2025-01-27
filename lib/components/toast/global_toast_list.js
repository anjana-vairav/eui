"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiGlobalToastList = exports.TOAST_FADE_OUT_MS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _time = require("../../services/time");

var _global_toast_list_item = require("./global_toast_list_item");

var _toast = require("./toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOAST_FADE_OUT_MS = 250;
exports.TOAST_FADE_OUT_MS = TOAST_FADE_OUT_MS;

var EuiGlobalToastList =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiGlobalToastList, _Component);

  function EuiGlobalToastList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EuiGlobalToastList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EuiGlobalToastList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toastIdToDismissedMap: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dismissTimeoutIds", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toastIdToTimerMap", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isScrollingToBottom", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isScrolledToBottom", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isUserInteracting", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isScrollingAnimationFrame", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startScrollingAnimationFrame", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listElement", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function () {
      // Stop scrolling to bottom if we're in mid-scroll, because the user wants to interact with
      // the list.
      _this.isScrollingToBottom = false;
      _this.isUserInteracting = true; // Don't let toasts dismiss themselves while the user is interacting with them.

      for (var _toastId in _this.toastIdToTimerMap) {
        if (_this.toastIdToTimerMap.hasOwnProperty(_toastId)) {
          var timer = _this.toastIdToTimerMap[_toastId];
          timer.pause();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      _this.isUserInteracting = false;

      for (var _toastId2 in _this.toastIdToTimerMap) {
        if (_this.toastIdToTimerMap.hasOwnProperty(_toastId2)) {
          var timer = _this.toastIdToTimerMap[_toastId2];
          timer.resume();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function () {
      if (_this.listElement) {
        _this.isScrolledToBottom = _this.listElement.scrollHeight - _this.listElement.scrollTop === _this.listElement.clientHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleAllToastsForDismissal", function () {
      _this.props.toasts.forEach(function (toast) {
        if (!_this.toastIdToTimerMap[toast.id]) {
          _this.scheduleToastForDismissal(toast);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleToastForDismissal", function (toast) {
      // Start fading the toast out once its lifetime elapses.
      _this.toastIdToTimerMap[toast.id] = new _time.Timer(_this.dismissToast.bind(_assertThisInitialized(_assertThisInitialized(_this)), toast), toast.toastLifeTimeMs != null ? toast.toastLifeTimeMs : _this.props.toastLifeTimeMs);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dismissToast", function (toast) {
      // Remove the toast after it's done fading out.
      _this.dismissTimeoutIds.push(window.setTimeout(function () {
        // Because this is wrapped in a setTimeout, and because React does not guarantee when
        // state updates happen, it is possible to double-dismiss a toast
        // including by double-clicking the "x" button on the toast
        // so, first check to make sure we haven't already dismissed this toast
        if (_this.toastIdToTimerMap.hasOwnProperty(toast.id)) {
          _this.props.dismissToast.apply(_assertThisInitialized(_assertThisInitialized(_this)), [toast]);

          _this.toastIdToTimerMap[toast.id].clear();

          delete _this.toastIdToTimerMap[toast.id];

          _this.setState(function (prevState) {
            var toastIdToDismissedMap = _objectSpread({}, prevState.toastIdToDismissedMap);

            delete toastIdToDismissedMap[toast.id];
            return {
              toastIdToDismissedMap: toastIdToDismissedMap
            };
          });
        }
      }, TOAST_FADE_OUT_MS));

      _this.setState(function (prevState) {
        var toastIdToDismissedMap = _objectSpread({}, prevState.toastIdToDismissedMap, _defineProperty({}, toast.id, true));

        return {
          toastIdToDismissedMap: toastIdToDismissedMap
        };
      });
    });

    return _this;
  }

  _createClass(EuiGlobalToastList, [{
    key: "startScrollingToBottom",
    value: function startScrollingToBottom() {
      var _this2 = this;

      this.isScrollingToBottom = true;

      var scrollToBottom = function scrollToBottom() {
        // Although we cancel the requestAnimationFrame in componentWillUnmount,
        // it's possible for this.listElement to become null in the meantime
        if (!_this2.listElement) {
          return;
        }

        var position = _this2.listElement.scrollTop;
        var destination = _this2.listElement.scrollHeight - _this2.listElement.clientHeight;
        var distanceToDestination = destination - position;

        if (distanceToDestination < 5) {
          _this2.listElement.scrollTop = destination;
          _this2.isScrollingToBottom = false;
          _this2.isScrolledToBottom = true;
          return;
        }

        _this2.listElement.scrollTop = position + distanceToDestination * 0.25;

        if (_this2.isScrollingToBottom) {
          _this2.isScrollingAnimationFrame = window.requestAnimationFrame(scrollToBottom);
        }
      };

      this.startScrollingAnimationFrame = window.requestAnimationFrame(scrollToBottom);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.listElement) {
        this.listElement.addEventListener('scroll', this.onScroll);
        this.listElement.addEventListener('mouseenter', this.onMouseEnter);
        this.listElement.addEventListener('mouseleave', this.onMouseLeave);
      }

      this.scheduleAllToastsForDismissal();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.scheduleAllToastsForDismissal();

      if (!this.isUserInteracting) {
        // If the user has scrolled up the toast list then we don't want to annoy them by scrolling
        // all the way back to the bottom.
        if (this.isScrolledToBottom) {
          if (prevProps.toasts.length < this.props.toasts.length) {
            this.startScrollingToBottom();
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isScrollingAnimationFrame !== 0) {
        window.cancelAnimationFrame(this.isScrollingAnimationFrame);
      }

      if (this.startScrollingAnimationFrame !== 0) {
        window.cancelAnimationFrame(this.startScrollingAnimationFrame);
      }

      if (this.listElement) {
        this.listElement.removeEventListener('scroll', this.onScroll);
        this.listElement.removeEventListener('mouseenter', this.onMouseEnter);
        this.listElement.removeEventListener('mouseleave', this.onMouseLeave);
      }

      this.dismissTimeoutIds.forEach(clearTimeout);

      for (var _toastId3 in this.toastIdToTimerMap) {
        if (this.toastIdToTimerMap.hasOwnProperty(_toastId3)) {
          var timer = this.toastIdToTimerMap[_toastId3];
          timer.clear();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          toasts = _this$props.toasts,
          dismissToast = _this$props.dismissToast,
          toastLifeTimeMs = _this$props.toastLifeTimeMs,
          rest = _objectWithoutProperties(_this$props, ["className", "toasts", "dismissToast", "toastLifeTimeMs"]);

      var renderedToasts = toasts.map(function (toast) {
        var text = toast.text,
            toastLifeTimeMs = toast.toastLifeTimeMs,
            rest = _objectWithoutProperties(toast, ["text", "toastLifeTimeMs"]);

        return _react.default.createElement(_global_toast_list_item.EuiGlobalToastListItem, {
          key: toast.id,
          isDismissed: _this3.state.toastIdToDismissedMap[toast.id]
        }, _react.default.createElement(_toast.EuiToast, _extends({
          onClose: _this3.dismissToast.bind(_this3, toast),
          onFocus: _this3.onMouseEnter,
          onBlur: _this3.onMouseLeave
        }, rest), text));
      });
      var classes = (0, _classnames.default)('euiGlobalToastList', className);
      return _react.default.createElement("div", _extends({
        "aria-live": "polite",
        role: "region",
        ref: function ref(element) {
          _this3.listElement = element;
        },
        className: classes
      }, rest), renderedToasts);
    }
  }]);

  return EuiGlobalToastList;
}(_react.Component);

exports.EuiGlobalToastList = EuiGlobalToastList;

_defineProperty(EuiGlobalToastList, "defaultProps", {
  toasts: []
});

EuiGlobalToastList.propTypes = {
  toasts: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    text: _propTypes.default.node,
    toastLifeTimeMs: _propTypes.default.number,
    title: _propTypes.default.node,
    color: _propTypes.default.oneOf(["primary", "success", "warning", "danger"]),
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "alert", "apmApp", "apmTrace", "apps", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "folderClosed", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "iInCircle", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexSettings", "metricsApp", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAPM", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menuLeft", "menuRight", "merge", "metricbeatApp", "minimize", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "node", "notebookApp", "number", "offline", "online", "package", "packetbeatApp", "partial", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plusInCircle", "plusInCircleFilled", "popout", "questionInCircle", "refresh", "reportingApp", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "user", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visControls", "visGauge", "visGoal", "visHeatmap", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),
    onClose: _propTypes.default.func,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired).isRequired,
  dismissToast: _propTypes.default.func.isRequired,
  toastLifeTimeMs: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiGlobalToastList.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "startScrollingToBottom",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMouseEnter",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMouseLeave",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onScroll",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "scheduleAllToastsForDismissal",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "scheduleToastForDismissal",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "toast",
      "type": null
    }],
    "returns": null
  }, {
    "name": "dismissToast",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "toast",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiGlobalToastList",
  "props": {
    "toasts": {
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
            "text": {
              "name": "node",
              "required": false
            },
            "toastLifeTimeMs": {
              "name": "number",
              "required": false
            },
            "title": {
              "name": "node",
              "required": false
            },
            "color": {
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
            "onClose": {
              "name": "func",
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
    "dismissToast": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "toastLifeTimeMs": {
      "type": {
        "name": "number"
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
    }
  }
};